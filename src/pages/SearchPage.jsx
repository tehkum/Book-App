import { NavLink } from "react-router-dom";
import "./Home.css";
import { useState } from "react";
import { useItems } from "../context/ItemContext";
import ItemBox from "../components/ItemBox";

export default function SearchPage(){
    const [ itemSearched, setSearch ] = useState("");
    const { bookData } = useItems();

    const eventHandler = (event) => {
        setSearch(event.target.value)
    }

    const searchFilter = bookData.filter(book => book.title.toLowerCase().includes(itemSearched.toLowerCase()));

    return <>
        <div className="header header-search">
        <p>
          <b>All Books📚</b>
        </p>
        <span>
          <NavLink to="/">
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/100/circled-left-2.png" alt="circled-left-2"/>
          </NavLink>
        <input type="search" placeholder="Search..." onChange={eventHandler}/>
        </span>
      </div>
      <div className="display-book dis-search">
      <div className="shelf-type">{itemSearched.length ? searchFilter?.map(({id, title, author, year, image, state})=><ItemBox id={id} title={title} image={image} author={author} year={year} state={state}/>): "...search item"}</div>
      </div>
    </>
}