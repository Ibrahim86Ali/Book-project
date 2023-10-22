import { useEffect, useState } from "react";



const useFetch=()=>{
    const [data, setData] = useState([]);
    const [Ready, setReady] = useState(false);
  

useEffect(() => {
let url ="https://gutendex.com/books"

 const fetchData = async () => {
          const res = await fetch(url);
          const json = await res.json();
          setData(json.results);
         
  
        };
        fetchData();
      }, []);

     return  {data,setReady,}
  

}

export default useFetch
