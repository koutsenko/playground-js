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
console.time('solution');
solution(input).then(result => {
    const answer = [8, 15, 16, 42, 23, 4];
    const isEqual = String(answer) === String(result);

    if (isEqual) {
        console.log('OK');
    } else {
        console.log('WRONG');
    }
    console.timeEnd('solution');
});

async function solution(input) {
    const walk = async (asyncArray) => {
        const elementPromises = [];
        for (let elem of await getEnsuredArray(asyncArray)) {
            elementPromises.push(elem instanceof AsyncArray ? walk(elem) : elem);
        }
        return (await Promise.all(elementPromises)).flat();
    }

    return walk(input);
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

function getEnsuredArray(asyncArray) {
    return getEnsuredSize(asyncArray).then(size => size === 0 ? [] : Promise.all([...Array(size).keys()].map(i => getEnsuredElem(asyncArray, i))))
}
