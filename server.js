let http = require('http');
http.createServer(
    (req, res)=>{
        res.write("Welcome to node server <br><br> <a href='https://souravexpress.herokuapp.com/'>express server...</a>");
        res.end();
    }
).listen(process.env.PORT,()=>{console.log('node server active on port 8066')})
