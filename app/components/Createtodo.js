"use client"
import React, { useState } from 'react'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

export default function Createtodo() {
    const [todo, setTodo] = useState({
        Title:"",
        Detail:""
    })

    async function handleSubmit (){
        const docRef = await addDoc(collection(db, "Todos"), todo)
    }
    return (
  <>
  <form>
    <label>Title: </label>
    <br/>
    <input onChange={(e) => setTodo({...todo, Title: e.target.value})} value={todo.Title} type="text"></input>
    <br/>
    <label>Detail: </label>
<br/>
    <textarea onChange={(e) => setTodo({...todo, Detail: e.target.value})} value={todo.Detail} ></textarea>
  </form>
  <button onClick={handleSubmit}>Add Todo</button>
  </>
  )
}
