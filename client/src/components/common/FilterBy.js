import React from "react";
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { faHeart, faCheck } from "@fortawesome/free-solid-svg-icons";
import filters from "./constants";

const FilterBy = ({ filterBy, onSelect }) => (
  <DropdownButton
    as={ButtonGroup}
    menuAlign="left"
    title={`Filter By: ${filterBy}`}
  >
    {filters.map((filter) => (
      <Dropdown.Item
        key={uuidv4()}
        eventKey={filter}
        onSelect={(e) => onSelect(e)}
      >
        {filter}
      </Dropdown.Item>
    ))}
  </DropdownButton>
);

export default FilterBy;

FilterBy.propTypes = {
  filterBy: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
