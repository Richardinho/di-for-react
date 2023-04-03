import React, { Component } from "react";
import { Inject } from "./injector";

@Inject(["myService", "jobService"])
export default class Miz extends Component {
  render() {
    return (
      <h2>
        Miz
        {this.props.myService.name}
        {this.props.jobService.getJob()}
      </h2>
    );
  }
}
