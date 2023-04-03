import Injector, { Inject } from "./injector";
import React, { Component } from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

let injector;
let childInjector;

class TestService {
  constructor() {
    this.name = "test service";
  }
}

const props = {
  config: [
    {
      key: "testService",
      provider: TestService,
    },
  ],
};

beforeEach(() => {
  injector = new Injector(props, {});
});

describe("When service is configured in injector", () => {
  test("the injector should return the service", () => {
    const service = injector.getService("testService");
    expect(service).toBeInstanceOf(TestService);
  });
});

describe("When service is configured in a parent injector", () => {
  beforeEach(() => {
    const context = {
      injector,
    };
    childInjector = new Injector({ config: [] }, context);
  });
  test("the service should be returned by the parent injector", () => {
    const service = childInjector.getService("testService");
    expect(service).toBeInstanceOf(TestService);
  });
});

describe("When the decorator is on a Component", () => {
  let Hoc;

  class InnerComponent extends Component {
    constructor() {
      super();
    }
    render() {
      return <h1>{this.props.testService.name}</h1>;
    }
  }

  test("it should inject dependencies into component", () => {
    const dependencies = ["testService"];
    Hoc = Inject(dependencies)(InnerComponent);
    const hoc = mount(<Hoc />, { context: { injector } });
    expect(hoc.text()).toBe("test service");
  });
});
