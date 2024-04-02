import React from 'react';
export class ErrorBoundry extends React.Component {
    state = {hasError: false}

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    // To catch errors for logging
    componentDidCatch(error){
        console.log("Error: ", error);
    }

    render() {
        if (this.state.hasError){
            return this.props.fallback;
        }

        return this.props.children;
    }
}