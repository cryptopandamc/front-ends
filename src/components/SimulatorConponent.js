import { Component } from 'react';
import AccountService from '../services/AccountService'

class SimulatorComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accountId: '',
            balance: '',
        }
    }

    componentDidMount() {
        AccountService.retrieveSimAccount().then((response) => {
            console.log(response);
            this.setState({
                accountId: this.state.accountId,
                balance: this.state.balance,
            });
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Account Overview</h1>


            </div>
        );
    }
 
}

export default SimulatorComponent