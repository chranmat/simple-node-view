// Load the file system module
var fs = require('fs');

// Create the views object
var views = {};

// Load the view directory in to memory for fast access
exports.load = function(config) {    
    fs.readdir(config.dir, function(err, files) {
        if(err) throw err;
        
        files.forEach(function(file) {    
            
            fs.readFile(config.dir + file, 'utf8', function(err, content){
                if(err) throw err;

                file = file.replace(config.format, '');
                views[file] = content;
            });
            
        }, this);
    });
}

// Return view string with replaced keys
exports.get = function(view, keys) {

    content = views[view]

    for (var key in keys) {
        console.log(key + keys[key]);
        content = content.replace('&' + key + ';', keys[key]);
    }

    return content;
}