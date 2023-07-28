import React from "react";
import notFound from "../../../images/404 Page.jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <div>
      <img width={"100%"} height={"500px"} src={notFound} alt="" />
      <Link to={"/home"}>
        <Button className="mt-5 mb-5" variant="danger">
          OOPss!!GO-BACK PlZ
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
