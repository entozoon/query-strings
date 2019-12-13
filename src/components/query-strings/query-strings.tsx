import { Component, h } from "@stencil/core";

@Component({
  tag: "query-strings",
  styleUrl: "query-strings.css",
  shadow: false
})
export class QueryStrings {
  constructor() {
    const urlParams = new URLSearchParams(window.location.search);

    const params = [];
    urlParams.forEach((value, key) => {
      params.push({ key, value });
    });

    console.log(params);
  }
  render() {
    return <div>stuff</div>;
  }
}
