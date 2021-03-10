import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Player({ station }) {
  return (
    <>
      <AudioPlayer
        className="player"
        src={station.urlResolved}
        showJumpControls={false}
        layout="stacked"
        customProgressBarSection={[]}
        customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
        autoPlayAfterSrcChange={false}
      />
    </>
  );
}
