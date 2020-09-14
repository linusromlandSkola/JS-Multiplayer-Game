import WebSocket from "ws";

const wss = new WebSocket.Server({ port: 8080 });

const chunkSize: number = 1000;

console.log("Server started");

let totalRequests = 0;

wss.on("connection", (ws) => {
  var cooldate: number = Date.now();

  ws.on("message", (message) => {
    
    if (
      parseInt(message.toString()) % chunkSize == 0 &&
      parseInt(message.toString()) != 0
    ) {
      console.log(`Received message => ${message}`);
      var time = Date.now() - cooldate;
      cooldate = Date.now();

      totalRequests = totalRequests + chunkSize;

      var coolertime = time / chunkSize;

      console.log(
        `ms/request: ${coolertime}\nFPS: ${
          1000 / coolertime
        }\nTotal requests: ${totalRequests}\n`
      );
    }

    ws.send("Je suis une Typescript server!");
  });
});
