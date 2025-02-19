import React, { useState } from "react";
import ConsumoForm from "./components/ConsumoForm";
import TabelaFornecedores from "./components/TabelaFornecedores";

function App() {
  const [fornecedores, setFornecedores] = useState([]);
  const [consumo, setConsumo] = useState(""); 
  const [buscaRealizada, setBuscaRealizada] = useState(false); 

  const buscarFornecedores = async (consumo) => {
    setBuscaRealizada(true); 
    try {
      const response = await fetch("https://clarkedesafiobackend-production.up.railway.app/consumo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ consumo_mensal: Number(consumo) }),
      });

      const data = await response.json();
      setFornecedores(data.fornecedores); 
    } catch (error) {
      console.error("Erro ao buscar fornecedores:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <ConsumoForm onBuscar={buscarFornecedores} />
        <h3 style={styles.header}>Fornecedores disponíveis:</h3>
        <TabelaFornecedores fornecedores={fornecedores} buscaRealizada={buscaRealizada} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f7f7f7', 
    minHeight: '100vh',
    padding: '50px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    maxWidth: '1200px',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    padding: '30px',
  },
  header: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
  },
};

export default App;
