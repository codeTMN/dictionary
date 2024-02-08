import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setWord(e.target.value);
  };

  // const onclickEnter = (e) => {
  //   if (e.key === "Enter") {
  //     navigate("/definition/" + word);
  //   }
  // };

  return (
    <form
      className="flex space-between py-2 my-2 space-x-2 max-w-[300px]"
      onSubmit={() => {
        navigate("/dictionary/" + word);
      }}
    >
      <input
        className="shrink min-w-0 px-2 rounded py-2"
        placeholder="type a word to search"
        type="text"
        onChange={changeHandler}
        // onKeyPress={onclickEnter}
      ></input>
      <button className="background-button hover:bg-purple-800 text-white font-bold py-1 px-2 rounded">
        Search
      </button>
    </form>
  );
}
