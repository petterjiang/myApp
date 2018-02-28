/**
 * Created by jiangweijia on 2017/10/17.
 *
 * 配置不同环境的静态常量
 *
 */
let realPath = '';
if(process.env.BUILD_ENV==='uat'){
    // 测试环境
    realPath = "/api";
    console.log("-------------------测试环境--------------------");
}else if(process.env.BUILD_ENV==='pro'){
    // 生产环境
    realPath = "/api";
    console.log("-------------------生产环境--------------------");
}else{
    // 开发环境
    realPath = "/api/center";
    console.log("-------------------开发环境--------------------");
}


//客服电话
export const CUSTOMERTELEPHONE = '0755-83254045';

//公司地址
export const COMPANYADDRESS = '深圳市龙华新区梅龙路与中梅路交汇处光浩国际中心 B座907-908';

//版权信息
export const COPYRIGHTINFORMATION = '2017 金财互联数据服务有限公司 粤ICP备14007298号';

//接口真实前缀
export const REALPATH = realPath;

