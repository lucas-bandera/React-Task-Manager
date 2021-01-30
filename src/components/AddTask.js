import { useState } from 'react'

const AddTask = ({onAddTask}) => {
    const [taskObj, setTaskObj] = useState({
        text: '',
        day: '',
        reminder: false
    });

    const handleInput = (event) => {
        const { name, value } = event.target ;
        setTaskObj({...taskObj, [name]: value})
    }
    
    const handleCheck = (event) => {
        const { name, checked } = event.target ;
        setTaskObj({...taskObj, [name]:checked})
    }

    const handleSubmitTask = (event) => {
        event.preventDefault();
        if(taskObj.text === '') {
            window.alert('Please inform a task!')
        }
        else {
            onAddTask(taskObj)
        }
    }

    return (
        <form className='add-form' onSubmit={handleSubmitTask}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" name="text" placeholder="Add Task" onChange={handleInput} />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type="text" name="day" placeholder="Add Day and Time" onChange={handleInput} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" name="reminder" onChange={handleCheck} />
            </div>

            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}

export default AddTask
