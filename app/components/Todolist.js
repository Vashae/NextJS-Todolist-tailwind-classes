'use client'


import React, { useEffect, useState } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'
import { db } from '../firebase'
import Link from 'next/link'

function Todolist() {
  
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const unsubscribe = onSnapshot(collection(db, "Todos"), (snapshot)=> {
        console.log(snapshot)
    setTodos(snapshot.docs.map(doc => {
        return {
            id: doc.id,
            Title: doc.data().Title,
            Detail: doc.data().Detail
        }
    }))
})
return unsubscribe
  },[])
  
  
  return (<>
    <div>
        <h1 className='font-bold mb-5 text-center'>Todos</h1>
        <ul className='h-[300px] w-[250px] border-2 p-6 overflow-y-scroll' >
            {todos.map(todo => {
                 return (
                <Link key={todo.id} href={'/' + todo.id}>
                <li  className="p-4 mt-2.5 border rounded-[12px] hover:bg-blue-500 cursor-pointer">{todo.Title}
                    
                    
                </li>
                </Link>
                 )
            })}
        </ul>
    </div>
    </>
  )
}

export default Todolist