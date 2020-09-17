const url = "ws://localhost:8080";
const connection = new WebSocket(url);

connection.onopen = () => {
    connection.send("hej");
};

connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`);
};

var i = 0;

connection.onmessage = (e) => {
    console.log(e.data)

    let widthOfElement = parseFloat(e.data)

    document.getElementById("moveable").style.width = widthOfElement + "px"

    connection.send(i);
    i = i + 1;
};