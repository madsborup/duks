import React, { Component } from "react";
// import { connect } from "react-redux";
// import { createTask, FlowData } from "../../../actions";
// import { StoreState } from '../../../reducers'
// import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
// import { Input } from "../../designSystem/formElements";
// import { PrimaryButton } from "../../designSystem/button";

// interface Props {
//   closeModal: Function;
//   editTask: Function;
// }

// class EditTaskModal extends Component<Props> {

//   onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ title: e.target.value });
//   };

//   onFlowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     this.setState({ flowSlug: e.target.value });
//   };

//   handleFlowSubmit = (e: any) => {
//     const { title } = this.state;
//     this.props.createTask(title, this.props.projectSlug, this.state.flowSlug);
//     console.log(this.state.flowSlug)
//     this.props.closeModal();
//     e.preventDefault();
//   };

//   renderSelectOptions() {
//     return this.props.flows.map((doc: FlowData) => {
//       return (
//         <option value={doc.slug} key={doc.slug}>{doc.title}</option>
//       );
//     });
//   }

//   render() {
//     return (
//       <ModalBody>
//         <CloseButton onClick={() => this.props.closeModal()} />
//         <ModalTitle>Create task</ModalTitle>
//         <Form onSubmit={e => this.handleFlowSubmit(e)}>
//           <Input
//             placeholder="New project"
//             value={this.state.title}
//             onChange={this.onTitleChange}
//           >
//             Title
//           </Input>
//           Select flow
//           <select onChange={this.onFlowChange} value={this.state.flowSlug}>
//             {this.renderSelectOptions()}
//           </select>
//           <ModalActions>
//             <PrimaryButton>Create</PrimaryButton>
//           </ModalActions>
//         </Form>
//       </ModalBody>
//     );
//   }
// }

// const mapStateToProps = ({ flows }: StoreState) => {
//   return {
//     flows: Object.values(flows.items)
//   };
// };

// export default connect(
//   mapStateToProps,
//   { createTask }
// )(EditTaskModal);