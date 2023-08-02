import express, { Request, Response } from "express";
import path from "path";

const PORT = 3001;
const app = express();

app.use(
  "/static",
  express.static(path.resolve(__dirname, "..", "frontend", "public", "static"))
);

app.get("/*", (req: Request, res: Response) => {
  console.log(req.url);
  res.sendFile(
    path.resolve(__dirname, "..", "frontend", "public", "index.html")
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
