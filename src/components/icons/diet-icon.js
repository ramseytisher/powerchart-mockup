import React from 'react'

import { Icon } from 'antd'

export default ({diet}) => {
    switch(diet) {
        case 'fluid-restrict': return <Icon type="scan" />
        default: return null;
    }
}