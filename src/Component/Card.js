import React from 'react';

const Card =(props)=> (
<div class="card">
  <div class="card-body">
  {props.children} 
  </div>
</div>
)
export default Card