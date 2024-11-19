import React from 'react';
import PropTypes from 'prop-types'; // Certifique-se de importar o PropTypes

// Se você já importou ErrorMessage em algum lugar, renomeie a constante para evitar o conflito:
const CustomErrorMessage = ({ children }) => {
  return <div className="error-message">{children}</div>;
};

CustomErrorMessage.propTypes = {
  children: PropTypes.node, // Permite qualquer tipo de nó React
};

export default CustomErrorMessage; // Exportando com o nome correto
