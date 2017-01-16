var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://'+configValues.uname+':'+configValues.pwd+'@ds161038.mlab.com:61038/nodetodo';
    }
    
}