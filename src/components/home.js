import React from 'react';
import logo from './images/logo1.jpeg';
import './styles/general.css';
import Menu from './mini-c/Menu.js';

class Home extends React.Component {
    handleClick = e => {
        alert("you clicked me!!!!")
    }
    render() {
        const prop = this.props;
        return (
            <div>
                <Menu names={prop.names} last={prop.last} img={logo}/>
                <button onClick={this.handleClick}>click me!</button>
            </div>
        )
    }
}

export default Home;