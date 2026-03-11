/* ==== */
/* Indexed Database Configuration */
var IndexedDB = {};
/* ==== */

/* ==== */
/* Init the DataBase */
IndexedDB.Init = function (Params) {

    /* Declearation */
    let ObjResponse = {};

    /* DataBase Name Is Required */
    if (typeof Params.DataBase !== "undefined") {
        t_DataBase = Params.DataBase;

        /* Browser Validation */
        window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
        window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

        if (!window.indexedDB) {

            /* ==== */
            /* Return UnSupported Message */
            ObjResponse.Status = "Failure";
            ObjResponse.Message = "Your are using an outdated browser";
            ObjResponse.Result = null;
            /* ==== */

        } else {

            /* ==== */
            /* Return Supported Message */
            ObjResponse.Status = "Success";
            ObjResponse.Message = "Indexed Database Connection Established";
            ObjResponse.Result = window.indexedDB.open(t_DataBase, 2);
            /* ==== */

        }
    }

    return ObjResponse;
}
/* ==== */

/* ==== */
/* Insert the Recards */
IndexedDB.Add = function (DataBase, TableName, Data) {

    /* Declearation */
    let t_Request = null;
    let t_Response = null;
    let t_DataBase = null;

    /* Check the DataBase */
    t_Request = IndexedDB.Init({ DataBase: DataBase });
    if (t_Request != null) {

        if (t_Request.Status == "Success") {

            /* Executing after Success */
            t_Request.Result.onsuccess = function (event) {
                let t_DataBase = event.target.result;

                /* Add New Records */
                let t_DBReq = t_DataBase.transaction([TableName], "readwrite")
                    .objectStore(TableName)
                    .put(Data);

                t_DBReq.onsuccess = function (event) {

                    /* ==== */
                    /* Return Supported Message */
                    ObjResponse.Status = "Success";
                    ObjResponse.Message = "1 row has been inserted";
                    ObjResponse.Result = null;
                    /* ==== */
                };

                t_DBReq.onerror = function (event) {

                    /* ==== */
                    /* Return UnSupported Message */
                    ObjResponse.Status = "Failure";
                    ObjResponse.Message = "Data is already found";
                    ObjResponse.Result = null;
                    /* ==== */
                }
            };


        }

    }

}
/* ==== */

/* ==== */
/* Insert the Bulk Data */
IndexedDB.BulkInsert = function (DataBase, TableName, Data) {
   let openRequest = IndexedDB.Init({ DataBase: DataBase });
   //openRequest.Result.onerror = function (event) {
   //    console.error(event);
   //};
   openRequest.Result.onsuccess = function (event) {
       let i = 0;
       let db = openRequest.Result.result;
       db.onerror = function (event) {
           // Generic error handler for all errors targeted at this database's requests
           console.error(event.target);
           window.alert("Database error: " + event.target.wePutrrorMessage || event.target.error.name || event.target.error || event.target.errorCode);
       };
       let transaction = db.transaction(TableName, "readwrite");
       let itemStore = transaction.objectStore(TableName);
       putNext();

       function putNext() {
           if (i < Data.length) {
               itemStore.put(Data[i]).onsuccess = putNext;
               ++i;
           } else {   // complete
               console.log('populate complete');
               //callback();
           }
       }
   };
}
/* ==== */

/* ==== */
/* Delete the Recards */
IndexedDB.Remove = function (DataBase, TableName, RowId) {

    /* Declearation */
    let t_Request = null;
    let t_Response = null;
    let t_DataBase = null;

    /* Check the DataBase */
    t_Request = IndexedDB.Init({ DataBase: DataBase });
    if (t_Request != null) {

        if (t_Request.Status == "Success") {

            /* Executing after Success */
            t_Request.Result.onsuccess = function (event) {
                t_DataBase = t_Request.Result.result;

                /* Add New Records */
                let t_DBReq = t_DataBase.transaction([TableName], "readwrite")
                    .objectStore(TableName)
                    .delete(RowId);

                t_DBReq.onsuccess = function (event) {

                    /* ==== */
                    /* Return Supported Message */
                    ObjResponse.Status = "Success";
                    ObjResponse.Message = "Record has been removed from Database";
                    ObjResponse.Result = null;
                    /* ==== */
                };

                t_DBReq.onerror = function (event) {

                    /* ==== */
                    /* Return UnSupported Message */
                    ObjResponse.Status = "Failure";
                    ObjResponse.Message = "Record is not found";
                    ObjResponse.Result = null;
                    /* ==== */
                }
            };
        }

    }
}
/* ==== */

