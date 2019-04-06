import React, { Component } from "react";
import "./sass/index.scss";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { HomeView } from "./views/home";
import { PrivacyView } from "./views/privacy";
import { TermsView } from "./views/terms";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/terms">Terms</Link>
                        <Link to="/privacy">Privacy</Link>
                    </div>
                    <div>
                        <Route exact path="/" component={HomeView} />
                        <Route exact path="/privacy" component={PrivacyView} />
                        <Route exact path="/terms" component={TermsView} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
