import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { GridWrap } from "./InfoTable.styles";

const InfoTable = ({ rows, columns }) => {
  return (
    <GridWrap>
      <DataGrid
        height="55vh"
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </GridWrap>
  );
};

export default InfoTable;
