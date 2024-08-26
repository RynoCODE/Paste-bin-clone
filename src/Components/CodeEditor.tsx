import React, { useState } from "react";
import Editor, { loader } from "@monaco-editor/react";

interface CodeEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  readOnly?: boolean;
}

export default function CodeEditor({
  value,
  onChange,
  readOnly,
}: CodeEditorProps) {
  const [language, setLanguage] = useState("javascript");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const options = {
    selectOnLineNumbers: true,
    automaticLayout: true,
    wordWrap: "on" as "on" | "off" | "wordWrapColumn" | "bounded" | undefined,
    minimap: { enabled: false },
    autoClosingBrackets: "always" as
      | "always"
      | "languageDefined"
      | "beforeWhitespace"
      | "never"
      | undefined,
    suggestOnTriggerCharacters: true,
    autoIndent: "full" as
      | "none"
      | "keep"
      | "brackets"
      | "advanced"
      | "full"
      | undefined,
    readOnly: readOnly || false,
  };

  return (
    <div className="w-1/2 my-1">
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
        value={value}
        onChange={onChange}
        theme="vs-dark"
        options={options}
      />
    </div>
  );
}
