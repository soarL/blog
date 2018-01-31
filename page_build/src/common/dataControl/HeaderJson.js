let data =  {
  "logo":"/static/img/logo.png",
  "nav":[
    {
      "name":"首页",
      "url":"/"
    },
    {
      "name":"关于",
      "url":"/page/about.html",
    },
    {
      "name":"成长",
      "url":"/page/growUp.html"
    },
    {
      "name":"学习",
      "url":"/page/learning.html",
      "page":[
        {
          "name":"javascript",
          "url":"/page/learning.html?type=javascript"
        },
        {
          "name":"html",
          "url":"/page/learning.html?type=html"
        },
        {
          "name":"css",
          "url":"/page/learning.html?type=css"
        },
        {
          "name":"nodejs",
          "url":"/page/learning.html?type=nodejs"
        },
        {
          "name":"php",
          "url":"/page/learning.html?type=php"
        }
      ]
    },
    // {
    //   "name":"照片",
    //   "url":"/page/photo.html"
    // },
    {
      "name":"留言",
      "url":"/page/message.html"
    },
  ]
}

module.exports = data;
