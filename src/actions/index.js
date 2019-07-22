export const selectSong = song => {
  //Return an action which is a plain JS Object
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
