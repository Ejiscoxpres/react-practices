import React from 'react'

function Child() {
    console.count('Rerender: ');
  return (
    <div>Child</div>
  )
}

export default Child;