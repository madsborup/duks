import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { StoreState } from "../../reducers";
import { ProjectData, TaskData } from "../../actions";
import { getProject } from '../../selectors/getProject'
import {
  ViewGrid,
  TwoColumnGrid,
  FirstColumn,
  SecondColumn
} from "../../components/designSystem/layout";
import Head from "../../components/Head";
import SegmentedControl from "../../components/SegmentedControl";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TaskCard from "../../components/TaskCard";
import { StyledUnassignedTasksView } from "./style";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  project: ProjectData;
  tasks: TaskData[];
}

const UnassignedTasksView: React.FC<Props> = (props: Props) => {
  const { projectSlug } = props.match.params;

  const renderTasks = () => {
    return props.tasks.map((task: TaskData) => {
      return (
        <React.Fragment>
          <TaskCard task={task} flowSlug={task.flowSlug} key={task.id} tableView/>
        </React.Fragment>
      );
    });
  };

  return (
    <React.Fragment>
      <Head
        title={`${props.project.title} - Unassigned tasks`}
        description={"View unassigned tasks"}
      />

      <ViewGrid>
        <TwoColumnGrid>
          <FirstColumn>
            <Sidebar projectSlug={projectSlug} />
          </FirstColumn>
          <SecondColumn>
            <Header title="Unassigned tasks" projectSlug={projectSlug} />
            <StyledUnassignedTasksView>{renderTasks()}</StyledUnassignedTasksView>
          </SecondColumn>
        </TwoColumnGrid>
      </ViewGrid>
    </React.Fragment>
  );
};

//TODO: create selector for getting unassigned tasks
const mapStateToProps = (state: StoreState, ownProps: Props) => {
  return {
    project: getProject(state, ownProps.match.params),
    tasks: Object.values(state.tasks.items).filter(task => {
      return task.assigned && task.assigned.length === 0;
    })
  };
};

export default connect(
  mapStateToProps,
  null
)(UnassignedTasksView);