'use strict';

((global) => {
    const timeoutMS = 100;

    const _async = (fn, cb) => {
        setTimeout(() => {
            cb(fn());
        }, Math.random() * timeoutMS);
    };

    const _error = (value) =>
        Math.random() < 0.1 ? null : value;

    const AsyncArray = function (a = []) {
        if (!new.target) {
            return new AsyncArray(a);
        }

        this.read = (index, cb) =>
            _async(() => _error(a[index]), cb);

        this.size = (cb) =>
            _async(() => _error(a.length), cb);
    };

    Object.freeze(AsyncArray);
    global.AsyncArray = AsyncArray;
})(typeof window === 'undefined' ? global : window);

const input = AsyncArray([
    8,
    AsyncArray([
        15,
        16,
    ]),
    AsyncArray([
        AsyncArray([
            AsyncArray([
                42,
                AsyncArray([
                    AsyncArray([]),
                    23,
                ]),
            ]),
        ]),
        4,
    ]),
]);

// проверка решения
solution(input).then(result => {
    const answer = [8, 15, 16, 42, 23, 4];
    const isEqual = String(answer) === String(result);

    if (isEqual) {
        console.log('OK');
    } else {
        console.log('WRONG');
    }
});

async function solution(input) {
    console.time('solution');
    const walk = async (asyncArray, acc = []) => {
        const size = await getEnsuredSize(asyncArray);
        if (size === 0) {
            return acc;
        }
        
        const promises = [];
        for (let i = 0; i < size; i++) {
            const elem = await getEnsuredElem(asyncArray, i);
            if (elem instanceof AsyncArray) {
                promises.push(...(await walk(elem, acc)));
            } else { 
                promises.push(elem);
            }
        }
        
        return Promise.all(promises);
    }

    const result = await walk(input);
    console.timeEnd('solution');
    return result;
}

function getEnsuredSize(input) {
    return new Promise((resolve) => {
        input.size((size) => resolve(size === null ? getEnsuredSize(input) : size));
    });
}

function getEnsuredElem(input, index) {
    return new Promise((resolve) => {
        input.read(index, (elem) => resolve(elem === null ? getEnsuredElem(input, index) : elem));
    });
}
