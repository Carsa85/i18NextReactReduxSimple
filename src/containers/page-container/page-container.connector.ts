import { connect } from "react-redux";
import PageContainer from "./page-container.container";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state: any) => ({});

export default withRouter(connect(mapStateToProps)(PageContainer));
