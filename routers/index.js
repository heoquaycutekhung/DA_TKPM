const homeRouter = require('./home.router')
const loginRouter = require('./login.router')
const classRouter = require('./class.router')
const courseRouter = require('./course.router')
// const searchRouter = require('./search.router')
const settingRouter = require('./setting.router')

function route(app){
    app.use('/', loginRouter)
    app.use('/home', homeRouter)
    app.use('/class', classRouter)
    app.use('/course', courseRouter)
    // app.use('/search', searchRouter)
    app.use('/setting', settingRouter)
}

module.exports = route