import React, { Component } from 'react';
import './App.css'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            loading: false,
            count: 20
        }
    }

    handleClick = () => {
        fetch(`https://randomuser.me/api/?results= ${this.state.count}`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    items: response.results,
                    loading: true, 
                    count: this.state.count + 20
                })
            })
    }

    componentDidMount() {
        fetch(`https://randomuser.me/api/?results= ${this.state.count}`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    items: response.results,
                    loading: true
                })
            })
    }

    render() {
        let { items, loading } = this.state
        if (!loading) {
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <div className='container'>
                    {items.map(item => (
                        <div className='user' key={item.login.uuid}>
                            <img src={item.picture.large} alt={item.name.first} />
                            <div className='userInfo'>
                                <h1>Name {item.name.first}</h1>
                                <h2>LastName {item.name.last}</h2>
                                <h2>Gender {item.gender}</h2>
                            </div>
                        </div>
                    ))}
                    <button onClick = {this.handleClick}>more</button>
                </div>
            )
        }
    }
}