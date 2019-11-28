const axios = require('axios')
console.log(process.argv)
if (!process.argv[2]) return

axios
  .post(
    'https://qyapi.weixin.qq.com/cgi-bin/webhook/send',
    {
      msgtype: 'text',
      text: {
        content: '测试2'
      }
    },
    {
      params: {
        key: process.argv[2]
      },
      headers: { 'Content-Type': 'application/json' }
    }
  )
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
