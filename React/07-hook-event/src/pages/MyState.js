import React from 'react';

const MyState = () => {
    /**
     * state(상태)값 정의
     * - 이 페이지 안에서 유효한 전역변수 같은 개념.
     * - const [변수이름, 변수에 대한 setter함수] = React.useState(변수의 기본값);
     * - state값은 직접 변경할 수 없고 반드시 setter를 통해서만 변경 가능하다.
     * - useState() 함수에 전달하는 값은 state값에 대한 초기값이다.
     */
    const [myName, setMyName] = React.useState('');
    const [myPoint, setMyPoint] = React.useState(50);

    /** 이벤트 핸들러로 사용될 함수는 컴포넌트 함수 안에서 정의된다. */
    const onMyNameChange = e => {
        // e.currentTarget은 jQuery의 $(this)에 해당함.
        // 즉, 이벤트가 발생한 자신 (여기서는 input태그)
        setMyName(e.currentTarget.value);
    };

    // 상태값이 변경될때마다 컴포넌트 함수는 매번 재실행된다.
    // 그러므로 컴포넌트 영역은 상태값의 변경에 따라 반복적으로 다시 렌더링 된다
    // --> 결국 아래의 출력문은 상태값이 변경될 때마다 반복 출력된다.
    // 상태값은 화면에 출력될 변수에만 사용해야 한다.
    console.log(new Date());

    return (
        <div>
            <h2>MyState</h2>
            
            {/* state값을 출력할 때는 단순히 변수값으로서 사용한다. */}
            <h3>{myName}님의 점수는 {myPoint}점 입니다.</h3>

            <hr />

            <div>
                <label htmlFor='myNameInput'>이름: </label>
                <input id='myNameInput' target='text' value={myName} onChange={onMyNameChange}></input>
            </div>

            <div>
                <label htmlFor='myPointInput'>점수: </label>
                <input 
                    id='myPointInput'
                    type='range'
                    min='0'
                    max='100'
                    value={myPoint}
                    step='1'
                    // 이벤트 핸들러를 익명 화살표 함수 형식으로 정의한 경우
                    onChange = {e => {
                        // 자기 스스로의 입력값을 myName이라는 state값에 반영함}
                        setMyPoint(e.currentTarget.value);
                    }}
                />
            </div>
        </div>
    );
};

export default MyState;