import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './HeaderComponent'
import SimulatorComponent from './SimulatorConponent'


class InvestmentApp extends Component {



    render() {
        return (
            <div>
                <div className="InvvestmentApp">
                    <Router>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/simulator/" component={SimulatorComponent} />

                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}


export default InvestmentApp;