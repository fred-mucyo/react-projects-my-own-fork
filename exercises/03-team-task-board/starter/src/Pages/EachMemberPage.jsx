import React, {useContext}from "react";
import { useParams} from "react-router-dom";
import { TaskContext } from "../../TaskProvider";




export default function EachMemberPage(){
    const {id}= useParams()
    const { state } = useContext(TaskContext);
    console.log(state)
    const memberTasks = state.tasks.filter(task => task.assigneeId === Number(id));

console.log(memberTasks)

if(memberTasks.length )
    
    return <ol>
    
    
    {/* {  memberTasks.length > 0 ? (
        memberTasks.map( task => (
          
            <>
            <li key={task.id}> {task.title}</li>
             <li>{task.status}</li>
            <li>{task.priority}</li>
            </>
        )
        )
    ) : <h1>No Task found for this member 😓</h1>

    } */}


    {memberTasks.length > 0 ? (
  memberTasks.map(task => (
    <>
      <li
        key={task.id}
        className="bg-white shadow-md rounded-xl p-4 mb-3 flex justify-between items-center border border-gray-100 hover:shadow-lg transition w-3.5"
      >
        <span className="font-semibold text-gray-800">{task.title}</span>
      </li>

      <li className="ml-4 text-sm text-blue-600 font-medium">
        Status: {task.status}
      </li>

      <li className="ml-4 text-sm text-red-500 font-medium mb-4">
        Priority: {task.priority}
      </li>
    </>
  ))
) : (
  <h1 className="text-center text-gray-500 text-lg mt-6">
    No Task found for this member 😓
  </h1>
)}
    
    </ol>
    

}