import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { WithTranslation, withTranslation } from "react-i18next";
import Button from "reactstrap/lib/Button";
import { RouteComponentProps } from "react-router";

interface MyProps extends RouteComponentProps, WithTranslation {
    openModal: Function;
}

interface MyState { }

class Dashboard extends Component<MyProps, MyState> {
    openModalInfo(isOpen: boolean, title: string, message: string) {
        this.props.openModal(isOpen, title, message)
    }
    render = () => {
        return (
            <div className="Dashboard">
                <Container fluid>
                    <Row>
                        <Col xs="12">
                            <h2 className="text-primary d-flex justify-content-center">
                                {this.props.t("PageContainer.Dashboard.Title")}
                            </h2>
                        </Col>
                        <Col xs="12">
                            <div className="text-primary d-flex justify-content-center">
                                <Button onClick={() => this.openModalInfo(true, this.props.t("Modal.Info.Title"),this.props.t("Modal.Info.Message") )} color="success">{this.props.t("PageContainer.Dashboard.Button.OpenModal")}</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default withTranslation()(Dashboard);
