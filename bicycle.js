var fs = require('fs'),
    input = process.argv[2],
    match = input.match(/(.*\/)(\w+)\.src.js/),
    path = match[1],
    pageName = match[2];

var output = '// This file is autogenerated from ' + input + '\n' +
             fs.readFileSync(input, 'utf8').replace(/{{ (.*?) }}/g, function($0, $1) {
                 return fs.readFileSync(path + $1, 'utf8').replace(/\\n/g, '\\\n').replace(/\n/g, '\\n').replace(/'/g, "\\'")
             })

fs.writeFileSync(path + pageName + '.bemjson.js', output, 'utf8');
