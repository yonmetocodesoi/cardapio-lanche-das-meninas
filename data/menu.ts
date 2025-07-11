export interface MenuItem {
  id: string
  name: string
  price: number
  description?: string
  requiresVegetableChoice?: boolean
  hasSubstitutionWarning?: boolean
}

export interface MenuSection {
  id: string
  title: string
  emoji: string
  description?: string
  items: MenuItem[]
}

export const menuData: MenuSection[] = [
  {
    id: "sanduiches",
    title: "SANDUÍCHES",
    emoji: "🍔",
    description: "Todos acompanham alface, tomate, batata palha e milho",
    items: [
      { id: "sanduiche-ovo", name: "Sanduíche de Ovo", price: 7.5, requiresVegetableChoice: true },
      { id: "sanduiche-queijo", name: "Sanduíche de Queijo", price: 7.5, requiresVegetableChoice: true },
      { id: "sanduiche-misto", name: "Sanduíche Misto", price: 8.0, requiresVegetableChoice: true },
      { id: "sanduiche-presunto", name: "Sanduíche de Presunto", price: 8.0, requiresVegetableChoice: true },
      { id: "hamburguer", name: "Hambúrguer", price: 8.0, requiresVegetableChoice: true },
      { id: "x-calabresa", name: "X-Calabresa", price: 9.0, requiresVegetableChoice: true },
      {
        id: "x-calabresa-carne-queijo",
        name: "X-Calabresa, Carne e Queijo",
        price: 10.0,
        requiresVegetableChoice: true,
      },
      { id: "x-burguer", name: "X-Burguer", price: 10.0, requiresVegetableChoice: true },
      { id: "x-egg", name: "X-Egg", price: 10.0, requiresVegetableChoice: true },
      { id: "x-ovo-queijo", name: "X-Ovo e Queijo", price: 10.0, requiresVegetableChoice: true },
      { id: "x-burguer-bacon", name: "X-Burguer Bacon", price: 12.0, requiresVegetableChoice: true },
      { id: "bauru", name: "Bauru", price: 12.0, requiresVegetableChoice: true },
      { id: "americano", name: "Americano", price: 12.0, requiresVegetableChoice: true },
      { id: "x-presunto-queijo-ovo", name: "X-Presunto, Queijo e Ovo", price: 12.0, requiresVegetableChoice: true },
      { id: "x-salsicha", name: "X-Salsicha", price: 12.0, requiresVegetableChoice: true },
      { id: "x-frango", name: "X-Frango", price: 12.0, requiresVegetableChoice: true },
      { id: "x-frango-queijo", name: "X-Frango e Queijo", price: 13.0, requiresVegetableChoice: true },
      { id: "x-frango-bacon", name: "X-Frango Bacon", price: 13.0, requiresVegetableChoice: true },
      { id: "x-frango-bacon-queijo", name: "X-Frango, Bacon e Queijo", price: 14.0, requiresVegetableChoice: true },
      { id: "extra-frango", name: "Extra Frango", price: 14.0, requiresVegetableChoice: true },
      { id: "extra-bacon", name: "Extra Bacon", price: 13.5, requiresVegetableChoice: true },
      {
        id: "extra-tudo",
        name: "Extra Tudo",
        price: 19.0,
        description: "Frango, Presunto, Salsicha, Calabresa e Presunto",
        requiresVegetableChoice: true,
      },
      {
        id: "completo",
        name: "Completo",
        price: 13.0,
        description: "Carne, Queijo, Presunto, Salsicha, Calabresa",
        requiresVegetableChoice: true,
      },
      {
        id: "x-frango-egg",
        name: "X-Frango Egg",
        price: 15.0,
        description: "Frango, Queijo e Ovo",
        requiresVegetableChoice: true,
      },
      {
        id: "moda-casa",
        name: "À Moda da Casa",
        price: 15.0,
        description: "Carne, Queijo, Presunto, Salsicha e Ovo",
        requiresVegetableChoice: true,
      },
      {
        id: "cheddar-bacon",
        name: "Cheddar Bacon",
        price: 14.0,
        description: "Carne e Bacon",
        requiresVegetableChoice: true,
      },
    ],
  },
  {
    id: "pao-arabe",
    title: "PÃO ÁRABE",
    emoji: "🥙",
    description: "Todos acompanham batata palha, tomate, alface e milho",
    items: [
      { id: "arabe-x-burguer", name: "X-Burguer (Simples)", price: 14.0, requiresVegetableChoice: true },
      { id: "arabe-x-burguer-bacon", name: "X-Burguer Bacon", price: 15.0, requiresVegetableChoice: true },
      { id: "arabe-x-egg", name: "X-Egg", price: 15.0, requiresVegetableChoice: true },
      { id: "arabe-x-frango", name: "X-Frango", price: 15.0, requiresVegetableChoice: true },
      { id: "arabe-x-carne-sol", name: "X-Carne de Sol", price: 16.0, requiresVegetableChoice: true },
      { id: "arabe-x-burguer-especial", name: "X-Burguer Especial", price: 15.0, requiresVegetableChoice: true },
      { id: "arabe-x-carne-sol-especial", name: "X-Carne de Sol Especial", price: 17.0, requiresVegetableChoice: true },
      {
        id: "arabe-moda-casa",
        name: "À Moda da Casa",
        price: 17.0,
        description: "Frango, Queijo, Presunto, Salsicha, Ovo e Calabresa",
        requiresVegetableChoice: true,
      },
      {
        id: "arabe-lanche-meninas",
        name: "Lanche das Meninas",
        price: 17.0,
        description: "Carne, Bacon, Presunto, Salsicha e Ovo",
        requiresVegetableChoice: true,
      },
      { id: "arabe-filet-queijo", name: "Filet + Queijo", price: 17.0, requiresVegetableChoice: true },
      {
        id: "arabe-calabresa-carne-queijo",
        name: "Calabresa, Carne e Queijo",
        price: 17.0,
        requiresVegetableChoice: true,
      },
    ],
  },
  {
    id: "adicionais",
    title: "ADICIONAIS",
    emoji: "🧀",
    items: [
      { id: "adicional-ovo", name: "Ovo", price: 4.0 },
      { id: "adicional-carne", name: "Carne", price: 5.0 },
      { id: "adicional-bacon", name: "Bacon", price: 5.0 },
      { id: "adicional-presunto", name: "Presunto", price: 3.0 },
      { id: "adicional-queijo", name: "Queijo", price: 3.0 },
      { id: "adicional-salsicha", name: "Salsicha", price: 3.0 },
      { id: "adicional-calabresa", name: "Calabresa", price: 3.0 },
      { id: "adicional-catupiry", name: "Catupiry", price: 3.0 },
    ],
  },
  {
    id: "petiscos",
    title: "PETISCOS",
    emoji: "🍟",
    description: "⚠️ Caso não tenha mais o petisco escolhido, substituiremos pelo que tem na churrasqueira",
    items: [
      { id: "baiao-dois", name: "Baião de Dois", price: 10.0, hasSubstitutionWarning: true },
      { id: "baiao-cremoso", name: "Baião Cremoso", price: 12.0, hasSubstitutionWarning: true },
      { id: "batata-frita", name: "Batata Frita", price: 10.0, hasSubstitutionWarning: true },
      { id: "porcao-calabresa", name: "Porção de Calabresa", price: 12.0, hasSubstitutionWarning: true },
      { id: "batata-bacon-cheddar", name: "Batata + Bacon + Cheddar", price: 20.0, hasSubstitutionWarning: true },
      {
        id: "petisco-lanche-meninas",
        name: "Lanche das Meninas",
        price: 15.0,
        description: "3 Mini Pães, Mussarela, Presunto, Ovo, Bacon e Batata Frita",
        hasSubstitutionWarning: true,
      },
      {
        id: "escondidinho",
        name: "Escondidinho",
        price: 15.0,
        description: "Frango ou Carne de Sol",
        hasSubstitutionWarning: true,
      },
      {
        id: "mistao-reforcado",
        name: "Mistão Reforçado",
        price: 25.0,
        description: "Gado, Porco, Frango, Coração e Linguiça",
        hasSubstitutionWarning: true,
      },
    ],
  },
  {
    id: "bebidas",
    title: "BEBIDAS",
    emoji: "🍹",
    items: [
      { id: "agua-mineral", name: "Água Mineral", price: 3.0 },
      { id: "agua-coco", name: "Água de Coco", price: 5.0 },
      { id: "agua-tonica", name: "Água Tônica", price: 5.0 },
      // Refrigerantes Lata
      { id: "coca-lata", name: "Coca-Cola Lata", price: 5.0 },
      { id: "guarana-lata", name: "Guaraná Lata", price: 5.0 },
      { id: "fanta-uva-lata", name: "Fanta Uva Lata", price: 5.0 },
      { id: "fanta-laranja-lata", name: "Fanta Laranja Lata", price: 5.0 },
      // Refrigerantes 600ml
      { id: "coca-600ml", name: "Coca-Cola 600ml", price: 7.0 },
      { id: "guarana-600ml", name: "Guaraná 600ml", price: 7.0 },
      // Refrigerantes 1 Litro
      { id: "coca-1l", name: "Coca-Cola 1 Litro", price: 10.0 },
      { id: "cajuina-1l", name: "Cajuína 1 Litro", price: 10.0 },
      // Refrigerantes 2 Litros
      { id: "coca-2l", name: "Coca-Cola 2 Litros", price: 15.0 },
      { id: "cajuina-2l", name: "Cajuína 2 Litros", price: 15.0 },
      // Outras bebidas
      { id: "cerveja-lata", name: "Cerveja Lata", price: 5.0 },
      { id: "heineken", name: "Heineken", price: 9.0 },
      { id: "vodka-dose", name: "Vodka (dose)", price: 5.0 },
      { id: "dreher", name: "Dreher", price: 5.0 },
    ],
  },
  {
    id: "sucos",
    title: "SUCOS",
    emoji: "🍊",
    items: [
      { id: "sucos-grupo1", name: "Acerola, Abacaxi, Manga e Caju", price: 5.0 },
      { id: "sucos-grupo2", name: "Cajá, Maracujá, Laranja e Graviola", price: 6.0 },
      { id: "jarra-suco", name: "Jarra de Suco", price: 15.0 },
    ],
  },
  {
    id: "combos",
    title: "COMBOS",
    emoji: "🧃",
    items: [
      {
        id: "combo-lindinha",
        name: "Combo da Lindinha",
        price: 19.0,
        description: "1 X-Burguer + Lata + Batata Frita",
      },
      { id: "combo-docinho", name: "Combo da Docinho", price: 22.0, description: "1 Bauru + Lata + Batata Frita" },
      {
        id: "combo-florzinha",
        name: "Combo da Florzinha",
        price: 32.0,
        description: "1 Completo (Árabe) + Lata + Batata Frita",
      },
    ],
  },
]
