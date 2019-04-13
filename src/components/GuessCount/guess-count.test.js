import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import GuessCount from "./guess-count";

describe("<GuessCount />", () => {
  it("renders without creashing", () => {
    shallow(<GuessCount />);
  });

  it("renders the correct guess count", () => {
    let guess = 1;
    let wrapper = shallow(<GuessCount guessCount={guess} />);
    expect(wrapper.text()).toEqual(`You've made ${guess} guess!`);
  });
});
