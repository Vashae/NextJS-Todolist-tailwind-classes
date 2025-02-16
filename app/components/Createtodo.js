"use client"
import React, { useState } from 'react'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

export default function Createtodo() {
    const [todo, setTodo] = useState({
        Title:"",
        Detail:""
    })

    async function handleSubmit (event){
            event.preventDefault(); // Prevents the page from reloading
    try {
        const docRef = await addDoc(collection(db, "Todos"), todo)
        console.log("Document written with ID: ", docRef.id);
        setTodo({ Title: "", Detail: "" }); // Clear input fields
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}
    return (
  <>
  <form>
    <label>Title: </label>
    <br/>
    <input className='bg-black' onChange={(e) => setTodo({...todo, Title: e.target.value})} value={todo.Title} type="text"></input>
    <br/>
    <label>Detail: </label>
<br/>
    <textarea className='bg-black' onChange={(e) => setTodo({...todo, Detail: e.target.value})} value={todo.Detail} ></textarea>
  </form>
  <button className='mt-2 border-white-500 border-4' onClick={handleSubmit}>Add Todo</button>
  </>
  )
}
