import Slave from './Slave';
import {useEffect, useState} from 'react';

export default function Master() {
    const [myProp, setMyProp] = useState(0);

    useEffect(() => {
        setInterval(() => setMyProp(prevState => prevState + 1), 500);
    }, []);

    // console.log('rendering Master. myProp =', myProp);
    return (
        <Slave myProp={myProp}/>
    );
}
