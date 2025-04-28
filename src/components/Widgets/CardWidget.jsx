import { useState } from "react";

const CardWidget = () => {
  const [text, setText] = useState("Type something...");

  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Write something..."
      className="w-full h-40 p-2 bg-gray-100 dark:bg-gray-700 text-black dark:text-white rounded"
    />
  );
};

export default CardWidget;
