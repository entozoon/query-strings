import { Component, State, h } from "@stencil/core";

interface keyValPair {
  key: string;
  value?: string;
}
@Component({
  tag: "query-strings",
  styleUrl: "query-strings.css",
  shadow: false
})
export class QueryStrings {
  // Not convinced this typing is actually doing anything, but worth a go
  @State() params: Array<keyValPair>;
  constructor() {
    const urlParams = new URLSearchParams(window.location.search);

    const params = [];
    urlParams.forEach((value, key) => {
      params.push({ key, value });
    });
    if (params) {
      this.params = params;
      console.log("params", params);
    }
  }
  render() {
    console.log("render", this.params);
    return (
      <main>
        <h1>Query Strings</h1>
        {this.params && (
          <form>
            {this.params.map(({ key, value }) => (
              <p>
                <label contentEditable>{key}</label>
                <textarea>{value}</textarea>
              </p>
            ))}
          </form>
        )}
      </main>
    );
  }
}
