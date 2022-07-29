import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
    return (
        <>
        { toDo && toDo
            .sort((a, b) => a.id > b.id ? 1 : -1)
            .map((task, index) => {
                return (
                    <React.Fragment key={task.id}>
                        <div className='col-auto taskBg'>
                            <div className={task.status ? 'done' : ''}>
                                <span className='taskNumber'>{index + 1}</span>
                                <span className='taskText'>{task.titulo}</span>
                            </div>
                            <div className='iconsWrap'>
                                <span
                                    title="Complete / Not Complete"
                                    onClick={(e) => markDone(task.id)}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </span>
                                {task.status ? null : (
                                    <span
                                        title='Edit'
                                        onClick={() => setUpdateData({
                                            id: task.id,
                                            titulo: task.titulo,
                                            status: task.status ? true : false
                                        })}>
                                        <FontAwesomeIcon icon={faPen} />
                                    </span>
                                )}

                                <span
                                    title='delete'
                                    onClick={() => deleteTask(task.id)}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </span>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })
        }
        </>
        
    )
}
export default ToDo;