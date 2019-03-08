import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ type='button',mail, name, checked = false, onChange }) => (
  <input type={type} value='More info..' mail={mail} name={name} checked={checked} onChange={onChange} />
);

Detail.propTypes = {
  //mail : PropTypes.string,
  type: PropTypes.string,
  //name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Detail;