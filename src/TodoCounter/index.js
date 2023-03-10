import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos, loading}) {
  return(
    <div>
      <h2 className="title">
        Lista de tareas
      </h2>
      {
        totalTodos > 0
        ? <div><h3 className="todoCounter">Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas</h3></div>
        : <div> {loading ? <div className="loadingCounter"></div> : <h3 className="todoCounter">Tu lista de tareas se encuentra <span>vacía</span>.</h3>} </div>
      }
    </div>
  );
}
export { TodoCounter };