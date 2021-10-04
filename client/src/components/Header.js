import React, { Component } from "react";
import { connect } from 'react-redux';
import authReducer from "../reducers/authReducer";
import { Link } from "react-router-dom";


class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with google</a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Link
                            to={this.props.auth ? '/surveys' : '/'}
                            href="#"
                            className="brand-logo"
                        >
                            Emaily
                        </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.renderContent()}

                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);