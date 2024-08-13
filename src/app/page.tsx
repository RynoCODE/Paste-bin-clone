"use client";
import { useRouter } from "next/navigation";
import CodeEditor from "@/Components/CodeEditor";
import TimerButton from "@/Components/TimerButton";

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

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
          <a href="">Contribute</a>
        </div>
        <button onClick={handleLoginClick}>Sign In</button>
      </nav>
      <div className="Code-editor flex flex-col justify-center items-center w-full min-h-screen">
        <h1 className="text-7xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text font-bold">
            Paste Bin
          </span>
        </h1>
        <CodeEditor />
        <div className="btn flex gap-1">
          <button className="px-5 py-2 bg-red-500 rounded border-none mx-2">
            Copy Link
          </button>
          <TimerButton />
        </div>
      </div>
    </div>
  );
}
