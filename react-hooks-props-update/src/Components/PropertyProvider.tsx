import React, {useEffect, useState} from 'react';

import PropertyRenderer, { IPayments } from './PropertyRenderer';

/**
 * Переменная payments1.status и таймер по ее изменению.
 * Действия происходят за рамками компонента. 
 */
const payments1: IPayments = {
    status: 'OK',
};
setInterval(() => {
    payments1.status = payments1.status === 'OK' ? 'FALSE' : 'OK';
}, 1000);

/**
 * Компонент, изменяющий payments2.status внутри себя.
 * Передает во вложенный компонент обе payments переменные.
 */
function PropertyProvider() {
    const [payments2, setPayments2] = useState<IPayments>({status: 'OK'});


    useEffect(() => {
        const startTimer = () => {
            setTimeout(() => {
                setPayments2({ status: payments2.status === 'OK' ? 'FALSE' : 'OK' });
            }, 1000);
        }

        startTimer();
    }, [payments2]);

    return (
        <PropertyRenderer {...{ payments1, payments2 }} />
    );
}

export default PropertyProvider;
  