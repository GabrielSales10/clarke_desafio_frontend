const buscarFornecedores = async (consumo) => {
    console.log("🔍 Enviando requisição para o backend com consumo:", consumo);
  
    try {
      const response = await fetch("https://clarkedesafiobackend-production.up.railway.app/consumo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ consumo_mensal: Number(consumo) }),
      });
  
      console.log("📡 Resposta recebida:", response);
  
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("📨 Dados do backend:", data);
  
      if (data.fornecedores) {
        setFornecedores(data.fornecedores);
        console.log("✅ Lista de fornecedores atualizada:", data.fornecedores);
      } else {
        console.error("⚠️ Resposta inesperada do backend:", data);
      }
    } catch (error) {
      console.error("❌ Erro ao buscar fornecedores:", error);
    }
  };

  