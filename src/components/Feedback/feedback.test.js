import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import Feedback from "./feedback";

describe("<Feedback />", () => {
  it("renders without crashing", () => {
    shallow(<Feedback />);
  });

  it("returns the correct feedback when a user makes a guess", () => {
    const guessCount = 2;
    const wrapper = shallow(<Feedback guessCount={guessCount} />);
    expect(wrapper.text()).toEqual(" Guess again!");
  });
});
