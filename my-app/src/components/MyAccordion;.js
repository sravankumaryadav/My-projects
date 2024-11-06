import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

function MyAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Discription:
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>This is the content for item #1</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default MyAccordion;
