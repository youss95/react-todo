/*
 * counter store
 *CounterContainer 에서 dispatch
 * store 에서 state 상태 넘겨줌
 */

//action type
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//action 생성 함수
export const increase = () => ({ type: "counter/INCREASE" });
export const decrease = () => ({ type: "counter/DECREASE" });
//초기값
const initialState = {
  number: 0,
};
//reducer function
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
}

export default counter;
