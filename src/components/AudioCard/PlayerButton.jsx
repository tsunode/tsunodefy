import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";

export const PlayerButton = ({ isPlaying, handlePause, handlePlay }) => {
  const callback = isPlaying ? handlePause : handlePlay;
  const Icon =  isPlaying ? AiFillPauseCircle : AiFillPlayCircle;

  return (
    <button type="button" onClick={callback}>
      <Icon size={42} />
    </button>
  )
}