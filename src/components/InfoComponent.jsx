import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FcSettings, FcBusinesswoman, FcPositiveDynamic } from "react-icons/fc";

import "../styles/infoComponent.css";

const icons = {
  FcPositiveDynamic: FcPositiveDynamic,
  FcSettings: FcSettings,
  FcBusinesswoman: FcBusinesswoman,
};

export const InfoComponent = ({ infoData }) => {
  const navigate = useNavigate();
  return (
    <div className={"componentLayout pad"}>
      <Container>
        <Row>
          {infoData.map((element, index) => {
            const IconName = icons[element.icon];
            return (
              <Col className={"mrgn-btm"} xs={12} md={6} lg={4} key={index}>
                <div>
                  <span className={"infoIcon"}>
                    <IconName />
                  </span>
                  <span>{element.title}</span>
                </div>
                <span className="description">{element.description}</span>
                <div
                  className="readMore"
                  onClick={() => navigate(`${element.navigationLink}`)}
                >
                  Read More
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
