var mqtt = require('mqtt')
const option = {
    username: 'admin',

    password: '123qwe!@#',
    port: 1883,
    host: '172.30.67.117'
}


const client = mqtt.connect('mqtt://172.30.67.117:1883', option)
client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
    else 
    {
        console.log("Err "+err)
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})