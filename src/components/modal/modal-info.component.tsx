import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { withTranslation, WithTranslation } from "react-i18next";

interface MyProps extends WithTranslation {
    title: string;
    message: string;
    isOpen: boolean;
    closeModal: Function;
}
interface MyState {}

class ModalInfo extends Component<MyProps, MyState> {
    toggle = () => {
        this.props.closeModal(false);
    };

    render = () => {
        return (
            <div className="ModalInfo">
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={this.toggle}
                    className="ModalInfo"
                >
                    <ModalHeader  toggle={this.toggle}>
                        {this.props.title}
                    </ModalHeader>
                    <ModalBody>{this.props.message}</ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>
                            {this.props.t("Modal.Info.Button.Close")}
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    };
}

export default withTranslation()(ModalInfo);
