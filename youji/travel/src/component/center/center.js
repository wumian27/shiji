import React, { Component } from "react"
import Head from '../header/Head'
import axios from 'axios'
import './center.css'
class Center extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: {
                travel: false,
                airport: false,
                ziliao: false,
                pwd: false,
            },
            input: false,
            radioValue: '',
            info: {
                name: "",
                nc: "",
                birthday: "",
                address: "",
                sex: ""
            },
            sceneTicket:[],
            airportTicket:[]
        }
    }
    componentDidMount() {
        document.documentElement.scrollTo(0, 0);
        axios.post('http://localhost:3001/query',{
            telephone:"18718180036"
        }).then(res => {
            // console.log(res);
            if(res.data.code){
                this.setState({
                    info:res.data.su[0]
                })
                
            }
            
        })
    }

    formatTime(time) {
        let date = new Date(time);
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`

    }

    handleChange(e) {
        let sex = e.target.value
        this.setState({
            info: {...this.state.info,sex}
        })
    }
    submit() {
        let nc = this.nc.value,
            name = this.name.value,
            birthday = this.birthday.value,
            sex = this.state.info.sex,
            address = this.address.value;
        if (!name || !nc || !birthday || !address||!sex) {
            console.log('请完善信息');
        } else {
            axios.post('http://localhost:3001/update/person',
                {
                    telephone: '18718180036',
                    nc,
                    name,
                    birthday,
                    address,
                    sex
                }
            ).then(res => {
                if (res.data.code) {
                    this.setState({
                        input: false,
                        info: {
                            name,
                            nc,
                            birthday,
                            address,
                            sex
                        }
                    })
                    console.log('修改成功');

                } else {
                    console.log('修改失败');
                }
            })
        }

    }
    select(arg) {
        let flag = {
            travel: false,
            airport: false,
            ziliao: false,
            pwd: false,
        }
        flag[arg] = true;
        this.setState({
            show: flag
        });
        if(arg==="travel"){
            axios.post('http://localhost:3001/center/ticket/scene',{
                telephone:"18718180036"
            }).then(res => {
                // console.log(res);
                this.setState({
                 sceneTicket:res.data.suc
                })
            })
        }
       if(arg === 'airport'){
        axios.post('http://localhost:3001/center/ticket/airport',{
            telephone:"18718180036"
        }).then(res => {
            // console.log(res);
            this.setState({
             airportTicket:res.data.suc
            })
        })
       }
    }
    showInput(flag) {
        this.setState({
            input: flag    
        })
        this.nc.value="";
        this.name.value="";
        this.birthday.value="";
        this.state.info.sex="";
        this.address.value="";
    }
    submitUpdate(){
     let pwd = this.pwd.value,
     newPwd = this.newPwd.value,
     quePwd = this.quePwd.value;
     if(!pwd||!newPwd||!quePwd){
         console.log('请完善信息');
     }else if(quePwd!==newPwd){
       console.log('输入密码不一致');
     }else{
         axios.post('http://localhost:3001/update/pwd',{telephone:"18718180036",pwd,quePwd}).then(res=>{
            if(res.data.code){
                console.log('修改成功');
            }else{
                console.log('当前密码错误');
                
            }
         })
     }
    
    this.pwd.value="";
    this.newPwd.value="";
    this.quePwd.value=""
        
    }

    cancelAirport(index,id){
        let newArr = [...this.state.airportTicket];
        newArr.splice(index,1);
        this.setState({
            airportTicket:newArr
        });

        axios.post('http://localhost:3001/ticket/dele/airport',{
            uid:"18718180036",
            _id:id
        }).then(res =>{
            // console.log(res);
            
        })
    }
    cancelTicket(index,id){
        let newArr = [...this.state.sceneTicket];
        newArr.splice(index,1);
        this.setState({
            sceneTicket:newArr
        });

        axios.post('http://localhost:3001/ticket/dele/airport',{
            uid:"18718180036",
            _id:id
        }).then(res =>{
            // console.log(res);
            
        })
    }
    render() {
        return <div>
            <Head></Head>
            <div className="center-container">
                <div className="center-wrapper">
                    <ul className="ul">
                        <li onClick={() => { this.select('travel') }}>旅游订单</li>
                        <li onClick={() => { this.select('airport') }}>机票订单</li>
                        <li onClick={() => { this.select('ziliao') }}>个人资料</li>
                        <li onClick={() => { this.select('pwd') }}>密码设置</li>
                        <li>发表游记</li>
                    </ul>
                    <div className="center-right">
                        <div className={this.state.show.travel ? "" : "none"}>
                            <table >
                                <tbody className="th">
                                    <tr>
                                        <th>产品信息</th>
                                        <th>数量</th>
                                        <th>时间</th>
                                        <th>价格</th>
                                    </tr>
                                </tbody>
                                  {
                                      this.state.sceneTicket.map((v,index )=>{
                                          return  <tbody className="tbody" key={v._id}>
                                          <tr>
                                              <td>{v.scence}</td>
                                              <td>{v.num}
                                                 
                                              </td>
                                              <td>{v.time}</td>
                                              <td className="show_price">￥{v.money}
                                                <button 
                                                onClick={()=>{this.cancelTicket(index,v._id)}}
                                                className="buy_cancel"
                                                >取消</button>
                                              </td>
                                          </tr>
                                      </tbody>
      
                                      })
                                  }
                               
                            </table>
                        </div>

                        <div className={this.state.show.airport ? "" : "none"}>
                            <table >
                                <tbody className="th">
                                    <tr>
                                        <th>出发城市</th>
                                        <th>起飞时间</th>
                                        <th>到达时间</th>
                                        <th>到达城市</th>
                                        <td>数量</td>
                                        <th>价格</th>
                                    </tr>
                                </tbody>
                                {
                                    this.state.airportTicket.map((v,index) =>{
                                        return <tbody className="tbody" key={v._id} >
                                        <tr>
                                            <td>{v.start}</td>
                                            <td>{this.formatTime(v.time)+" "+v.startTime}
                                                    <p>{v.startAirport}</p>
                                            </td>
                                            <td>{this.formatTime(v.time)+" "+v.endTime}
                                                    <p>{v.endAirport}</p>
                                            </td>
                                            <td>{v.destination}</td>
                                            <td>{v.num}</td>
                                            <td className="show_price">￥{v.money} 
                                            <button
                                            onClick={()=>{this.cancelAirport(index,v._id)}} 
                                            className="buy_cancel">取消</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    })
                                }
                                


                            </table>
                        </div>
                        <div className={this.state.show.ziliao ? "" : "none"}>

                            <form className="center-form">
                                <p>
                                    <label htmlFor="">昵称:</label>
                                    <span className={this.state.input ? "none" : "weishe"}>{this.state.info.nc ? this.state.info.nc : '未设置'}</span>
                                    <input
                                        ref={input => this.nc = input}
                                      
                                        type="text"
                                        className={this.state.input ? "" : "none"} />
                                </p>
                                <p>
                                    <label htmlFor="" className={this.state.input ? "none" : "weishe"}>姓名:</label>
                                    <span className={this.state.input ? "none" : "weishe"}>{this.state.info.name ? this.state.info.name : '未设置'}</span>
                                    <input
                                        ref={input => this.name = input}
                                     
                                        type="text"
                                        className={this.state.input ? "" : "none"} />
                                </p>
                                <p>
                                    <label htmlFor="">手机号:</label>
                                    <span className="weishe">18718180036</span>

                                </p>
                                <p>
                                    <label htmlFor="">生日:</label>
                                    <span className={this.state.input ? "none" : "weishe"}>{this.state.info.birthday ? this.state.info.birthday : '未设置'}</span>
                                    <input
                                        ref={input => this.birthday = input}
                                        type="date"
                                        style={{ textIndent: 0 }}
                                        className={this.state.input ? "" : "none"} />
                                </p>
                                <p>
                                    <label htmlFor="" >性别:</label>
                                    <span className={this.state.input ? "none" : "weishe"}>{this.state.info.sex ? this.state.info.sex : '未设置'}</span>
                                    <span className={this.state.input ? "" : "none"}>
                                        <input
                                            type="radio"
                                            name="sex"
                                            value="男"
                                            checked={this.state.info.sex === '男'}
                                            onChange={(e) => { this.handleChange(e) }} />
                                        男
                        <input
                                            type="radio"
                                            name="sex"
                                            value="女"
                                            checked={this.state.info.sex === '女'}
                                            onChange={(e) => { this.handleChange(e) }} />
                                        女
                      </span>

                                </p>
                                <p>
                                    <label htmlFor="">详细地址:</label>
                                    <span className={this.state.input ? "none" : "weishe"}>{this.state.info.address ? this.state.info.address : '未设置'}</span>
                                    <input
                                        ref={input => this.address = input}
                                      
                                        type="text"
                                        className={this.state.input ? "" : "none"} />
                                </p>
                                <p className={this.state.input ? "none" : ""}>
                                    <span className="center-btn" onClick={() => { this.showInput(true) }}>编辑</span>
                                </p>
                                <p className={this.state.input ? "" : "none"}>
                                    <span className="center-btn bao" onClick={() => { this.submit() }}>保存</span>
                                    <span className="center-btn xiao" onClick={() => { this.showInput(false) }}>取消</span>
                                </p>
                            </form>
                        </div>


                        <div className={this.state.show.pwd ? "" : "none"}>
                            <form className="center-form">
                                <p>
                                    <label htmlFor="">当前密码:</label>
                                    <input type="password" ref={input => this.pwd=input} />
                                </p>
                                <p>
                                    <label htmlFor="">新密码:</label>
                                    <input type="password" ref = {input=>this.newPwd=input}/>
                                </p>
                                <p>
                                    <label htmlFor="">确认信密码:</label>
                                    <input type="password" ref={input =>this.quePwd=input}/>
                                </p>
                                <p >
                                    <span className="center-btn" onClick={()=>{this.submitUpdate()}} >修改</span>
                                </p>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    }
}
export default Center