import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../components/NotFound";

const Definition = () => {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  let { search } = useParams();

  useEffect(() => {
    // const url = "https://httpstat.us/500";
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;
    fetch(url)
      .then((response) => {
        console.log(response.status);
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401) {
          navigate("./login");
          // } else if (response.status === 500) {
          //   setError(true);
          //   console.log(response.status);
        }

        if (!response.ok) {
          setError(true);
          throw new Error("Something went wrong");
        }

        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary">Search another word</Link>
      </>
    );
  }

  if (error === true) {
    return (
      <>
        <p>Something went wrong. Try again?</p>
        <Link to="/dictionary">Search another word</Link>
      </>
    );
  }

  return (
    <>
      {word ? (
        <>
          <h1 className="text-white">{search}</h1>
          {word.map((meaning) => {
            return (
              <p className="text-gray-300" key={uuidv4()}>
                {meaning.partOfSpeech}: {meaning.definitions[0].definition}
              </p>
            );
          })}
          <Link to="/dictionary" className="text-cyan-300">
            Search another word
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Definition;
