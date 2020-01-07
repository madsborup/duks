import React from 'react'
import history from '../../helpers/history'
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom'

//TODO: implement logic that gets current user most recent location and redirect the user
//to that path

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  
}

const ProjectView: React.FC<Props> = (props: Props) => {

  return (
    <Redirect to={`/${props.match.params.projectSlug}/boards`} />
  )
}

export default withRouter(ProjectView);