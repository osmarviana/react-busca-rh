import React from "react";
import ReactPlayer from "react-player";
import videoURL from "../../assets/video/VideoRH.mp4";
import styled from "styled-components";

export default function VideoPlayer() {
  return (
    <StyledReactPlayer>
      <ReactPlayer
        url={videoURL}
        controls
        volume={0.5}
        width="100%"
        height="auto"
      />
    </StyledReactPlayer>
  );
}

const StyledReactPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 580px;
  height: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
