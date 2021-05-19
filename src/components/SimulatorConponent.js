import { Component } from 'react';
import AccountService from '../services/AccountService'
import RangeSlider from 'react-bootstrap-range-slider';

class SimulatorComponent extends Component {

    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            accountId: '',
            btcBalance: '',
            accountAlias: '',
            dollarBalance: '',
        }
    }

    // bind the methods here, can't remember syntax at the moment

    updateDeposit() {


    }

    componentDidMount() {
        AccountService.retrieveSimAccount().then((response) => {
            console.log(response);
            this.setState({
                accountId: this.state.accountId,
                btcBalance: response.data.btcBalance,
                dollarBalance: response.data.dollarBalance,
                accountAlias: response.data.accountAlias
            });
        });
    }
ß
    handleSubmit() {

    }

    changeHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <h1>Account Overview</h1>
                <form>
           
                 
                </form>
                <table>
                    <thead>
                        <tr>
                            <td>Account BTC balance </td>
                            <td>Account Alias </td>
                            <td>Dollar Balance </td>

                        </tr>
                        <tr>
                            <td>{this.state.btcBalance}</td>
                            <td>{this.state.accountAlias}</td>
                            <td>{this.state.dollarBalance}</td>
                        </tr>
                        <tr>
                            <td>
                                <RangeSlider />
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }

}

export default SimulatorComponent