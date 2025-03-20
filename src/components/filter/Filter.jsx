import PropTypes from 'prop-types';
import './Filter.css';

export default function Filter({ value, onFilterChange }) {
  return (
    <div className="filter">
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => onFilterChange(e.target.value)}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
