var config = {
  port:  process.env.NODE_ENV == 'production' ? 7777 : 3000,
  wechat: {
    appid: 'wxe69304ede4a1d74c',
    secret: '149c1133385f54cf1080d88b9bde3184',
  }
}

module.exports = config