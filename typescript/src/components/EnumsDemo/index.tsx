import * as React from 'react';

import { CorrectEnum, FakeEnum, TranspiledEnum } from './enums';

const EnumsDemo = () => {
    const fake = FakeEnum.HOURS;
    const correct = CorrectEnum.HOURS;
    const transpiled = TranspiledEnum.HOURS;

    return (
        <div style={{ marginTop: '10px' }}>
            <h1>enums</h1>
            <div>{fake}</div>
            <div>{correct}</div>
            <div>{transpiled}</div>
        </div>
    );
};

export default EnumsDemo;
