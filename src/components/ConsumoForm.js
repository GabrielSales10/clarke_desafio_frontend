import React, { useState } from "react";

const ConsumoForm = ({ onBuscar }) => {
  const [consumo, setConsumo] = useState("");
  const [hovered, setHovered] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consumo || consumo <= 0) {
      alert("Insira um consumo válido!");
      return;
    }
    onBuscar(consumo);
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.title}>Escolha seu Fornecedor de Energia</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="number"
          placeholder="Digite seu consumo mensal (kWh)"
          value={consumo}
          onChange={(e) => setConsumo(e.target.value)}
          style={styles.input}
        />
        <button
          type="submit"
          style={hovered ? styles.buttonHover : styles.button} 
          onMouseEnter={() => setHovered(true)} 
          onMouseLeave={() => setHovered(false)} 
        >
          Buscar Fornecedores
        </button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.7rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexDirection: 'column',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    width: '300px',
    boxSizing: 'border-box',
  },
  button: {
    padding: '12px 25px',
    borderRadius: '8px',
    backgroundColor: '#007BFF',
    color: 'white',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    padding: "12px 25px",
    borderRadius: "8px",
    backgroundColor: "#0056b3", 
    color: "white",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    transform: "scale(1.05)", 
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
};

export default ConsumoForm;
