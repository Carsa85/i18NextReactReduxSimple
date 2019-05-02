import { connect } from "react-redux";
import ModalInfo from "./modal-info.component";
import { closeModalInfo } from "../../actions/modal-manager";

const mapStateToProps = (state: any) => ({
    title: state.modalManager.title,
    message: state.modalManager.message,
    isOpen: state.modalManager.isOpen
});

const mapDispatchToProps = (dispatch: Function) => ({
    closeModal: (newState: boolean) => dispatch(closeModalInfo(newState))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalInfo);
