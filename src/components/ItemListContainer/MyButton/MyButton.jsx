import "./MyButton.css";

function MyButton(props) {
  
  return (
    <button className="btn">
      {props.children}
    </button>
  );
}

export default MyButton;