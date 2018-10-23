import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
           
                <footer id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="display_table footer_main">
                                    <div className="footer_left">
                                        <div className="footer_logo">
                                            <a role="button"><img alt="img" src="images/logo.png" /></a> <span>&copy; 2018 nestb.com</span>
                                        </div>
                                    </div>
                                    <div className="footer_right">
                                        <ul className="footer_menu list-inline">
                                            <li><a role="button">Platform</a></li>
                                            <li><a role="button">Blogs</a></li>
                                            <li><a role="button">About Us</a></li>
                                            <li><a role="button">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

           
        );
    }
}

export default Footer;