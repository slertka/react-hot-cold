import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import AuralStatus from "./aural-status";

describe("<AuralStatus />", () => {
  it("renders without crashing", () => {
    shallow(<AuralStatus />);
  });

  it("renders the correct aural status", () => {
    const status = "test";
    const wrapper = shallow(<AuralStatus auralStatus={status} />);
    expect(wrapper.text()).toEqual(status);
  });
});
