// import EditIcon from "@material-ui/icons/Edit";
// import React from 'react'

// import { Button, Avatar } from "@material-ui/core";
// import AvatarGroup from "@material-ui/core/Avatar";

const columns = [
    {
        title: "AgentId/UserId",
        field: "agentId",
        cellStyle: {
            textAlign: "center",
        },
    },
    {
        title: "Start Point",
        field: "start_address",
        cellStyle: {
            textAlign: "center",
        },
    },
    {
        title: "End Point",
        field: "end_address",
        cellStyle: {
            textAlign: "center",
        },
    },
    {
        title: "Total Covered Distance",
        field: "total_miles",
        cellStyle: {
            textAlign: "center",
        },
    },
    {
        title: "Fuel cost",
        field: "fuel_cost",
    },
    {
        title: "Purpose of Trip",
        field: "trip_purpose",
    },
];
export default columns;
