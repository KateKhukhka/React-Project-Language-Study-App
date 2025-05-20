import { useState, createContext, useEffect } from "react";
const DataContext = createContext();

function DataContextProvider({ children }) {
  let [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((response) => {
        setData((data = response));
        //setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);
  console.log(data);

  return <>{data.length > 0 && <DataContext.Provider value={(data, setData)}>{children}</DataContext.Provider>}</>;
  // {loading ? <p>Loading...</p> :
}

export { DataContext, DataContextProvider };
