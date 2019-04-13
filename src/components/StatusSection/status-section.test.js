import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import StatusSection from "./status-section";

describe("<StatusSection />", () => {
  let guesses = ["1", "2", "100"];

  it("renders without crashing", () => {
    shallow(<StatusSection guesses={guesses} />);
  });
});
