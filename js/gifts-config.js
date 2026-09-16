/*
  ============================================================
  LISTA DE PRESENTES
  ============================================================
  Este arquivo existe separado para você duplicar o template sem
  precisar procurar presentes pelo HTML.

  IMPORTANTE:
  - Os QR Codes incluídos são APENAS DEMONSTRATIVOS.
  - Antes de publicar para um casal real, substitua cada `qrImage`
    por um QR PIX verdadeiro ou adapte a integração de pagamento.
  - Fotos podem ser JPG, PNG, WebP ou SVG.
*/

window.GIFT_LIST_CONFIG = {
  title: "Lista de presentes",
  eyebrow: "Um carinho, se você quiser",
  intro: "Sua presença é o que mais importa. Para quem também quiser contribuir com a nossa nova fase, preparamos algumas ideias simbólicas.",
  notice: "Valores e QR Codes desta demonstração são fictícios. Nenhum QR abaixo realiza um pagamento real.",
  currency: "BRL",
  payment: {
    mode: "demo",
    receiverName: "Liliane & Igor",
    pixKey: "",
    instructions: "Em um projeto real, substitua o QR demonstrativo pelo QR PIX correspondente ao valor escolhido."
  },
  categories: [
    { id: "all", label: "Todos" },
    { id: "casa", label: "Casa" },
    { id: "experiencias", label: "Experiências" },
    { id: "lua-de-mel", label: "Lua de mel" }
  ],
  items: [
    {
      id: "cafe-da-manha",
      title: "Café da manhã dos recém-casados",
      category: "casa",
      price: 89,
      description: "Um começo de dia com café fresco e nenhuma pressa.",
      image: "assets/images/gifts/cafe-da-manha.jpg",
      qrImage: "assets/images/qr/cafe-da-manha.png"
    },
    {
      id: "jogo-de-tacas",
      title: "Jogo de taças para brindar",
      category: "casa",
      price: 129,
      description: "Para os brindes dos próximos capítulos.",
      image: "assets/images/gifts/jogo-de-tacas.jpg",
      qrImage: "assets/images/qr/jogo-de-tacas.png"
    },
    {
      id: "kit-fondue",
      title: "Noite de fondue em casa",
      category: "experiencias",
      price: 159,
      description: "Uma noite gostosa para inaugurar a vida a dois.",
      image: "assets/images/gifts/kit-fondue.jpg",
      qrImage: "assets/images/qr/kit-fondue.png"
    },
    {
      id: "jantar-a-dois",
      title: "Jantar romântico a dois",
      category: "experiencias",
      price: 219,
      description: "Uma mesa bonita, boa conversa e um novo motivo para celebrar.",
      image: "assets/images/gifts/jantar-a-dois.jpg",
      qrImage: "assets/images/qr/jantar-a-dois.png"
    },
    {
      id: "cama-mesa-banho",
      title: "Kit cama, mesa e banho",
      category: "casa",
      price: 279,
      description: "Um carinho simbólico para a nova casa.",
      image: "assets/images/gifts/cama-mesa-banho.jpg",
      qrImage: "assets/images/qr/cama-mesa-banho.png"
    },
    {
      id: "air-fryer",
      title: "Air fryer da casa nova",
      category: "casa",
      price: 349,
      description: "Para as receitas rápidas — e os domingos preguiçosos.",
      image: "assets/images/gifts/air-fryer.jpg",
      qrImage: "assets/images/qr/air-fryer.png"
    },
    {
      id: "mala-de-viagem",
      title: "Mala para novas viagens",
      category: "casa",
      price: 399,
      description: "Para carregar memórias dos próximos destinos.",
      image: "assets/images/gifts/mala-de-viagem.jpg",
      qrImage: "assets/images/qr/mala-de-viagem.png"
    },
    {
      id: "experiencia-gastronomica",
      title: "Experiência gastronômica",
      category: "experiencias",
      price: 449,
      description: "Um jantar especial durante uma das nossas próximas aventuras.",
      image: "assets/images/gifts/experiencia-gastronomica.jpg",
      qrImage: "assets/images/qr/experiencia-gastronomica.png"
    },
    {
      id: "passeio-lua-de-mel",
      title: "Passeio na lua de mel",
      category: "lua-de-mel",
      price: 249,
      description: "Uma experiência para descobrir o destino juntos.",
      image: "assets/images/gifts/passeio-lua-de-mel.jpg",
      qrImage: "assets/images/qr/passeio-lua-de-mel.png"
    },
    {
      id: "jantar-lua-de-mel",
      title: "Jantar especial na lua de mel",
      category: "lua-de-mel",
      price: 329,
      description: "Uma noite especial durante a viagem dos recém-casados.",
      image: "assets/images/gifts/jantar-lua-de-mel.jpg",
      qrImage: "assets/images/qr/jantar-lua-de-mel.png"
    },
    {
      id: "diaria-hotel",
      title: "Uma diária da lua de mel",
      category: "lua-de-mel",
      price: 489,
      description: "Ajude a transformar uma noite da viagem em uma lembrança inesquecível.",
      image: "assets/images/gifts/diaria-hotel.jpg",
      qrImage: "assets/images/qr/diaria-hotel.png"
    },
    {
      id: "passeio-barco",
      title: "Passeio de barco",
      category: "lua-de-mel",
      price: 549,
      description: "Uma cota simbólica para um dia diferente durante a viagem.",
      image: "assets/images/gifts/passeio-barco.jpg",
      qrImage: "assets/images/qr/passeio-barco.png"
    },
    {
      id: "upgrade-quarto",
      title: "Upgrade do quarto",
      category: "lua-de-mel",
      price: 699,
      description: "Um pouco mais de conforto para começar a viagem em grande estilo.",
      image: "assets/images/gifts/upgrade-quarto.jpg",
      qrImage: "assets/images/qr/upgrade-quarto.png"
    },
    {
      id: "fim-de-semana",
      title: "Fim de semana especial",
      category: "experiencias",
      price: 799,
      description: "Uma pausa a dois depois da maratona do casamento.",
      image: "assets/images/gifts/fim-de-semana.jpg",
      qrImage: "assets/images/qr/fim-de-semana.png"
    },
    {
      id: "cota-especial",
      title: "Cota especial dos nossos sonhos",
      category: "lua-de-mel",
      price: 999,
      description: "Uma contribuição livre para os planos que queremos viver juntos.",
      image: "assets/images/gifts/cota-especial.jpg",
      qrImage: "assets/images/qr/cota-especial.png"
    }
  ]
};
