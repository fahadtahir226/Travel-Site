import React from 'react'
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'
import img8 from '../../images/8.png'
import Badge from './badge.js';
import startingArrow from '../../images/section-title-arrow.png'
import leftToRight from '../../images/feature-left-arrow.png'
import rightToLeft from '../../images/feature-right-arrow.png'
import { Footer } from '../footer/Footer';
import PageTabs from '../PageBody/PageTabs/PageTabs'
export default class Itinary extends React.Component {
    render() {
        return (
            <div>
                
                <div className='row'>
                    <div className='col s2 m2 l2'></div>
                    <PageTabs tab1='' tab1content='HOME' tab2='about' tab2content='ABOUT' />
                    <div className='col s2 m2 l2'></div>
                </div>
                <div className='row'>
                    <div className='col s1 m2 l2'></div>
                    <div className='col s10 m8 l8'>
                        <div className='row'>
                            <div className='text-flow'>
                                <blockquote>
                                    ITINARY

                            </blockquote>
                            </div>
                        </div>

                        <div className='row noBottonMargin'>
                            <div className='col m2 l4'></div>
                            <div className='col s12 m8 l4 ' >
                                {/* <img style={{ width: 320 }} src={startImg} alt='' />  */}
                                <p id='itinaryTop' >Day 1 - 8</p>
                            </div>
                            <div className='col m2 l4' ></div>
                        </div>
                        <div className='row noBottonMargin hide-on-med-and-down'>
                            <div className='col l6'></div>
                            <div className='col l4 ' >
                                <img className='topArrow' style={{ width: 270 }} src={startingArrow} alt='' />
                            </div>
                            <div className='col l2' ></div>
                        </div>

                        <div className='row noBottonMargin'>
                            <div className='col s12 m12 l4 right'>
                                <Badge image={img1} number='01' position='center' />
                            </div>
                            <div className='col s12 m12 l8 left' >
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>


                        <div className='row noBottonMargin hide-on-med-and-down'>
                            <div className='col l2'></div>
                            <div className='col l8 ' >
                                <img className='arrows' src={rightToLeft} alt='' />
                            </div>
                            <div className='col l2' ></div>
                        </div>

                        <div className='row noBottonMargin'>
                            <div className='col s12 m12 l4 left'>
                                <Badge image={img2} number='02' position='center' />
                            </div>
                            <div className='col s12 m12 l8 right' >
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className='row noBottonMargin hide-on-med-and-down'>
                            <div className='col l2'></div>
                            <div className='col l8 ' >
                                <img className='arrows' src={leftToRight} alt='' />
                            </div>
                            <div className='col l2' ></div>
                        </div>

                        <div className='row noBottonMargin'>
                            <div className='col s12 m12 l4 right'>
                                <Badge image={img3} number='03' position='center' />
                            </div>
                            <div className='col s12 m12 l8 left' >
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>

                        <div className='row noBottonMargin hide-on-med-and-down'>
                            <div className='col l2'></div>
                            <div className='col l8 ' >
                                <img className='arrows' src={rightToLeft} alt='' />
                            </div>
                            <div className='col l2' ></div>
                        </div>
                        <div className='row noBottonMargin'>
                            <div className='col s12 m12 l4 left'>
                                <Badge image={img4} number='04' position='center' />
                            </div>
                            <div className='col s12 m12 l8 right' >
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className='row noBottonMargin hide-on-med-and-down'>
                            <div className='col l2'></div>
                            <div className='col l8 ' >
                                <img className='arrows' src={leftToRight} alt='' />
                            </div>
                            <div className='col l2' ></div>
                        </div>

                        <div className='row noBottonMargin'>
                            <div className='col s12 m12 l4 right'>
                                <Badge image={img5} number='05' position='center' />
                            </div>
                            <div className='col s12 m12 l8 left' >
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>

                        <div className='row noBottonMargin hide-on-med-and-down'>
                            <div className='col l2'></div>
                            <div className='col l8 ' >
                                <img className='arrows' src={rightToLeft} alt='' />
                            </div>
                            <div className='col l2' ></div>
                        </div>

                        <div className='row noBottonMargin'>
                            <div className='col s12 m12 l4 left'>
                                <Badge image={img6} number='06' position='center' />
                            </div>
                            <div className='col s12 m12 l8 right' >
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className='row noBottonMargin hide-on-med-and-down'>
                            <div className='col l2'></div>
                            <div className='col l8 ' >
                                <img className='arrows' src={leftToRight} alt='' />
                            </div>
                            <div className='col l2' ></div>
                        </div>


                        <div className='row noBottonMargin'>
                            <div className='col s12 m12 l4 right'>
                                <Badge image={img7} number='07' position='center' />
                            </div>
                            <div className='col s12 m12 l8 left' >
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className='row noBottonMargin hide-on-med-and-down'>
                            <div className='col l2'></div>
                            <div className='col l8 ' >
                                <img className='arrows' src={rightToLeft} alt='' />
                            </div>
                            <div className='col l2' ></div>
                        </div>

                        <div className='row'>
                            <div className='col s12 m12 l4 left'>
                                <Badge image={img8} number='08' position='center' />
                            </div>
                            <div className='col s12 m12 l8 right' >
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col s1 m2 l2'></div>
                </div>
                <Footer />
            </div>
        )
    }
} 