import React from "react";
import {Alert, Card, CardHeader, Col, Container, Form, ListGroup, ListGroupItem, Row} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import DissolutionForm from "../components/dissolution/DissolutionForm"

const ComponentsOverview = () => (
    <div>
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle
                    sm="4"
                    title="Dismissal"
                    className="text-sm-left"
                />
            </Row>

            <Row>
                <Col lg="9" className="mb-4">


                    {/* Complete Form Example */}
                    <Card small>
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Dismissal Form</h6>
                        </CardHeader>
                        <DissolutionForm/>
                    </Card>
                </Col>

            </Row>
        </Container>
    </div>
);

export default ComponentsOverview;
