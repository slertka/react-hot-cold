import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import GuessSection from "./guess-section";

describe("<GuessSection />", () => {
  it("renders without crashing", () => {
    shallow(<GuessSection />);
  });
});
