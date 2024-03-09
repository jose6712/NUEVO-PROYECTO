// Obtener la referencia al elemento de la lista de inventario
const inventoryList = document.getElementById('inventory-list');

// Array de objetos de juguetes
const toys = [
    { name: 'Muñeca', price: '$10', stock: 20 },
    { name: 'Carro de juguete', price: '$15', stock: 15 },
    { name: 'Rompecabezas', price: '$20', stock: 10 },
    // Puedes agregar más juguetes aquí
];

// Iterar sobre el array de juguetes y agregar cada uno a la lista de inventario
toys.forEach(toy => {
    const listItem = document.createElement('li');
    listItem.classList.add('item');
    listItem.innerHTML = `<strong>${toy.name}</strong> - Precio: ${toy.price} - Stock: ${toy.stock}`;
    inventoryList.appendChild(listItem);
});

