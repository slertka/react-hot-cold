import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import Game from "./game";

describe("<Game />", () => {
  it("renders without crashing", () => {
    shallow(<Game />);
  });
});
