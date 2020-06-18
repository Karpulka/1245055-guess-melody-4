const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      answer: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      answer: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      answer: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      answer: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      answer: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      src: `${AVATAR_URL}/${Math.random()}`,
      answer: `John Snow`,
    }, {
      src: `${AVATAR_URL}/${Math.random()}`,
      answer: `Jack Daniels`,
    }, {
      src: `${AVATAR_URL}/${Math.random()}`,
      answer: `Jim Beam`,
    }],
  }
];
