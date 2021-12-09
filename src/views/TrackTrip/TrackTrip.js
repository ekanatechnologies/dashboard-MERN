import React, { useState, useEffect } from "react";
// @material-ui/core components
import { useLocation } from "react-router";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardBody from "components/Card/CardBody.js";
import MaterialTable from "material-table";
import column from "./column";
import axios from "axios";



export default function TableList() {

  const [resData, setResData] = useState();
  const location = useLocation().pathname;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'demo.com'
      );

      setResData(data);
    };
    getData();
  }, [location]);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <MaterialTable
          title="Trip Tracking Records"
          columns={column}
          data={resData}
          options={{
            selection: true,
            filtering: true,
            filterCellStyle: { backgroundColor: "#fff" },
            headerStyle: {
              backgroundColor: "#3f51b5",
              color: "#FFF",
              fontSize: "17px",
              textAlign: "center",
              fontWeight: "bold",
            },
            rowStyle: {
              backgroundColor: "#EEE",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              fontWeight: "bold",
            },
          }}
          actions={[
            {
              tooltip: "Remove All Selected Users",
              icon: "delete",
              onClick: (evt, data) => console.log(data),
            },
          ]}
          onSelectionChange={(rows) => alert(rows)}
        />
      </GridItem>
    </GridContainer>
  );
}
