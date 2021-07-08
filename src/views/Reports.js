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

const ComponentsOverview = () => (
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
                                        First Name
                                    </th>
                                    <th scope="col" className="border-0">
                                        Last Name
                                    </th>
                                    <th scope="col" className="border-0">
                                        Country
                                    </th>
                                    <th scope="col" className="border-0">
                                        City
                                    </th>
                                    <th scope="col" className="border-0">
                                        Phone
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ali</td>
                                    <td>Kerry</td>
                                    <td>Russian Federation</td>
                                    <td>Gdańsk</td>
                                    <td>107-0339</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Clark</td>
                                    <td>Angela</td>
                                    <td>Estonia</td>
                                    <td>Borghetto di Vara</td>
                                    <td>1-660-850-1647</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Jerry</td>
                                    <td>Nathan</td>
                                    <td>Cyprus</td>
                                    <td>Braunau am Inn</td>
                                    <td>214-4225</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Colt</td>
                                    <td>Angela</td>
                                    <td>Liberia</td>
                                    <td>Bad Hersfeld</td>
                                    <td>1-848-473-7416</td>
                                </tr>
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

export default ComponentsOverview;
