var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
server.listen(port, ip_address, function () {
    console.log( "Listening on " + ip_address + ", port " + port )
});