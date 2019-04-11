import React, { Component } from 'react'
import Head from '../header/Head'
import axios from 'axios'
import './target.css'
import { log } from 'util';
class Target extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMany: [],
            longMany: [],
            long: 5,
            flag: true,
        }
    }
    componentDidMount() {
        document.documentElement.scrollTo(0, 0);
        let query = this.props.history.location;
        let name = query.query ? query.query.name : "";
         if(name instanceof Array){
            let flag = true;
            if (name.length < 5) {
                flag = false;
            }
                this.setState({
                    listMany: name.slice(0, 5),
                    longMany: name,
                    long: this.state.long + 5,
                    flag
                })
         }else {
            axios.post("http://localhost:3001/scenic/query/many", { name }).then(res => {
                // console.log(res.data);
                let flag = true;
                if (res.data.data.length < 5) {
                    flag = false;
                }
                if (res.data.code) {
                    this.setState({
                        listMany: res.data.data.slice(0, 5),
                        longMany: res.data.data,
                        long: this.state.long + 5,
                        flag
                    })
                }
            })
         }
       
    }
    loadMany() {
        let long = this.state.long;
        let flag = true;
        if (long >= this.state.longMany.length) {
            flag = false;
        }
        this.setState({
            listMany: this.state.longMany.slice(0, long),
            long: long + 5,
            flag
        })
    }
    changePrice() {
        let arr = this.state.listMany;
        arr.sort((a, b) => {
            return a.price - b.price
        });
        this.setState({
            listMany: arr
        })
    }
    transferDetail(id) {
        this.props.history.push({ pathname: "/scencedetail", query: { id } })

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

                <div id="container">
                    <div className="contaiter_left">
                        <ul>
                            <li>首页</li>
                            <li>出游资讯</li>
                            <li>出游攻略</li>
                            <li>机票预订</li>
                            <li>个人中心</li>
                        </ul>
                    </div>
                    <div className="list information">
                        <div className="infor">
                            <ul className="left">
                                {/* <li><a href="###">限时特价</a></li> */}
                                <li><a href="###">热门推荐</a></li>
                            </ul>
                            <ul className="right">
                                {/* <li><a href="###" className="selected">推荐</a></li> */}
                                <li><a href="###">折扣</a></li>
                                <li><span onClick={() => { this.changePrice() }}>价格</span></li>
                            </ul>
                        </div>
                        {this.state.listMany.map(v => {
                            return <figure
                                className="tour"
                                key={v._id}
                                onClick={() => this.transferDetail(v.travelid)}
                            >
                                <img src={"/img/shou/" + v.src} alt="曼谷-芭提雅6日游" />
                                <figcaption>
                                    <article>
                                        <header>
                                            <hgroup>
                                                <h2>{v.title}</h2>
                                                <h3>{v.content}</h3>
                                            </hgroup>
                                            <ol>
                                                {/* <li><mark>交通</mark>：春秋航空,杭州出发,无需转机</li> */}
                                                <li>{v.program}</li>
                                                <li><mark>团期</mark>：6/01、6/03、6/08...</li>
                                            </ol>
                                            <div className="buy">
                                                <div className="price">￥<strong>{v.price}</strong> <s>¥3980</s></div>
                                                <div className="reserve"><a>查看详情</a></div>
                                            </div>
                                            {/* <div className="type">国内长线</div>
                                    <div className="disc"><span>4.7折</span></div> */}
                                            <footer>本团游旅行社赞助提供，截止于<time>2019年{v.time}</time></footer>
                                        </header>
                                    </article>
                                </figcaption>
                            </figure>
                        })}




                        {/* 
                        <figure className="tour">
                            <img src="/img/tour1.jpg" alt="曼谷-芭提雅6日游" />
                            <figcaption>
                                <article>
                                    <header>
                                        <hgroup>
                                            <h2>曼谷-芭提雅6日游</h2>
                                            <h3>包团特惠，超丰富景点，升级1 晚国五，无自费，赠送600元成人券...</h3>
                                        </hgroup>
                                        <ol>
                                            <li><mark>交通</mark>：春秋航空,杭州出发,无需转机</li>
                                            <li><mark>团期</mark>：11/01、11/03、11/08...</li>
                                        </ol>
                                        <div className="buy">
                                            <div className="price">￥<strong>2864</strong> <s>¥3980</s></div>
                                            <div className="reserve"><a href="###">立即抢购</a></div>
                                        </div>
                                        <div className="type">国内长线</div>
                                        <div className="disc"><span>4.7折</span></div>
                                        <footer>本团游由瓢城旅行社赞助提供，截止于<time>2015-10-10</time></footer>
                                    </header>
                                </article>
                            </figcaption>
                        </figure>*/}

                        <div onClick={() => { this.loadMany() }} className={this.state.flag ? "more" : "none"}>加载更多...</div>
                        {
                            this.state.flag ? "" : <div className="more">加载结束...</div>
                        }
                    </div>


                </div>
            </div>
        )
    }
}

export default Target;