"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var cookie_parser_1 = require("cookie-parser");
var url = require("url");
var __filename = url.fileURLToPath(import.meta.url);
var __dirname = url.fileURLToPath(new URL('.', import.meta.url));
var app = (0, express_1.default)();
app.use(cors_1.default);
app.use((0, cookie_parser_1.default)());
// app.use(express.static(path.join(__dirname, publicDir)));
// const corsOpts = {
//     origin: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     exposedHeaders: ['Set-Cookie'],
//     credentials: true,
//     allowedHeaders: ['Content-Type', 'authorization', 'Set-Cookie', 'Cache-Control']
// }
// app.options('*', cors(corsOpts)) // include before other routes
// ######################### PROXY CONFIG ############################################
// app.use('', (req, res, next) => {
//     if (req.headers.authorization) {
//         next();
//     } else {
//         res.sendStatus(403);
//     }
// });
// app.use('/api', createProxyMiddleware({
//     target: `http://54.229.16.132:8080`, // set json-server to your host conf file
//     changeOrigin: true,
//     pathRewrite: { [`/api`]: '' }
// }));
// app.get('*', async (req, res) => {
//     console.log("query", req.query);
//     res.sendFile(path.join(__dirname, publicDir, '/index.html'));
// });
// app.post('/libro-firma-bff-api/usr/login', cors(corsOpts), (req, res) => {
//     res.cookie('auth', 'prova', {
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//         httpOnly: true,
//         path: '/',
//     })
//     res.status(200).send("gugeoygowgouywgywuowww.23485994038920890.192jidj8hf9748g9");
// });
// app.get('/usr/createJwt', cors(corsOpts), (req,res,next) => {
//     if (!req.cookies.auth) {
//         res.status(401).send('Unauthorized');
//     } else {
//         let url_parts = url.parse(req.url, true);
//         let query = url_parts.query;
//         // res.location("http://localhost:3008/dashboard");
//         res.location(query.callback + "?jwt=12345");
//         res.sendStatus(302);
//     }
// })
app.listen(4000, "0.0.0.0", function () { return console.log("Example app listening on port 4000!"); });
