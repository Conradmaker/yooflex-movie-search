const SEARCH_TEXT = "state/SEARCH_TEXT";
const POSTER_OPEN = "state/POSTER_OPEN";

export const searchText = (text) => ({ type: SEARCH_TEXT, text });
export const PosterOpen = () => ({ type: POSTER_OPEN });

const initialState = {
  text: "",
  poster: false,
};

export default function movie(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TEXT:
      return { ...state, text: action.text };
    case POSTER_OPEN:
      return { ...state, poster: !state.poster };
    default:
      return state;
  }
}
