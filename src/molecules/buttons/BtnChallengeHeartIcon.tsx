import React, { ReactElement, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const BtnChallengeHeartIcon = (): ReactElement => {
  const [heartToggle, setHeartToggle] = useState<boolean>(false);

  const onClickHeartIcon = (): void => {
    setHeartToggle(!heartToggle);
  };

  return heartToggle ? (
    <FaHeart size={20} color="red" onClick={onClickHeartIcon} style={{ cursor: "pointer" }} />
  ) : (
    <FaRegHeart size={20} color="rgb(81, 132, 236)" onClick={onClickHeartIcon} style={{ cursor: "pointer" }} />
  );
};

export default BtnChallengeHeartIcon;
