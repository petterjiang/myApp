import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import CommonMethod from '../../util/CommonMethod';
import ajax from '../../util/ajax';
import Modal from '../../util/Modal';
import Pc from './Pc';
import Weichart from './Weichart';

class Grant extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isCheck: false,
            userName: '',
            password: '',
            yzmIsShow: false,
            yzm: '',
            yzmUrl: '/jee/api/anonymous/bank/captcha/new',
            num: 0,
            isloading:false
        };
    }
    agreeProtocol(e){
        let flag = `${e.target.checked}`=='true'?true:false;
        this.setState({
            isCheck:flag
        });
    }
    submitGrant(){
        let id = this.props.params.id;
        let sendJson = {
            id:id,
            taxUserName:this.state.userName,
            password:this.state.password,
            yzm: this.state.yzm
        };
        // if(id==undefined){
        //     Modal.error("错误","请使用正确的授权链接");
        //     return false;
        // }

        if(this.state.userName==''){
            Modal.error("错误","请输入国税网厅用户名");
            return false;
        }
        if(this.state.password==''){
            Modal.error("错误","请输入国税网厅密码");
            return false;
        }
        if(!this.state.isCheck){
            Modal.error("错误","请同意《数据授权协议书》");
            return false;
        }
        if(this.state.yzmIsShow && this.state.yzm==''){
            Modal.error("错误","请输图形验证码");
            return false;
        }
        this.setState({
            isloading:true
        });


        ajax.post('/jee/api/anonymous/bank/grant/submitGrant',sendJson).then(resp=>{
            if(resp){
                if (resp.data.code == "1"){
                    let name = resp.data.nsrmc;
                    let time = resp.data.grantDate;
                    this.setState({
                        yzmIsShow: false
                    });
                    this.setState({
                        isloading:false
                    });
                    CommonMethod.isPc()?
                        Modal.success('授权成功','请通知您的业务员为您进行下一步业务操作!'):
                        hashHistory.push('/Grant/Weichart/Success/'+name+'/'+time);
                }else if (resp.data.code == "-1"){
                    this.setState({
                        yzmIsShow: true
                    });
                    Modal.error('','用户名或密码错误');
                    this.changeYzm();
                }else if (resp.data.code == "0"){
                    this.setState({
                        yzmIsShow: true
                    });
                    Modal.error('','授权失败');
                    this.changeYzm();
                }else if (resp.data.code == "-2"){
                    this.setState({
                        yzmIsShow: true
                    });
                    Modal.error('','验证码错误');
                    this.changeYzm();
                }else if (resp.data.code == "2"){
                    this.setState({
                        yzmIsShow: true
                    });
                    Modal.info('','该企业已授权，请勿重复提交');
                    this.changeYzm();
                }else{
                    this.setState({
                        yzmIsShow: true
                    });
                    Modal.error('错误','数据返回失败！');
                    this.changeYzm();
                }
            }else{
                Modal.error('错误','服务器错误！');
            }
            this.setState({
                isloading:false
            });
        });



        // $.ajax({
        //     type: 'POST',
        //     url: '/jee/api/anonymous/bank/grant/submitGrant',
        //     data: sendJson,
        //     success: function(resp){
        //         if(resp){
        //             if (resp.data.code == "1"){
        //                 let name = resp.data.nsrmc;
        //                 let time = resp.data.grantDate;
        //                 this.setState({
        //                     yzmIsShow: false
        //                 });
        //                 this.setState({
        //                     isloading:false
        //                 });
        //                 CommonMethod.isPc()?
        //                     Modal.success('授权成功','请通知您的业务员为您进行下一步业务操作!'):
        //                     hashHistory.push('/Grant/Weichart/Success/'+name+'/'+time);
        //             }else if (resp.data.code == "-1"){
        //                 this.setState({
        //                     yzmIsShow: true
        //                 });
        //                 Modal.error('','用户名或密码错误');
        //                 this.changeYzm();
        //             }else if (resp.data.code == "0"){
        //                 this.setState({
        //                     yzmIsShow: true
        //                 });
        //                 Modal.error('','授权失败');
        //                 this.changeYzm();
        //             }else if (resp.data.code == "-2"){
        //                 this.setState({
        //                     yzmIsShow: true
        //                 });
        //                 Modal.error('','验证码错误');
        //                 this.changeYzm();
        //             }else if (resp.data.code == "2"){
        //                 this.setState({
        //                     yzmIsShow: true
        //                 });
        //                 Modal.info('','该企业已授权，请勿重复提交');
        //                 this.changeYzm();
        //             }else{
        //                 this.setState({
        //                     yzmIsShow: true
        //                 });
        //                 Modal.error('错误','数据返回失败！');
        //                 this.changeYzm();
        //             }
        //         }else{
        //             Modal.error('错误','服务器错误！');
        //         }
        //         this.setState({
        //             isloading:false
        //         });
        //     }.bind(this),
        //     error:function(){
        //         Modal.error("错误","服务无响应！");
        //         this.setState({
        //             isloading:false
        //         });
        //     }.bind(this),
        //     dataType: 'json'
        // });
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    changeYzm(){
        let changNum = this.state.num + 1;
        this.setState({
            num: changNum
        });
        this.setState({
            yzmUrl: '/jee/api/anonymous/bank/captcha/new?'+changNum
        })
    }
    render() {
        return (
            <div>
                {CommonMethod.isPc()?
                    <Pc
                        agreeProtocol={this.agreeProtocol.bind(this)}
                        submitGrant={this.submitGrant.bind(this)}
                        handleChange={this.handleChange.bind(this)}
                        isCheck={this.state.isCheck}
                        yzmIsShow={this.state.yzmIsShow}
                        yzmUrl={this.state.yzmUrl}
                        isloading={this.state.isloading}
                        changeYzm={this.changeYzm.bind(this)}
                    />:
                    <Weichart
                        agreeProtocol={this.agreeProtocol.bind(this)}
                        submitGrant={this.submitGrant.bind(this)}
                        handleChange={this.handleChange.bind(this)}
                        isCheck={this.state.isCheck}
                        yzmIsShow={this.state.yzmIsShow}
                        yzmUrl={this.state.yzmUrl}
                        isloading={this.state.isloading}
                        changeYzm={this.changeYzm.bind(this)}
                    />}
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
)(Grant);
