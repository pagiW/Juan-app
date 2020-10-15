import React from 'react';

class Menu extends React.Component {
    render() {
        const menup = this.props;
        return (
            <header>
                <h1>
                    <img src={menup.img} alt="logo"/>
                    Hello, this is my beatiful app.<br />My name is {menup.names} {menup.last}
                </h1>
            </header>
        );
    }
}

export default Menu;