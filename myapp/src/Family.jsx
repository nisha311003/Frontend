import React from 'react'
import Father from './Father'
import Mother from './Mother'
import Child from './Child'

const Family = () => {
  return (
    <div>
      <h1>Family Members 👨‍👩‍👧‍👦</h1>
      <hr />
      <Father/>
      <hr />
      <Mother/>
      <hr />
      <Child/>
    </div>
  )
}

export default Family
