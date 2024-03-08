import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Blog extends Component {
  render() {
    return (
      <div id="blog">
        <Slider title="BLOG" size="slider-small" />
        <div className="center">
          <div id="content">
            {/* Listado de artículos que vendrán del API REST de Node */}
            <Articles />
          </div>

          <Sidebar blog="true" />
        </div>
      </div>
    );
  }
}

export default Blog;
