import React, { Component } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import { NavLink, RouteComponentProps } from "react-router-dom";
import { WithTranslation, withTranslation } from "react-i18next";

interface MyProps extends RouteComponentProps, WithTranslation {
    AvatarDefault: string;
}
interface MyState {
    dropdownOpen: boolean;
}

class AvatarMenu extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };
    render = () => {
        return (
            <div className="AvatarMenu">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle>
                        <img
                            src={this.props.AvatarDefault}
                            title={this.props.t("TopBar.AvatarMenu.Title")}
                        />
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>
                        {this.props.t("TopBar.AvatarMenu.Header")}
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink
                                exact
                                to="/settings"
                                className="dropdown-link"
                                activeClassName="is-active"
                            >
                                {this.props.t("TopBar.AvatarMenu.Settings")}
                            </NavLink>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <NavLink
                                exact
                                to="/logout"
                                className="dropdown-link"
                                activeClassName="is-active"
                            >
                                {this.props.t("TopBar.AvatarMenu.Logout")}
                            </NavLink>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    };
}

export default withTranslation()(AvatarMenu);
