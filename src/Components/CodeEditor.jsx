"use client"; // Ensures client-side rendering

import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");

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
    <div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="language-select">Choose Language: </label>
        <select
          className="bg-blue-500 rounded-md px-2"
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