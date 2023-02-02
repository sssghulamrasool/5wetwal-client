import React, { useRef, forwardRef } from "react";
import "./DashBoardTable.css";
import MaterialTable from "material-table";
import { useState } from "react";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import { TablePagination, Paper } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import { ThemeProvider, createTheme } from "@mui/material";
const tableIcons = {
  Delete: forwardRef((props, ref) => <DeleteIcon {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  View: forwardRef((props, ref) => (
    <VisibilityOutlinedIcon {...props} ref={ref} />
  )),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
};

const DashBoardTable = () => {
  const tableRef = useRef(null);
  const defaultMaterialTheme = createTheme();
  const columns = [
    {
      title: "ID",
      field: "id",
    },
    { title: "Name", field: "title" },
    {
      title: "Email",
      field: "email",
    },
    {
      title: "Followers",
      field: "followers",
    },
    { title: "Posts", field: "Posts" },
    { title: "Status", field: "status" },
    {
      title: "Action",
      field: "action",
    },
  ];

  const [entries, setEnteries] = useState([
    {
      id: 1,
      title: "test",
      email: "gallary_name",
      followers: "category_name",
      Posts: "price",
      status: "product_discount_price",
      action: "product_status",
    },
    {
        id: 2,
        title: "Ghulam Rasool",
        email: "gh@gmail.com",
        followers: "gr",
        Posts: "2",
        status: "Active",
        action: "Actions", 
    },
    {
        id: 3,
        title: "Shoaib",
        email: "shabi@gmail.com",
        followers: "shaoiab",
        Posts: "3",
        status: "In-Active",
        action: "Actions", 
    },
    {
        id: 4,
        title: "Rehman",
        email: "rehman@gmail.com",
        followers: "rehman",
        Posts: "4",
        status: "Active",
        action: "Actions", 
    },
    {
        id: 5,
        title: "Awais",
        email: "awais@gmail.com",
        followers: "awais",
        Posts: "5",
        status: "In-Active",
        action: "Actions", 
    },
    {
        id: 6,
        title: "Sheraz ",
        email: "sheraz@gmail.com",
        followers: "sheraz",
        Posts: "6",
        status: "Active",
        action: "Actions",  
    },
    {
        id: 7,
        title: "Talha ",
        email: "talha@gmail.com",
        followers: "talha",
        Posts: "7",
        status: "Active",
        action: "Actions",  
    },
    {
        id: 7,
        title: "Ali ",
        email: "ali@gmail.com",
        followers: "ali",
        Posts: "8",
        status: "Active",
        action: "Actions",  
    },
    {
        id: 8,
        title: "Ashfaq Waheed ",
        email: "ashfaq@gmail.com",
        followers: "Suljay ghar da mast",
        Posts: "9",
        status: "Active",
        action: "Actions",   
    },
    {
        id: 9,
        title: "Shahzad ",
        email: "shahzad@gmail.com",
        followers: "Bechara",
        Posts: "10",
        status: "InActive",
        action: "Actions",  
    }
  ]);

  return (
    <>
      <div className="col-lg-12">
        <div className="aw_table_wrapper">
          {/* <div className="table_userrs">
            <h3>Latest Users</h3>
          </div> */}
          <div className="table_body">
            {/* <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="dataTables_length">
                  <label>Show</label>
                  <select
                    className="form-select custom_class_select"
                    aria-label="Default select example"
                  >
                    <option defaultValue className="custom_style_option">
                      10
                    </option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  <label>entries</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="datatable_filter">
                  <label> Search: </label>
                  <input className="form-control" />
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <ThemeProvider theme={defaultMaterialTheme}>
                  <MaterialTable
                    tableRef={tableRef}
                    icons={tableIcons}
                    title="Latest User "
                    columns={columns}
                    data={entries}
                    options={{
                      pageSize: 10,
                      pageSizeOptions: [5, 10, 15, 20],
                      actionsColumnIndex: -1,
                      exportButton: false,
                      sorting: true,
                      search: true,
                      paging: true,
                      debounceInterval: 1500,
                      headerStyle: {
                        fontWeight: "bold",
                      },
                    }}
                    components={{
                      Pagination: (props) => (
                        <TablePagination
                          {...props}
                          rowsPerPage={10}
                        />
                      ),

                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                  />
                </ThemeProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardTable;
