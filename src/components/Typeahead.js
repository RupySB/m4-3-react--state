import React from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");

  const filteredSuggestions = suggestions.filter(function (suggestion) {
    if (value > "") {
      return suggestion.title.toLowerCase().includes(value.toLowerCase());
    } else {
      return null;
    }
  });
  const displaySuggestions = filteredSuggestions.map((suggestion) => {
    return (
      <Option
        key={suggestion.id}
        onClick={() => handleSelect(suggestion.title)}
      >
        {suggestion.title}
      </Option>
    );
  });
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleSelect(ev.target.value);
          }
        }}
      />
      <ul>{displaySuggestions}</ul>
      <button onClick={() => setValue("")}>Clear</button>
    </>
  );
};

const Option = styled.li`
  li:hover {
    color: blueviolet;
  }
`;

export default Typeahead;
