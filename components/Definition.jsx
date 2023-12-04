import React, { useState } from "react";
import textHelper from "../helpers/text-helper";
import { ThemeContext } from "../styles/theme-context";

const style = {
  marginBottom: "5px",
  cursor: "pointer",
};

const DefinitionElement = ({ index, definition, handleClick }) => {
  const [state, setState] = useState({
    highlighted: false,
  });

  const japaneseDefinition = textHelper.getJapanese(definition).slice(0).pop();

  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const highlightedStyle = Object.assign(
          {
            backgroundColor: theme.mainColor.rgba,
          },
          style,
        );

        return (
          <div
            className="definition"
            key={index}
            onClick={() => {
              setState({
                highlighted: true,
              });

              handleClick();
            }}
            style={state.highlighted ? highlightedStyle : style}
          >
            <span key={`${index}-japanese`} className="definition__japanese">
              {`${japaneseDefinition.word || ""} 「${
                japaneseDefinition.reading
              }」`}
            </span>

            <span key={`${index}-english`} className="definition__english">
              {textHelper.getEnglish(definition)}
            </span>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default DefinitionElement;
