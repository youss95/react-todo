import { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};
//redux store에게 넘겨줄 props
//state: 현재 스토어가 지닌 값
//store에서 state값 받음
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
//action 생성 함수
//increase() : store에 있는 action 생성 함수
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });
//redux 상태 조회
// state를 컴포넌트 prop으로 , 액션 생성 함수를 prop으로
//export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

export default CounterContainer;
