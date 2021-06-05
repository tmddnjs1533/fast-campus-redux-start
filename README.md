# Redux Start

한번에 끝내는 프론트엔드 개발 초격차 패키지 Online

## Reducer

```javascript
function 리듀서(previousState, action) {
  return newState;
}
```
인자로 들어오는 <code>previousState</code> 와 리턴되는 <code>newState</code>는 다른 참조를 가지도록 해야합니다. 


## Create Store

```
createStore<S>(
  reducer: Reducer<S>,
  proloadedState: S,
  enhancer? : StoreEnhancer<S>
): Store<S>
```
```javascript
// 스토어 생성
const store = createStore(todoApp);
// 스토어에서 값 가져오기
store.getState();
// 스토어의 값에 영향주기
store.dispatch(addTodo("코딩"));
// 스토어 구독하기
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
  // return 값이 구독 제거 함수.
});
unsubscribe(); //구독 제거 함수.
```

## Combine Reducer