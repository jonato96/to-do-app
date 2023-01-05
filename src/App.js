import { useState } from 'react';

import AddTaskForm from './components/AddTaskForm'
import UpdateTaskForm from './components/UpdateTaskForm'
import ToDo from './components/ToDo'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  //Tareas solo de muestra
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');
  //funciones
  //add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, titulo: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }
  //delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks)
  }
  //mark task as done
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task
    })
    setToDo(newTask)
  }
  //cancel update
  const cancelUpdate = () => {
    setUpdateData('');
  }
  //change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      titulo: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry)
  }
  //update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id)
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject)
    setUpdateData('')
  }

  //Temp state
  return (
    <div className="container App">
      Sanchez Lucas Jonathan
      <br></br>
      <h2>Todo List App React</h2>
      <br></br>
      {/* Add  and Update form*/}
      {updateData && updateData ? (
        <UpdateTaskForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}/>
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask} />
      )}
      {/* Display ToDos*/}
      {toDo && toDo.length ? '' : 'No task yet...'}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}
export default App;