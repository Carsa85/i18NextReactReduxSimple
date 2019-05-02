import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AvatarMenu from "./avatar-menu.component";
import AvatarDefault from "./media/avatar-default.png";

const mapStateToProps = (state: any) => ({
    AvatarDefault: AvatarDefault,
});

const mapDispatchToProps = (dispatch: Function) => ({});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AvatarMenu)
);
