import React, { ReactElement, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const BtnChallengeHeartIcon = (): ReactElement => {
  const [heartToggle, setHeartToggle] = useState<boolean>(false);

  const onClickHeartIcon = (): void => {
    setHeartToggle(!heartToggle);
  };

  return heartToggle ? <FaHeart style={{ color: "red" }} onClick={onClickHeartIcon} /> : <FaRegHeart style={{ color: "rgb(109, 78, 194)" }} onClick={onClickHeartIcon} />;
};

export default BtnChallengeHeartIcon;
