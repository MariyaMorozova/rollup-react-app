import React, { Component } from "react";
import styled from '@emotion/styled';

const AppWrapper = styled.div`
    margin: 40px auto;
    width: 595px;
    background: #cfd0cf;
    font-family: Arial, sans-serif;
    color: #434344;
`

class App extends Component {
    render() {
        return (
            <AppWrapper></AppWrapper>
        );
    }
}

export default App;