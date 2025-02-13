import React from 'react'

function Todolist() {
  return (<>
    <div>
        <h1 className='font-bold mb-5 text-center'>Todos</h1>
        <ul className='h-[300px] w-[250px] border-2 p-6' >
            <li className='p-4 mt-2.5 border rounded-[12px] hover:bg-blue-500 cursor-pointer'>
                ToDo1
            </li>
            <li className='p-4 mt-2.5 border rounded-[12px] hover:bg-blue- cursor-pointer'>
                ToDo2
            </li>
            <li className='p-4 mt-2.5 border rounded-[12px] hover:bg-blue-500 cursor-pointer'>
                ToDo3 
            </li>
        </ul>
    </div>
    </>
  )
}

export default Todolist