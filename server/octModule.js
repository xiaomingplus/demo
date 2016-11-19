ovar http = require('http');
var url = require('url');

var responseJson = function(obj, status) {
    this.writeHead(status ? status : 200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
    });
    this.write(JSON.stringify(obj));
    this.end();
}

function start(option) {
    var port = 7777;
    var route = option.route;
    if (option && option.port) {
        port = option.port;
    }
    if (!route) {
        route = {};
    }

    var server = http.createServer(function(request, response) {
        response.json = responseJson;
        var _url = url.parse(request.url, true);
        var pathname = _url.pathname;

        //允许any
        if (request.method == 'POST') {
            var body = '';
            request.on('data', function(data) {
                body += data;
                if (data.length > 1e6) {
                    request.connection.destroy();
                }
            });

            request.on('end', function() {
                // console.log(body);
                var reqBody = JSON.parse(body);
                request.body = reqBody;
                console.log(route);
                if (typeof(route.post[pathname])==="function") {
                    route.post[pathname](request, response);
                } else {
                    response.json({
                        message: "not_found route"
                    }, 404)
                }
            })
        } else if (request.method == 'GET') {
            if (typeof(route.get[pathname])==="function") {
                route.get[pathname](request, response);
            } else {
                response.json({
                    message: "未找到该方法！"
                }, 404)
            }
        } else if (request.method === 'OPTIONS') {
            // console.log(request);
            response.writeHead(204, {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "content-type,test",
                "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
            });
            response.end();
        } else if (request.method == 'DELETE') {
            var body = '';
            request.on('data', function(data) {
                body += data;
            });
            request.on('end', function() {
                console.log(body);
                try {
                    var reqBody = JSON.parse(body);
                } catch (e) {
                    response.json({
                        message: "json解析失败！"
                    }, 400);
                    return;

                }
                request.body = reqBody;
                if (typeof(route.delete[pathname])==="function") {
                    route.delete[pathname](request, response);
                } else {
                    response.json({
                        message: "not_found"
                    }, 404)
                }
            })
        }
    })
    server.listen(port, function() {
        console.log(port);
    })
}
module.exports = start;
