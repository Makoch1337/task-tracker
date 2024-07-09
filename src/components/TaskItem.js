import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, toggleTaskCompleted } from '../features/tasks/tasksSlice';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <li className={task.completed ? 'completed' : ''}>
            <span onClick={() => dispatch(toggleTaskCompleted(task.id))}>
                {task.text}
            </span>
            <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
        </li>
    );
};

export default TaskItem;
