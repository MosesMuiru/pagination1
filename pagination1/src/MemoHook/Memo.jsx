import React from 'react'
import { useState,useMemo } from 'react'

function Memo() {

  return (
    <div>
        <div>
            <h2>My todos</h2>
            {
                todos.map((top, index) => {
                    return <p>{todo}</p>
                })
            }
            <button onClick={addTodo}>Add todo</button>
        </div>
        <hr />

        <div>
            Count:{count}
            <button></button>
        </div>
    </div>
  )
}

export default Memo