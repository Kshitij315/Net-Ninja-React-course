import { useEffect,useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);

  const [name, setName] = useState("mario");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              //if response is not good then
              if (!res.ok) {
                // error coming back from server
                throw Error("could not fetch the data for that resource");
              }
              return res.json();
            })
            .then((data) => {
              setIsPending(false);
              setData(data);
              setError(null);
            })
            .catch((err) => {
              // auto catches network / connection error
              setIsPending(false);
              setError(err.message);
              // console.log(err.message);
            });
        }, 1000);
      }, [url]);//dependency
      //whenever the url changes useEffect is rerun
      return {data,isPending,error};
}

export default useFetch;