import { useNavigate } from "react-router";
import { useItems } from "../context/ItemContext";
import "./Dropbox.css";

export default function DropBox({ id, state, setToggle }) {
  const { stateChanger } = useItems();
  const navigate = useNavigate();

  return (
    <div className="DropBox">
      <div
        value="none"
        style={{ backgroundColor: state === "none" ? "grey" : "#666666" }}
        onClick={() => {
            stateChanger(id, "none");
            setToggle(false);
            navigate("/")

        }
        }
      >
        None
      </div>

      <div
        value="Currently Reading"
        onClick={() => {
            stateChanger(id, "Currently Reading")
            setToggle(false);
            navigate("/")
        }}
        style={{
          backgroundColor: state === "Currently Reading" ? "grey" : "#666666",
        }}
      >
        Currently Reading
      </div>

      <div
        value="Want To Read"
        onClick={() => {
            stateChanger(id, "Want To Read")
            setToggle(false)
            navigate("/")

        }}
        style={{
          backgroundColor: state === "Want To Read" ? "grey" : "#666666",
        }}
      >
        Want To Read
      </div>

      <div
        value="Read"
        onClick={() => {
            stateChanger(id, "Read")
            setToggle(false)
            navigate("/")

        }}
        style={{ backgroundColor: state === "Read" ? "grey" : "#666666" }}
      >
        Read
      </div>
    </div>
  );
}
