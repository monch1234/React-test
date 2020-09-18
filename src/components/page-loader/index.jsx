import React, { Component } from 'react';
import './style.css'

export default class PageLoader extends Component {


    render() {

        return (
            <div className='G-page-loader'>

                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            </div>
        )
    }
}
