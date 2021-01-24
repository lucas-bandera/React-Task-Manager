import Task from './Task'

const Tasks = ({tasks, onDelete, onRemind}) => {

    return (
        <>
         {tasks.map(task => (
             <Task key={task.id} task={task} onDelete={onDelete} onRemind={onRemind} />
            ))}   
        </>
    )
}


export default Tasks
