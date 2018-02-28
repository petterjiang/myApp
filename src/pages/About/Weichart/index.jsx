import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import {Checkbox, Button, Input } from 'antd';
import logoLeft from '../../../resource/images/logoLeft.png';
import logoRight from '../../../resource/images/logoRight.png';
import * as Constant from '../../../config/Constant';
class Weichart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            isFixed:true,
            isPopShow:false
        }
    }
    componentDidMount  (){
        document.body.style.background='#e6e6e6';
        document.body.className='single singleW';
    }
    componentWillUnmount(){
        document.body.style.background='';
    }
    //打开弹窗
    openPop(){
        this.setState({
            isPopShow:true
        });
    }
    //关闭弹窗
    closePop (){
        this.setState({
            isPopShow:false
        });
    }
    render() {
        return (
            <div className="example-input">
                <div className="headSq clr">
                    <div className="logoBox">
                        <a className="logoLeft fl"><img src={logoLeft} /></a>
                        <div className="logoFg fl"></div>
                        <Link to="/User" className="logoRight fl"><img src={logoRight} /></Link>
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
                    <div className="formSq">
                        <div className="inputList">
                            <span className="nameInput">账户名</span>
                            <Input name="userName" className="userMsg" placeholder="请输入国税网厅账户名" onChange={this.props.handleChange}/>
                        </div>
                        <div className="inputList">
                            <span className="nameInput">密码</span>
                            <Input type="password" className="userMsg" placeholder="请输入国税网厅密码" name="password" onChange={this.props.handleChange}/>
                        </div>
                        <div className={this.props.yzmIsShow?"inputList show":"inputList hide"}>
                            <span className="nameInput">验证码</span>
                            <Input className="userMsg yzm" placeholder="请输入验证码" name="yzm" onChange={this.props.handleChange}/>
                            {
                                this.props.yzmIsShow
                                    ?<img src={this.props.yzmUrl} className="imgYzm" onClick={this.props.changeYzm}/>:""
                            }
                        </div>
                        <div className="sendBtn">
                            <div className="checkXy">
                                <Checkbox className="checkB" onChange={this.props.agreeProtocol} checked={this.props.isCheck}></Checkbox>
                                我已阅读并同意 <a onClick={this.openPop.bind(this)}>《数据授权协议书》</a>
                            </div>
                            <Button type="primary" loading={this.props.isloading}  onClick={this.props.submitGrant}>确认授权</Button>
                        </div>
                    </div>
                </div>
                <div className={this.state.isFixed?'footer footerSQ':'footerSQ footer footerT'}>
                    <div className="copyRight">
                        <p className="address"><span className="addressIcon"></span>公司地址：{Constant.COMPANYADDRESS} <span className="footerTel"></span>客服电话：{Constant.CUSTOMERTELEPHONE}</p>
                        <p className="copy">版权所有 © {Constant.COPYRIGHTINFORMATION}</p>
                    </div>
                </div>
                <div className={this.state.isPopShow?'popUpSQ show':'popUp hide'}>
                    <div className="fade"></div>
                    <div className="popCon">
                        <div className="closePop" onClick={this.closePop.bind(this)}></div>
                        <h2>查看协议</h2>
                        <div className="xyCon">
                            <div className="nr">
                                <h3>授权书</h3>
                                <div className="con">
                                    <p>尊敬的用户：</p>
                                    <p>为维护您的合法权益，您在点击同意本授权协议书（以下简称“本授权书”）按钮前，请仔细阅读并理解本授权书全部内容，知悉您在本授权书中的权利和义务。</p>
                                    <p>一、	相关定义</p>
                                    <p>1、	本授权书是指深圳金财互联数据服务有限公司与用户之间就使用“天眼通大数据征信平台”服务及有关数据授权使用所签订的法律协议。</p>
                                    <p>2、	“用户”是指接受和使用“天眼通大数据征信平台”提供服务的企业法人、事业单位及其他经济组织或企业法人、事业单位及其他经济组织授权操作的自然人以及其他个人用户。如无特别规定，本授权书内的“您”即指本授权书的“用户”。</p>
                                    <p>3、	“本公司”是指深圳金财互联数据服务有限公司，“天眼通大数据征信平台”是由本公司所有并运营的，为银行、信贷机构等金融机构提供大数据征信辅助的互联网平台（以下简称“平台”）。</p>
                                    <p>4、	本授权书缔约方为用户与本公司。</p>
                                    <p>二、	用户承诺</p>
                                    <p>为保障您的合法权益，请您阅读、理解并在充分的阅读理解的基础上承诺以下事项：</p>
                                    <p>1、	在点击确认同意本授权书前，您确认您是依据中国法律登记注册成立并有效存续的、住所位于中国境内（包括港澳台地区）的中国企业法人、事业单位及其他经济组织，或具有独立承担法律责任及法律义务的完全民事行为能力，对自身提供的所有信息、做出的任何陈述、承诺、授权的合法性、真实性、完整性、准确性承担全部完全独立的责任。</p>
                                    <p>2、	您点击同意本授权书按钮后，即表示您已详细阅读本授权书的每一条款，特别是免除或者限制责任的条款，充分理解本授权书的全部内容，并表明您已经完全同意本公司已完全履行了相关的提示义务和说明义务，且接受并愿意遵守本授权书约定及“天眼通大数据征信平台”的全部约定或规定，并同意以最新的约定或规定文本作为处理数据信息的依据。</p>
                                    <p>3、	本公司及本公司所有的“天眼通征信数据平台”有权根据需要适时的修改本授权书相关内容，并在“天眼通征信数据平台”上公告。若您继续使用平台服务，即表示您充分阅读、理解并接受、愿意遵守新修订的协议。如您不同意本授权书及/ 或随时对其的修改，可以选择不使用“天眼通大数据征信平台”；一旦您登录并使用“天眼通大数据征信平台”，将视为您已经了解并完全同意本授权书各项内容。</p>
                                    <p>4、	您知悉并完全同意本公司有权随时修改、更新、暂停或终止“天眼通大数据征信平台”或因您违反法律法规或本授权书的规定而随时终止接纳您为平台用户。</p>
                                    <p>5、	您同意自行承担使用平台上传或下载相关数据、资料和信息等的法律责任。</p>
                                    <p>6、	您应自行保管登录平台的账户和密码，如账户、密码遗失或泄露的，应及时通过平台服务系统予以修改或重置，本公司不对您因泄露、遗失该账户和密码导致的后果承担法律责任。</p>
                                    <p>三、	用户授权事项</p>
                                    <p>1、本公司及所属“天眼通大数据征信平台”在遵守国家法律法规的前提下，有权收集您在使用平台服务中涉及的包含但不限于过去36个月的信用信息，包括但不限于以下信息：</p>
                                    <p>（1）	公司基本信息；</p>
                                    <p>（2）	工商信息；</p>
                                    <p>（3）	主要财务信息；</p>
                                    <p>（4）	发票信息；</p>
                                    <p>（5）	纳税信息、申报纳税信息、财务报表信息、税务违法违章信息等税务信息；</p>
                                    <p>（6）	社保公积金信息；</p>
                                    <p>（7）	司法警示信息等在使用平台服务中涉及的信用信息。</p>
                                    <p>2、本公司有权依照自行设立的模型、模式、计算方法、规则、流程等对您的信用信息进行保存、整理、分析、加工、打印等处理操作，并生成信用报告。</p>
                                    <p>3、本公司有权将您的信用信息以包括但不限于信用报告等形式提供给您在申请融资产品或服务的金融机构及该金融机构指定的其他机构，用于有关的信贷审批和贷后管理等用途，而金融机构及该金融机构指定的其他机构或其他第三方将独立对您的申请做出判断并决定是否审批通过，并不仅仅依赖于您授权本公司所提供的信用信息。</p>
                                    <p>4、在经过您授权的前提下，本公司有权将您的信用信息以包括但不限于信用报告等形式提供给特定的第三方。同时您充分理解并知悉：您的信用信息存在被采集、保存、整理、分析、加工以及被提供和使用的风险，这些风险包括但不限于您的信用信息对您的信用评级等可能产生的不利影响、您的信用信息被本公司依法提供给第三方可能产生的不利影响，本公司不对此承担相应的法律后果。</p>
                                    <p>四、	用户授权期限</p>
                                    <p>1、	本授权书项下授权事项的起始日期为您点击同意接受本授权书之日起至本授权书终止或本公司终止接纳您为用户或本公司终止平台使用之日。</p>
                                    <p>2、	如果您要终止本授权书，您应提前一个月提交书面通知及本公司要求提交的相关资料给本公司，经本公司审核同意后可终止本授权书。</p>
                                    <p>3、	自您提出终止本授权书通知之日起，对于因您终止本授权书而对申请、使用相关金融机构产品及服务产生的任何不利影响及损失，由您自行承担，本公司不承担任何责任。如果您与金融机构及该金融机构指定的其他机构之间的借贷关系、结算关系等尚未终止，则您须待上述全部的借贷关系、结算关系等终止后方可终止本授权书。</p>
                                    <p>五、	其它约定</p>
                                    <p>1、	本公司是“天眼通大数据征信平台”的权属人，并拥有平台相关内容、技术、信息、资源的著作权等知识产权合法权利，非经本公司同意或授权，不得以任何形式复制、使用或传播平台信息、资料。</p>
                                    <p>2、	本授权书的订立、履行、解释、争议的解决均应适用在中华人民共和国大陆地区适用之有效法律。</p>
                                    <p>3、	如您违反本授权书的相关规定并导致本公司损失的，应予以赔偿并承担其他相关法律责任。</p>
                                    <p>4、	本授权书的任何条款被终止或无效，均不影响其余条款的法律效力。</p>
                                    <p>5、	本授权书履行过程中发生的争议，双方应友好协商，协商不成时，任何一方均可向本公司所在地有管辖权的人民法院起诉。</p>
                                    <p>6、	本公司保留对本授权书及所有规则的修订权及法律范围内的最终解释权。</p>
                                </div>
                            </div>
                        </div>
                        <a className="qd" onClick={this.closePop.bind(this)}>确定</a>
                    </div>
                </div>
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------
function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Weichart);