import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import ButtonForm from "./ButtonForm.js";

describe("<ButtonForm/> Tests", () => {

  it("render test", () => {

    const renderTest = render(<ButtonForm/>);
  });

});