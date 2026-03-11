/* ==== */
/* Knockout Components Objects */
var Knockout = {};
Knockout.Components = {};
/* ==== */

/* ==== */
/* Knockout Components Initialize */
Knockout.Components.Initialize = function (Params) {

    /* Declearation */


}
/* ==== */

/* ==== */
/* Knockout Components Generate Tournament */
Knockout.Components.GenerateTournament = function (Params) {

    /* Declearation */
    var lst_Teams = [];
    var t_TotalTeams = 0;
    var t_TotalByes = 0;

    var lst_RetTeams = [];
    var lst_RetResults = [];
    var lst_RootTeamsPush = [];
    var lst_RootResultPush = [];

    var ObjResponseTournament = {};


    try {

        if (typeof Params.Teams !== "undefined") {

            /* Get the Team Details */
            lst_Teams = Params.Teams;

            /* Get the Total Teams */
            t_TotalTeams = lst_Teams.length;

            /* Calculate the Byes */
            t_TotalByes = Knockout.Components.CalculateByes(t_TotalTeams);
            if (t_TotalByes > 0) {

                /* Sort the Teams By Ranking Based */
                lst_Teams.sort(function (a, b) {
                    return a.Rank - b.Rank;
                });

                /* Bind the Bye Match List */
                for (var i = 0; i < t_TotalByes; i++) {

                    /* Bind the Bye Stong Match List */
                    lst_RetTeams.push([lst_Teams[i].TeamName, null]);
                    lst_RetResults.push([null, null]);
                }

                /* Remove the Bye Match Teams From the List */
                lst_Teams.splice(0, t_TotalByes);
            }

            /* Bind the Knockout Match Pairs */
            for (var i = 0; i < (lst_Teams.length / 2); i++) {

                /* Bind the Bye Match List */
                lst_RetTeams.push([lst_Teams[i].TeamName, lst_Teams[(lst_Teams.length - 1) - i].TeamName]);
                lst_RetResults.push([0, 0]);
            }

            /* Bind Tournament Matches Data */
            lst_RootResultPush.push(lst_RetResults);
            ObjResponseTournament = {
                teams: lst_RetTeams,
                results: lst_RootResultPush
            }

        }

    }
    catch (ex) {
        if (typeof GeneralFunction !== "undefined") {

            /* ==== */
            /* Failure Message Box Show */
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Failure",
                Message: ex.message,
            });
            /* ==== */

        } else {

            /* ==== */
            /* Failure Message  */
            alert(ex.message);
            /* ==== */

        }

    }
    return ObjResponseTournament;
}
/* ==== */

/* ==== */
/* Knockout Components Calculate Matches */
Knockout.Components.GetTotalMatches = function (TotalTeams) {
    /* Formula : N - 1 */
    return TotalTeams - 1;
}
/* ==== */

/* ==== */
/* Knockout Components Calculate Upper Half */
Knockout.Components.GetUpperHalfTeams = function (TotalTeams) {
     /* Formula : N + 1 */
    return Math.round((TotalTeams + 1));
}
/* ==== */

/* ==== */
/* Knockout Components Calculate Lower Half */
Knockout.Components.GetLowerHalTeams = function (TotalTeams) {
     /* Formula : N - 1 */
    return Math.round((TotalTeams - 1));
}
/* ==== */

/* ==== */
/* Knockout Components Calculate Byes */
Knockout.Components.CalculateByes = function (TotalTeams) {

    /* Declearation */
    var t_TotalByesTeams = 0;
    var t_TeamsLimit = 2;
    var t_Power = 1;

    try {

        /* Calculate the Match Limit */
        while (t_TeamsLimit < TotalTeams) {
            t_Power += 1;
            t_TeamsLimit *= 2;  /* Power of two */
        }

        /* Formula : Power of two - TotalTeams */
        t_TotalByesTeams = t_TeamsLimit - TotalTeams;

    }
    catch (ex) {

        if (typeof GeneralFunction !== "undefined") {

            /* ==== */
            /* Failure Message Box Show */
            GeneralFunction.Message({
                Status: "Failure",
                Title: "Failure",
                Message: ex.message,
            });
            /* ==== */

        } else {

            /* ==== */
            /* Failure Message  */
            alert(ex.message);
            /* ==== */

        }
    }
    return t_TotalByesTeams;
}
/* ==== */