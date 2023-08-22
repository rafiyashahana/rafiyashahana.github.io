import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">{experiences.heading}</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "12%",
              justifyContent: "center",
            }}
          >
            {experiences.data.map((data, index) => {
              return <ExperienceCard key={index} data={data} />;
            })}
          </div>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Experience;
