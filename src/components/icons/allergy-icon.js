import React from 'react'

import { Icon } from 'antd'

export default ({allergy}) => {
    switch(allergy) {
        case 'allergy': return <Icon type="apple" />
        default: return null;
    }
}