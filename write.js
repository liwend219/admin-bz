const fs = require('fs')
const path = require('path')

// 写入文件
function writeFile (str) {
    fs.open('output.js', 'w', function (err, fd) {
        const buf = str
        fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer){})
    })
}

//创建多层文件夹 同步
function mkdirsSync (dirpath, mode) { 
    if (!fs.existsSync(dirpath)) {
        var pathtmp
        dirpath.split(path.sep).forEach(function(dirname) {
            if (pathtmp) {
                pathtmp = path.join(pathtmp, dirname);
            }else{
                pathtmp = dirname;
            }
            if (!fs.existsSync(pathtmp)) {
                if (!fs.mkdirSync(pathtmp, mode)) {
                    return false
                }
            }
        });
    }
    return true
}

// 新建文件
function newFile (dir, name, type) {
    var filePath = path.join(__dirname, dir);
    var fileName = filePath + "/" +name+ "." + type;
    var dataBuffer = "new file"
    if(type = "vue"){
        dataBuffer = newVue(name)
    }
    mkdirsSync(filePath)
    fs.writeFile(fileName, dataBuffer, function(err) {
        if(err){
          console.log(err)
        }else{    
          console.log(fileName)
        }
    });
}

// vue模板
function newVue (name) {
    return `<style scoped>
</style>
<template>
    <div>`
        +name+
    `</div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        },
        mounted () {
            
        },
        methods: {
            
        }
    }
</script>`
}

// 新建一个vue模板
function buildVue () {
    var names = ["moneyPayList", "moneyPreYield", "moneyAccount", "checkingEntry", "checkingOutput"];
    var dir = "balance"
    var myPath = "/src/views/"
    var pro = []
    var outStr = ""
    function newArr (name) {
        var p = myPath + dir
        var arr = []
        arr[0] = p
        arr[1] = name
        arr[2] = "vue"
        var str = `const `+name+` = (resolve) => require(['../views/`+dir+`/`+name+`.vue'], resolve);\n`
        outStr += str
        return arr
    }
    names.map(name => {
        pro.push(newArr(name))
    })
    pro.map(f => {
        newFile(f[0], f[1], f[2])
    })
    //将output.js中的内容复制粘贴到src/libs/routers.js即可在路由中引入批量新建的模块
    writeFile(outStr)
}
buildVue()