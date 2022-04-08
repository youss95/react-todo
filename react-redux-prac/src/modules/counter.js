import { createAction, handleActions } from "redux-actions";
/*
 * counter store
 *CounterContainer 에서 dispatch
 * store 에서 state 상태 넘겨줌
 */

//action type
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//action 생성 함수
// export const increase = () => ({ type: "counter/INCREASE" });
// export const decrease = () => ({ type: "counter/DECREASE" });

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//초기값
const initialState = {
  number: 0,
};
//reducer function
/*
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}*/

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
