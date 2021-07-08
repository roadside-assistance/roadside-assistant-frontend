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
    Alert, FormInput, FormGroup, FormSelect, FormCheckbox, Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

const ComponentsOverview = () => (
    <div>
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle
                    sm="4"
                    title="Recruit"
                    subtitle="Recruit"
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
                                                    <label htmlFor="feEmailAddress">First Name</label>
                                                    <FormInput
                                                        id="feFirstName"
                                                        type="text"
                                                        placeholder="First Name"
                                                    />
                                                </Col>
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="feLastName">Last Name</label>
                                                    <FormInput
                                                        id="feLastName"
                                                        type="text"
                                                        placeholder="Last Name"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="feEmailAddress">Email</label>
                                                    <FormInput
                                                        id="feEmailAddress"
                                                        type="email"
                                                        placeholder="Email"
                                                    />
                                                </Col>
                                                <Col md="6">
                                                    <label htmlFor="fePassword">Password</label>
                                                    <FormInput
                                                        id="fePassword"
                                                        type="password"
                                                        placeholder="Password"
                                                    />
                                                </Col>
                                            </Row>

                                            <FormGroup>
                                                <label htmlFor="feInputAddress">Address</label>
                                                <FormInput id="feInputAddress" placeholder="1234 Main St"/>
                                            </FormGroup>

                                            <FormGroup>
                                                <label htmlFor="feInputAddress2">Address 2</label>
                                                <FormInput
                                                    id="feInputAddress2"
                                                    placeholder="Apartment, Studio or Floor"
                                                />
                                            </FormGroup>

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
                                            <Button type="submit">Create New Account</Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup> </Card>
                </Col>

            </Row>
        </Container>
    </div>
);

export default ComponentsOverview;
