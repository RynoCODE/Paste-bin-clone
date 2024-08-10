import Image from "next/image";
import CodeEditor from "@/Components/CodeEditor";
export default function Home() {
  return (
    <div>
      <nav className="w-full flex justify-between items-center h-14 px-5 shadow">
        <h1>
          <img src="" alt="" />
          Logo
        </h1>
        <div className="flex justify-between items-center gap-4">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Constribute</a>
        </div>
        <button>Sign In</button>
      </nav>
      <div className="Code-editor flex flex-col justify-center items-center w-full min-h-screen border border-1">
        <h1 className="text-7xl ">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text font-bold ">
            Paste Bin{" "}
          </span>
        </h1>
        <CodeEditor />
      </div>
    </div>
  );
}
