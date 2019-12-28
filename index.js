const bodyParser =  require("body-parser");
const express =  require("express");
const path = require('path');

function expressApp () {

    const app = express();
    app.use("/build", express.static(path.join(process.cwd(), "build")));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true, limit: "5m" }));
    app.use(express.static("build"));
    app.use("*", (req, res) => res.sendFile(path.join(__dirname,"/build/index.html")))


    return app;
}

expressApp().listen(3000, () => console.log('runn: http://localhost:3000/ '))
