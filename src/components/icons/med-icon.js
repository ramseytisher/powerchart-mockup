import React from 'react'

import { Icon } from 'antd'

export default ({med}) => {
    switch(med) {
        case 'high-risk-med': return <Icon type="alert" />
        default: return null;
    }
}