"use client"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CodeEditor from "@/Components/CodeEditor";
import axios from "axios";


const ViewCode = () => {
  const router = useRouter();
  const { id } = router.query;
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/getCode/${id}`)
        .then((response) => {
          setCode(response.data.code);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching code:", error);
          setError("Failed to load code.");
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <nav className="w-full flex justify-between items-center h-14 px-5 shadow">
        <h1>
          <img src="" alt="Logo" />
          Logo
        </h1>
        <div className="flex justify-between items-center gap-4">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contribute</a>
        </div>
        <button>Sign In</button>
      </nav>
      <div className="Code-editor flex flex-col justify-center items-center w-full min-h-screen">
        <h1 className="text-7xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text font-bold">
            Paste Bin
          </span>
        </h1>
        <CodeEditor value={code} onChange={() => {}} readOnly={true} />
      </div>
    </div>
  );
};

export default ViewCode;
