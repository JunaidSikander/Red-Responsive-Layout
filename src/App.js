import React from 'react';
import {Route, Switch} from 'react-router';
import Home from "./screens/HomeScreen";
import Header from "./components/Header";
import {Container} from "react-bootstrap";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                    </Switch>
                </Container>
            </main>
        </>
    )
};

export default App;