/* ==== */
/* Read the All Recards */
IndexedDB.GetAllRecordsRequest = function (DataBase, TableName) {

    /* Declearation */
    let t_Request = null;
    let t_Response = null;
    let t_DataBase = null;

    /* Check the DataBase */
    t_Request = IndexedDB.Init({ DataBase: DataBase });
    if (t_Request != null) {

        if (t_Request.Status == "Success") {

            /* Executing after Success */
            t_Request.Result.onsuccess = function (event) {
                t_DataBase = t_Request.Result.result;


                /* Read all Records */
                if (TableName == "Contacts") {
                    let ObjectStore = t_DataBase.transaction(TableName).objectStore(TableName);
                    ObjectStore.openCursor().onsuccess = function (event) {

                        let ObjResponse = {};

                        /* ==== */
                        /* Return Results Message */
                        ObjResponse.Status = "Success";
                        ObjResponse.Message = "Recoards list";
                        ObjResponse.Result = event.target.result;
                        IndexedDB.GetAllRecordsResponse(ObjResponse);
                        /* ==== */

                    };
                }
                else if (TableName == "Class") {
                    let ObjectStore = t_DataBase.transaction(TableName).objectStore(TableName);
                    ObjectStore.openCursor().onsuccess = function (event) {

                        let ObjResponse = {};

                        /* ==== */
                        /* Return Results Message */
                        ObjResponse.Status = "Success";
                        ObjResponse.Message = "Recoards list";
                        ObjResponse.Result = event.target.result;
                        IndexedDB.GetAllClassResponse(ObjResponse);
                        /* ==== */

                    };
                }
                else if (TableName == "Section") {
                    let ObjectStore = t_DataBase.transaction(TableName).objectStore(TableName);
                    ObjectStore.openCursor().onsuccess = function (event) {

                        let ObjResponse = {};

                        /* ==== */
                        /* Return Results Message */
                        ObjResponse.Status = "Success";
                        ObjResponse.Message = "Recoards list";
                        ObjResponse.Result = event.target.result;
                        IndexedDB.GetAllSectionResponse(ObjResponse);
                        /* ==== */

                    };
                }

                else if (TableName == "Subject") {
                    let ObjectStore = t_DataBase.transaction(TableName).objectStore(TableName);
                    ObjectStore.openCursor().onsuccess = function (event) {

                        let ObjResponse = {};

                        /* ==== */
                        /* Return Results Message */
                        ObjResponse.Status = "Success";
                        ObjResponse.Message = "Recoards list";
                        ObjResponse.Result = event.target.result;
                        IndexedDB.GetAllSubjectResponse(ObjResponse);
                        /* ==== */

                    };
                }

                else if (TableName == "LastUpdated") {
                    let ObjectStore = t_DataBase.transaction(TableName).objectStore(TableName);
                    ObjectStore.openCursor().onsuccess = function (event) {

                        let ObjResponse = {};

                        /* ==== */
                        /* Return Results Message */
                        ObjResponse.Status = "Success";
                        ObjResponse.Message = "Records list";
                        ObjResponse.Result = event.target.result;
                        IndexedDB.GetAllLastUpdatedResponse(ObjResponse);
                        /* ==== */

                    };
                }
            };
        }
    }
}
/* ==== */

/* ==== */
/* Safe the Sensitive Data */
IndexedDB.ConvertToHashKey = function (Text) {
    let hashObj = new jsSHA("SHA-512", "TEXT", { numRounds: 1 });
    hashObj.update(Text);
    let hash = hashObj.getHash("HEX");
    return hash;
}
/* ==== */


