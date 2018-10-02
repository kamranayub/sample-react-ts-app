interface GameState {
  details: {
    id: number;
    game: object | null;
  };
}
const state: GameState = {
  details: {
    game: null,
    id: 0,
  }
};
export default state;
