const apiKey = 'your-api-key-here';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

/**
 * Объект, содержащий доступные модели GPT
 * @readonly
 * @enum {string}
 * @property {string} GPT4 - Выпущена в марте 2023, самая мощная модель
 * @property {string} GPT4_32K - Выпущена в марте 2023, расширенный контекст до 32k токенов
 * @property {string} GPT35_TURBO - Выпущена в ноябре 2022, оптимизирована для чата
 * @property {string} GPT35_TURBO_16K - Выпущена в июне 2023, расширенный контекст до 16k токенов
 * @property {string} GPT35 - Выпущена в ноябре 2022
 * @property {string} GPT3 - Выпущена в июне 2020, базовая версия
 */
const GPTModel = {
    GPT4: 'gpt-4',
    GPT4_32K: 'gpt-4-32k', 
    GPT35_TURBO: 'gpt-3.5-turbo',
    GPT35_TURBO_16K: 'gpt-3.5-turbo-16k',
    GPT35: 'gpt-3.5',
    GPT3: 'gpt-3'
};

/**
 * Объект, содержащий устаревшие модели GPT
 * @readonly
 * @enum {string}
 * @property {string} DAVINCI - Выпущена в июне 2022, самая мощная из устаревших моделей
 * @property {string} CURIE - Выпущена в октябре 2019, сбалансированная модель
 * @property {string} BABBAGE - Выпущена в октябре 2019, быстрая и экономичная модель
 * @property {string} ADA - Выпущена в октябре 2019, самая быстрая и экономичная модель
 */
const LegacyGPTModel = {
    DAVINCI: 'text-davinci-003',
    CURIE: 'text-curie-001', 
    BABBAGE: 'text-babbage-001',
    ADA: 'text-ada-001'
};

async function askChatGPT(message, model = GPTModel.GPT35_TURBO) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model,
                messages: [{
                    role: 'user',
                    content: message
                }],
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP ошибка! статус: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;

    } catch (error) {
        console.error('Ошибка при запросе к ChatGPT:', error);
        throw error;
    }
}

// Пример использования:
// const message = 'Привет, как дела?';
// const response = await askChatGPT(message, GPTModel.GPT4); // или GPTModel.GPT35_TURBO
// console.log(response);
