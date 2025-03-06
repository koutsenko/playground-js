/**
 * Нужно написать утилитарную функцию для выполнения GET запросов с интерфейсом:
 *
 * function getUrl(url: string, {retries: number, timeout: number}): Promise<ResponseBody, Error>
 *
 * где retries это число попыток выполнить запроса прежде чем считать его зафейленым,
 * а timeout это время которое функция ждет прежде чем прервет один запрос. 
 *
 */

async function getUrl(url, {retries, timeout}) {
    const NOT_FOUND = 'Resource not found'; 

    const doRequest = () => new Promise(async (resolve, reject) => {
        let timer = setTimeout(() => reject(new Error('Timeout')), timeout);
        try {
            const response = await fetch(url);
            clearTimeout(timer);

            if (response.status === 200) {
                resolve(response.body);
            } else if (response.status >= 400 && response.status < 500) {
                reject(new Error(NOT_FOUND));
            } else {
                reject(new Error('Response code'));
            }
        } catch (error) {
            reject(new Error('Network'));
        }
    });

    return new Promise((resolve, reject) => {
        let lastError;
        for (let i = 0; i <= retries; i++) {
            try {
                resolve(await doRequest());
                return;
            } catch (error) {
                lastError = error;
                if (error.message === NOT_FOUND) {
                    reject(lastError);
                    return;            
                }
            }
        }

        reject(lastError);
    });
}

// getUrl('example.com/cats.json', {retries: 1, timeout: 1000})
// 500 10ms
// 200 800ms
// => Promise<resolved>
