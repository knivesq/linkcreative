import React from 'react'


export default class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            info: null,
        };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
        this.setState({
            hasError: true,
            error: error,
            info: info
        })
    }

    render() {
        if(this.state.hasError){
            return (
                <React.Fragment>
                    <h1>Oops, something went wrong :( </h1>
                    <p>The error: {this.state.error.toString()}</p>
                    <p>Where it occured: {this.state.info.componentStack}</p>
                </React.Fragment>
            )
        }
        return this.props.children
    }
}