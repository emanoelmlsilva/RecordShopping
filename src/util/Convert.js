function convertDataToObjectDetail(data) {
  const newList = [];
  const choiceDate = [];

  data.shopping.forEach((item) => {
    const objectShoppingStore = {
      date: "",
      month: "",
      store: "",
      ShoppingStores: [],
    };
    if (choiceDate.indexOf(item.date) === -1 && item.date !== "") {
      const separateData = item.date.split(" ");
      [objectShoppingStore.date, objectShoppingStore.month] = separateData;
      objectShoppingStore.store = item.store;
      data.shopping.map((item2) => {
        const objectShopping = {
          product: "",
          category: "",
          amount: 0,
          price: 0.0,
        };
        if (item.date === item2.date) {
          objectShopping.product = item.name;
          objectShopping.category = item.category;
          objectShopping.amount = item.payment.amount;
          objectShopping.price = item.payment.price;
          objectShoppingStore.ShoppingStores.push(objectShopping);
        }
        return true;
      });

      objectShoppingStore.store = item.store;
      choiceDate.push(item.date);
      newList.push(objectShoppingStore);
    }
  });

  return newList;
}

export default convertDataToObjectDetail;
