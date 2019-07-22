import React from 'react'
import image from "../../images/cigaleoot.png"
import { Link } from 'react-router-dom'
export class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                    <div className="col l6 s12 right hide-on-large-only center">
                    <Link to='/' ><img src={image} className='logo2' alt='' /></Link>
                        </div>
                        <div className="col l3 s12 left">
                            <p className="grey-text text-lighten-4">Path of Camperousse 'The Cyclades' beats 06130 Grasse The Plan</p>
                        </div>
                        <div className="col l3 s12 right">
                            <p className="grey-text text-lighten-4">License N ° IM 006100033</p>
                        </div>
                        <div className="col l6 s12 right hide-on-med-and-down">
                        <Link to='/' ><img src={image} className='logo2' alt='' /></Link>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2014 Copyright Text
                    </div>
                </div>
            </footer>
        )
    }
}
