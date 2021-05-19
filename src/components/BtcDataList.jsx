import React, { Component } from "react";
import BtcService from "../services/BtcService";
import Pagination from '@material-ui/lab/Pagination';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class BtcDataList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            btcData: [],
            currentBtcData: null,
            currentIndex: -1,
            page: 1,
            count: 0,
            pageSize: 3,
            content: [],
            searchDate: ''

        };
        console.log("state at start " + this.state)
        this.pageSizes = [3, 6, 9];
  


        this.retrieveBtcData = this.retrieveBtcData.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
        this.onChangeSearchDate = this.onChangeSearchDate.bind(this);
        this.searchBTCDate = this.searchBTCDate.bind(this);


    }

    componentDidMount() {
        this.retrieveBtcData();
        // this.getDate();
        console.log("date at start " + this.searchDate)
    }
    /*
        getDate() {
            const searchDate = Moment("2014-11-11", "M-D-YYYY");
            this.setState = {
                searchDate: searchDate
            }
            console.log(searchDate)
        }
    */

    onChangeSearchDate(e) {
        const searchDate = e.target.value;
        console.log("value before calling setState " + e.target.value + searchDate)
        console.log("trying to create date for search" + searchDate)
        this.setState({
            searchDate: searchDate,
        });
    }

    getRequestParams(searchDate, page, pageSize) {
        let params = {};

        if (page) {
            params["page"] = page - 1;
        }

        if (pageSize) {
            params["size"] = pageSize;
        }

        if (searchDate) {
            params["tradeDate"] = searchDate;
        }
        return params;
    }

    retrieveBtcData() {
        const { searchDate, page, pageSize } = this.state;
        const params = this.getRequestParams(searchDate, page, pageSize);

        BtcService.GetBtc(params)
            .then((response) => {
                const { totalPages } = response.data;

                this.setState({
                    btcData: response.data.content,
                    count: totalPages,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    searchBTCDate() {
        console.log("in this method");
    }

    handlePageChange(event, value) {
        this.setState(
            {
                page: value,
            },
            () => {
                this.retrieveBtcData();
            }
        );
    }

    handlePageSizeChange(event) {
        this.setState(
            {
                pageSize: event.target.value,
                page: 1
            },
            () => {
                this.retrieveBtcData();
            }
        );
    }


    render() {

        const {
            btcData,
            page,
            count,
            pageSize,
            searchDate
        } = this.state;

        //let { btcData, page, count, pageSize, searchDate } = this.state;
        console.log(this.state);
        return (


            <div className="container">

                <div className="list row">

                    <div className="col-md-8">

                        <div className="input-group mb-3">

                            <input
                                type="date"
                                className="form-control"
                                placeholder="Search for BTC data on a given date"
                                value={searchDate}
                                onChange={this.onChangeSearchDate}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={this.searchBTCDate}
                                >
                                    Search
              </button>
                            </div>
                        </div>

                    </div>

                </div>

                <div>


                </div>
                <div className="col-md-12">
                    <h4>Btc Trading Data List</h4>

                    <div className="mt-3">
                        {"Items per Page: "}
                        <select onChange={this.handlePageSizeChange} value={pageSize}>
                            {this.pageSizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                        <Pagination
                            className="my-3"
                            count={count}
                            page={page}
                            siblingCount={1}
                            boundaryCount={1}
                            variant="outlined"
                            shape="rounded"
                            onChange={this.handlePageChange}
                        />

                    </div>
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
                                {btcData.map((singleBtcData, index) => (

                                    <TableRow key={singleBtcData.btcDataId}>
                                        <TableCell align="right">{singleBtcData.btcDataId}</TableCell>
                                        <TableCell align="right">{singleBtcData.tradeDate}</TableCell>
                                        <TableCell align="right">{singleBtcData.high}</TableCell>
                                        <TableCell align="right">{singleBtcData.low}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            </div >



        );
    }
}
