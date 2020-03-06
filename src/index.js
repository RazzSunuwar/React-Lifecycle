import React from 'react';
import ReactDOM from 'react-dom';

// Example:
// if the component gets updated, the getDerivedStateFromProps() method is called:   

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate(){
        return true;
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

