// 액션타입 정의
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 액션 생성함수 정의
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// state 초기값
const initialState = {
  count: 0,
}

// 리듀서 함수 정의
export default function counter(state=initialState, action) {
  switch(action.type){
    case INCREMENT:
      return {
        ...state,
        count: state.count+1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count-1,
      };

    default:
      return state;
  }
}