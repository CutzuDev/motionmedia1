import { document } from "postcss";
import { useEffect, useState } from "react";

export default function Home() {
  const [first, setfirst] = useState("");

  useEffect(() => {
    setfirst("test1111");
    setTimeout(() => {
      setfirst("1112321312312");
    }, 5000);
  }, []);

  
  return (
    <div className="w-full min-h-screen flex items-center justify-center text-7xl text-white">
      Test
      {first}
    </div>
  );
}
