import React, { useState, useCallback } from 'react';
import { TodoFilter } from '../types/Todo';

interface SearchAndFilterProps {
  filter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
  categories: Array<{ id: string; name: string; color: string }>;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ 
  filter, 
  onFilterChange, 
  categories 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filter, search: e.target.value });
  }, [filter, onFilterChange]);

  const handleCategoryChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filter, category: e.target.value });
  }, [filter, onFilterChange]);

  const handlePriorityChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filter, priority: e.target.value });
  }, [filter, onFilterChange]);

  const handleStatusChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filter, status: e.target.value as any });
  }, [filter, onFilterChange]);

  const handleDueDateChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filter, dueDate: e.target.value as any });
  }, [filter, onFilterChange]);

  const clearFilters = useCallback(() => {
    onFilterChange({
      search: '',
      category: '',
      priority: '',
      status: 'all',
      dueDate: 'all'
    });
  }, [onFilterChange]);

  return (
    <div className="search-and-filter">
      <div className="search-container">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search todos..."
            value={filter.search}
            onChange={handleSearchChange}
            className="search-input"
          />
          {filter.search && (
            <button
              onClick={() => onFilterChange({ ...filter, search: '' })}
              className="clear-search-btn"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`filter-toggle ${isExpanded ? 'expanded' : ''}`}
          aria-label="Toggle filters"
        >
          <span className="filter-icon">⚙️</span>
          <span className="filter-text">Filters</span>
          <span className={`filter-arrow ${isExpanded ? 'rotated' : ''}`}>▼</span>
        </button>
      </div>

      {isExpanded && (
        <div className="filter-panel">
          <div className="filter-row">
            <div className="filter-group">
              <label htmlFor="category-filter">Category</label>
              <select
                id="category-filter"
                value={filter.category}
                onChange={handleCategoryChange}
                className="filter-select"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="priority-filter">Priority</label>
              <select
                id="priority-filter"
                value={filter.priority}
                onChange={handlePriorityChange}
                className="filter-select"
              >
                <option value="">All Priorities</option>
                <option value="high">🔴 High</option>
                <option value="medium">🟡 Medium</option>
                <option value="low">🟢 Low</option>
              </select>
            </div>
          </div>

          <div className="filter-row">
            <div className="filter-group">
              <label htmlFor="status-filter">Status</label>
              <select
                id="status-filter"
                value={filter.status}
                onChange={handleStatusChange}
                className="filter-select"
              >
                <option value="all">All Todos</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="due-date-filter">Due Date</label>
              <select
                id="due-date-filter"
                value={filter.dueDate}
                onChange={handleDueDateChange}
                className="filter-select"
              >
                <option value="all">All Dates</option>
                <option value="today">Today</option>
                <option value="overdue">Overdue</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>
          </div>

          <div className="filter-actions">
            <button
              onClick={clearFilters}
              className="clear-filters-btn"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;
