/**
 * Utility functions for localStorage operations
 * Handles saving and loading Redux state to/from localStorage
 */

const STORAGE_KEY = 'todo_app_state';

/**
 * Load state from localStorage
 * @returns {Object|undefined} Parsed state object or undefined if not found
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return undefined; // Let reducers initialize with default state
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return undefined;
  }
};

/**
 * Save state to localStorage
 * @param {Object} state - Redux state to save
 */
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
};

/**
 * Clear saved state from localStorage
 */
export const clearState = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing state from localStorage:', error);
  }
};