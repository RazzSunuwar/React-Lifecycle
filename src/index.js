import React from 'react';
import ReactDOM from 'react-dom';

// Example:
// Click the button to delete the header:

class Header extends React.Component {  
    constructor(props){
        super(props);
        this.state = {show: "red"};
    }
    delHeader = () => {
        this.setState({show: false});
    }

    render(){
        let myheader;
        if (this.state.show){
            myheader = <Child />
        };
        return (
            <div>
            {myheader}
            <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        );
    };
};

class Child extends React.Component {
    componentWillUnmount() {
        alert("The component name Header is about to be unmounted.");
    }
    render(){
        return (
            <h1>Hello World!</h1>
        );
    };
};

ReactDOM.render(<Header />, document.getElementById('root'));

