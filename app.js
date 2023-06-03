var app = exports = module.exports = {}

app.init = function () {
    this.cache = {}
    this.engines = {}
    this.settings = {}


    this._router = undefined
}

var methods = require('methods')

var slice = Array.prototype.slice //do we really need to define this?

methods.forEach(function(method){
    app[method] = function (path){
        this.lazyrouter()

        var route = this._router.route(path)

        route[method].apply(route, slice.call(arguments, 1))
    }
})

app.listen = function listen() {
    var server = http.createServer(this)
    return server.listen.apply(server, arguements)
}
app.handle = function handle(req, res, callback) {
    var router = this._router

    router.handle(req,res)
}