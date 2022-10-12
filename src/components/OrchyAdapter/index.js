import React from 'react'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

const OrchyAdapter = () => {
    if(ExecutionEnvironment.canUseDOM) {
        import('@orchy-mfe/web-component')
        return <orchy-wc basePath="/" />
    }

    return null
}

export default OrchyAdapter