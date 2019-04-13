import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import GuessList from "./guess-list";

describe("<GuessList />", () => {
  let guesses = ["1", "2", "100"];

  it("renders without crashing", () => {
    shallow(<GuessList guesses={guesses} />);
  });
});
