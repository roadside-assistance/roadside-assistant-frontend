import React from "react";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    FormGroup,
    FormCheckbox,
    FormSelect,
    Button, FormTextarea, InputGroupAddon, InputGroupText, InputGroup
} from "shards-react";

const DissolutionForm = () => (
    <ListGroup flush>
        <ListGroupItem className="p-3">
            <Row md="5">
                <Col>
                    <Form>
                        <Row form >
                            <Col md="2" className="form-group">
                                <label htmlFor="feInputState">Type</label>
                                <FormSelect id="feInputState">
                                    <option>Type...</option>
                                    <option>State Expert</option>
                                    <option>Rescue Forces</option>
                                </FormSelect>
                            </Col>
                            <Col md="10" className="form-group">
                                <label htmlFor="Search">User</label>
                                <InputGroup seamless className="mb-3">
                                    <InputGroupAddon type="prepend">
                                        <InputGroupText>
                                            <i className="material-icons">person</i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput value="Al Sobhani" onChange={() => {}} />
                                </InputGroup>
                            </Col>
                        </Row>

                        <Row form>
                            <Col md="12" className="form-group">
                                <label htmlFor="feDescription">Description</label>
                                <FormTextarea id="feDescription" rows="5" />
                            </Col>
                        </Row>

                        <Button theme="danger" type="submit">Dissolution</Button>
                    </Form>
                </Col>
            </Row>
        </ListGroupItem>
    </ListGroup>
);

export default DissolutionForm;
