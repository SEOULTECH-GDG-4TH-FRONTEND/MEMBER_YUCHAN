import React, { useState, useCallback, useEffect } from "react";

function CallbackExample() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    // useCallback을 사용하여 버튼 클릭 함수가 매번 재생성되지 않도록 함
    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    useEffect(() => {
        console.log("useEffect called");
    }, [increment]);

    return (
        <div>
            <h1>useCallback Example</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>

            {/* 아래 input은 useCallback에 영향을 주지 않음 */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something"
            />
        </div>
    );
}

export default CallbackExample;
