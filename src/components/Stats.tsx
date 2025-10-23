import React from 'react';
import { StatsProps } from '../types/components';

const Stats: React.FC<StatsProps> = ({ total, completed, remaining, onClearCompleted }) => {
  if (total === 0) return null;

  return (
    <div className="stats">
      <div className="stats-grid">
        <span className="stat">
          Total: <strong>{total}</strong>
        </span>
        <span className="stat">
          Completed: <strong>{completed}</strong>
        </span>
        <span className="stat">
          Remaining: <strong>{remaining}</strong>
        </span>
      </div>
      {completed > 0 && (
        <button 
          onClick={onClearCompleted} 
          className="clear-completed-btn"
          aria-label={`Clear ${completed} completed todos`}
        >
          Clear Completed ({completed})
        </button>
      )}
    </div>
  );
};

export default Stats;
