import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import Game from "./game";

describe("<Game />", () => {
  it("renders without crashing", () => {
    shallow(<Game />);
  });

  it("can start a new game", () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: ["1", "2", "100"],
      feedback: "You're Ice Cold...",
      auralStatus: "test aural status",
      correctAnswer: 22
    });

    wrapper.instance().restartGame();
    expect(wrapper.state("guesses")).toEqual([]);
    expect(wrapper.state("feedback")).toEqual("Make your guess!");
    expect(wrapper.state("auralStatus")).toEqual("");
    expect(wrapper.state("correctAnswer")).toBeLessThanOrEqual(100);
    expect(wrapper.state("correctAnswer")).toBeGreaterThanOrEqual(1);
  });

  it("can make guesses", () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 100
    });

    wrapper.instance().makeGuess(100);
    expect(wrapper.state("feedback")).toEqual("You got it!");
    expect(wrapper.state("guesses")).toEqual([100]);

    wrapper.instance().makeGuess(50);
    expect(wrapper.state("feedback")).toEqual("You're Ice Cold...");
    expect(wrapper.state("guesses")).toEqual([100, 50]);

    wrapper.instance().makeGuess(70);
    expect(wrapper.state("feedback")).toEqual("You're Cold...");
    expect(wrapper.state("guesses")).toEqual([100, 50, 70]);

    wrapper.instance().makeGuess(90);
    expect(wrapper.state("feedback")).toEqual("You're Warm.");
    expect(wrapper.state("guesses")).toEqual([100, 50, 70, 90]);

    wrapper.instance().makeGuess(99);
    expect(wrapper.state("feedback")).toEqual("You're Hot!");
    expect(wrapper.state("guesses")).toEqual([100, 50, 70, 90, 99]);
  });

  it("can make aural status updates", () => {});
});
