import React from "react";
import styled from "styled-components";
import avatar from "./avatar.png";

const Img = styled.img``;

const Avatar = () => (
  <Img
    className="no-print"
    src={avatar}
    alt="illustration of Jonathan happily coding on his ThinkPad"
    width={256}
    height={256}
  />
);

export default Avatar;
