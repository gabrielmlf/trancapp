const mqtt = require('mqtt');
const mqttClient = mqtt.connect('mqtt://test.mosquitto.org');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ab2str = require('arraybuffer-to-string')

mqttClient.on('connect', () => {
    console.log('Conectado ao servidor MQTT');
    mqttClient.subscribe('FAINOR/esp8266-01/lock');
});

http.listen(3000, function () {
    console.log('Servidor HTTP escutando em *:3000');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('Um cliente socket.io se conectou');

});


mqttClient.on('message', (topico, mensagem) => {
    if (topico == 'FAINOR/esp8266-01/lock') {
        io.emit('LOCK', ab2str(mensagem));
        console.log(ab2str(mensagem));
    }
});

io.on('LOCK', (message) => {
    console.log(message);
    io.emit('receber', message);
})
