import React from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid

const Table = () => {
  const data = [
    { name: 'Dan', age: 20 },
    { name: 'Max', age: 30 },
    { name: 'David', age: 23 },
    { name: 'Dan', age: 20 }
  ];
  const columns = [
    {
      headerName: 'Name',
      field: 'name',
      checkboxSelection: true
    },
    {
      headerName: 'Age',
      field: 'age'
    }
  ];

  const defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
    floatingFilter: true,
    flex: 1
  };

  let gridApi;
  const onGridReady = (params) => {
    gridApi = params.api;
  };
  const onExportClick = () => {
    gridApi?.exportDataAsCsv();
  };

  return (
    <>
      <button onClick={onExportClick}>Export</button>
      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500 }} // the grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={data}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        />
      </div>
    </>
  );
};

export default Table;
