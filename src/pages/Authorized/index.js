import React from 'react';
import { connect } from 'react-redux';
import CommonMethod from '../../util/CommonMethod';
import { Link } from 'react-router';
import * as Constant from "../../config/Constant";
import logoLeft from '../../resource/images/logoLeft.png';
import logoRight from '../../resource/images/logoRight.png';
import Authorized from '../../components/Authorized';
import * as Action from "../../components/Authorized/actions";
import {bindActionCreators} from "redux";

class Grant extends React.Component {
    componentDidMount  (){
        document.body.style.background='#e6e6e6';
        CommonMethod.isPc()?document.body.className='single':document.body.className='single singleW';
        const pId = this.props.params.id;
        this.props.params_id(pId);
    }
    componentWillUnmount(){
        document.body.style.background='';
    }
    render() {
        return (
            <div>
                <div className="example-input">
                    <div className="headSq clr">
                        <div className="logoBox">
                            <a className="logoLeft fl"><img alt="logo" src={logoLeft} /></a>
                            <div className="logoFg fl"></div>
                            <Link to="/User" className="logoRight fl"><img alt="logo" src={logoRight} /></Link>
                        </div>

                    </div>
                    <div className="contentSq">
                        <div className="bannerSq">
                            <h2>纳税信息查询授权</h2>
                            <p className="titleSh">授权金融机构及其委托的第三方征信机构访问您的税务电子信息, 内容包括如下</p>
                            <ul>
                                <li>获取您的纳税人基本信息</li>
                                <li>获取您的纳税信息和申报纳税信息</li>
                                <li>查询您的财务报表信息</li>
                                <li>查询您的税务违法违章信息</li>
                            </ul>
                        </div>
                        <Authorized />
                    </div>
                    <div className={'footer footerSQ'}>
                        <div className="copyRight">
                            <p className="address"><span className="addressIcon"></span>公司地址：{Constant.COMPANYADDRESS} <span className="footerTel"></span>客服电话：{Constant.CUSTOMERTELEPHONE}</p>
                            <p className="copy">版权所有 © {Constant.COPYRIGHTINFORMATION}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------
const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    params_id:Action.params_id
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Grant);
