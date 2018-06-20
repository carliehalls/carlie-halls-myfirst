var say = require("./hello.js");
var spec = "Hello World!"

output = say.hello();
if (output === spec){
    console.log("hello.hello meets spec with :\n", output);
} else {
    console.log("hello.hello fails spec with \n", output, "\n expected output is: \n", spec);
    process.exit(1);
}
