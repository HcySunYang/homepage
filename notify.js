const axios = require('axios')
console.log(process.argv)
if (!process.argv[2]) return

const respoName = process.argv[2]
const eventName = process.argv[3]
const key = process.argv[4]

axios.post(
  'https://qyapi.weixin.qq.com/cgi-bin/webhook/send',
  {
    msgtype: 'text',
    text: {
      content: `仓库地址：${respoName}, 动作：${eventName}`
    }
  },
  {
    params: {
      key
    },
    headers: { 'Content-Type': 'application/json' }
  }
)
