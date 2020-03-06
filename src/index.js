import React from 'react';
import ReactDOM from 'react-dom';

// Example:
// The constructor methods is called, by React, every time you make a component:

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }
    render(){
        return (
            <h1>My Favorite Color is  {this.state.favoritecolor}</h1>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('root'));
