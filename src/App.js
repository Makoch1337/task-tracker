import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <div className="container">
            <h1>Task Tracker</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default App;
