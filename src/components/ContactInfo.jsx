import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiMailFill, RiPhoneFill, RiMapPin2Fill } from "react-icons/ri";

export const ContactInfo = () => {
  return (
    <div className={"componentLayout pad contactus"}>
      <Container>
        <Row>
          <Col
            xs={12}
            md={6}
            lg={4}
            key={"mobile"}
            className={"d-grid align-items-stretch contact-blocks"}
          >
            <Card className="text-center">
              <Card.Body>
                {/* <blockquote className="text-center"> */}
                <Card.Title>
                  <RiMapPin2Fill />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Address
                </Card.Subtitle>
                {/* </blockquote> */}
                <Card.Text>
                  1400 112th Ave SE, Suite 100, Bellevue, Washington, 98004,
                  United States of America
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            key={"map"}
            className={"d-grid align-items-stretch contact-blocks"}
          >
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <RiPhoneFill />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Contact Us
                </Card.Subtitle>
                <Card.Text>xxxxxxxxxx</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={4}
            key={"Address"}
            className={"d-grid align-items-stretch contact-blocks"}
          >
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <RiMailFill />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Email Us
                </Card.Subtitle>
                <Card.Text>infosystasol@gmail.com</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
