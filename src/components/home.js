import React from 'react';
import logo from './images/logo1.jpeg';
import './styles/general.css';
import Menu from './mini-c/Menu.js';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    state = {}
    handleClick = e => {
        alert(this.state.firstName + " " + this.state.lastName)
    }
    handleChange = e => {
        // console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <Menu names={this.state.firstName} last={this.state.lastName} img={logo}/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" placeholder="firstName" onChange={this.handleChange} />
                    <input type="text" name="lastName" placeholder="lastName" onChange={this.handleChange} />
                    <button onClick={this.handleClick}><Link to="home/hello">click me!</Link></button>
                </form>
            </div>
        )
    }
}

export default Home;