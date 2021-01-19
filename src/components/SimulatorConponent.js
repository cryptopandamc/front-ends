import { Component } from 'react';
import AccountService from '../services/AccountService'
import RangeSlider from 'react-bootstrap-range-slider';

class SimulatorComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accountId: '',
            fistname: '',
            lastname: '',
            account_alias: '',
            balance: '',
        }
    }

    componentDidMount() {
        AccountService.retrieveSimAccount().then((response) => {
            console.log(response);
            this.setState({
                accountId: this.state.accountId,
                balance: response.data.balance,
                firstname: response.data.firstname,
                lastname: response.data.lastname,
                accountAlias: response.data.accountAlias

            });
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Account Overview</h1>

                <table>
                    <thead>
                    <tr>
                            <td>Account balance </td>
                            <td>Account Alias </td>
                            <td>First name </td>
                            <td>Last name </td>
                        </tr>
                        <tr>
                            <td>{this.state.balance}</td>
                            <td>{this.state.accountAlias}</td>
                            <td>{this.state.firstname}</td>
                            <td>{this.state.lastname}</td>
                        </tr>
                        <tr>
                            <td>
                                <RangeSlider/>
                            </td>
                        </tr>
                    </thead>
                </table>


            </div>
        );
    }

}

export default SimulatorComponent