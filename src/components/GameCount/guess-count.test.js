import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import GuessCount from "./guess-count";

describe("<GuessCount />", () => {
  it("renders without creashing", () => {
    shallow(<GuessCount />);
  });
});
