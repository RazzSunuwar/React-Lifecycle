import React from 'react';
import ReactDOM from 'react-dom';

// Example:
// A simple component with a simple render() method:

class Header extends React.Component {      
    render(){
        return (
            <h1>This is the content of the Header Component</h1>
        );
    };
};

ReactDOM.render(<Header />, document.getElementById('root'));
