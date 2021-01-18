import React, { memo } from 'react';

const Hour = ({ hour }) => {
  return (
    <div>
      {hour.map((hora, index) => (
        <p type={hora} key={index}>{hora}</p>
      ))}
    </div>
  );
}

export default memo(Hour);