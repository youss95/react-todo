import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};
//redux store에게 넘겨줄 props
//state: 현재 스토어가 지닌 값
//store에서 state값 받음
const mapStateToProps = (state) => ({
  number: state.counter.number,
});
//action 생성 함수
//increase() : store에 있는 action 생성 함수
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});
// state를 컴포넌트 prop으로 , 액션 생성 함수를 prop으로
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
