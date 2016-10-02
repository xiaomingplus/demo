var http = require('http');
var url = require('url');
var data = [];
var res = {

};
var id = 1000;
res.json = function(response, obj, status) {
    response.writeHead(status ? status : 200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
    });
    response.write(JSON.stringify(obj));
    response.end();
}


var server = http.createServer(function(request, response) {
    //允许any
    if (request.method == 'POST') {
        var postUrl = url.parse(request.url, true);
        if (postUrl.pathname == '/postContent') {
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
                if (reqBody.content) {
                  var item = {
                      content: reqBody.content,
                      time: new Date(),
                      id: id++
                  }
                    data.push(item);
                    console.log(data);
                    // response.writeHead(200, {
                    //   "Content-Type": "application/json"
                    // });
                    // response.write(JSON.stringify({
                    //   ygb: "杨国宝垃圾",
                    //   message: "留言成功！"
                    // }));
                    // response.end();
                    res.json(response, {
                        message: "留言成功",
                        detail:item
                    })
                } else {
                    // response.writeHead(400, {
                    //     "Content-Type": "application/json"
                    // });
                    // response.write(JSON.stringify({
                    //     ygb: "杨国宝垃圾",
                    //     message: "请输入留言内容！"
                    // }));
                    // response.end();
                    res.json(response, {
                        message: "请输入留言内容！"
                    }, 400)
                }
            })
        } else {
            // response.writeHead(404, {
            //     "Content-Type": "application/json"
            // });
            // response.write(JSON.stringify({
            //     ygb: "杨国宝垃圾",
            //     message: "未找到该方法"
            // }));
            // response.end();
            res.json(response, {
                message: "请输入留言内容！"
            }, 404)
        }
    } else if (request.method == 'GET') {

        var getUrl = url.parse(request.url, true);
        if (getUrl.pathname == '/list') {
            res.json(response, data);
        } else if (getUrl.pathname == '/mBoard.html') {
            response.writeHead(200, {
                "Content-Type": "text/plain"
            });
            //todo 发送文件S
        } else {
            // response.writeHead(404, {
            //     "Content-Type": "application/json"
            // });
            // response.write(JSON.stringify({
            //     ygb: "杨国宝垃圾",
            //     message: "未找到该方法"
            // }));
            // response.end();
            res.json(response, {
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
        var deleteUrl = url.parse(request.url, true);
        if (deleteUrl.pathname == '/message') {
            var body = '';
            request.on('data', function(data) {
                body += data;
                if (data.length > 1e6) {
                    request.connection.destroy();
                }
            });
            request.on('end', function() {
                console.log(body);
                try {
                    var reqBody = JSON.parse(body);
                } catch (e) {
                    res.json(response, {
                        message: "json解析失败！"
                    }, 400);
                    return;

                }
                if (reqBody.id) {
                    var flag = false;
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].id == reqBody.id) {
                            data.splice(i, 1);
                            flag = true;
                        }
                    }

                    if (!flag) {
                        res.json(response, {
                            message: "未找到该id！"
                        }, 404)
                    } else {
                        res.json(response, {
                            message: "删除成功"
                        })
                    }
                } else {
                    res.json(response, {
                        message: "请传入id！"
                    }, 404)
                }
            });

        } else {
            res.json(response, {
                message: "请传入body！"
            }, 400)
        }
    }
})
server.listen(7777);
