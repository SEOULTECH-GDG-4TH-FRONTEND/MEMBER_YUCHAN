import { useState } from "react";

const StateExample = () => {
    const [count, setCount] = useState(0);

    const DisplayCount = ({ count }) => {
        return <p>Count: {count}</p>;
    };

    const handleCount = (type) => {
        if (type === "add") {
            setCount(count + 1);
        } else if (type === "subtract") {
            setCount(count - 1);
        }
    };

    return (
        <div>
            {/* 버튼 클릭 시 count 상태 변경 */}
            <button onClick={() => handleCount("add")}>Add</button>
            <button onClick={() => handleCount("subtract")}>Subtract</button>
            {/* DisplayCount 컴포넌트에 count props 전달 */}
            <DisplayCount count={count} />
            {/* 조건부 렌더링 */}
            {count > 10 && <p>Count is greater than 10</p>}
        </div>
    );
};

// 상태 관리를 위해 useState 훅을 사용
// count 상태와 count를 변경하는 setCount 함수를 반환
// DisplayCount 컴포넌트는 count props를 받아와 count 상태를 출력
// 버튼 클릭 시 handleCount 함수를 호출하여 count 상태 변경

export default StateExample;
