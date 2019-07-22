import React from 'react'
import M from 'materialize-css'
import { Link } from "react-router-dom";

export default class PageTabs extends React.Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var tabs = document.querySelectorAll('.tabs');
            M.Tabs.init(tabs);
        })
    }
    render() {
        return (
            <div className='col s8 m8 l8 ' >
                <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="card-tabs">
                            <ul className="tabs tabs-fixed-width">
                                <li className="tab">    
                                    <Link to = {`/${this.props.tab1}`} >
                                        <a className="active" href="/">{this.props.tab1content}</a>
                                    </Link>
                                </li>
                                <li className="tab">
                                    <Link to={`/${this.props.tab2}`}>
                                        <a href="/">{this.props.tab2content}</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="card-content grey lighten-4">
                            <div id="about">
                            </div>
                            <div id="itinary">

                            </div>
                        </div>
                    </div>
                </div>
             </div >
        )
    }
}
