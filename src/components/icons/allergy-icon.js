import React from 'react'

import { Icon } from 'antd'

export default ({allergy}) => {
    switch(allergy) {
        case 'peanut': return <Icon type="apple" />
        default: return null;
    }
}