import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player";

Enzyme.configure({
  adapter: new Adapter()
});

const src = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;
const isPlaying = true;

it(`Test Play / Pause track`, () => {
  const handlePlayButtonClick = jest.fn();

  const audioElement = mount(
      <AudioPlayer
        src={src}
        onPlayButtonClick={handlePlayButtonClick}
        isPlaying={isPlaying}
      />
  );

  const button = audioElement.find(`button.track__button`);
  button.props().onClick();

  expect(handlePlayButtonClick.mock.calls.length).toEqual(1);
});
