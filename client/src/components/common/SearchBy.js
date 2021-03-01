import React from 'react';
import PropTypes from 'prop-types';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const SearchBy = ({ options, onChange }) => (
  <>
    <Typeahead
      id="search-by"
      options={options}
      placeholder="Enter a character to filter down"
      onChange={(e) => onChange(e)}
      clearButton
    />
  </>
);

export default SearchBy;

SearchBy.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
