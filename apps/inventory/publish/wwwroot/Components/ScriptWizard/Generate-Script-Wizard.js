
var ScriptWizard = {};
const fs = require("fs");
const path = require("path");

/* ===== */
/* Retrieve the dynamic file name and the optional folder name from the command-line arguments */
const args = process.argv.slice(2);
switch (args.length) {

    case 0:
        console.error("Please Provide Project Module Name (Ex: UserAccount)");
        process.exit(1);
        break;

    case 1:
        console.error("Please Provide Project Page Name (Ex: UserAccount Add");
        process.exit(1);
        break;

    case 2:
        console.error("Please Provide Project Module Object Name (Ex: UserAccount Add Users");
        process.exit(1);
        break;

    case 3:
        /* If Pass all Test Case then Allow to Generation Script */
        Execution(args);
        break;

}
/* ===== */

/* Declaration */
ScriptWizard.RootFolder = "";  // Get the Module Page Object 
ScriptWizard.ModuleName = "";  // Get the Project Module Name
ScriptWizard.PageName = "";    // Get the Module Page Name 
ScriptWizard.PageObject = "";  // Get the Module Page Object 

/* ===== */
/* Script Execution for Dynamic File Generation */
function Execution(Params) {

    ScriptWizard.ModuleName = Params[0];  // Set the Project Module Name
    ScriptWizard.PageName = Params[1];    // Set the Module Page Name 
    ScriptWizard.PageObject = Params[2];  // Set the Module Page Object 
    ScriptWizard.RootFolder = path.resolve(__dirname, "../../Modules");

    /* ===== */
    /* Generate the Project Module Components Folder */
    const ModuleComponentsFolderPath = path.join(ScriptWizard.RootFolder, ScriptWizard.ModuleName, ScriptWizard.PageName, "Components");
    if (!fs.existsSync(ModuleComponentsFolderPath)) {
        fs.mkdirSync(ModuleComponentsFolderPath, { recursive: true }); // Create the nested folders if they don't exist
        console.log(`"${ScriptWizard.ModuleName}" folder has been created successfully.`);
        console.log(`"${ScriptWizard.ModuleName}/${ScriptWizard.PageName}" folder has been created successfully.`);
        console.log(`"${ScriptWizard.ModuleName}/${ScriptWizard.PageName}/Components" folder has been created successfully.`);
    } else {
        console.log(`"${ScriptWizard.ModuleName}/${ScriptWizard.PageName}" folder already exists.`);
    }
    /* ===== */

    /* ===== */
    /* Generate the Project Module Data Controllers Folder */
    const ModuleDataControllersFolderPath = path.join(ScriptWizard.RootFolder, ScriptWizard.ModuleName, ScriptWizard.PageName, "DataControllers");
    if (!fs.existsSync(ModuleDataControllersFolderPath)) {
        fs.mkdirSync(ModuleDataControllersFolderPath, { recursive: true }); // Create the nested folders if they don't exist
        console.log(`"${ScriptWizard.ModuleName}/${ScriptWizard.PageName}/DataControllers" folder has been created successfully.`);
    } else {
        console.log(`"${ScriptWizard.ModuleName}/${ScriptWizard.PageName}" folder already exists.`);
    }
    /* ===== */

    /* ===== */
    /* Generate the Project Initialize Script File */
    var InitializeFilePath = path.join(ModuleComponentsFolderPath, "Initialize.js");
    fs.writeFile(InitializeFilePath, GetScriptContent("Initialize"), (err) => {
        if (err) {
            console.error(`Error Creating Initialize File: ${err.message}`);
        } else {
            console.log(`"Initialize.js has been created successfully inside "${ScriptWizard.ModuleName}/${ScriptWizard.PageName}".`);
        }
    });
    /* ===== */

    /* ===== */
    /* Generate the Project Accessors Script File */
    var InitializeFilePath = path.join(ModuleComponentsFolderPath, "Accessors.js");
    fs.writeFile(InitializeFilePath, GetScriptContent("Accessors"), (err) => {
        if (err) {
            console.error(`Error Creating Accessors File: ${err.message}`);
        } else {
            console.log(`"Accessors.js has been created successfully inside "${ScriptWizard.ModuleName}/${ScriptWizard.PageName}".`);
        }
    });
    /* ===== */

    /* ===== */
    /* Generate the Project Actions Script File */
    var InitializeFilePath = path.join(ModuleComponentsFolderPath, "Actions.js");
    fs.writeFile(InitializeFilePath, GetScriptContent("Actions"), (err) => {
        if (err) {
            console.error(`Error Creating Actions File: ${err.message}`);
        } else {
            console.log(`"Actions.js has been created successfully inside "${ScriptWizard.ModuleName}/${ScriptWizard.PageName}".`);
        }
    });
    /* ===== */

    /* ===== */
    /* Generate the Project Validation Script File */
    var InitializeFilePath = path.join(ModuleComponentsFolderPath, "Validation.js");
    fs.writeFile(InitializeFilePath, GetScriptContent("Validation"), (err) => {
        if (err) {
            console.error(`Error Creating Validation File: ${err.message}`);
        } else {
            console.log(`"Validation.js has been created successfully inside "${ScriptWizard.ModuleName}/${ScriptWizard.PageName}".`);
        }
    });
    /* ===== */

    /* ===== */
    /* Generate the Project Pagination Script File */
    var InitializeFilePath = path.join(ModuleComponentsFolderPath, "Pagination.js");
    fs.writeFile(InitializeFilePath, GetScriptContent("Pagination"), (err) => {
        if (err) {
            console.error(`Error Creating Pagination File: ${err.message}`);
        } else {
            console.log(`"Pagination.js has been created successfully inside "${ScriptWizard.ModuleName}/${ScriptWizard.PageName}".`);
        }
    });
    /* ===== */

    /* ===== */
    /* Generate the Project Data Controllers Script File */
    var InitializeFilePath = path.join(ModuleDataControllersFolderPath, "DataControllers.js");
    fs.writeFile(InitializeFilePath, GetScriptContent("DataControllers"), (err) => {
        if (err) {
            console.error(`Error Creating DataControllers File: ${err.message}`);
        } else {
            console.log(`"DataControllers.js has been created successfully inside "${ScriptWizard.ModuleName}/${ScriptWizard.PageName}".`);
        }
    });
    /* ===== */

}
/* ===== */

