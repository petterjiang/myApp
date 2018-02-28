import * as ActionTypes from './actionTypes.js';
import ajax from '../../util/ajax';
import Modal from "../../util/Modal";
import * as Constant from "../../config/Constant";



export const inter_user_name = (e) => ({
    type: ActionTypes.INTER_USER_NAME,
    val:e.target.value
});
export const inter_user_password = (e) => ({
    type: ActionTypes.INTER_USER_PASSWORD,
    val:e.target.value
});
export const yzm_is_show = (flag) => ({
    type:ActionTypes.YZM_IS_SHOW,
    val:flag
});
export const inter_yzm = (e) =>({
    type:ActionTypes.INTER_YZM,
    val:e.target.value
});
export const change_yzm = () =>({
    type:ActionTypes.CHANGE_YZM
});
export const agree_protocol = () =>({
    type:ActionTypes.AGREE_PROTOCOL
});
export const is_loading = (flag) =>({
    type:ActionTypes.IS_LOADING,
    val:flag
});
export const is_pop_show = (flag) =>({
    type:ActionTypes.IS_POP_SHOW,
    val:flag
});
export const params_id = (id) => ({
    type:ActionTypes.PARAMS_ID,
    val:id
});
export const submit_grant = (data) =>(
    (dispatch)=>{
        let sendJson = {
            // id:data.paramsId,
            yhzh:data.userName,
            yhmm:data.userPassword,
            // yzm: data.yzm
        };
        // if(id==undefined){
        //     Modal.error("错误","请使用正确的授权链接");
        //     return false;
        // }

        if(data.userName===''){
            Modal.error("错误","请输入国税网厅用户名");
            return false;
        }
        if(data.userPassword===''){
            Modal.error("错误","请输入国税网厅密码");
            return false;
        }
        if(!data.isCheck){
            Modal.error("错误","请同意《数据授权协议书》");
            return false;
        }
        // if(data.yzmIsShow && data.yzm==''){
        //     Modal.error("错误","请输图形验证码");
        //     return false;
        // }
        dispatch(is_loading(true));
        ajax.post(Constant.REALPATH+'/anonymouse/grant/pinan',sendJson).then(resp=>{
            console.log(resp)
            if(resp){
                // if(resp.data && resp.data.code){
                //     if (resp.data.code == "1"){
                //         let name = resp.data.nsrmc;
                //         let time = resp.data.grantDate;
                //         dispatch(yzm_is_show(false));
                //         CommonMethod.isPc()?
                //             Modal.success('授权成功','请通知您的业务员为您进行下一步业务操作!'):
                //             hashHistory.push('/Authorized/Weichart/Success/'+name+'/'+time);
                //     }else if (resp.data.code == "-1"){
                //         dispatch(yzm_is_show(true));
                //         Modal.error('','用户名或密码错误');
                //         // dispatch(change_yzm());
                //     }else if (resp.data.code == "0"){
                //         dispatch(yzm_is_show(true));
                //         Modal.error('','授权失败');
                //         // dispatch(change_yzm());
                //     }else if (resp.data.code == "-2"){
                //         dispatch(yzm_is_show(true));
                //         Modal.error('','验证码错误');
                //         // dispatch(change_yzm());
                //     }else if (resp.data.code == "2"){
                //         dispatch(yzm_is_show(true));
                //         Modal.info('','该企业已授权，请勿重复提交');
                //         // dispatch(change_yzm());
                //     }else{
                //         dispatch(yzm_is_show(true));
                //         Modal.error('错误','数据返回失败！');
                //         // dispatch(change_yzm());
                //     }
                // }else{
                if(resp.status==="200"){
                    Modal.success('授权成功');
                }else if(resp.error && resp.error===true){
                    Modal.error("错误","错误代码："+resp.status+" 错误信息："+resp.statusText);
                }else{
                    Modal.error("授权失败");
                }

                // }
            }else{
                Modal.error('错误','服务器错误！');
            }
            dispatch(is_loading(false));
        })
    }
);
