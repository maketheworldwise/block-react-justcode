import "./Button.scss";

function Button(props) {
  return (
    <button className="block-btn" onClick={() => props.handleBtnClick(props.name)}>
      블럭{props.name} 버튼
    </button>
  );
}

export default Button;
