import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';

const OrchyAdapter = () => {
    return <BrowserOnly>
        {() => {
            import('@orchy-mfe/web-component')
            return <orchy-wc basePath="/" />
        }}
    </BrowserOnly>
}

export default OrchyAdapter