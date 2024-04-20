import server from "./server";
import "dotenv/config";

const port = Number(process.env.PORT);
const host = String(process.env.HOST);

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
