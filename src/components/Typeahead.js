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
      <Textinput
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleSelect(ev.target.value);
          }
        }}
      ></Textinput>
      <Displayed>{displaySuggestions}</Displayed>
      <Button onClick={() => setValue("")}>Clear</Button>
    </>
  );
};

const Textinput = styled.input`
  font-size: 20px;
  display: flex;
  padding: 10px;
  margin: 10px;
`;

const Option = styled.li`
  li:hover {
    color: blueviolet;
  }
`;

const Button = styled.button`
  display: inline-flex;
  color: peachpuff;
  border-radius: 5px;
  background: purple;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
`;

const Displayed = styled.ul`
  font-size: 20px;
`;

export default Typeahead;