/* ===== */
/* Script Content */
function GetScriptContent(FileName) {
    var t_ReturnContent = "";
    switch (FileName) {

        case "Initialize":
            /* ==== */
            /* Initialize Content */
            t_ReturnContent = `
    /* ==== */
    /* Initialize Components Objects */
    var ${ScriptWizard.PageObject} = {};
    ${ScriptWizard.PageObject}.Components = {};
    /* ==== */
    
    
    /* ==== */
    /* Initialize and set up all components to ensure they are fully configured */
    ${ScriptWizard.PageObject}.Components.Initialize = function () {
    
        /* Once initialization is complete, transition the components to a ready state */
        ${ScriptWizard.PageObject}.Components.Ready();
    
    }
    /* ==== */
    
    /* ==== */
    /* Prepare the components and bring them to a ready state for seamless integration and functionality */
    ${ScriptWizard.PageObject}.Components.Ready = function () {
    
        /* Once the components are ready, clear/reset the values to ensure proper initialization  */
        ${ScriptWizard.PageObject}.Components.Cleaner();

        /* Once the components are cleared, initialize the validation process */
        ${ScriptWizard.PageObject}.Components.Validation.Initialize();
    
        /* Add the necessary event listener to handle user interactions or specific actions efficiently */
        ${ScriptWizard.PageObject}.Components.AddEventListener();

        /* Get Data From Data Source */
        ${ScriptWizard.PageObject}.Components.Populate();
    
    }
    /* ==== */
    
    
    /* ==== */
    /* Clear or reset the components to their default state for reusability and proper functionality  */
    ${ScriptWizard.PageObject}.Components.Cleaner = function () {
        ${ScriptWizard.PageObject}.Components.Setter({
            ExampleName : ""
        });
    }
    /* ==== */
    
    
    /* ==== */
    /* Initialize and add the event listener to ensure the element responds to specific events. */
    ${ScriptWizard.PageObject}.Components.AddEventListener = function () {
    
        /* Best Practices For Remove Unused Event Listener */
        ${ScriptWizard.PageObject}.Components.RemoveEventListener();

        /* Trigger the save button click event to execute the associated functionality */
        $(".btnSave").on("click", function () {
            /* Call the Save Function */
            ${ScriptWizard.PageObject}.Components.Save();
        });

        /* Trigger the back button click event to navigate to the previous page or perform the designated action */
        $(".btnBack").on("click", function () {
            /* Call the Back Function */
            ${ScriptWizard.PageObject}.Components.Back();
        });
    
    }
    /* ==== */
    
    /* ==== */
    /* Remove the active event listener to stop the element from responding to specific events. */
    ${ScriptWizard.PageObject}.Components.RemoveEventListener = function () {
        /* Best Practices For Remove Unused Event Listener */
        $(".btnSave").off("click");
        $(".btnBack").off("click");
    }
    /* ==== */

    /* ==== */
    /* Button Processing Icon */
    ${ScriptWizard.PageObject}.Components.SetProcessingState = function (Status) {

        /* Declearaction */
        GeneralFunction.TransPreloader(".btnSave", Status, "Processing...", true);
    }
    /* ==== */




            `;
            /* ==== */
            break;

        case "Accessors":
            /* ==== */
            /* Accessors Content */
            t_ReturnContent = `/* ==== */
    /* Set the Element values dynamically based on the Data Source */
    ${ScriptWizard.PageObject}.Components.Setter = function (Param) {
    
       /* Ensure validation for empty and undefined cases to maintain data integrity */
       if (typeof Param !== "undefined" && Param != null) {

            /* Set the Component Values */
            typeof Param.ExampleName !== "undefined" ? $("#txtExampleName").val(Param.ExampleName) : $("#txtExampleName").val("");
        
        }
    
    }
    /* ==== */

    /* ==== */
    /* Extract the values from the DOM Elements */
    ${ScriptWizard.PageObject}.Components.Getter = function (Param) {
        /* Get the Component Values */
        var Response = {
            PrimaryId: $("#hdnPrimaryId").val(),
            ExampleName : $("#txtExampleName").val()
        }
        return Response;
    }
    /* ==== */`;
            /* ==== */
            break;

            case "Pagination":
                /* ==== */
                /* Initialize Pagination Components Objects */
                t_ReturnContent = `/* ==== */
        /* Initialize Pagination Components Objects */
        ${ScriptWizard.PageObject}.Components.Pagination = {}
        ${ScriptWizard.PageObject}.Components.Pagination.Table = {
            HeaderId: "#tbh${ScriptWizard.PageObject}",
            BodyId: "#tbd${ScriptWizard.PageObject}",
        };
        /* ==== */

        /* ==== */
        /* Table Header Configuration */
        ${ScriptWizard.PageObject}.Components.Pagination.TableHead = function () {

            /* Declearation */
            var t_tr = null, t_th = null;

            try {

                t_tr = $(document.createElement("tr"));

                /* ==== */
                /* Configure a Unique Column To prevent Duplicate Records */
                t_th = $(document.createElement("th"));
                t_th.text("UniqueId");
                t_th.addClass("hide");
                t_th.appendTo(t_tr);
                /* ==== */

                /* ==== */
                /* Configuration Desktop View Content */
                t_th = $(document.createElement("th"));
                t_th.text("Example");
                t_th.addClass("text-left");
                t_th.appendTo(t_tr);
                /* ==== */

                /* ==== */
                /* Configuration Mobile View Content */
                /* ==== */

                t_tr.appendTo(${ScriptWizard.PageObject}.Components.Pagination.Table.HeaderId);

            }
            catch (ex) {
                /* ==== */
                /* Exceoption Message Box Show */
                GeneralFunction.Message({
                    Status: "Failure",
                    Title: "Failure",
                    Message: ex.message,
                });
                /* ==== */
            }
        }
        /* ==== */

        /* ==== */
/* Table Body Configuration */
${ScriptWizard.PageObject}.Components.Pagination.TableBody = function (Result, AdditionalValues) {

    /* Declearation */
    var t_tr = null, t_td = null;
    var t_totalRecords = Result.length;
    var ObjMobileData = {};

    try {

        $(${ScriptWizard.PageObject}.Components.Pagination.Table.BodyId).html("");
        for (var i = 0; i < t_totalRecords; i++) {

            t_tr = $(document.createElement("tr"));

            /* ==== */
            /* Configure a Unique Column To prevent Duplicate Records */
            t_td = $(document.createElement("td"));
            t_td.text(Result[i].UniqueId);
            t_td.addClass("text-left hide");
            t_td.appendTo(t_tr);
            /* ==== */

            /* ==== */
            /* Configuration Desktop View Content */
            t_td = $(document.createElement("td"));
            t_td.text("Example");
            t_td.addClass("text-left");
            t_td.appendTo(t_tr);
            /* ==== */
           
            /* ==== */
            /* Configuration Mobile View Content */
            /* ==== */

            t_tr.appendTo(${ScriptWizard.PageObject}.Components.Pagination.Table.BodyId);
        }

        /* ==== */
        /* If Record Is Empty then Display the "Empty Message" */
        GeneralFunction.EmptyData(
            Element = ".${ScriptWizard.ModuleName}-Content",
            State = ($(${ScriptWizard.PageObject}.Components.Pagination.Table.BodyId + " tr").length == 0 ? true : false)
        );
        /* ==== */
    }
    catch (ex) {
        /* ==== */
        /* Exceoption Message Box Show */
        GeneralFunction.Message({
            Status: "Failure",
            Title: "Failure",
            Message: ex.message,
        });
        /* ==== */
    }

}
/* ==== */
        `;
                /* ==== */
                break;
    

        case "Actions":
            /* ==== */
            /* Actions Content */
            t_ReturnContent = `/* ==== */
    /*  Get the Data From Data Source */
    ${ScriptWizard.PageObject}.Components.Populate = function (RouteId) {
    
       /* Ensure validation for empty and undefined cases to maintain data integrity */
       if (typeof Params !== "undefined" && Params != null) {
            if (RouteId != "0") {
                DataControllers_${ScriptWizard.PageObject}.Pop({
                    PrimaryId: RouteId
                });
            }
        }
    
    }
    /* ==== */

    /* ==== */
    /* Send the Data to Data Source */
    ${ScriptWizard.PageObject}.Components.Save = function (Param) {
    
       /* Ensure validation for empty and undefined cases to maintain data integrity */
       if (typeof Params !== "undefined" && Params != null) {
            if (${ScriptWizard.PageObject}.Components.Validation.Status()) {
                DataControllers_${ScriptWizard.PageObject}.Puch(${ScriptWizard.PageObject}.Components.Getter());
            }
        }
    }
    /* ==== */
    
    /* ==== */
    /* Implement a page back function to navigate to the previous page or screen in the user's browsing history */
    ${ScriptWizard.PageObject}.Components.Back = function () {
       /* Goto Previows Screen */
       window.history.back();
    }
    /* ==== */`;
            /* ==== */
            break;

        case "Validation":
            /* ==== */
            /* Validation Content */
            t_ReturnContent = `/* ==== */
    /* Initialize Validation Components Objects */
    ${ScriptWizard.PageObject}.Components.Validation = {};

    /* Initialize Validation Components */
    ${ScriptWizard.PageObject}.Components.Validation.Initialize = function () {
    
        try {

            /* Form Validation */
            $('#frmHome').validate({
                errorElement: 'div',
                errorClass: 'help-block',
                focusInvalid: false,
                ignore: "",
                rules: {
                    ExampleName: {
                        required: true
                    }
                },
                messages: {
                    ExampleName: {
                        required: "Example Name Is Required."
                    }
                },
                highlight: function (e) {
                    $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
                },
                success: function (e) {
                    $(e).closest('.form-group').removeClass('has-error'); //.addClass('has-info');
                    $(e).remove();
                }
            });
        }
        catch (ex) {

            /* ==== */
            /* Exceoption Message Box Show */
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Failure",
                Message: ex.message,
            });
            /* ==== */

        }
    
    }
    /* ==== */

    /* ==== */
    /* Check and display the validation status of components to ensure they meet the required criteria */
    ${ScriptWizard.PageObject}.Components.Validation.Status = function (Params) {

        /* Declearation */
        var t_Boolean = true;

        try {

             /* Automatic Validation */
            if (!$('#frmHome').valid()) {
                t_Boolean = false;
            }

            /* Manually Validation */
            //if (Param.ExampleName == "") {
            //    GeneralFunction.Message({
            //        Status: "Failure",
            //        Title: "Failure",
            //        Message: "Example Name Is Required",
            //    });
            //}
        }
        catch (ex) {

            /* ==== */
            /* Exceoption Message Box Show */
            t_Boolean = false;
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Failure",
                Message: ex.message,
            });
            /* ==== */

        }
        return t_Boolean;
    }
    /* ==== */`;
            /* ==== */
            break;

        case "DataControllers":
            /* ==== */
            /* DataControllers Content */
            t_ReturnContent = `
        /* Data Source Access Class */
        class DataControllers_${ScriptWizard.PageObject} {

            /* Receiver the Data from Data Source */
            static Pop(Params) {

                /* Start the Preloader */
                ${ScriptWizard.PageObject}.Components.DataProcessing(true);

                $.ajax({
                    type: "POST",
                    url: "/${ScriptWizard.ModuleName}/Get${ScriptWizard.PageObject}",
                    data: Params,
                    dataType: "text",
                    async: true,
                    success: function (Response) {

                        /* Stop the Preloader */
                        ${ScriptWizard.PageObject}.Components.DataProcessing(false);

                        if (Response != null) {
                            Response = JSON.parse(Response);
                            if (Response.status == "Success") {
                                ${ScriptWizard.PageObject}.Components.Setter(JSON.parse(Response.result));
                            }
                        }

                    },
                    error: function (req, status, error) {

                        /* Stop the Preloader */
                        ${ScriptWizard.PageObject}.Components.DataProcessing(false);

                        /* ==== */
                        /* Exceoption Message Box Show */
                        GeneralFunction.Message({
                            Status: "Failure",
                            Title: "Failure",
                            Message: error,
                        });
                        /* ==== */
                    }
                });
            }

           /* Send the Data to Data Source */
            static Puch(Params) {

                /* Transation Preloader Start */
                ${ScriptWizard.PageObject}.Components.SetProcessingState(true);

                $.ajax({
                    type: "POST",
                    url: "/${ScriptWizard.ModuleName}/Set${ScriptWizard.PageObject}",
                    data: Params,
                    dataType: "text",
                    success: function (Response) {

                        /* Transation Preloader Stop */
                        ${ScriptWizard.PageObject}.Components.SetProcessingState(false);

                        if (Response != null) {
                            Response = JSON.parse(Response);

                            /* ==== */
                            /* Message */
                            GeneralFunction.Message({
                                Status: Response.status,
                                Title: Response.status,
                                Message: Response.message
                            });
                            /* ==== */

                            /* ==== */
                            /* Response Routing */
                            if (Response.status == "Success") {

                                /* Goto Back */
                                 ${ScriptWizard.PageObject}.Components.Back();

                            }
                            /* ==== */
                        }
                    },
                    error: function (req, status, error) {

                        /* ==== */
                        /* Exceoption Message Box Show */
                        GeneralFunction.Message({
                            Status: "Failure",
                            Title: "Failure",
                            Message: error
                        });
                        /* ==== */

                        /* Transation Preloader Stop */
                        ${ScriptWizard.PageObject}.Components.SetProcessingState(false);
                    }
                });

            }

    }`;
            /* ==== */
            break;
    }
    return t_ReturnContent;
}
/* ===== */

