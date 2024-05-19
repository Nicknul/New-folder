const a = function() {
  console.log("hello");
}
a();

// * funciont도 줄일 수 없을까?
// * 화살표함수를 사용하여 줄일 수 있다.
// const b = () => {console.log('hello')}

// * 더 줄일 수 없을까?
const b = first => console.log(first);
b();

// * <=(조건 연산), =>(에로우펑션 작성법) 작성법이 아예 다르다.