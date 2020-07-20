import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player";

Enzyme.configure({
  adapter: new Adapter()
});

const src = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;

it(`Test Pause track`, () => {
  const handlePlayButtonClick = jest.fn();
  window.HTMLMediaElement.prototype.play = () => {};

  const audioElement = mount(
      <AudioPlayer
        src={src}
        onPlayButtonClick={handlePlayButtonClick}
        isPlaying={true}
        isLoading={true}
        changeIsPlaying={() => {}}
      ><audio /></AudioPlayer>
  );

  const button = audioElement.find(`button.track__button`);
  button.props().onClick();

  expect(handlePlayButtonClick.mock.calls.length).toEqual(1);
  expect(button.hasClass(`track__button--pause`)).toBe(true);
});

it(`Test Play track`, () => {
  const handlePlayButtonClick = jest.fn();
  window.HTMLMediaElement.prototype.pause = () => {};

  const audioElement = mount(
      <AudioPlayer
        src={src}
        onPlayButtonClick={handlePlayButtonClick}
        isPlaying={false}
        isLoading={true}
        changeIsPlaying={() => {}}
      ><audio /></AudioPlayer>
  );

  const button = audioElement.find(`button.track__button`);
  button.props().onClick();

  expect(handlePlayButtonClick.mock.calls.length).toEqual(1);
  expect(button.hasClass(`track__button--play`)).toBe(true);
});
