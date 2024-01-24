
function Squares(props) {
  return (
    <>
      <div className="squares">
        <button onClick={props.onClick} className="button-row">
          {props.value}
        </button>
      </div>
    </>
  );
}

export default Squares;
