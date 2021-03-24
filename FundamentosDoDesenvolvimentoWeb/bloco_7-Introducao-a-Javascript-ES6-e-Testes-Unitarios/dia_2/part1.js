const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = () => {
  return `Olá ${order.name}, entrega para: ${order.order.delivery.deliveryPerson}, telefone: ${order.phoneNumber}, R.${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}`
};

console.log(customerInfo());

const newType = {
  type: 'margherita',
};

order.order.delivery.deliveryPerson = 'Luiz Silva';

const orderModifier = () => {
  Object.assign(order, newType);
  order.order.drinks.price = '15';
  return `Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${order.type} e ${order.order.drinks.coke.type} é ${order.order.drinks.price + order.order.pizza.margherita.price}`;
};

console.log(orderModifier());
