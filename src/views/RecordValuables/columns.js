import AvatarGroup from "@material-ui/core/Avatar";
import React from 'react'
import { Avatar } from "@material-ui/core";

const columns = [{
  title: "AgentId/UserId",
  field: "agentId",
  cellStyle: { textAlign: "center" },
},
{
  title: "Title",
  field: "title",
  cellStyle: {
    textAlign: "center",
  },
},
{
  title: "Image",
  render: (rowData) => {
    return (
      <div>
        <AvatarGroup max={3}>
          {rowData.imagePath.map((path, i) => (
            <Avatar key={i} src={path} />
          ))}
        </AvatarGroup>
      </div>
    );
  },
  cellStyle: {
    textAlign: "center",
  },
},
{
  title: "Price",
  field: "price",
  type: "numeric",
  cellStyle: {
    textAlign: "center",
  },
},
{
  title: "Date Created",
  field: "createdAt",
},


];
export default columns;
