import Task from './Task'

const Tasks = ({tasks, onDelete, onRemind}) => {

    return (
        <div style={{ marginBottom: '25px' }}>
         {tasks.map(task => (
             <Task key={task.id} task={task} onDelete={onDelete} onRemind={onRemind} />
            ))}   
        </div>
    )
}


export default Tasks
