import React from 'react';
import ReactDOM from 'react-dom';

// Example:
// The compountDidUpdate method is called after the update has been rendered in the DOM:

class Header extends React.Component {  
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }

    componentDidMount() {
        setTimeout(() => {
        this.setState({favoritecolor: "yellow"}); 
        }, 2000);
    }

    componentDidUpdate(){
        document.getElementById("mydiv").innerHTML = "The updated favorite is "
         + this.state.favoritecolor;
    }
    
    render(){
        return (
            <div>
            <h1>My Favorite Color is  {this.state.favoritecolor}</h1>
            <div id="mydiv"></div>
            </div>
        );
    };
};

ReactDOM.render(<Header />, document.getElementById('root'));

