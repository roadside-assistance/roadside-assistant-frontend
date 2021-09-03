import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    CardBody, InputGroup, InputGroupAddon, InputGroupText, FormSelect
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class ComponentsOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            select: "Problems",
            headers: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.fetchData = this.fetchData.bind(this)
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({select: e.target.value},
            () =>
                this.fetchData())
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        let link = ''
        let headers = ['a', 'ab']
        console.log('fetch', this.state.select)
        switch (this.state.select) {
            case 'Problems':
                link = 'http://localhost:8080/problem-solving/problems/';
                headers = [
                    '#', 'Address', 'Description', 'Status', '# of needed workers', 'Inspector Id', 'Team Id', 'Issuer Id'
                ]
                break
            case 'Machinery':
                link = 'http://localhost:8080/machine-resources/machines/'
                headers = ['Id', 'Name', 'Type', 'Status']
                break
            case 'Citizen':
                link = 'http://localhost:8080/human-resources/citizen/'
                headers = ['Id', 'First Name', 'Last Name', 'Phone Number', 'Masked Password', 'City']
            case 'Inspector':
                link = 'http://localhost:8080/human-resources/inspector/'
                headers = [
                    'Id',
                    'First Name',
                    'Last Name',
                    'Phone Number',
                    'Masked Pass',
                    'Salary',
                    'Authority',
                    'Town Under Control'
                ]

        }
        fetch(link, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // mode : 'cors'
        })
            .then(res => {
                return res.json()
            })
            .then(json => {
                json.map(row => {
                    console.log(row)
                    if (row.hasOwnProperty('password')) {
                        row.password='********'
                    }
                    return row
                })


                this.setState({
                    isLoaded: true,
                    items: json,
                    headers: headers
                })
                console.log(this.state.items)
            })
    }

    render() {

        var {isLoaded, items, select, headers} = this.state
        if (!isLoaded) {
            return <div>
                loading ...
            </div>
        } else {
            return (
                <div>
                    <Container fluid className="main-content-container px-4">
                        <Row noGutters className="page-header py-4">
                            <PageTitle
                                sm="4"
                                title="State Manager Report"
                                subtitle="Report"
                                className="text-sm-left"
                            />
                        </Row>

                        <Row>
                            <Col lg="8" className="mb-4">
                                <Card small className="mb-4">
                                    <CardHeader className="border-bottom">
                                        <h6 className="m-0">Report</h6>
                                    </CardHeader>
                                    <CardBody className="p-0 pb-3">
                                        <table className="table mb-0">
                                            <thead className="bg-light">
                                            <tr>
                                                {
                                                    headers.map(
                                                        item => (
                                                            <th scope="col" className="border-0">
                                                                {item}
                                                            </th>
                                                        )
                                                    )
                                                }
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                items.map(
                                                    item => (
                                                        <tr>
                                                            {Object.values(item).map(
                                                                a => (
                                                                    <td>{a}</td>
                                                                )
                                                            )}
                                                        </tr>
                                                    )
                                                )
                                            }

                                            </tbody>
                                        </table>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="4" className="mb-4">

                                <Card small>
                                    {/* Files & Dropdowns */}
                                    <CardHeader className="border-bottom">
                                        <h6 className="m-0">Report Options</h6>
                                    </CardHeader>

                                    <ListGroup flush>
                                        <ListGroupItem className="px-3">
                                            <strong className="text-muted d-block mb-2">
                                                Custom Select
                                            </strong>
                                            <div>
                                                <InputGroup className="mb-3">
                                                    <FormSelect value={this.state.select} onChange={this.handleChange}>
                                                        <option>Choose</option>
                                                        <option value='Machinery'>Machinery</option>
                                                        <option value='Problems'>Problems</option>
                                                        <option value='Citizen'>Citizen</option>
                                                        <option value='Inspector'>Inspector</option>
                                                    </FormSelect>
                                                    <InputGroupAddon type="append">
                                                        <InputGroupText>Options</InputGroupText>
                                                    </InputGroupAddon>
                                                </InputGroup>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
}

export default ComponentsOverview;
