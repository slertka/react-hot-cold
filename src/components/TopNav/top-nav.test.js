import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import TopNav from "./top-nav";

describe("<TopNav />", () => {
  it("renders without crashing", () => {
    shallow(<TopNav />);
  });

  it("should call onRestartGame when new game is clicked", () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    const link = wrapper.find(".new");
    link.simulate("click", { preventDefault() {} });
    expect(callback).toHaveBeenCalled();
  });

  it("should call onGenerateAuralUpdate when status-link is clicked", () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    const link = wrapper.find(".status-link");
    link.simulate("click", { preventDefault() {} });
    expect(callback).toHaveBeenCalled();
  });
});
