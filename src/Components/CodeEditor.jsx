"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("console.log('Hello World')");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const options = {
    selectOnLineNumbers: true,
    automaticLayout: true,
    wordWrap: "on",
    minimap: { enabled: false },
    autoClosingBrackets: "always",
    suggestOnTriggerCharacters: true,
    autoIndent: "full",
  };

  return (
    <div className=" w-1/2 my-1">
      <div className="mb-4">
        <label htmlFor="language-select">Choose Language: </label>
        <select
          className="bg-orange-500 rounded-md px-2 py-2 hover:bg-orange-600 duration-75 appearance-none focus:ring-2 focus:outline-none focus:ring-orange-700 text-center"
          id="language-select"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="cpp">C++</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
      </div>
      <Editor
        height="60vh"
        language={language}
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={options}
      />
    </div>
  );
}
