import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Settings from "./settings.component";
import { openModalInfo } from "../../../../actions/modal-manager";

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Function) => ({
    openModal: (isOpen: boolean, title: string, message: string) =>
        dispatch(openModalInfo(isOpen, title, message))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Settings)
);
