import React, { Component } from "react";


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineId: "",
            status: ""
        };
    }

    getData(e) {
        e.preventDefault();
        fetch("https://localhost:5001/api/tube/gettubestatus")
            .then(response => response.json()).then(data => this.setState({lineId: data.lineId}))

    }

    render() {

        return (
            <div>
                <center>
                    <h1>Tube</h1>
                    <h4>Name</h4>
                    <p>{this.state.lineId}</p>
                    <h4>Status</h4>
                    <p>{this.state.status}</p>

                </center>
            </div>
        );
    }
}