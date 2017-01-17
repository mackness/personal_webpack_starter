import React, { Component } from 'react';

const Counter = ({
  count,
  onClick
}) => (
  <div onClick={onClick}>{count}</div>
)

export default Counter
