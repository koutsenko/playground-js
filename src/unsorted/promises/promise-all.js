const EP = async () => {
    console.log('Hello Promises!');

    // Если убрать await на всех вызовах, то сначала все промисы поставятся в очередь, потом отресолвятся. 

    console.log('1 Executing empty Promise.all');
    await Promise.all([]).then(() => {
        console.log('2 Fullfilling empty promise array');
    });

    console.log('3 Executing Promise.all with wrong promises');
    await Promise.all([() => {}]).then(() => {
        console.log('4 Fullfilling wrong promise array');
    });

    console.log('5 Execuing Promise.all with correct promises');
    const correctPromise5Sec = new Promise((resolve) => setTimeout(resolve, 5000));
    await Promise.all([correctPromise5Sec]).then(() => {
        console.log('6 Fullfilling correct promise array');
    });

    console.log('7 Executing empty Promise.all with undefined then');
    await Promise.all([]).then(() => {
        console.log('8 Fullfilling empty promise array');
    }).then(undefined);
};


EP();