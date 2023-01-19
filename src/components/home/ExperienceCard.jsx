import React from "react";

import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img
          onClick={() => {
            window.open(`${data.webPage}`, "_blank");
          }}
          className=" bg-white mb-3"
          src={data.companylogo}
          alt=""
          style={{
            cursor: "pointer",
            borderRadius: "50px",
            width: "45%",
          }}
        />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
