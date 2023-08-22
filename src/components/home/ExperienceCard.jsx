import React from "react";

import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <div>
      <div className="pb-5 text-center">
        {/* <img
          // onClick={() => {
          //   window.open(`${data.icon}`, "_blank");
          // }}
          className=" bg-white mb-3"
          src={data.icon}
          alt=""
          style={{
            width: "50%",
            height: "100%",
            border: "solid red",
          }}
        /> */}

        <i
          style={{
            fontSize: "250%",
            borderRadius: "12px",
          }}
          class={data.icon}
        ></i>
        <p
          className="lead"
          style={{
            fontSize: "75%",
          }}
        >
          {data.name}
          <br />
          {/* {data.date} */}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
