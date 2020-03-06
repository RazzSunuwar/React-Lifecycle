import React from 'react';
import ReactDOM from 'react-dom';

// Example:
// Click the button to make a change in the component's state:

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }

    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }
      
    render(){
        return (
            <div>
            <h1>My Favorite Color is  {this.state.favoritecolor}</h1>
            <button type="button" onClick={this.changeColor}>Change Color</button>
            </div>
        );
    };
};

ReactDOM.render(<Header />, document.getElementById('root'));

