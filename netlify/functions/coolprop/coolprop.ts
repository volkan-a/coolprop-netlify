import { Handler } from '@netlify/functions'
let cp = require("./coolProp")
export const handler: Handler = async (event, context) => {
  const { name = 'stranger' } = event.queryStringParameters
  let val = cp.PropsSI("T", "P", 101325.0, "Q", 0.5, "Water")

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${val}!`,
    }),
  }
}
