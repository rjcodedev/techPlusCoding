import React from "react";
import ListUI from "../../ListUI";
import { freePdf } from "../../utils";
const FreePdf = () => {
  return (
    <div className="h-screen pt-2">
      <ListUI List={freePdf} />
    </div>
  );
};

export default FreePdf;
