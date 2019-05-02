import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, CustomInput } from "reactstrap";
import { RouteComponentProps } from "react-router-dom";
import { WithTranslation, withTranslation } from "react-i18next";
import Button from "reactstrap/lib/Button";

interface MyProps extends RouteComponentProps, WithTranslation {
    openModal: Function;
}

interface MyState {
    language: string;
}

class Settings extends Component<MyProps, MyState> {

    constructor(props: MyProps) {
        super(props)
        this.state = {
            language: this.props.i18n.language
        }
    }

    openModalInfo(isOpen: boolean, title: string, message: string) {
        this.props.openModal(isOpen, title, message)
    }

    setLanguage = (language: string) => {
        this.props.i18n.changeLanguage(language);
    };

    changeLanguage = (language: string) => {
        if (language !== this.props.i18n.language) {
            this.setLanguage(language);
        }
    };

    render = () => {
        return (
            <div className="Settings">
                <Container fluid>
                    <Row>
                        <Col xs="12">
                            <h2 className="text-primary d-flex justify-content-center">
                                {this.props.t("PageContainer.Settings.Title")}
                            </h2>
                        </Col>
                        <Col xs="12">
                            <Form>
                                <FormGroup>
                                    <div>
                                        <CustomInput
                                            onClick={() =>
                                                this.setState({
                                                    language: "it"
                                                })
                                            }
                                            onChange={() => { }}
                                            type="radio"
                                            id="exampleCustomRadio"
                                            name="customRadio"
                                            label={this.props.t(
                                                "PageContainer.Settings.Button.ChangeLanguage.IT"
                                            )}
                                            checked={
                                                this.state.language === "it"
                                                    ? true
                                                    : false
                                            }
                                        />
                                        <CustomInput
                                            onClick={() =>
                                                this.setState({
                                                    language: "en"
                                                })
                                            }
                                            onChange={() => { }}
                                            type="radio"
                                            id="exampleCustomRadio2"
                                            name="customRadio"
                                            label={this.props.t(
                                                "PageContainer.Settings.Button.ChangeLanguage.EN"
                                            )}
                                            checked={
                                                this.state.language === "en"
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </div>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col xs="6" className="d-flex justify-content-center">
                            <p>
                                <Button
                                    onClick={() =>
                                        this.changeLanguage(this.state.language)
                                    }
                                >
                                    {this.props.t(
                                        "PageContainer.Settings.Button.Apply"
                                    )}

                                </Button>
                            </p>

                        </Col>
                        <Col xs="6" className="d-flex justify-content-center">

                            <p>
                                <Button
                                    onClick={() =>
                                        this.openModalInfo(true, this.props.t("Modal.Info.Title"), this.props.t("Modal.Info.Message")
                                        )} color="success">
                                    {this.props.t("PageContainer.Settings.Button.OpenModal")}
                                </Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default withTranslation()(Settings);
