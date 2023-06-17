import { useState } from "react";
import DropBox from "./DropBox";

export default function ItemBox({id, image, title, author, year, index, state}) {
    const [ toggle, setToggle ] = useState(false);

    const toggleHandle = () => [
        setToggle(!toggle)
    ]

  return (
    <div className="book-box" key={id}>
      <span>
        <img src={image} alt={title} />
        <p className="arrow" onClick={toggleHandle}>
        {toggle ? "▲" : "⯆" }
        </p>
        <div style={{display: toggle ? "block" : 'none'}}>
        <DropBox id={id} index={index} state={state} setToggle={setToggle}/></div>
      </span>
      <h4>{title}</h4>
      <p>{author}</p>
      <p>{year}</p>
    </div>
  );
}
