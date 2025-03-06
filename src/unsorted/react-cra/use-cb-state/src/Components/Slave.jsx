import {useCallback, useEffect, useState} from 'react';

// Пример показывает, что стейт в депсы можно не класть, хоть варнинг и есть...
export default function Slave({myProp}) {
    const [myState, setMyState] = useState(0);

    const [output1, setOutput1] = useState('');
    const [output2, setOutput2] = useState('');

    useEffect(() => {
        setInterval(() => setMyState(prevState => prevState + 1), 1000);
    }, []);

    const handleButton1Click = useCallback(() => setOutput1(`myProp: ${myProp}, myState: ${myState}`), [myProp, myState]);
    const handleButton2Click = useCallback(() => setOutput2(`myProp: ${myProp}, myState: ${myState}`), [myProp]);

    console.log('rendering Slave. myProp =', myProp);
    console.log('rendering Slave. myState =', myState);
    console.log('rendering Slave. output1 =', output1);
    console.log('rendering Slave. output2 =', output2);
    return (
        <div>
            <button onClick={handleButton1Click}>Update output1: {output1}</button>
            <br/>
            <button onClick={handleButton2Click}>Update output2: {output2}</button>
        </div>
    );
}
