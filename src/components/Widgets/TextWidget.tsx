import React from "react";
import { useState } from "react";

const TextWidget = () => {
  const [text, setText] = useState("Write your notes here...");

  return (
    <div className="w-full bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Notes</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-40 border rounded p-2"
      />
    </div>
  );
};

export default TextWidget;
