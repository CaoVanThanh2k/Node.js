function laSoNguyenDuong(n){
    return (Number.isInteger(n) && n > 0);
}
function KTSNT(n){
    kq=true;
    if (n < 2) return kq= false; 
    var i = 2;
    while(i <n){
        if( n % i == 0) {
           kq=false;
            break;
        }
        i++;
    }
    return kq;
}
var fs = require("fs");

function InDS(){
    fs.readdir("./",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach(function (file){
            fs.appendFile('Snt.txt', file + "\n",  function(err) {
                if (err) {
                    return console.error(err);
                }
            });
            console.log(file);
        });
    });
}

function InND(){
    fs.readdir("./",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            fs.readFile(file, function (err, data) {
                if (err) {
                return console.error(err);
                }
                fs.appendFile('ksnt.txt',"File " + file + " :\n" + data + "\n",  function(err) {
                    if (err) {
                        return console.error(err);
                    }
                });
            });
        });
    });
}
var n = 17;
var Ketqua=KTSNT(n);
var s=laSoNguyenDuong(n);
if(s==true){
    if(Ketqua==true){
    console.log(n+" là số nguyên tố!");
    InDS();
    }
    else{
    console.log(n+" không phải là số nguyên tố");
    InND();
    }
}
else console.log(n+" không phải là số nguyên dương");