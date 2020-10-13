import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "Code", minWidth: 100 },
  {
    id: "resources",
    label: "Resources",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString(),
  },
  {
    id: "completed",
    label: "Completed",
    minWidth: "auto",
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, resources, completed) {
  //   const density = population / size;
  return { name, code, resources, completed };
}

const rows = [
  createData(
    "Topic 1",
    "HUB 1",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "#ffb600" }} />
  ),

  createData(
    "Topic 2",
    "HUB 2",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "#ffb600" }} />
  ),
  createData(
    "Topic 3",
    "HUB 3",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "#ffb600" }} />
  ),
  createData(
    "Topic 4",
    "HUB 4",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "#ffb600" }} />
  ),
  createData(
    "Topic 5",
    "HUB 5",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "#ffb600" }} />
  ),
  createData(
    "Topic 6",
    "HUB 6",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "gray", opacity: "0.3" }} />
  ),
  createData(
    "Topic 7",
    "HUB 7",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "gray", opacity: "0.3" }} />
  ),
  createData(
    "Topic 8",
    "HUB 8",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "gray", opacity: "0.3" }} />
  ),
  createData(
    "Topic 9",
    "HUB 9",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "gray", opacity: "0.3" }} />
  ),
  createData(
    "Topic 10",
    "HUB 10",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "gray", opacity: "0.3" }} />
  ),
  createData(
    "Topic 11",
    "HUB 11",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "gray", opacity: "0.3" }} />
  ),
  createData(
    "Topic 12",
    "HUB 12",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "gray", opacity: "0.3" }} />
  ),
  createData(
    "Topic 13",
    "HUB 13",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "gray", opacity: "0.3" }} />
  ),
  createData(
    "Topic 14",
    "HUB 14",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "gray", opacity: "0.3" }} />
  ),
  createData(
    "Topic 15",
    "HUB 15",
    <PictureAsPdfIcon style={{ color: "red" }} />,
    <VerifiedUserIcon style={{ color: "gray", opacity: "0.3" }} />
  ),
];

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "auto",
  },
  container: {
    maxHeight: 440,
  },
});

function ProfileTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='profile-table-container'>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#ffb600",
                    }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}>
                      {columns.map((column) => {
                        // console.log(row);
                        const value = row[column.id];
                        console.log(row[column.id]);
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {row[column.id]}
                            {/* {column.format && typeof value === "number"
                              ? column.format(value)
                              : value} */}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          style={{ backgroundColor: "#ffb600" }}
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default ProfileTable;
