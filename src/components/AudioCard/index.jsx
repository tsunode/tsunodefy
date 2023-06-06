import { useEffect, useState } from "react";

import { Progress } from "./Progress";
import { PlayerButton } from "./PlayerButton";

import { Container } from "./styles";

export const AudioCard = ({ src, handlePlayMusic, image, title }) => {
  const [audio] = useState(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    audio.addEventListener("pause", () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.removeEventListener("pause", () => setIsPlaying(false));
    }
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    handlePlayMusic(audio);
  }

  const handlePause = () => {
    setIsPlaying(false);
    audio.pause();
  }

  return (
    <Container>
      <div>
        <span>{title}</span>
        <img src={image} alt={title} />
      </div>
      <Progress audio={audio}>
        <PlayerButton 
          isPlaying={isPlaying}
          handlePlay={handlePlay}
          handlePause={handlePause}
        />
      </Progress>
    </Container>
  )
}