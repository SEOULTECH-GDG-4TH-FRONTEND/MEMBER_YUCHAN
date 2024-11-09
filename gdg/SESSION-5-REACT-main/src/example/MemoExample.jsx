import { useMemo, useState } from "react";

const MemoExample = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    const handleClick1 = () => {
        setValue1((prev) => prev + 1);
    };

    const handleClick2 = () => {
        setValue2((prev) => prev + 1);
    };

    // const computedValue1 = value1 * value1;
    // console.log("computedValue", computedValue1);

    const computedValue2 = useMemo(() => {
        console.log(value1 * value1);
        return value1 * value1;
    }, [value1]);

    return (
        <div className="App">
            <p>{computedValue2}</p>
            <p>{value2}</p>
            <button type="button" onClick={handleClick1}>
                value1 +1
            </button>
            <button type="button" onClick={handleClick2}>
                value2 +1
            </button>
        </div>
    );
};

export default MemoExample;
