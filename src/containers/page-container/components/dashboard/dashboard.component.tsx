import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import logo from "./../../../../logo.svg";
import { WithTranslation, withTranslation } from "react-i18next";

interface MyProps extends WithTranslation {}

interface MyState {}

class Dashboard extends Component<MyProps, MyState> {
    render = () => {
        return (
            <div className="Dashboard">
                <Container fluid>
                    <Row>
                        <Col xs="12">
                            <h2 className="text-primary d-flex justify-content-center">
                                {this.props.t("PageContainer.Dashboard.Title")}
                            </h2>
                            <div className="text-primary d-flex justify-content-center">
                                <img
                                    className="spinner-border"
                                    src={logo}
                                    alt=""
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default withTranslation()(Dashboard);
