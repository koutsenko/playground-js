import React from 'react';

interface IPayments {
    status: String;
}

interface IProps {
    payments1: IPayments;
    payments2: IPayments;
} 

/**
 * Компонент для проверки изменения props. 
 */
function PropertyRenderer(props: IProps) {
    return (
        <div>
            <p>Компонент для проверки гипотез необходимости наличия useEffect на вложенные пропсы</p>
            <p>Выяснилось что в случае с useSelector, на эту необходимость может влиять shallowEqual</p>
            <div>props.payments1.status: {props.payments1.status}</div>
            <div>props.payments2.status: {props.payments2.status}</div>
        </div>
    );
}
  
export type { IPayments, IProps };
export default PropertyRenderer;
  