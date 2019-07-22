import React from 'react';
import M from 'materialize-css';
import PageTabs from './PageTabs/PageTabs.js';
import { Footer } from '../footer/Footer.js';


export default class PageBody extends React.Component {
    componentDidMount() {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems);
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col s2 m2 l2'></div>
                    <PageTabs tab1='about' tab1content='ABOUT' tab2='itinary' tab2content='ITINARY' />
                    <div className='col s2 m2 l2'></div>
                </div>
                <div className='row' >
                    <div className='col s1 m2 l2' ></div>
                    <div className='col s10  m8 l8' >
                        <div className='row'>
                            <div className='col s12 m12 l12 form' >
                                <h1 className='flow-text' >FORM</h1>
                                <form className="s12 m12 l12">
                                    <div className="row center-align">
                                        <div className="input-field col s12 m6 l6 center-align">
                                            <input id="first_name" type="text"  required={true} className="validate" />
                                            <label htmlFor="first_name">First Name</label>
                                        </div>
                                        <div className="input-field col s12 m6 l6x">
                                            <input id="last_name" type="text" required={true} className="validate" />
                                            <label htmlFor="last_name">Last Name</label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="input-field col s12 m6 l6">
                                            <input id="phone_number" type="tel" required={true} className="validate" />
                                            <label htmlFor="phone_number">Phone Number</label>
                                        </div>
                                        <div className="input-field col s12 m6 l6x">
                                            <input id="email" type="email" required={true} className="validate" />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="input-field col s12 m6 l6">
                                            <input id="airport" type="text" required={true} className="validate" />
                                            <label htmlFor="airport">Airport</label>
                                        </div>
                                        <div className="input-field col s12 m6 l6">
                                            <select required={true}>
                                                <optgroup label="January">
                                                    <option value="1">1st</option>
                                                    <option value="2">5th</option>
                                                </optgroup>
                                                <optgroup label="March">
                                                    <option value="3">23rd</option>
                                                    <option value="4">19th</option>
                                                </optgroup>
                                            </select>
                                            <label>Date</label>
                                        </div>
                                    </div>
                                    <div className="row" >
                                        <div className="input-field col s12 m6 l6">
                                            <p>
                                                <label htmlFor='termsAndConditions' >
                                                    <input id="termsAndConditions" required={true} type="checkbox" className="filled-in" />
                                                    <span>I agree to the Terms and Conditions</span>
                                                </label>
                                            </p>
                                        </div>
                                        <div className='input-field col s12 m6 l6'>
                                            <div id="modal1" class="modal">
                                                <div class="modal-content">
                                                    <h4>Congratulations! Your form have been submitted</h4>
                                                    <h5>Thank You!</h5>
                                                </div>
                                            </div>
                                            <button data-target="modal1" className="btn waves-effect waves-light modal-trigger" name="action">
                                                Submit <i className="material-icons right">send</i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col s1 m2 l2' ></div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}