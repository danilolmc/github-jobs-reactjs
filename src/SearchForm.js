import React from 'react'

import { Form, Col } from "react-bootstrap";

export default function SearchForm({ params, onParamChange }) {

    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>

                    <Form.Label>Vaga</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.description} name="description" />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Localização</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.description} name="location" />
                </Form.Group>
                <Form.Group as={Col} xs="auto" className="ml-2">
                    <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Apenas Integral" type="checkbox" className="mb-2" />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}
