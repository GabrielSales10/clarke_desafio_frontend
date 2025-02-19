import React, { useState } from 'react';
import './TabelaFornecedores.css'; 

const TabelaFornecedores = ({ fornecedores, buscaRealizada }) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [selectedFornecedor, setSelectedFornecedor] = useState(null);

  const handleRowClick = (fornecedor) => {
    setSelectedFornecedor(fornecedor);
  };

  const handleClosePopup = () => {
    setSelectedFornecedor(null);
  };

  const styles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
      textAlign: 'center',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    tableHeader: {
      backgroundColor: '#007BFF',
      color: '#fff',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '600',
      fontSize: '1.1rem',
    },
    tableRow: {
      borderBottom: '1px solid #ddd',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    tableRowHover: {
      backgroundColor: '#e0e0e0',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',  
    },
    logo: {
      borderRadius: '50%',
      width: '30px',
    },
    noData: {
      textAlign: 'center',
      fontStyle: 'italic',
      color: '#777',
      fontSize: '1rem',
    },
    modal: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '999',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
      maxWidth: '500px',
      width: '100%',
      transition: 'transform 0.3s ease',
    },
    closeButton: {
      backgroundColor: '#007BFF',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      marginTop: '20px',
      transition: 'background-color 0.3s ease',
    },
    closeButtonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th>Logo</th>
            <th>Nome</th>
            <th>Estado</th>
            <th>Custo por kWh</th>
            <th>Limite Mínimo (kWh)</th>
            <th>Nº de Clientes</th>
            <th>Avaliação Média</th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.length > 0 ? (
            fornecedores.map((fornecedor, index) => (
              <tr
                key={index}
                style={{
                  ...styles.tableRow,
                  ...(hoveredRow === index ? styles.tableRowHover : {}),
                }}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => handleRowClick(fornecedor)} 
              >
                <td><img src={`https://clarkedesafiobackend-production.up.railway.app${fornecedor.logo}`} alt={fornecedor.nome} style={styles.logo} /></td>
                <td>{fornecedor.nome}</td>
                <td>{fornecedor.estado}</td>
                <td>R$ {Number(fornecedor.custo_kwh).toFixed(2)}</td>
                <td>{fornecedor.limite_min_kwh}</td>
                <td>{fornecedor.num_clientes}</td>
                <td>{fornecedor.avaliacao_media} ⭐</td>
              </tr>
            ))
          ) : (
            buscaRealizada && (
              <tr>
                <td colSpan="7" style={styles.noData}>Nenhum fornecedor encontrado.</td>
              </tr>
            )
          )}
        </tbody>
      </table>

      {/* Pop-up para exibir o fornecedor selecionado */}
      {selectedFornecedor && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>Parabéns!</h2>
            <p>Você escolheu o fornecedor <strong>{selectedFornecedor.nome}</strong>!</p>
            <button onClick={handleClosePopup} style={styles.closeButton}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabelaFornecedores;
