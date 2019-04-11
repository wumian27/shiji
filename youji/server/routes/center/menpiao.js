const Ticket = require('../ticket/schema');
const Scenic = require('../jingdian/schema');
const Price = require('../price/schema')
var express = require('express');
var router = express.Router();

router.post('/scene', (req, res, next) => {
    let { telephone } = req.body;
    Ticket.find({ uid: telephone }, { travelid: 1, num: 1, money: 1,_id:1 }, (err, r) => {
        let arr = [];
        let data = r;
        for (let i = 0; i < data.length; i++) {
            if (!data[i]['travelid']) {
                continue;
            }
            arr.push(data[i]['travelid']);
        }
        Scenic.find(
            { travelid: { $in: arr } },
            { time: 1, travelid: 1, scence: 1 }, (err, re) => {
                // re = re.concat(data);
                let d = re;
                let barr = [];
                let obj = {};
                for (let n = 0; n < re.length; n++) {
                    // obj['_id'] = re[n]['_id'];
                    obj['travelid'] = re[n]['travelid'];
                    obj['time'] = re[n]['time'];
                    obj['scence'] = re[n]['scence'];
                    var o = Object.assign({}, obj)
                    barr.push(o);
                }

                let newArr = barr.map((item, index) => {
                    for (let j = 0; j < data.length; j++) {
                        if (item['travelid'] === data[j]['travelid']) {
                            return Object.assign(item, { num: data[j]['num'], money: data[j]['money'],_id:data[j]['_id'] })
                        }
                    }

                })
                res.json({
                    code: 1,
                    suc: newArr
                })
            })


    })
})

router.post('/airport', (req, res, next) => {
    let { telephone } = req.body;
    Ticket.find({ uid: telephone }, { aid: 1, num: 1, money: 1,_id:1 }, (err, r) => {
        let arr = [];
        let data = r;
        for (let i = 0; i < data.length; i++) {
            if (!data[i]['aid']) {
                continue;
            }
            arr.push(data[i]['aid']);
        }
        Price.find(
            { aid: { $in: arr } },
            { time: 1, aid: 1, destination: 1, start: 1, startTime: 1, endTime: 1, startAirport: 1, endAirport:1 },
            (err, re) => {
                let barr = [];
                let obj = {};
                for (let n = 0; n < re.length; n++) {
                    // obj['_id'] = re[n]['_id'];
                    obj['aid'] = re[n]['aid'];
                    obj['time'] = re[n]['time'];
                    obj['destination'] = re[n]['destination'];
                    obj['start'] = re[n]['start'];
                    obj['startTime'] = re[n]['startTime'];
                    obj['endTime'] = re[n]['endTime'];
                    obj['startAirport'] = re[n]['startAirport'];
                    obj['endAirport'] = re[n]['endAirport']
                    var o = Object.assign({}, obj)
                    barr.push(o);
                }

                let newArr = barr.map((item, index) => {
                    for (let j = 0; j < data.length; j++) {
                        if (item['aid'] === data[j]['aid']) {
                            return Object.assign(item, { num: data[j]['num'], money: data[j]['money'],_id:data[j] ['_id']})
                        }
                    }

                })
                res.json({
                    code: 1,
                    suc: newArr
                })
            })


    })
})
module.exports = router;

