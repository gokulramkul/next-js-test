import React from "react";
import myHTMLTemplate from "../html/index.html";

const Label = () => {
  return <div dangerouslySetInnerHTML={{ __html: myHTMLTemplate }} />;
};

export default Label;
