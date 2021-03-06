const production = process.env.NODE_ENV === 'production';
const dev        = process.env.NODE_ENV === 'dev';
const debug      = process.env.NODE_ENV === 'debug';


module.exports = {
  bot: {
    token: "TOKEN",
    mode: "beta|regular",
    clientid: "ID"
  },
  mongodb: {
    url: "URL"
  },
  redis: {
  },
  thirdparty: {
    sentry: {
      dsn: "URL"
    }
  },
  apisettings: {
    key: 'loremipsumyourapitokenherehaveagreatday',
    type: 'basic',
    baseUrl: production ? undefined : 'http://localhost/api/v1'
  },
  supportWebhook: {
    id: "123456789123456789",
    token: "abcdefghijklmnopqrstuvwxyz"
  },
  admins: [
    "137258778092503042"
  ]
}