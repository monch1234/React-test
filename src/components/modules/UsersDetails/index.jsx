import React, { Component } from 'react';
import './index.css';

export default class UserDetails extends Component {
    render(itemId){
        return(
            <div className = 'UserDetails'>
                <h1>{itemId}</h1>
            </div>
        )
    }
}