import { teamMembers } from '../data/team';
import { useContext } from 'react';
import EachMember from './EachMember';
import { TaskContext } from '../../TaskProvider';

const COLUMNS = [
  { status: 'todo', label: 'To Do' },
  { status: 'inprogress', label: 'In Progress' },
  { status: 'done', label: 'Done' },
];

const PRIORITY_COLORS = {
  high: 'bg-red-100 text-red-600',
  medium: 'bg-amber-100 text-amber-600',
  low: 'bg-green-100 text-green-700',
};

export default function MainContent() {
  const { state, dispatch } = useContext(TaskContext);

  function handleTask(e) {
    const { value } = e.currentTarget;
    dispatch({ type: "SET_TASK", payload: value });
  }

  function handleAssignee(e) {
    const { value } = e.currentTarget;
    dispatch({ type: "SET_ASSIGNEE", payload: value });
  }

  function handlePriority(e) {
    const { value } = e.currentTarget;
    dispatch({ type: "SET_PRIORITY", payload: value });
  }

  function handleAddTask() {
    if (!state.task || !state.priorityStatus || !state.assignedTo) return;

    let uniqueId = crypto.randomUUID();

    const newTask = {
      id: uniqueId,
      title: state.task,
      priority: state.priorityStatus,
      assigneeId: Number(state.assignedTo),
      status: "todo"
    };

    dispatch({ type: "ADD_TASKS", payload: newTask });
  }

  function handleDragStart(e, taskId) {
    e.dataTransfer.setData("taskId", taskId);
  }

  function handleDrop(e, newStatus) {
    const taskId = e.dataTransfer.getData("taskId");

    dispatch({
      type: "MOVE_TASK",
      payload: {
        id: taskId,
        newStatus
      }
    });
  }

  function handleFilterMember(e) {
    dispatch({
      type: "SET_FILTER_MEMBER",
      payload: e.target.value
    });
  }

  function handleFilterPriority(e) {
    dispatch({
      type: "SET_FILTER_PRIORITY",
      payload: e.target.value
    });
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
     
     <EachMember/>

      <div className="flex-1 p-6 overflow-auto">
{/* Toolbar */}
<div className="flex items-center justify-between mb-6">
  <h1 className="text-lg font-bold text-slate-800">Team Board</h1>

  <div className="flex gap-2">
    <input
      type="text"
      placeholder="Task title..."
      onChange={handleTask}
      value={state.task}
      className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-indigo-400"
    />

    <select
      className="border border-slate-200 rounded-lg px-2 py-1.5 text-sm outline-none"
      onChange={handlePriority}
      value={state.priorityStatus}
    >
      <option value="">select</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>

    <select
      className="border border-slate-200 rounded-lg px-2 py-1.5 text-sm outline-none"
      onChange={handleAssignee}
      value={state.assignedTo}
    >
      <option value="">select</option>
      {teamMembers.map(m => (
        <option key={m.id} value={m.id}>
          {m.name.split(' ')[0]}
        </option>
      ))}
    </select>

    <button
      className="bg-indigo-600 text-white rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-indigo-700 transition-colors"
      onClick={handleAddTask}
    >
      Add
    </button>
  </div>
</div>



{/* Filter Members */}
<select
  className="border border-slate-200 bg-white rounded-lg px-3 py-1.5 text-sm outline-none"
  onChange={handleFilterMember}
  value={state.filterMember}
>
  <option value="all">All Members</option>
  {teamMembers.map(m => (
    <option key={m.id} value={m.id}>
      {m.name}
    </option>
  ))}
</select>

<select
  className="border border-slate-200 bg-white rounded-lg px-3 py-1.5 text-sm outline-none"
  onChange={handleFilterPriority}
  value={state.filterPriority}
>
  <option value="all">All Priorities</option>
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
</select>

{/* Board */}
<div className="grid grid-cols-3 gap-4">
  {COLUMNS.map(col => {
    const colTasks = state.tasks
      .filter(t => t.status === col.status)
      .filter(
        t =>
          state.filterMember === 'all' ||
          t.assigneeId === Number(state.filterMember)
      )
      .filter(
        t =>
          state.filterPriority === 'all' ||
          t.priority === state.filterPriority
      )

    return (
      <div
        key={col.status}
        className="bg-slate-200/70 rounded-xl p-3"
        onDragOver={e => e.preventDefault()}
        onDrop={e => handleDrop(e, col.status)}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-slate-600">
            {col.label}
          </h2>
          <span className="bg-slate-300 text-slate-600 text-xs rounded-full px-2 py-0.5">
            {colTasks.length}
          </span>
        </div>

        <div className="space-y-2">
          {colTasks.map(task => {
            const assignee = teamMembers.find(
              m => m.id === task.assigneeId
            )

            return (
              <div
                key={task.id}
                className="bg-white rounded-lg p-3 shadow-sm"
                draggable
                onDragStart={e => handleDragStart(e, task.id)}
              >
                <p className="text-sm font-medium text-slate-800 mb-2 leading-snug">
                  {task.title}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs rounded-full px-2 py-0.5 font-medium capitalize ${
                      PRIORITY_COLORS[task.priority]
                    }`}
                  >
                    {task.priority}
                  </span>

                  {assignee && (
                    <img
                      src={assignee.avatar}
                      alt={assignee.name}
                      className="w-5 h-5 rounded-full"
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  })}
</div>
      </div>
    </div>

)
}