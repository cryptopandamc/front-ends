import React, { Component } from "react";
import BtcService from "../services/BtcService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class BtcData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btcDataId: this.props.match.params.btcDataId,
            tradeDate: '',
            high: '',
            low: ''
        }
    }

    componentDidMount() {
        BtcService.GetOneDayData(this.state.btcDataId).then((response) => {
            console.log(response)
            this.setState ({
           // console.log(this.state.btcDataId)
            btcDataId: this.state.btcDataId,
            tradeDate: response.data.tradeDate,
            high: response.data.high,
            low: response.data.low
        });
    });
    }

    render() {
        const {
            btcDataId,
            tradeDate,
            high,
            low,
        } = this.state;

        return (
            <div className="container">
                <TableContainer component={Paper}>
                    <Table stickyHeader aria-label="sticky table">

                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Data Id</TableCell>
                                <TableCell align="right">Trade Date&nbsp;(yyy-mm-dd)</TableCell>
                                <TableCell align="right">High&nbsp;(H)</TableCell>
                                <TableCell align="right">Low&nbsp;($)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>


                            <TableRow >
                                <TableCell align="right">{btcDataId}</TableCell>
                                <TableCell align="right">{tradeDate}</TableCell>
                                <TableCell align="right">{high}</TableCell>
                                <TableCell align="right">{low}</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        );
    }

}