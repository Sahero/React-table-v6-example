import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import makeData from "./Utils/makeData";
import { columns } from "./Utils/helpers";

export default function ReactTable6() {
  const data = makeData(20);

  return (
    <>
      <ReactTable
        data={data}
        columns={columns}
        minRows={0}
        defaultPageSize={data.length}
        className="-striped -highlight"
        showPagination={false}
        getTdProps={(state, rowInfo, col, instance) => {
          return {
            onClick: (e) => {
              if (col.Header === undefined) {
                const { expanded } = state;
                const path = rowInfo.nestingPath[0];
                const diff = { [path]: expanded[path] ? false : true };
                instance.setState({
                  expanded: {
                    ...expanded,
                    ...diff
                  }
                });
              } else {
                alert(
                  `Hello ${rowInfo.original.firstName} ${rowInfo.original.lastName}`
                );
              }
            }
          };
        }}
        SubComponent={(row) => {
          return (
            <div style={{ padding: "20px" }}>
              <em>You can put any component you want here.</em>
              <br />
              <br />
              <div style={{ color: "blue" }}>
                Name: {row.original.firstName} {row.original.lastName}
              </div>
            </div>
          );
        }}
      />
    </>
  );
}
