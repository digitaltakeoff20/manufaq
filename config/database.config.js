const config = require('./config.json')

module.exports = {
    url: 'mongodb+srv://'+config.username+':'+config.password+'@'+config.mongoUrl+'?retryWrites=true&w=majority'
}