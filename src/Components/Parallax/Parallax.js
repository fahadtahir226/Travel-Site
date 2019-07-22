import React from 'react'
import M from 'materialize-css'
import image from "../../images/wallpaper(short).jpg";
import logo from '../../images/amazing-img.png';

export class Parallax extends React.Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.parallax');
            M.Parallax.init(elems);
        })
    }
    render() {
        return (

            <div className="parallax-container" >
                <div className="parallax" >
                    <img src={image} alt='' />
                </div>
            </div >
        )
    }
}
export function Logo() {
    return (
        <div>
            <img id='logo' src={logo} alt='' />
        </div>
    )
}