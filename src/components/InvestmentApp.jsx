import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './HeaderComponent'
import SimulatorComponent from './SimulatorConponent'
import FormApp from '../FormApp'
import BtcDataList from './BtcDataList'
import Test from './TestComponent'
class InvestmentApp extends Component {

    render() {
        return (
            <div>
                <div className="InvvestmentApp">
                    <Router>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/simulator/" component={SimulatorComponent} />
                            <Route path="/form/" component={FormApp} />
                            <Route path="/getBtcData/" component={BtcDataList} />
                            <Route path="/test/" component={Test} />
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}


export default InvestmentApp;