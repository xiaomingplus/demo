var server = require('./octModule.js');
var message = require('./controllers/posts.js');
server({
  port:7777,
  route:{
    get:{
      "/list":message.getList
    },
    post:{
      "/postContent":message.postContent
    },
    delete:{
      "/message":message.deleteMessage
    }
  }
});
