import * as Action from './actionTypes.js';

//reducer例子，修改state必须使用Object.assign替换原来的state，否则是错误的
//这里的state初始化就是代表本reducer的状态，输出后直接在组件中可以通过mapStateToProps访问
const initState = {
    userName:"",
    userPassword:"",
    yzmIsShow:false,
    yzm:'',
    yzmImgNum: 0,
    isCheck:false,
    isloading:false,
    isPopShow:false,
    paramsId:''
};

export default (state = initState, action) => {
  switch (action.type) {
    //输入国税用户名
      case Action.INTER_USER_NAME:
      {
        return Object.assign({}, state,{userName:action.val})}
      //输入国税密码
      case Action.INTER_USER_PASSWORD:
      {
        return Object.assign({}, state,{userPassword:action.val});
      }
      // 验证码是否显示
        case Action.YZM_IS_SHOW:
      {
        return Object.assign({}, state,{yzmIsShow:action.val});
      }
      // 输入验证吗
        case Action.INTER_YZM:
      {
          return Object.assign({}, state,{yzm:action.val});
      }
      // 改变验证码，
      case Action.CHANGE_YZM:
      {
          return Object.assign({}, state,{yzmImgNum:state.yzmImgNum+1});
      }
      // 改变验证码，
      case Action.AGREE_PROTOCOL:
      {
          const isCheck = !state.isCheck;
          return Object.assign({}, state,{isCheck:isCheck});
      }
      // 改变loading状态，
      case Action.IS_LOADING:
      {
          return Object.assign({}, state,{isloading:action.val});
      }
      // 改变弹出层显示状态，
      case Action.IS_POP_SHOW:
      {
          return Object.assign({}, state,{isPopShow:action.val});
      }
      // 获取paramsId参数，
      case Action.PARAMS_ID:
      {
          return Object.assign({}, state,{paramsId:action.val});
      }
    default:
      return state
  }
}
