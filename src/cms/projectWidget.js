import React, { Component } from "react";
import styled from "styled-components";

// This is the editing component
export class ProjectControl extends Component {
  getValue() {
    return this.props.value ? this.props.value : "";
  }

  console.log(this.props.value);

  render() {
    return <div></div>;
  }
}

// This is the preview component
export const ProjectPreview = props => <div></div>;