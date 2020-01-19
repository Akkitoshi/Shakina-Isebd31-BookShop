const WebSocketServer = require('ws');
const ws = new WebSocketServer.Server({ port: 3000 });

const texts = ['Text Data'];
let counter = 0;


ws.on('connection', (ws) => {
    console.log('WebSocket connection!');

    ws.on('message', (event) => {
        const data = JSON.parse(event);
        const res = JSON.parse(data);

        switch (res.event) {
            case 'set-text':
                texts.unshift(res.data);
                console.log(texts);
                break;
            case 'remove-text':
                texts.splice(res.data, 1);
                break;
        }

        ws.send(JSON.stringify({
            event: 'update-texts',
            data: texts
        }));

        console.log(texts);
    });

    ws.send(JSON.stringify({
        event: 'texts',
        data: texts
    }));

    ws.send(JSON.stringify({
        event: 'update-texts',
        data: texts
    }));

    const timer = () => {
        ws.send(JSON.stringify({
            event: 'counter',
            data: ++counter
        }));
    };

    const interval = setInterval(timer, 1000);

    ws.on('close', () => {
        console.log('disconnected');
        clearInterval(interval);
    });

});
