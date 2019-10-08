import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../action/techAction';

const TechItem = ({ tech: { id, firstname, lastname }, deleteTech }) => {
  const onClick = () => {
    deleteTech(id);
    M.toast({ html: `Technician Deleted` });
  };

  return (
    <li className="collection-item">
      <div>
        {firstname} {lastname}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" onClick={onClick}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTech }
)(TechItem);
