import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import TopNav from "./top-nav";

describe("<TopNav />", () => {
  it("renders without crashing", () => {
    shallow(<TopNav />);
  });
});
