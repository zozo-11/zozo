const menu = [
  { name: 'Big Mac', price: 5.0 },
  { name: 'McChicken', price: 4.5 },
  { name: 'Frites', price: 2.0 },
  { name: 'Soda', price: 1.5 },
  { name: 'Salade', price: 3.0 }
];

let total = 0;

function renderMenu() {
  const menuDiv = document.getElementById('menu');
  menuDiv.innerHTML = '';
  menu.forEach((item, index) => {
    const button = document.createElement('button');
    button.textContent = `${item.name} - ${item.price.toFixed(2)}€`;
    button.onclick = () => addItem(index);
    menuDiv.appendChild(button);
  });

  renderAdminList();
}

function addItem(index) {
  const item = menu[index];
  const orderList = document.getElementById('order-list');
  const li = document.createElement('li');
  li.textContent = `${item.name} - ${item.price.toFixed(2)}€`;
  orderList.appendChild(li);

  total += item.price;
  document.getElementById('total').textContent = `Total : ${total.toFixed(2)}€`;
}

function addMenuItem() {
  const name = document.getElementById('new-item-name').value.trim();
  const price = parseFloat(document.getElementById('new-item-price').value);
  if (name && !isNaN(price)) {
    menu.push({ name, price });
    renderMenu();
    document.getElementById('new-item-name').value = '';
    document.getElementById('new-item-price').value = '';
  }
}

function removeItem(index) {
  menu.splice(index, 1);
  renderMenu();
}

function renderAdminList() {
  const list = document.getElementById('admin-menu-list');
  list.innerHTML = '';
  menu.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price.toFixed(2)}€`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Supprimer';
    removeBtn.onclick = () => removeItem(index);
    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}

function toggleAdmin() {
  const panel = document.getElementById('admin-panel');
  panel.classList.toggle('hidden');
}

window.onload = renderMenu;
