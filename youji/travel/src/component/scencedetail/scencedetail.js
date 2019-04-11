import React, { Component } from 'react'
import './scencedetail.css'
import Head from '../header/Head';
import axios from "axios"
import {message} from 'antd'
class Scencedetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 1,
            num:1,
            btn:false,
            detail: [{
                travelid: "",
                country: '',
                city: '',
                content: '',
                price: '',
                time: '',
                title: "",
                sat: '',
                src: ""
            }]
        }
    }
    componentDidMount() {
        document.documentElement.scrollTo(0, 0);
        let query = this.props.history.location.query
        let id = query ? query.id : "";
        if (id === "") return;
        let url = "http://localhost:3001";
        axios.post(url + "/scenic/query/detail", { id }).then(res => {
            if (res.data.code) {
                this.setState({
                    detail: res.data.data
                }, () => {
                    // console.log(this.state.detail);

                })
            } else {

            }

        })
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
    snappedUp(v){
        let did = v._id;
        let num = this.state.num;
        let uid = "18718180036";
        let money = num*v.price;
        let travelid = v.travelid;
        if(this.state.btn){
            return ;
        }
        this.setState({
         btn:true
     })
        axios.post('http://localhost:3001/ticket',{did,num,uid,money,travelid}).then(res=>{
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
            <div ref={node => this.contentNode = node}>
                <Head></Head>
                <div id="container" className="scence-detail">
                    <figure className="tour ">
                        <img src="/img/tour1.jpg" alt="曼谷-芭提雅6日游" />
                        <figcaption>
                            <article>
                                <header>
                                    <hgroup>
                                        <h2>{this.state.detail[0].title}</h2>
                                        <h3>{this.state.detail[0].content}</h3>
                                    </hgroup>
                                    <ol>
                                        <li>{this.state.detail[0].program}</li>
                                        {/* <li><mark>团期</mark>：4/01、5/03、5/08...</li> */}
                                    </ol>
                                    <div className="buy">
                                        <div className="price">￥<strong>{this.state.detail[0].price}</strong>
                                            <span className="piao_n"> <span
                                                onClick={() => { this.changeNum('-') }}
                                                className="piao_ad piao_jia"
                                            >-</span><span>{this.state.num}</span><span
                                                onClick={() => { this.changeNum('+') }}
                                                className="piao_ad">+</span></span>
                                        </div>
                                        <div className="reserve"><a 
                                         className={this.state.btn?"gray":""}
                                        onClick={()=>{this.snappedUp(this.state.detail[0])}}>立即抢购</a></div>
                                    </div>
                                    {/* <div className="type">国内长线</div>
                                    <div className="disc"><span>4.7折</span></div> */}
                                    <footer>本团游由旅行社赞助提供，截止于<time>2019年{this.state.detail[0].time}</time></footer>
                                </header>
                            </article>
                        </figcaption>
                    </figure>

                </div>

                <div className="container">
                    <div className="introduce">
                        <h3>
                            产品介绍
                        </h3>
                    </div>
                    <div className="zhai">
                        <div className="chpin">
                            <div className="important">
                                产品概要
                            </div>
                            <div className="xing">
                                <div>
                                    <span className="qian">行程天数:</span> 5天4晚
                                </div>
                                <div>
                                    <span className="qian">成团地点：</span>西宁成团
                                </div>
                                <div>
                                    <span className="qian">目的地：</span>海北
                                </div>
                                <div>
                                    <span className="qian">往返交通：</span>飞机/飞机
                                </div>
                            </div>
                        </div>
                        <div className="tese">
                            <div className="important">
                                产品介绍
                            </div>
                            <div className="xin">产品介绍详情</div>

                        </div>
                        <div className="xiang_img">
                            <img src="/img/xian.jpg" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Scencedetail;