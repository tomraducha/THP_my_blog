import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss"

export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("http://localhost:3000/articles");
      const data = await resp.json();
      setData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return isLoading ? (
    "Loading..."
  ) : (
    <>
      <div>
        <h1>creer un nouveau poste</h1>
        <Link to="/posts/create/">nouveau</Link>
      </div>

      <div className="Content">
        {data.map((value) => (
          <div className="Content2">
            <h1>{value.title}</h1>
            <p>{value.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
