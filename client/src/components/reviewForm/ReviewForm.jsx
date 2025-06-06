import React from "react";
import { Button, Form } from "react-bootstrap";

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
    return (
        <Form>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>{labelText}</Form.Label>
                <Form.Control
                    ref={revText}
                    as="textarea"
                    rows={3}
                    defaultValue={defaultValue}
                />
            </Form.Group>
            <Button onClick={handleSubmit} variant="outline-info">
                Submit
            </Button>
        </Form>
    );
};

export default ReviewForm;
