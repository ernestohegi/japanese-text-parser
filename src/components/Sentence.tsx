import { Definition } from "@/app/api/translate/route";
import { useState, memo } from "react";

type SentenceProps = Definition & {
  handleOnClick: (definition: Definition) => void;
};

export const Sentence = memo(
  ({ text, translation, handleOnClick }: SentenceProps) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <button
        className={`flex flex-col gap-4 border p-4 rounded cursor-pointer text-left ${
          isSelected ? "bg-blue-500" : ""
        }`}
        onClick={() => {
          handleOnClick({ text, translation });
          setIsSelected((prev) => !prev);
        }}
      >
        <p className="font-bold">{text}</p>
        <p>{translation}</p>
      </button>
    );
  }
);

Sentence.displayName = "Sentence";
