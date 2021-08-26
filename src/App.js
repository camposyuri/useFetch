import React, { useEffect } from "react";
import useFetch from "./useFetch";

const App = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    request("http://localhost:3001/users/1");
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>{`${data.id} - ${data.name} - ${
        data.admin ? "Verdadeiro" : "Falso"
      }`}</div>
    );
  else return null;
};

export default App;
