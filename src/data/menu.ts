export type Category = 'Burgers' | 'Combos' | 'Acompanhamentos' | 'Bebidas' | 'Sobremesas';
export type Product = { id: number; name: string; description: string; ingredients: string[]; price: number; category: Category; image: string; tag?: string };
const photo = (id: string, width = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
export const categories: Category[] = ['Burgers', 'Combos', 'Acompanhamentos', 'Bebidas', 'Sobremesas'];
export const products: Product[] = [
  { id: 1, name: 'Space Classic', description: 'O clássico que colocou a Space Burger em órbita.', ingredients: ['Pão brioche', 'Blend da casa 160g', 'Queijo prato', 'Molho Space'], price: 32, category: 'Burgers', image: photo('photo-1568901346375-23c9450c58cd'), tag: 'O favorito' },
  { id: 2, name: 'Meteor Bacon', description: 'Uma chuva de sabor, com bacon crocante de verdade.', ingredients: ['Pão brioche', 'Blend da casa 160g', 'Cheddar', 'Bacon artesanal', 'Cebola caramelizada'], price: 39, category: 'Burgers', image: photo('photo-1553979459-d2229ba7433a'), tag: 'Mais pedido' },
  { id: 3, name: 'Lunar Crispy', description: 'Crocância dourada e frescor em perfeita harmonia.', ingredients: ['Pão australiano', 'Frango crocante', 'Queijo prato', 'Alface', 'Maionese de ervas'], price: 35, category: 'Burgers', image: photo('photo-1606755962773-d324e0a13086') },
  { id: 4, name: 'Orbit Melt', description: 'Queijo derretido em uma órbita sem volta.', ingredients: ['Pão brioche', 'Blend da casa 160g', 'Duplo cheddar', 'Cebola crispy', 'Molho da casa'], price: 37, category: 'Burgers', image: photo('photo-1550547660-d9450f859349') },
  { id: 5, name: 'Combo Galáctico', description: 'Seu burger favorito, com acompanhamento e bebida.', ingredients: ['Space Classic', 'Fritas crocantes', 'Refrigerante 350ml'], price: 47, category: 'Combos', image: photo('photo-1571091718767-18b5b1457add'), tag: 'Vale a viagem' },
  { id: 6, name: 'Combo Meteor', description: 'Uma combinação para quem chega com fome.', ingredients: ['Meteor Bacon', 'Fritas crocantes', 'Bebida 350ml'], price: 54, category: 'Combos', image: photo('photo-1561758033-d89a9ad46330') },
  { id: 7, name: 'Cosmic Fries', description: 'Fritas sequinhas com páprica e molho Space.', ingredients: ['Batata crocante', 'Páprica defumada', 'Molho Space'], price: 18, category: 'Acompanhamentos', image: photo('photo-1573080496219-bb080dd4f877') },
  { id: 8, name: 'Onion Rings', description: 'Anéis de cebola empanados e dourados na hora.', ingredients: ['Cebola', 'Empanado crocante', 'Molho barbecue'], price: 20, category: 'Acompanhamentos', image: photo('photo-1639024471283-03518883512d') },
  { id: 9, name: 'Milkshake de Chocolate', description: 'Cremoso, intenso e coberto de chocolate.', ingredients: ['Sorvete cremoso', 'Leite', 'Chocolate'], price: 19, category: 'Bebidas', image: photo('photo-1572490122747-3968b75cc699') },
  { id: 10, name: 'Limonada da Casa', description: 'Refrescante, feita com limão espremido na hora.', ingredients: ['Limão fresco', 'Água', 'Gelo'], price: 12, category: 'Bebidas', image: photo('photo-1513558161293-cdaf765edfd7') },
  { id: 11, name: 'Brownie de Órbita', description: 'Brownie de chocolate com casquinha e centro macio.', ingredients: ['Chocolate', 'Manteiga', 'Cacau'], price: 16, category: 'Sobremesas', image: photo('photo-1606313564200-e75d5e30476c') },
  { id: 12, name: 'Milkshake de Morango', description: 'Morangos e sorvete batidos na medida certa.', ingredients: ['Morango', 'Sorvete cremoso', 'Leite'], price: 19, category: 'Sobremesas', image: photo('photo-1579954115563-e72bf1381629') },
];

