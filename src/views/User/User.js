import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Users</h4>
            <p className={classes.cardCategoryWhite}>
              List of all registered users
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "Name",
                "E-mail",
                "Subcription Type",
                "Insurance type",
                "Profile",
              ]}
              tableData={[
                ["Dakota Rice", "Niger@gmail.com", "Guest", "car", "View"],
                ["Minerva Hooper", "Cura@gmail.com", "Silver", "car", "View"],
                ["Sage Rodriguez", "Neth@gmail.com", "Gold", "car", "View"],
                ["Philip Chaney", "Kore@gmail.com", "Platinum", "car", "View"],
                ["Doris Greene", "Malcom", "Gold", "car", "View"],
                ["Mason Porter", "Chil@gmail.com", "car", "Silver", "View"],
                ["Philip Chaney", "Kore@gmail.com", "car", "Platinum", "View"],
                ["Doris Greene", "Malcom", "Gold", "car", "View"],
                ["Mason Porter", "Chil@gmail.com", "Silver", "View"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
