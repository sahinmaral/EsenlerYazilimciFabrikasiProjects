import React from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";

function CurrencyTable() {
  const { currencies, filtered } = useSelector((state) => state.crypto);

  const columns = [
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Price (USD)",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) =>
      a.price - b.price,
    },
    {
      title: "Exchange rate (USD/24hr)",
      dataIndex: "twentyfour_hours_percent_change",
      key: "twentyfour_hours_percent_change",
      sorter: (a, b) =>
        a.twentyfour_hours_percent_change - b.twentyfour_hours_percent_change,
    },
  ];

  const dataSource = currencies.map((currency) => {
    return {
      key: currency.id,
      symbol: (
        <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} alt={currency.id} />
      ),
      name: currency.name,
      price: currency.quote.USD.price,
      twentyfour_hours_percent_change: (
        <p className={`price ${currency.quote.USD.percent_change_24h > 0 ? "asc" : "desc"}`}>{currency.quote.USD.percent_change_24h}%</p>
      ),
    };
  });

  return (
    <>
      <Table
        pagination={{
          position: ["bottomCenter"],
        }}
        scroll={{
          y: 550,
        }}
        dataSource={dataSource.filter((data) =>
          data.name.toLowerCase().includes(filtered.name.toLowerCase())
        )}
        columns={columns}
      />
    </>
  );
}

export default CurrencyTable;
