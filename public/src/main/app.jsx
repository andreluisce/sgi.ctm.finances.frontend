import '../common/template/dependencies.js'

import React from 'react'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'

export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
    </div>
)