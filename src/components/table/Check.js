import React, { memo } from 'react';

import { FaTimes, FaMinus, } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";

const Check = ({ data, value }) => {

  console.log("Check data: ", data)

  function check(check) {
    if (check === 1) {
      return <FiCheckSquare color="#26A443" />;
    } else if (check === 2) {
      return <FaMinus color="#222" />;
    } else if (check === 3) {
      return <FaTimes color="#C14033" />;
    }
  }

  return (
    <div>{check(value)}</div>
  )
};

export default memo(Check);