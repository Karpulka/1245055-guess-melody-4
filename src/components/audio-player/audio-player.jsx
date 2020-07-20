import React from "react";
import PropTypes from "prop-types";

const AudioPlayer = (props) => {
  const {onPlayButtonClick, isLoading, isPlaying, changeIsPlaying, children} = props;

  return <React.Fragment>
    <button
      className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
      type="button"
      disabled={isLoading}
      onClick={() => {
        changeIsPlaying();
        onPlayButtonClick();
      }}
    />
    <div className="track__status">
      {children}
    </div>
  </React.Fragment>;
};

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  changeIsPlaying: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default AudioPlayer;
