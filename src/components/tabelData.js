const tableData = {
  orders: [
    [
      "Номер заявки",
      "Координаты ОТ lat",
      "Координаты ОТ lng",
      "Координаты ДО lat",
      "Координаты ДО lng",
    ],
    ["№1", 59.84660399, 30.29496392, 59.82934196, 30.42423701],
    ["№2", 59.82934196, 30.42423701, 59.82761295, 30.41705607],
    ["№3", 59.83567701, 30.38064206, 59.84660399, 30.29496392],
    ["№4", 59.84660399, 30.29496392, 59.82761295, 30.41705607],
    ["№5", 59.83567701, 30.38064206, 59.84660399, 30.29496392],
  ],
  columnsName: ["key", "name", "fromLat", "fromLng", "toLat", "toLng"],
  columnsWidth: [20, 30, 30, 30, 30],
};

const { orders, columnsName, columnsWidth } = tableData;
let dataSource = [];
let columns = [];

orders.forEach((order, i) => {
  // columns
  if (i === 0) {
    order.forEach((value, i) => {
      columns.push({
        title: value,
        dataIndex: columnsName[i + 1],
        key: columnsName[i + 1],
        width: columnsWidth[i],
      });
    });
  }

  // dataSource
  if (i !== 0) {
    let obj = {};
    obj[columnsName[0]] = i;
    order.map((value, i) => (obj[columnsName[i + 1]] = value));
    dataSource.push(obj);
  }
});

export { dataSource, columns };
