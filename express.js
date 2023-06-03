var proto = require("./app")

function createApplication() {
    let app = function(req, res, next){
        app.handle(req,res,next)
    }

    mixin(app,proto,false)

    app.init()

    return app
}

proto.handle = function handle(req,res, out) {
    var self = this
    var stack = self.stack

    console.log(stack)
}