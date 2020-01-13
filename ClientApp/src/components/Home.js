import React, { Component } from "react";

export class Home extends Component {
    constructor() {
        super();
        this.getData = this.getData.bind(this);
        this.state = {
            lineId: "",
            status: "",
            lineId2: "",
            status2: "",
            lineId3: "",
            status3: "",
            lineId4: "",
            status4: "",
            lineId5: "",
            status5: "",
            lineId6: "",
            status6: "",
            lineId7: "",
            status7: "",
            lineId8: "",
            status8: "",
            lineId9: "",
            status9: "",
            lineId10: "",
            status10: "",
            lineId11: "",
            status11: ""
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData(e) {
        fetch("api/tube/gettubestatus")
            .then(response => response.json())
            .then(data =>
                this.setState({
                    lineId: data.lineId,
                    status: data.statusSeverityDescription,
                    lineId2: data.lineId2,
                    status2: data.statusSeverityDescription2,
                    lineId3: data.lineId3,
                    status3: data.statusSeverityDescription3,
                    lineId4: data.lineId4,
                    status4: data.statusSeverityDescription4,
                    lineId5: data.lineId5,
                    status5: data.statusSeverityDescription5,
                    lineId6: data.lineId6,
                    status6: data.statusSeverityDescription6,
                    lineId7: data.lineId7,
                    status7: data.statusSeverityDescription7,
                    lineId8: data.lineId8,
                    status8: data.statusSeverityDescription8,
                    lineId9: data.lineId9,
                    status9: data.statusSeverityDescription9,
                    lineId10: data.lineId10,
                    status10: data.statusSeverityDescription10,
                    lineId11: data.lineId11,
                    status11: data.statusSeverityDescription11
                })
            );
    }

    render() {
        return (
            <div>
                <center>
                    <h1>Tube</h1>

                    <h6>Tube Name</h6>
                    <p>{this.state.lineId}</p>
                    <h6>Status</h6>
                    <p> {this.state.status}</p>
                    <h6>Tube Name</h6>
                    <p>{this.state.lineId2}</p>
                    <h6>Status</h6>
                    <p> {this.state.status2}</p>
                    <h6>Tube Name</h6>
                    <p>{this.state.lineId3}</p>
                    <h6>Status</h6>
                    <p> {this.state.status3}</p>
                    <h6>Tube Name</h6>
                    <p>{this.state.lineId4}</p>
                    <h6>Status</h6>
                    <p> {this.state.status4}</p>
                    <h6>Tube Name</h6>
                    <p>{this.state.lineId5}</p>
                    <h6>Status</h6>
                    <p> {this.state.status5}</p>
                    <h6>Tube Name</h6>
                    <p>{this.state.lineId6}</p>
                    <h6>Status</h6>
                    <p> {this.state.status6}</p>
                    <h6>Tube Name</h6>
                    <p>{this.state.lineId7}</p>
                    <h6>Status</h6>
                    <p> {this.state.status7}</p>
                    <h6>Tube Name</h6>
                    <p>{this.state.lineId8}</p>
                    <h6>Status</h6>
                    <p> {this.state.status8}</p>
                    <h6>Tube Name</h6>
                    <p>{this.state.lineId9}</p>
                    <h6>Status</h6>
                    <p> {this.state.status9}</p>
                    <h6>Tube Name</h6>
                    <p>{this.state.lineId10}</p>
                    <h6>Status</h6>
                    <p> {this.state.status10}</p>
                    <h6>Tube Name</h6>
                    <p>{this.state.lineId11}</p>
                    <h6>Status</h6>
                    <p> {this.state.status11}</p>
                </center>
            </div>
        );
    }
}
