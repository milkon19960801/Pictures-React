import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const pics = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query: term },
      headers: {
        Authorization: "Client-ID NrWVG3uoZCrhN3NU2b4nRzlVnJgHnlHFsaas1a4we6o",
      },
    });
    console.log(pics);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
