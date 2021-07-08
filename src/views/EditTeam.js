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
    Alert, FormInput, FormGroup, FormSelect, FormCheckbox, Button, InputGroup, InputGroupAddon, InputGroupText, CardBody
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

const ComponentsOverview = () => (
    <div>
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle
                    sm="4"
                    title="Manage Team"
                    subtitle="Teams"
                    className="text-sm-left"
                />
            </Row>


            <Row>
                <Col lg="8" className="mb-4">

                    {/* Complete Form Example */}
                    <Card small>
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Recruit Form</h6>
                        </CardHeader>
                        <ListGroup flush>
                            <ListGroupItem className="p-3">
                                <Row>
                                    <Col>
                                        <Form>
                                            <Row form>
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="feEmailAddress">Name</label>
                                                    <FormInput
                                                        id="feFirstName"
                                                        type="text"
                                                        placeholder="Name"
                                                    />
                                                </Col>
                                               
                                            </Row>

                                            <Row form>
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="feInputCity">City</label>
                                                    <FormInput id="feInputCity"/>
                                                </Col>
                                                <Col md="4" className="form-group">
                                                    <label htmlFor="feInputState">State</label>
                                                    <FormSelect id="feInputState">
                                                        <option>Choose...</option>
                                                        <option>...</option>
                                                    </FormSelect>
                                                </Col>
                                                <Col md="2" className="form-group">
                                                    <label htmlFor="feInputZip">Zip</label>
                                                    <FormInput id="feInputZip"/>
                                                </Col>

                                            </Row>
                                            <Row >
                                                <Col md="12" className="form-group">
                                                    <label htmlFor="feInputCity">Members</label>
                                                    <ListGroup flush>
                                                        <ListGroupItem className="px-3 pb-2">
                                                            <FormCheckbox className="mb-1" value="Electrical" defaultChecked>
                                                                Member One
                                                            </FormCheckbox>
                                                            <FormCheckbox className="mb-1" value="Woods" defaultChecked>
                                                                Member Two
                                                            </FormCheckbox>
                                                            <FormCheckbox className="mb-1" value="Fire">
                                                                Member Three
                                                            </FormCheckbox>
                                                        </ListGroupItem>

                                                        <ListGroupItem className="d-flex px-3">
                                                            <InputGroup className="ml-auto">
                                                                <FormInput placeholder="New Member" />
                                                                <InputGroupAddon type="append">
                                                                    <Button theme="white" className="px-2">
                                                                        <i className="material-icons">add</i>
                                                                    </Button>
                                                                </InputGroupAddon>
                                                            </InputGroup>
                                                        </ListGroupItem>
                                                    </ListGroup>

                                                </Col>
                                            </Row>

                                            <Button type="submit">Save Changes</Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup> </Card>
                </Col>
                <Col lg="4" className="mb-4">

                    <Card small>
                        {/* Files & Dropdowns */}
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Assign Skills</h6>
                        </CardHeader>

                        <CardBody className="p-0">
                            <ListGroup flush>
                                <ListGroupItem className="px-3 pb-2">
                                    <FormCheckbox className="mb-1" value="Electrical" defaultChecked>
                                        Electrical
                                    </FormCheckbox>
                                    <FormCheckbox className="mb-1" value="Woods" defaultChecked>
                                        Desert Area
                                    </FormCheckbox>
                                    <FormCheckbox className="mb-1" value="Fire">
                                        Fire
                                    </FormCheckbox>
                                    <FormCheckbox className="mb-1" value="Water">
                                        Flood
                                    </FormCheckbox>
                                </ListGroupItem>

                                <ListGroupItem className="d-flex px-3">
                                    <InputGroup className="ml-auto">
                                        <FormInput placeholder="New skill" />
                                        <InputGroupAddon type="append">
                                            <Button theme="white" className="px-2">
                                                <i className="material-icons">add</i>
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
);

export default ComponentsOverview;
