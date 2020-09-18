import React, { Component } from 'react';

import { AiFillCloseCircle } from 'react-icons/ai'
import './index.css';


export default class ModalWindow extends Component {
    state = {
        name: this.props.name
    }
    click = () => {
        console.log(this.state.name);
    }
    render() {
        const { data } = this.props;
        return (
            <> {data ?
                <div className='moreInformationModeration' style={{ display: this.props.isToggleOn ? "none" : 'flex' }}>
                   
                    <div className='moderationPanel'>
                        <div className='moderationUsersPanel'>
                            <div className='userInformation'>
                                <img src={data.picture.large} alt="pictures" className='UserAvatar' />
                                <div className='contUserInfo'>
                                    <div>
                                        <h1>Name - {data.name.first}</h1>
                                        <h2>LastName - {data.name.last}</h2>
                                    </div>
                                    <div>
                                        <h2>City - {data.location.city}</h2>
                                        <h2>State - {data.location.state}</h2>
                                    </div>
                                </div>
                                <div>
                                    <h2>PostCode - {data.location.postcode}</h2>
                                    <h2>Nationality - {data.nat}</h2>
                                </div>
                            </div>
                            <div className='closedModerationPanel' onClick={this.props.onclick}><AiFillCloseCircle /> </div>
                        </div>

                    </div>
              
                </div>
                : null}

            </>
        )
    }
}