import { useState, useCallback } from "react";

const useFetch = () => {
  // Armazeno o retorno da minha api
  const [data, setData] = useState(null);
  // Estado para retornar o erro
  const [error, setError] = useState(null);
  // Estado para controlar o loading
  const [loading, setLoading] = useState(null);

  // Aqui o useCallback é necessário para evitar em render infinito.
  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (erro) {
      json = null;
      setError(erro.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
