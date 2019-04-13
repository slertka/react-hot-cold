import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import GuessForm from "./guess-form";

describe("<GuessForm />", () => {
  it("should render without crashing", () => {
    shallow(<GuessForm />);
  });
});
