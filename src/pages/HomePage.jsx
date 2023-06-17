import { NavLink } from "react-router-dom";
import "./Home.css";
import { useItems } from "../context/ItemContext";
import ItemBox from "../components/ItemBox";

export default function HomePage() {
  const { bookData } = useItems();

  const filterData = (type) => {
    return (
      <div className="shelf-type">
        {bookData
          .filter(({ state }) => state === type)
          .map(({ image, id, title, author, year, state }, index) => (
            <ItemBox id={id} title={title} image={image} author={author} year={year} index={index} state={state} />
          ))}
      </div>
    );
  };

  return (
    <>
      <div className="header">
        <p>
          <b>All Books📚</b>
        </p>
        <span>
          <NavLink to="/search">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/100/search--v1.png"
              alt="search--v1"
            />
          </NavLink>
        </span>
      </div>
      <div className="display-book">
        <div className="type-books type-currenty-reading">
          <h3>Current Reading</h3>
          {filterData("Currently Reading")}
        </div>
        <div className="type-books type-want-to-read">
          <h3>Want to read</h3>
          {filterData("Want To Read")}
        </div>
        <div className="type-books type-read">
          <h3>Read</h3>
          {filterData("Read")}
        </div>
      </div>
    </>
  );
}
