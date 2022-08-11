let http = require('http');
http.createServer(
    (req, res)=>{
        res.write("<p>Welcome to node server<p>");
        res.write("<a href='https://souravexpress.herokuapp.com/'> Go to express server...</a>")
        res.end();
    }
).listen(process.env.PORT,()=>{console.log('node server active on port 8066')})
