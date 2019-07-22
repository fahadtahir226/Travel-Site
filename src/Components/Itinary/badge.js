import React, { Component } from 'react';

export default class Badge extends Component {
  render() {
    const { position, image, number } = this.props;
    return (

      <div className='row' >
        <div className='col s2 m4'></div>
        <div
          style={{
            position: 'relative',
            float: `${position}`
          }}
          className='col s8 m4 l12'>
          <img
            className='itinaryImages'
            style={{
              position: 'relative',
              height: 200,
              width: 200,
              borderRadius: '100%',
              float: 'center'
            }}
            alt=''
            src={image} />
          <div style={{
            position: "absolute",
            zIndex: 10,
            top: '20px',
            left: '20px'
          }} >
            <sup style={{
              background: 'yellow',
              border: '4px solid white',
              padding: '10px 10px',
              borderRadius: '100%',
              height: '100%',
              fontSize: 25,
              fontFamily: 'oldstyle'
              
            }}>
              {number}
            </sup>
          </div>
        </div>
      <div className='col s2 m4 '></div>
      </div >)
  }
}