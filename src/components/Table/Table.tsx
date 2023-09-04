import React, { useState } from 'react';
import { DataTable } from 'react-native-paper';

type Column = {
  title: string;
}
type Item = {
  key: number;
  name: string;
  value: string;
}

type TableData = {
  columns: Column[];
  items: Item[]
}

const Table = ({ data }: { data: TableData }) => {

  return (
    <DataTable>
      <DataTable.Header>
        {data.columns.map(column => <DataTable.Title>{column.title}</DataTable.Title>)}
      </DataTable.Header>

      {data.items.map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.value}</DataTable.Cell>
        </DataTable.Row>
      ))}

    </DataTable>
  );
};

export default Table;