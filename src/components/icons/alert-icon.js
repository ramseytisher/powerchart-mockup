import React from 'react'

import { Icon } from 'antd'

export default ({alert}) => {
    switch(alert) {
        case 'no-bm-72': return <Icon type="alert" />
        case 'fall-72': return <Icon type="warning" />
        case 'behavior': return <Icon type="frown" />
        case 'cog': return <Icon type="alert" />
        case 'skin': return <Icon type="heat-map" />
        case 'fluid-decline': return <Icon type="fall" />
        default: return null;
    }
}