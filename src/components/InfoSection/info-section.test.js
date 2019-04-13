import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import InfoSection from "./info-section";

describe("<InfoSection />", () => {
  it("renders without crashing", () => {
    shallow(<InfoSection />);
  });
});
