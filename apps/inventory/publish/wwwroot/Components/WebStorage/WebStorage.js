/* ==== */
/* Indexed Database Configuration */
let IndexedDB = {
    idbObject: null,        /* Windows indexedDB object */
    idbtran: null,          /* windows transaction object */
    dbRequest: null,        /* DB creation request. */
    db: null,               /* DataBase */
    version: 1,             /* Database Version */
    tables: null,           /* Collection of Object Store */
    Init: function (options) {

        try {
            /* ==== */
            /* Initialization Of IndexDb */
            if ('indexedDB' in window) {

                IndexedDB.idbObject = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                IndexedDB.idbtran = window.IDBTransaction || window.webkitIDBTransaction;
                IndexedDB.tables = options.tables;

                /* Open/Create db with Specific version */
                let idbRequest = window.indexedDB.open(options.database, options.version);
                idbRequest.onerror = function () {

                    /* ==== */
                    /* DataBase Exception Message */
                    GeneralFunction.Message({
                        Status: "Failure",
                        Title: "Failure",
                        Message: "Error opening database."
                    });
                    /* ==== */

                };

                /* Store Success db Object In Order For Curd */
                idbRequest.onsuccess = function (e) {
                    IndexedDB.db = this.result;
                    IndexedDB.version = options.version;
                };

                /* Creation of object store first time on version change */
                idbRequest.onupgradeneeded = function (event) {

                    let resultDb = event.target.result;
                    IndexedDB.db = resultDb;
                    let optionTables = IndexedDB.tables;

                    /* ==== */
                    /* Drop Unwanted tables */
                    for (let i = 0; i < resultDb.objectStoreNames.length; i++) {
                        let needToDrop = true;
                        for (let j = 0; j < optionTables.length; j++) {
                            if (resultDb.objectStoreNames[i] == optionTables[j].name) {
                                needToDrop = false;
                                break;
                            }
                        }
                        if (needToDrop) {
                            IndexedDB.db.deleteObjectStore(resultDb.objectStoreNames[i]);
                        }
                    }
                    /* ==== */

                    /* ==== */
                    /* Create new tables */
                    for (let i = 0; i < optionTables.length; i++) {
                        if (!resultDb.objectStoreNames.contains(optionTables[i].name)) {
                            let objectStore = resultDb.createObjectStore(optionTables[i].name, { keyPath: optionTables[i].keyPath, autoIncrement: optionTables[i].autoIncrement });
                            console.log(optionTables[i].name + " Created.");
                            if (optionTables[i].index != null && optionTables[i].index != 'undefined') {
                                for (let idx = 0; idx < optionTables[i].index.length; idx++) {
                                    objectStore.createIndex(optionTables[i].index[idx].name, optionTables[i].index[idx].name, { unique: optionTables[i].index[idx].unique });
                                }
                            }
                        }
                    }
                    /* ==== */

                }
            }
            else {

                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: "This browser doesn't support IndexedDB"
                });
                /* ==== */

            }
            /* ==== */
        }
        catch (e) {

            /* ==== */
            /* Exceoption Message Box Show */
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Failure",
                Message: e.message,
            });
            /* ==== */

        }
    },
    Insert: function (table, data, callback = null) {

        /* Declearation */
        let db = IndexedDB.db;
        let isTableExists = false;

        try {

            /* ==== */
            /* Insert Data to IndexDB */
            for (let i = 0; i < IndexedDB.tables.length; i++) {
                if (IndexedDB.tables[i].name == table) {
                    isTableExists = true;
                    break;
                }
            }

            if (!isTableExists) {
                if (callback && typeof (callback) === "function") {
                    callback(false, table + " Table not found.");
                }
            }
            else {

                /* Declearation */
                let tx = db.transaction(table, "readwrite");
                let store = tx.objectStore(table);
                let dataLength = 1;

                if (data.constructor === Array) {
                    dataLength = data.length;
                    for (let i = 0; i < dataLength; i++) {
                        store.put(data[i]);
                    }
                }
                else {
                    store.put(data);
                }

                tx.oncomplete = function () {
                    if (callback && typeof (callback) === "function") {
                        callback(true, "" + dataLength + " records inserted.");
                    }
                };

            }
            /* ==== */
        }
        catch (e) {

            /* ==== */
            /* Exceoption Message Box Show */
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Failure",
                Message: e.message,
            });
            /* ==== */
        }
    },
    Delete: function (table, key, callback) {

        /* Declearation */
        let db = IndexedDB.db;
        let isTableExists = false;

        try {

            /* ==== */
            /* Delete Data From IndexDB */
            for (let i = 0; i < IndexedDB.tables.length; i++) {
                if (IndexedDB.tables[i].name == table) {
                    isTableExists = true;
                    break;
                }
            }

            if (!isTableExists) {
                if (callback && typeof (callback) === "function") {
                    callback(false, table + " Table not found.");
                }
            }
            else {

                let tx = db.transaction(table, "readwrite");
                let store = tx.objectStore(table);
                let keyLength = -1;

                if (key && typeof (key) === "function") {
                    store.clear();
                }
                else {
                    if (key.constructor === Array) {
                        keyLength = key.length
                        for (let i = 0; i < keyLength; i++) {
                            store.delete(key[i]);
                        }
                    }
                    else {
                        keyLength = 1;
                        store.delete(key);
                    }
                }
                tx.oncomplete = function (event) {
                    //if all argument available
                    if (callback && typeof (callback) === "function") {
                        callback(true, "" + keyLength == -1 ? "All" : keyLength + " records deleted.");
                    }

                    //if only two argument available
                    if (key && typeof (key) === "function") {
                        key(true, "" + (keyLength == -1 ? "All" : keyLength) + " records deleted.");
                    }
                };
                tx.onerror = function () {
                    if (callback && typeof (callback) === "function") {
                        callback(false, tx.error);
                    }
                };
            }
            /* ==== */

        }
        catch (e) {

            /* ==== */
            /* Exceoption Message Box Show */
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Failure",
                Message: e.message,
            });
            /* ==== */
        }
    },
    Select: function (table, key, callback) {

        /* Declearation */
        let db = IndexedDB.db;
        let isTableExists = false;


        try {

            /* ==== */
            /* Collect Data From IndexDB */
            for (let i = 0; i < IndexedDB.tables.length; i++) {
                if (IndexedDB.tables[i].name == table) {
                    isTableExists = true;
                    break;
                }
            }

            if (!isTableExists) {
                if (callback && typeof (callback) === "function") {
                    callback(false, table + " Table not found.");
                }
            }
            else {

                let tx = db.transaction(table, "readonly");
                let store = tx.objectStore(table);
                let request;
                let keyLength = -1;
                let data;
                if (key && typeof (key) === "function") {
                    request = store.getAll();
                }
                else if (key.constructor === Array) {
                    keyLength = key.length
                    request = store.getAll();
                }
                else if (key && typeof key === 'object' && key.constructor === Object) {
                    keyLength = 1
                    let index = store.index(key.key);
                    request = index.getAll(key.value);
                }
                else {
                    keyLength = 1;
                    request = store.get(key);
                }

                tx.oncomplete = function (event) {
                    //if all argument available
                    let result = request.result;
                    let keypath = request.source.keyPath;
                    let filteredResult = [];

                    //if need to filter key array
                    if (keyLength > 1) {
                        for (let i = 0; i < result.length; i++) {
                            for (let j = 0; j < keyLength; j++) {
                                if (result[i][keypath] == key[j]) {
                                    filteredResult.push(result[i]);
                                    break;
                                }
                            }
                        }
                        result = filteredResult;
                    }

                    if (callback && typeof (callback) === "function") {
                        callback(true, result);

                    }

                    //if only two argument available
                    if (key && typeof (key) === "function") {
                        key(true, request.result);
                    }
                }
                tx.onerror = function () {
                    if (callback && typeof (callback) === "function") {
                        callback(false, request.error);
                    }
                };
            }
            /* ==== */

        }
        catch (e) {

            /* ==== */
            /* Exceoption Message Box Show */
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Failure",
                Message: e.message,
            });
            /* ==== */
        }
    }
};
/* ==== */