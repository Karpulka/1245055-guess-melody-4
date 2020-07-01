import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./audio-player.jsx";

const src = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;

it(`Render AudioPlayer`, () => {
  const tree = renderer
    .create(
        <AudioPlayer
          src={src}
          onPlayButtonClick={() => {}}
          isPlaying={true}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
