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
    Button, FormTextarea
} from "shards-react";

const DissolutionForm = () => (
    <ListGroup flush>
        <ListGroupItem className="p-3">
            <Row>
                <Col>
                    <Form>
                        <Row form>
                            <Col md="4" className="form-group">
                                <label htmlFor="feInputState">State</label>
                                <FormSelect id="feInputState">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </FormSelect>
                            </Col>
                            <Col md="6" className="form-group">
                                <label htmlFor="Search">Search</label>
                                <FormInput
                                    id="Search"
                                    type="text-area"
                                    placeholder="Search..."
                                />
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
