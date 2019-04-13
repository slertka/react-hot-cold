import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import Feedback from "./feedback";

describe("<Feedback />", () => {
  it("renders without crashing", () => {
    shallow(<Feedback />);
  });
});
