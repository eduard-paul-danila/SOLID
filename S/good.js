const fs = require('fs');

class Logger {
    constructor() {
        this.entries = [];
    }

    addEntry(text) {

        this.entries.push(text);
        return this.entries.length;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }
}


class PersistenceManager {
    saveToFile(logger, filename) {
        fs.writeFileSync(filename, logger.toString());
    }

    load(filename) {
        //
    }

    loadFromUrl(url) {
        //
    }
}

let logger = new Logger();
logger.addEntry('Request received');
logger.addEntry('Request is in progress');
logger.addEntry('Request is done');
console.log(logger.toString());

let p = new PersistenceManager();
let filename = 'c:/temp/logs.txt';
p.saveToFile(logger, filename);

// separation of concerns
