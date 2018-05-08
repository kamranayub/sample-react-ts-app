interface State {
  details: {
    id: number;
    game: object | null;
  };
}
const state: State = {
  details: {
    game: null,
    id: 0,
  }
};
export default state;
