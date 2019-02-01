import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component {
    static defuaultProps = {
        data: [],
    }

    render() {
        const { data, onRemove, onUpdate } = this.props; //데이터값을 프롭스로, 함축시키기
        const list = data.map(
            info => (<PhoneInfo
                onUpdate={onUpdate}
                onRemove={onRemove}
                info={info}
                key={info.id}
            />)
        ); {/* 데이터안에 잇는 인포를 폰인포컨포넌트로 넣어줌, 키값은 업데이트 성능최적화 각각마다 아이디 달아줌*/ }
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;