const EP = async () => {
    /**
     * Простая демка показывает что созданный промис уже запускается сам по себе.
     */
    const createdPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3 Promise resolved');
            resolve(true);
        }, 5000);
    });
    console.log('1 Promise created, it already started executing');

    console.log('2 Also added running promise to Promise.all monitor');
    Promise.all([createdPromise]).then(() => {
        console.log('4 All promises resolved');
    });

    /**
     * Пытаемся отресолвить их позже, в любой удобный момент. 
     */
    const deferreds = [];
    console.log('5 Created promise with deferred');
    const deferredPromise = new Promise((resolve, reject) => {
        deferreds.push({resolve, reject});
    });
    setTimeout(() => {
        console.log('6 Delayed resolve');
        deferreds[0].resolve(); 
    }, 5000);

    /**
     * В итоге мы получим последовательность 1,2,5,3,4,6. 
     * 
     * 1,2,5 по ходу выполнения инструкций функции EP
     * 3 потому что по таймеру отработает ресолв
     * 5 потому что сработает Promise.all
     * 6 потому что отработает следующий таймер
     */
}

EP();