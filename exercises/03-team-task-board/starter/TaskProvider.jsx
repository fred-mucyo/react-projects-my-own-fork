
import React, { useReducer, createContext } from "react";

export const TaskContext = createContext();

const initialise = { 
  task : '',  
  priorityStatus:'', 
  assignedTo : '', 
  tasks:[],
  filterMember: 'all',
  filterPriority: 'all'
}


function reducer(state,action){
  if(action.type === 'SET_TASK') return {...state, task : action.payload}
  if(action.type === 'SET_PRIORITY') return {...state , priorityStatus : action.payload}

  if(action.type === "SET_FILTER_MEMBER") return {...state, filterMember: action.payload}
  if(action.type === "SET_FILTER_PRIORITY") return {...state, filterPriority: action.payload}

  if(action.type === "SET_ASSIGNEE") return {...state , assignedTo : action.payload}

  if(action.type === "ADD_TASKS") return {
    ...state,
    tasks: [...state.tasks, action.payload],
    task: '',
    priorityStatus: '',
    assignedTo: ''
  }

  if(action.type === "MOVE_TASK"){
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.payload.id
          ? { ...task, status: action.payload.newStatus }
          : task
      )
    }
  }

  return state
}



export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialise);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}