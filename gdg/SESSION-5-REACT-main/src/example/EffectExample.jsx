import React, { useState, useEffect } from "react";

function EffectExample() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            {count <= 10 && (
                <Button onClick={() => setCount(count + 1)} title={"add"} />
            )}
            {count >= 0 && (
                <Button
                    onClick={() => setCount(count - 1)}
                    title={"substract"}
                />
            )}
        </div>
    );
}

const Button = ({ onClick, title }) => {
    useEffect(() => {
        // 컴포넌트가 마운트, 업데이트 될 때마다 실행
        console.log(`${title} Component mounted or updated!`);

        // componentWillUnmount와 비슷한 클린업 함수
        return () => {
            console.log(`${title} Component unmounted!`);
        };
    }, [title]);

    return <button onClick={onClick}>{title}</button>;
};

export default EffectExample;
