export class MyClass {
    hello() {
        let type;
        try {
            // если удалось прочитать __dirname, значит мы в CommonJS. Если нет, то в ESModule
            // в ESModule нет привычных nodejs разработчикам констант __dirname, __filename, ...
            // https://nodejs.org/api/esm.html - раздел "Differences between ES modules and CommonJS"
            const dir = __dirname;
            type = 'CommonJS';
        }
        catch (e) {
            type = 'ESModule';
        }
        console.log('Hello!', type);
    }
}
