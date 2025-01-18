import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([]);
    const [isRunning, setIsRunning] = useState(false)
    const [time, setTime] = useState(0)

    const handleClickStart = () => setIsRunning(true)
    const handleClickStop = () => setIsRunning(false)

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 100)
        }

        return () => {
            clearInterval(timer);
        }
    }, [isRunning])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.trim()) {
            const newTask = {
                id: new Date().getMilliseconds(),
                name: task,
            }
            setTasks([...tasks, newTask])
            setTask('')
        }
    }

    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter((item) => item.id !== id)
        setTasks(updatedTasks)
    }
    return (
        <div className="p-4 pt-20 pb-30 m-auto justify-center text-center">
            <div className='flex-col'>
                <p>Timer : {time}</p>
                <button className='btn-blue mr-8' onClick={handleClickStart}>Start</button>
                <button className='btn-blue bg-red-700' onClick={handleClickStop}>Stop</button>
            </div>
            <div className='flex-col'>
                <form className="flex flex-col items-center justify-center w-full max-w-md mx-auto mb-4 mt-10">
                    <input type="text" className="login-input" onChange={(e) => setTask(e.target.value)} placeholder='Enter Task' value={task} />
                    <button type='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded" onClick={handleSubmit}>Add Todo +</button>
                </form>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">List</h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    {
                        tasks.length === 0 ? <li>No todos</li> :
                            tasks.map((item) =>
                                <>
                                    <li className='flex-initial w-6/12' key={item.id}>{item.name} id: {item.id}</li> <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded flex-initial w-32" onClick={() => handleDeleteTask(item.id)}>Delete</button>
                                </>
                            )
                    }
                </ul>
            </div>



        </div>
    )
}

export default TodoList