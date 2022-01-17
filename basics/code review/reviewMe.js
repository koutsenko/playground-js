import React, {useCallback, useEffect, useState} from 'react';
import sendMetric from 'metrics'; // ok
import sendData from 'data'; // ok
import bigComputations from 'computations'; // ok, sync 10s
 
const PleaseReviewMe = (props) => { 
    const [data, setDate] = useState(null);
    const items = [{id: 1},{id: 2},{id: 3}]

    const handleComputation = () => {
        sendMetric('click');
    }
    
    useEffect(() => {
        setDate(bigComputations(props.argument));
        
        document.addEventListener('click', handleComputation);
        return () => {
            document.removeEventListener('click', handleComputation);
        }
    }, []);

    useEffect(() => {
        setDate(bigComputations(props.argument));
    }, [props.argument]);
    
    const handleClick = useCallback((id) => () => {
        sendData(data, id)
    }, [data]);
    
    return (
      <>
        {items.map(item=>(
          <div key={id} onClick={handleClick(item.id)}>{item.id}</div>
        ))}
      </>
    );
};
  
export default PleaseReviewMe;

/**
 * Ревью:
 * - импорт реакта
 * - нейм компонента
 * - перемещение bigComputation в эффект
 * - useCallback - добавить в депсы data
 * - addEventListener - эффект cDM, не забыть снять
 * - добавить key в JSX
 * - добавить эффект на props.argument
 * - починить экспорт
 */
