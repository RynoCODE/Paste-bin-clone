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
      <div className="hero w-full h-screen flex itmes-center justify-center flex-col ">
        <input
          className="bg-transparent w-1/2 h-44 border-1 border"
          type="text"
        />
        <div>
          <button>Copy Link</button>
          <button>timer</button>
        </div>
        <div>
          <h1>Welcome to the Code Editor Example</h1>
          <CodeEditor />
        </div>
      </div>
    </div>
  );
}