module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    require('child_process').spawn('node',['/home/site/wwwroot/HttpTrigger/main.js'])

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello zur " + eval("("+req.query.name+")")
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};
