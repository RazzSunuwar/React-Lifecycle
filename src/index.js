import React from 'react';
import ReactDOM from 'react-dom';

// Example:
// At first my favorite color is red, but give me a second, and it is green instead:   

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount(){
        setTimeout(() =>{
            this.setState({favoritecolor:"green"})
        }, 2000)
    }
      
    render(){
        return (
            <h1>My Favorite Color is  {this.state.favoritecolor}</h1>
        );
    };
};

ReactDOM.render(<Header />, document.getElementById('root'));
