import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class WeichartSuccess extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={}

    }
    componentDidMount  (){
        document.body.style.background='#e6e6e6';
        document.body.className='single singleW';
        this.footerFixed();
    }
    componentWillUnmount(){
        document.body.style.background='';
    }
    render() {
        let name = this.props.params.name;
        let time = this.props.params.time;
        return (
            <div className="sqSuccess">
                <i className="success anticon anticon-check-circle"></i>
                <h2>授权成功</h2>
                <p>请通知您的业务员为您进行下一步业务操作</p>
                <div className="conText">
                    <ul>
                        <li><span className="nameSpan">企业名称</span><span className="contentSpan">{name}</span></li>
                        <li><span className="nameSpan">授权时间</span><span className="contentSpan">{time}</span></li>
                    </ul>
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
)(WeichartSuccess);