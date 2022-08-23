import { useState } from "react";
import Block from "../../components/block/Block";
import Button from "../../components/button/Button";
import "./Arrange.scss";

function Arrange() {
  const [isBtn1Clicked, setIsBtn1Clicked] = useState(false);
  const [isBtn2Clicked, setIsBtn2Clicked] = useState(false);
  const [isBtn3Clicked, setIsBtn3Clicked] = useState(false);

  const handleBtnClick = (number) => {
    const blockNumber = Number(number);
    if (blockNumber === 1) setIsBtn1Clicked(!isBtn1Clicked);
    if (blockNumber === 2) setIsBtn2Clicked(!isBtn2Clicked);
    if (blockNumber === 3) setIsBtn3Clicked(!isBtn3Clicked);
  };

  return (
    <>
      <div className="block-btns">
        <Button name="1" handleBtnClick={handleBtnClick} />
        <Button name="2" handleBtnClick={handleBtnClick} />
        <Button name="3" handleBtnClick={handleBtnClick} />
      </div>
      <div className="blocks">
        {isBtn1Clicked && <Block name="1" />}
        {isBtn2Clicked && <Block name="2" />}
        {isBtn3Clicked && <Block name="3" />}
      </div>
    </>
  );
}

export default Arrange;
