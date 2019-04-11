import React, { Component } from "react"
import Head from "../header/Head"
import './gongluexiang.css'
class Gongluexiang extends Component {
    constructor(props) {
        super(props)
        this.state = {
            v: {
                content: []
            }
        }
    }
    componentDidMount() {
        document.documentElement.scrollTo(0,0)
        console.log(this.props.history.location);
        let query = this.props.history.location.query;
        if(query){
            this.setState({
                v:query.v
            })
        }

    }
    render() {
        return (
            <div>
                <Head></Head>
                <div className="glx-container">
                    <div className="glx-wrapper">
                        <div className="glx-right">
                            <ul>
                                <h3>目录</h3>
                                {this.state.v.content.map((v,index) => {
                                    return <li key={index}><a href={"#"+v.smalltitle} onClick={() => { return false }}>{v.smalltitle}</a></li>
                                })}
                            </ul>
                        </div>
                        <div className="glx-left">
                            <div className="glx-header">
                                <img src={this.state.v.bgsrc} alt="" className="glx-img" />
                                <h3 className="glx-h3">{this.state.v.header}</h3>
                                <p className="glx-name">
                                    {this.state.v.title}</p>
                            </div>

                            {this.state.v.content.map((v,index) => {
                              return  <div className="glx-content" key={index} id={v.smalltitle}>
                                    <div className="line"></div>

                                    <div className="title-coat">
                                        <span className="rank">NO.</span>
                                        <span className="num">{index+1}</span>
                                        <h2 className="point-name">{v.smalltitle}</h2>
                                    </div>
                                    <div className="glx-con-img" id="id">
                                        <img src={v.smallimg} alt="" className="glx-bei-img" />
                                        <span className="glx-text">
                                            {v.smallcontent}
                                        </span>
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

export default Gongluexiang;