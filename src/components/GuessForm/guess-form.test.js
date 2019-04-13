import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import GuessForm from "./guess-form";

describe("<GuessForm />", () => {
  it("should render without crashing", () => {
    shallow(<GuessForm />);
  });

  it("should call onMakeGuess when form is submit", () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = "1";
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalledWith(value);
  });
});
