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
                                            <a href="javascript:void(0)"><img alt="img" src="images/logo.png" /></a> <span>&copy; 2018 nestb.com</span>
                                        </div>
                                    </div>
                                    <div className="footer_right">
                                        <ul className="footer_menu list-inline">
                                            <li><a href="javascript:void(0)">Platform</a></li>
                                            <li><a href="javascript:void(0)">Blogs</a></li>
                                            <li><a href="javascript:void(0)">About Us</a></li>
                                            <li><a href="javascript:void(0)">Contact Us</a></li>
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