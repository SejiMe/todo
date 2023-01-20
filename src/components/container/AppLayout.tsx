import React, { Component } from 'react';

type AppProps = {
    children?: React.ReactNode;
};

type State = {
    sessionID: number;
};

class AppLayout extends Component<AppProps, State> {
    state = { sessionID: 121313 };
    render() {
        return <main>{this.props.children}</main>;
    }
}

export default AppLayout;
