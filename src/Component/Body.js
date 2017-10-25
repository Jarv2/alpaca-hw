import React from 'react'
import Card from './Card'

import '../App.css'

const Body =(props)=> (
    <div>
        <Card>
            {props.children}
        </Card>
    </div>

)
export default Body
