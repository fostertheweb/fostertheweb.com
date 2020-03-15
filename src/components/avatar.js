import React from "react";
import styled from "styled-components";
import avatar from "./avatar.png";

const Img = styled.img``;

const Avatar = () => (
  <Img
    className="no-print"
    src={avatar}
    alt="illustration of Jonathan happily coding on his ThinkPad"
    width={64}
    height={64}
  />
);

export default Avatar;
