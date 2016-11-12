var posts = {

};
var data = [];
var id = 1000;
posts.postContent = function(req,res){
  // console.log(req.body)
  if (req.body.content) {
      var item = {
          content: req.body.content,
          time: new Date(),
          id: id++
      }
      data.push(item);
      console.log(data);
      res.json({
          message: "留言成功",
          detail: item
      })
  } else {
      res.json( {
          message: "请输入留言内容！"
      }, 400)
  }
}
posts.deleteMessage =function(req,res){

  if (req.body.id) {
      var flag = false;
      for (var i = 0; i < data.length; i++) {
          if (data[i].id == req.body.id) {
              data.splice(i, 1);
              flag = true;
          }
      }

      if (!flag) {
          res.json({
              message: "未找到该id！"
          }, 404)
      } else {
          res.json({
              message: "删除成功"
          })
      }
  } else {
      res.json({
          message: "请传入id！"
      }, 404)
  }
}
posts.getList = function(req,res){
  res.json(data);
}
module.exports = posts;
