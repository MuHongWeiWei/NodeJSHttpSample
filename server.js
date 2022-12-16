const http = require('http')
const fs = require('fs');
const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url;

    if (url === '/plain') {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('Hello 世界')
    } else if (url === '/html') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('<p>HELLO!!!<a>點我</a></p>')
    } else if (url === '/picture') {
        fs.readFile('./redcat.png', (err, data) => {
            if(err) {
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('文件讀取失敗');
            } else {
                res.setHeader('Content-Type','image/jpeg');
                res.end(data);
            }
        })
    }
})

server.listen(5000, () =>
    console.log('server start')
)