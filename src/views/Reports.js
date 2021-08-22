import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Form,
    Alert, CardBody, InputGroup, InputGroupAddon, InputGroupText, FormSelect
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Colors from "../components/components-overview/Colors";
import Checkboxes from "../components/components-overview/Checkboxes";
import RadioButtons from "../components/components-overview/RadioButtons";
import ToggleButtons from "../components/components-overview/ToggleButtons";
import SmallButtons from "../components/components-overview/SmallButtons";
import SmallOutlineButtons from "../components/components-overview/SmallOutlineButtons";
import NormalButtons from "../components/components-overview/NormalButtons";
import NormalOutlineButtons from "../components/components-overview/NormalOutlineButtons";
import Forms from "../components/components-overview/Forms";
import FormValidation from "../components/components-overview/FormValidation";
import CompleteFormExample from "../components/components-overview/CompleteFormExample";
import Sliders from "../components/components-overview/Sliders";
import ProgressBars from "../components/components-overview/ProgressBars";
import ButtonGroups from "../components/components-overview/ButtonGroups";
import InputGroups from "../components/components-overview/InputGroups";
import SeamlessInputGroups from "../components/components-overview/SeamlessInputGroups";
import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import DropdownInputGroups from "../components/components-overview/DropdownInputGroups";
import CustomSelect from "../components/components-overview/CustomSelect";

class ComponentsOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        }
    }

    componentWillMount() {
        fetch('http://207.182.143.36/:8080/problem-solving/problems/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode : 'cors'
        })
            .then(res => {
                return res.json()
            })
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
                console.log(this.state.items)
            })
    }

    render() {

        var {isLoaded, items} = this.state
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
                                                <th scope="col" className="border-0">
                                                    #
                                                </th>
                                                <th scope="col" className="border-0">
                                                    Address
                                                </th>
                                                <th scope="col" className="border-0">
                                                    Description
                                                </th>
                                                <th scope="col" className="border-0">
                                                    Status
                                                </th>
                                                <th scope="col" className="border-0">
                                                    # of needed workers
                                                </th>
                                                <th scope="col" className="border-0">
                                                    Inspector Id
                                                </th>
                                                <th scope="col" className="border-0">
                                                    Team Id
                                                </th>
                                                <th scope="col" className="border-0">
                                                    Issuer Id
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                items.map(
                                                    item => (
                                                        <tr>
                                                            <td>{item.id}</td>
                                                            <td>{item.address}</td>
                                                            <td>{item.description}</td>
                                                            <td>{item.status}</td>
                                                            <td>{item.number_of_needed_workers}</td>
                                                            <td>{item.assigned_to_inspector}</td>
                                                            <td>{item.assigned_to_team}</td>
                                                            <td>{item.issuer}</td>
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
                                                    <FormSelect>
                                                        <option>Choose</option>
                                                        <option>Machinery</option>
                                                        <option>Human Resources</option>
                                                        <option>Problems</option>
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
