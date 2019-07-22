import React from 'react'
import { Footer } from '../footer/Footer';
import PageTabs from '../PageBody/PageTabs/PageTabs';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col s2 m2 l2'></div>
                    <PageTabs tab1='' tab1content='HOME' tab2='itinary' tab2content='ITINARY' />
                    <div className='col s2 m2 l2'></div>
                </div>
                <div className='row'>
                    <div className='col s2 m2 l2'></div>
                    <div className='col s8 m8 l8 text-flow'>
                        <blockquote>Welcome to About</blockquote>
                    </div>
                    <div className='col s2 m2 l2'></div>
                </div>

                <Footer />
            </div>
        )
    }
} 