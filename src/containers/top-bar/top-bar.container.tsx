import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../../brand.jpg";
import AvatarMenu from "../../components/avatar-menu/avatar-menu.connector";

interface MyProps {
}
interface MyState {}

class TopBar extends Component<MyProps, MyState> {


    render = () => {
        return (
            <div className="TopBar d-flex">
                <div className="left">
                    <Link to="/" className="brand">
                        <img src={logo} alt="" />
                    </Link>
                </div>

                <div className="center">
                    <Link to="/" className="brand">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="right">
                    <AvatarMenu />
                </div>
            </div>
        );
    };
}

export default TopBar;
