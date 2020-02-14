var mqtt = require('mqtt')
const fs = require('fs')
const option = {
    username: 'admin',
    password: '123qwe!@#',
    ca: fs.readFileSync('./SSL/SSL_SAMPLE/cacert.pem'), key: fs.readFileSync('./SSL/SSL_SAMPLE/client-key.pem'), cert: fs.readFileSync('./SSL/SSL_SAMPLE/client-cert.pem'),
    protocol: 'mqtts',
    secureProtocol: 'TLSv1_2_method',
    port: 8899,
    host: '127.0.0.1',
    rejectUnauthorized: false,
    clientId: 'MQTT CLIENT',
    protocolVersion: 4
}


const client = mqtt.connect('mqtt://127.0.0.1', option)
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