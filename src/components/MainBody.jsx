import { useEffect, useState } from "react";
import { fetchData } from "./../utilities/fetchData";

export default function getData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let ignore = false;
    async function startFetching() {
      const json = await fetchData();
      if (!ignore) {
        setData(JSON.stringify( json));
      }
    }

    startFetching();
    

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
     <ul>
      {/* {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))} */}
    </ul>
    {data}
    </>
   
  );
}
