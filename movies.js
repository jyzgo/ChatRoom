/**
 * Created by Administrator on 2017/6/12 0012.
 */
var ds = require('datastructures-js');
var userSet = ds.set();
var fs = require('fs');
var saveInterval = 1000;
const userFilePath = '../subUser.txt';
function printAvatar() {
    userSet.add("a");
    userSet.add("b");


    setTimeout(function () {
        setInterval(function () {
            var file = fs.createWriteStream(userFilePath);

            file.on('error', function(err) {
                console.log("read user file error " + err);
                return;
            });
            var it = userSet.iterator();
            while (it.hasNext()) {
                var str = it.next().toString();
                file.write(str + '\n');

            }
            file.end();

        },saveInterval);
    },saveInterval)

    console.log("avatar:pg13");
    console.log("other");
}



function printCharpie() {
    console.log("chapie R");

}

module.exports.avatar = printAvatar;