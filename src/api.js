const buscarFornecedores = async (consumo) => {
  console.log("🔍 Mockando dados para consumo:", consumo);

  const fornecedoresMockados = [
    { nome: "BMW", logo: "/assets/images/BMW.png", estado: "SP", custo_kwh: 0.5, limite_min_kwh: 10000, num_clientes: 1200, avaliacao_media: 4.5 },
    { nome: "Google", logo: "/assets/images/Google.png", estado: "RJ", custo_kwh: 0.7, limite_min_kwh: 20000, num_clientes: 800, avaliacao_media: 4.0 },
    { nome: "McDonalds", logo: "/assets/images/McDonalds.png", estado: "MG", custo_kwh: 0.6, limite_min_kwh: 5000, num_clientes: 1500, avaliacao_media: 4.8 },
    { nome: "Apple", logo: "/assets/images/Apple.png", estado: "SP", custo_kwh: 0.8, limite_min_kwh: 1000, num_clientes: 1000, avaliacao_media: 4.7 },
    { nome: "Nike", logo: "/assets/images/Nike.png", estado: "RJ", custo_kwh: 0.6, limite_min_kwh: 8000, num_clientes: 1200, avaliacao_media: 4.4 },
    { nome: "Coca-Cola", logo: "/assets/images/Coca-Cola.png", estado: "MG", custo_kwh: 0.5, limite_min_kwh: 2000, num_clientes: 2000, avaliacao_media: 4.9 },
    { nome: "Samsung", logo: "/assets/images/Samsung.png", estado: "SP", custo_kwh: 0.9, limite_min_kwh: 30000, num_clientes: 900, avaliacao_media: 4.6 },
    { nome: "Microsoft", logo: "/assets/images/Microsoft.png", estado: "RJ", custo_kwh: 0.7, limite_min_kwh: 2500, num_clientes: 1500, avaliacao_media: 4.3 },
    { nome: "Pepsi", logo: "/assets/images/Pepsi.png", estado: "MG", custo_kwh: 0.55, limite_min_kwh: 7000, num_clientes: 1800, avaliacao_media: 4.8 },
    { nome: "Amazon", logo: "/assets/images/Amazon.png", estado: "SP", custo_kwh: 0.75, limite_min_kwh: 4800, num_clientes: 1100, avaliacao_media: 4.7 },
    { nome: "Tesla", logo: "/assets/images/Tesla.png", estado: "RJ", custo_kwh: 0.85, limite_min_kwh: 7400, num_clientes: 1300, avaliacao_media: 4.6 },
  ];
  

  const fornecedoresFiltrados = fornecedoresMockados.filter(
    (fornecedor) => consumo >= fornecedor.limite_min_kwh
  );

  console.log("📨 Dados mockados retornados:", fornecedoresFiltrados);
  return fornecedoresFiltrados;
};

export default buscarFornecedores;