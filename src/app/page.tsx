"use client";
import { useState } from "react";
import CodeEditor from "@/Components/CodeEditor";
import axios from "axios";
import Navbar from "@/Components/Navbar";

export default function Home() {
  const [code, setCode] = useState("");

  const handleCodeChange = (value: string | undefined) => {

    if (value !== undefined) {
      setCode(value);
    }
  };

  const handleCopyLink = async () => {
    try {
      const response = await axios.post("/api/saveCode", { code });
      const { uniqueId } = response.data;
      const link = `${window.location.origin}/code/${uniqueId}`;

      navigator.clipboard.writeText(link);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Failed to generate link", error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-purple-900">
      <Navbar />
      <div className="Code-editor flex flex-col mt-10 items-center w-full min-h-screen">
        <h1 className="text-7xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text font-bold">
            UniCode
          </span>
        </h1>
        <CodeEditor value={code} onChange={handleCodeChange} />
        <div className="btn flex gap-1">
          <button
            onClick={handleCopyLink}
            className="px-5 py-2 bg-orange-500 rounded border-none hover:bg-orange-700 mt-2"
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}
