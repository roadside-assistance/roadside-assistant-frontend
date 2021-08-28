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

class ComponentsOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: "",
            phone: '',
            pass: '',
            sal : '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange = (event) => {
        console.log(event.target)
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8080/human-resources/inspector/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {
                "first_name": this.state.fname,
                "last_name": this.state.lname,
                "phone_number": this.state.phone,
                "password": this.state.pass,
                "salary": this.state.sal,
                "town_under_control": this.state.city
            })
        })
        console.log(this.state)   // you should be able to see your form data
    }

    render() {
        return <div>
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
                                            <Form onSubmit={this.onSubmit}>
                                                <Row form>
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="feEmailAddress">First Name</label>
                                                        <FormInput
                                                            id="feFirstName"
                                                            name='fname'
                                                            type="text"
                                                            placeholder="First Name"
                                                            onChange={this.handleChange}
                                                        />
                                                    </Col>
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="feLastName">Last Name</label>
                                                        <FormInput
                                                            id="feLastName"
                                                            type="text"
                                                            name='lname'
                                                            placeholder="Last Name"
                                                            onChange={this.handleChange}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row form>
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="feEmailAddress">Email</label>
                                                        <FormInput
                                                            id="feEmailAddress"
                                                            type="email"
                                                            name='email'
                                                            placeholder="Email"
                                                            onChange={this.handleChange}
                                                        />
                                                    </Col>
                                                    <Col md="6">
                                                        <label htmlFor="fePassword">Password</label>
                                                        <FormInput
                                                            id="fePassword"
                                                            name="pass"
                                                            type="password"
                                                            placeholder="Password"
                                                            onChange={this.handleChange}
                                                        />
                                                    </Col>
                                                </Row>

                                                <FormGroup>
                                                    <label htmlFor="feInputAddress">Phone Number</label>
                                                    <FormInput id="feInputAddress" placeholder="+98**********"
                                                               name='phone'
                                                               onChange={this.handleChange}/>
                                                </FormGroup>

                                                <FormGroup>
                                                    <label htmlFor="feInputAddress2">Address 2</label>
                                                    <FormInput
                                                        id="feInputAddress2"
                                                        placeholder="Apartment, Studio or Floor"
                                                        onChange={this.handleChange}
                                                    />
                                                </FormGroup>

                                                <Row form>
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="feInputCity">City</label>
                                                        <FormInput id="feInputCity" name='city'
                                                                   onChange={this.handleChange}/>
                                                    </Col>
                                                    <Col md="4" className="form-group">
                                                        <label htmlFor="feInputState">State</label>
                                                        <FormSelect id="feInputState" onChange={this.handleChange}>
                                                            <option>Choose...</option>
                                                            <option>...</option>
                                                        </FormSelect>
                                                    </Col>
                                                    <Col md="2" className="form-group">
                                                        <label htmlFor="feInputZip">Salary</label>
                                                        <FormInput id="feInputZip" name='sal' onChange={this.handleChange}/>
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
        </div>;
    }
}

export default ComponentsOverview;
