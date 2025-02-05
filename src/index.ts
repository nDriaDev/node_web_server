import express, { Express, NextFunction, Request, Response } from "express";
import path from "node:path";
import { fileURLToPath, parse } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL('.', import.meta.url));

const app: Express = express();
const port = process.env.PORT || 4000;

// app.use(express.static(path.join(__dirname, '..', 'uikit_4.8')))
/* Define a route for the root path ("/")
 using the HTTP GET method */
app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'public_dynamic', '/index.html'));
});

app.get('/path', async (req, res) => {
    if (req.query.path) {
        const pathChoosen = (req.query.path as string).replace("\\\\", "\\");
        const pathIndex = path.join(...pathChoosen.split("\\"), '/index.html');
        app.use(express.static(path.join(...pathChoosen.split("\\"))));
        res.sendFile(pathIndex);                
    } else {
        res.sendFile(path.join(__dirname, '..', 'public', '/error.html'));
    }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    try {
        let error = {
            code: 500,
            message: err.message
        }
        res.status(error.code).send(error);
    } catch (e) {
        next(e);
    }
})
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}, filename=${__filename}, dirname=${__dirname}`);
});