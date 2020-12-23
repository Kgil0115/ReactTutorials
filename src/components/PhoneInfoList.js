import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {

    static defaultProps = {
        data: []
    }

    render() {

        const {data, onRemove, onUpdate} = this.props;

        // 배열 data로부터 info값을 PhoneInfo의 info값에 넣어주기
        const list = data.map(
            info => (
                <PhoneInfo 
                    onRemove={onRemove} 
                    onUpdate={onUpdate}
                    info={info} 
                    key={info.id} 
                />
            )
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;