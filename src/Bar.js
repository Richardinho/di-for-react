import React, { Component } from "react";
import Miz from "./Miz";
import { Inject } from "./injector";

@Inject(["barService"])
export default class Bar extends Component {
  render() {
    return (
      <div>
        <Miz />
        <div>barService: {this.props.barService.name}</div>
        This is bar
      </div>
    );
  }
}
