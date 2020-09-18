import React, { Component } from 'react';
import './style.css'


export default class SearchBlock extends Component {


    inputCHange = (e) => {
        const { form } = this.props
        if (form) {
            form[e.currentTarget.name] = e.currentTarget.value
        }
    }

    searchUser = ()=>{
        const { form, onChange } = this.props
        onChange(form)
    }


    render() {
        return (
            <div className='G-search-block'>
                <div className='G-search-input-block'>
                    <label>
                        <input type="text" name='first' onChange={this.inputCHange} />
                    </label>
                </div>
                <div className='G-search-input-block'>
                    <label>
                        <input type="text" name='last' onChange={this.inputCHange} />
                    </label>
                </div>
                <div className='G-search-input-block'>
                    <button onClick={this.searchUser}> search</button>
                </div>
            </div>
        )
    }
}
