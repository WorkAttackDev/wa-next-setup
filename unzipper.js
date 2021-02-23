const { Extract } = require("unzipper");
const { createReadStream } = require("fs");

createReadStream("./next.zip").pipe(Extract({ path: "./" }));
