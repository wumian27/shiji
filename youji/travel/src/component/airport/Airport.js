import React, { Component } from 'react'
import Head from '../header/Head'
import axios from 'axios'
import './airport.css'
import { message } from 'antd';
import { log } from 'util';
class Airport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceList: [],
            leftList:[],
            btn:false,
            num:1,
            select: {
                start: "",
                destination: "",
                startTime: "",
                endTime: "",
                time: ""
            }

        }
    }
    //时间格式
    formatTime(time) {
        let date = new Date(time);
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`

    }

    //改为will -did
    componentDidMount() {
        document.documentElement.scrollTo(0, 0);
        let query = this.props.history.location.query;
        if (query) {
            let v = query.v;
            axios.post("http://localhost:3001/price/query/one",{
                aid:v.aid
            }).then(res=>{
                if (res.data.code) {
                    this.setState({
                        priceList: res.data.suc,
                        
                    })
                }
            })
            this.setState({
                select: { ...this.state.select, ...query.v }
            })

            axios.get('http://localhost:3001/price/query/show').then(res => {
                if (res.data.code) {
                    this.setState({
                        leftList:res.data.suc.slice(0,4)
                    })
                }

            })
        }
        else {
            axios.get('http://localhost:3001/price/query/show').then(res => {
                
                if (res.data.code) {
                    this.setState({
                        priceList: res.data.suc,
                        leftList:res.data.suc.slice(0,4)
                    })
                }

            })
        }
    }

    queryTicket(){
        let start = this.start.value;
        let destination = this.destination.value;
        let time = this.time.value;  
        if(!start.trim()||!destination.trim()||!time.trim()){
               message.warn('请输入完整信息')
        }else{
            axios.post('http://localhost:3001/price/query/ticket',{start,destination,time}).then(res=>{
                // console.log(res);
                if(res.data.code){
                    this.setState({
                        priceList: res.data.suc
                    })
                }
                
            })
        }
    }

    changeNum(arg){
        if(arg==="+"){
            this.setState({
                num:++this.state.num
            })
        }else{
            if(this.state.num===1){
                return ;
            }else{
                this.setState({
                    num:--this.state.num
                })
            }
        }
    }

    onClickQuery(v){
        this.setState({
            select: { ...this.state.select, ...v},
            priceList:[v],
            num:1
        })
    }

    booking(v){
       let did = v._id;
       let num = this.state.num;
       let uid = "18718180036";
       let money = num*v.price;
       let aid = v.aid;
       if(this.state.btn){
           return ;
       }
       this.setState({
        btn:true
    })
       axios.post('http://localhost:3001/ticket',{did,num,uid,money,aid}).then(res=>{
           if(res.data.code){
               message.success('订票成功');
               setTimeout(()=>{this.setState({
                btn:false
            })},2000)
               
           }
       })
        
    }
    render() {
        return (
            <div>
                <Head></Head>
                <div id="headline">
                    <div className="center">
                        <hgroup>
                            <h2>旅游资讯</h2>
                            <h3>介绍各种最新旅游信息、资讯要闻、景点攻略等</h3>
                        </hgroup>
                    </div>
                </div>

                <div className="bigarea">
                    <div className="list ticket">
                        <div >
                            <h2 className="yu">机票预定</h2>
                            <div className="type">
                                <p>航班类型 <mark className="markActive">单程</mark></p>
                            </div>
                            <div className="form left">
                                <p>
                                    <label htmlFor="from_city" >出发城市 </label>
                                    <input 
                                    ref={input => this.start = input}
                                    type="text"
                                     name="from_city" id="from_city"
                                      placeholder="城市名" defaultValue={this.state.select.start} />
                                </p>
                                <p>
                                    <label htmlFor="from_date">出发时间 </label>
                                    <input 
                                     ref={input=>this.time = input}
                                     type="date"
                                     name="from_date" 
                                     id="from_date" 
                                     value={this.formatTime(this.state.select.time)}
                                     onChange={()=>{this.setState({
                                         select:{...this.state.select,time:this.time.value}
                                     })}}
                                     />
                                </p>

                            </div>
                            <div className="form form_right">
                                <p>
                                    <label htmlFor="to_city">返回城市 </label>
                                    <input 
                                    ref={input=>this.destination = input}
                                    type="text" 
                                    name="to_city" 
                                    id="to_city" 
                                    placeholder="城市名" 
                                    defaultValue={this.state.select.destination} />
                                </p>
                                <p>
                                    <label htmlFor="to_date">票数 </label>
                                  <span className="piao_num"> <span 
                                  onClick={()=>{this.changeNum('-')}}
                                  className="piao_add piao_jian"
                                  >-</span><span>{this.state.num}</span><span
                                  onClick={()=>{this.changeNum('+')}}
                                   className="piao_add">+</span></span> 
                                    {/* <input type="date" name="to_date" id="to_date" placeholder="时间/日期" /> */}
                                </p>
                            </div>
                            <div className=" form_button">
                                <p>
                                    <button className="submit" onClick={()=>{this.queryTicket()}}>查询</button>
                                </p>
                            </div>
                        </div>

                        <div className="show">
                            <h2 className="yu">机票显示</h2>
                            <table >
                                <tbody className="th">
                                    <tr>
                                        <th>出发城市</th>
                                        <th>起飞时间</th>
                                        <th>到达时间</th>
                                        <th>到达城市</th>
                                        <th>价格</th>
                                    </tr>
                                </tbody>
                                {this.state.priceList.map(v => {
                                    return <tbody className="tbody" key={v._id}>
                                        <tr>
                                            <td>{v.start}</td>
                                            <td>{this.formatTime(v.time)+" "+v.startTime}
                                                <p>{v.startAirport}</p>
                                            </td>
                                            <td>{this.formatTime(v.time)+" "+v.endTime}
                                                <p>{v.endAirport}</p>
                                            </td>
                                                <td>{v.destination}</td>
                                            <td className="show_price">￥{v.price} 
                                            <button 
                                            disabled = {this.state.btn}
                                            className={this.state.btn?"tbody_btn gray":"tbody_btn"}
                                             onClick={()=>{this.booking(v)}}
                                            >订票</button> </td>
                                        </tr>
                                    </tbody>
                                })}

                            </table>
                        </div>

                    </div>

                    <div className="showprice">
                        <div className="yu">猜你喜欢的</div>
                        <div className="price_left">
                           {this.state.leftList.map(v =>{
                               return <div 
                               onClick={()=>this.onClickQuery(v)}
                               className="price_item"
                                key={v._id}>
                               <img src="/img/luxian/bjs.jpg" className="img"></img>
                               <div className="sh_sh">{v.start}-{v.destination}</div>
                               <div className="price_date">{this.formatTime(v.time)}</div>
                               <div className="price_price">
                                   <span className="btn">3.1折</span>
                                   <span><em>￥</em>{v.price}</span>
                               </div>
                           </div>

                           })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Airport;