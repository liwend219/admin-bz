const fs = require('fs')
const path = require('path')

const list = require('./cities.json')

function creatCity (arr) {
    var cities = []
    arr.map(data => {
        var obj = {
            "value": data.provinceCode,
            "label": data.provinceName,
            "children": []
        }
        data.cities.map(ood => {
            var o = {
                "value": ood.cityCode,
                "label": ood.cityName,
                "children": []
            }
            obj.children.push(o)
            ood.counties.map(cunt => {
            	var c = {
            		"value": cunt.countyCode,
                	"label": cunt.countyName,
            	}
            	o.children.push(c)
            })
        })
        cities.push(obj)
    })
    var str = JSON.stringify(cities)
    writeFile(str)
}
function creatCityMicre (arr) {
    var cities = []
    arr.map(data => {
        var obj = {
            "value": data.provinceCode,
            "label": data.provinceName,
            "children": []
        }
        data.cities.map(ood => {
            var o = {
                "value": ood.cityCode,
                "label": ood.cityName
            }
            obj.children.push(o)
        })
        cities.push(obj)
    })
    var str = JSON.stringify(cities)
    writeFile(str)
}
creatCity(list)
// 写入文件
function writeFile (str) {
    fs.open('output.js', 'w', function (err, fd) {
        const buf = str
        fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer){})
    })
}