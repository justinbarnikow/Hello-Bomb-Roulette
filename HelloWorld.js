import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = { greeting: 'world' }
    }
    handleFriendButton = () => {
        const friendlyGreeting = "friend"
        this.setState({
            greeting: friendlyGreeting
        })
    }
    handleWorldButton = () => {
        const worldlyGreeting = "world"
        this.setState({
            greeting: worldlyGreeting
        })
    }
    handleReactButton = () => {
        const reactlyGreeting = "React"
        this.setState({
            greeting: reactlyGreeting
        })
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.greeting}!</p>
                <button onClick={this.handleFriendButton}>friend</button>
                <button onClick={this.handleWorldButton}>world</button>
                <button onClick={this.handleReactButton}>React</button>
            </div>
        )
    }
}

export default HelloWorld