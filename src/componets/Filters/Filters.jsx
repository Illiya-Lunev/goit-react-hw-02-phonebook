import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

export default function Filter({ onChange, value }) {
    const filterId = uuidv4();

    return <div>
        <label htmlFor={filterId}> Find contacts by name:</label>
        <input
            type="text"
            name="filter"
            value={value}
            id={filterId}
            onChange={onChange}
        />
      
    </div>
    
}

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};