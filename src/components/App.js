import React from "react";
import data from "../data";
import GlobalStyles from "./GlobalStyles";
import Typeahead from "./Typeahead";
import styled from "styled-components";

function App(props) {
  // TODO!
  return (
    <>
      <GlobalStyles />
      <Typeahead
        suggestions={data.books}
        handleSelect={(suggestion) => {
          window.alert(suggestion);
        }}
      />
    </>
  );
}

export default App;
