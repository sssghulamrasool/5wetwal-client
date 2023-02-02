import React, { useRef, forwardRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './RecycleUserTable.css'
import MaterialTable from "material-table";
import { useState } from "react";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";
import Restore from "@material-ui/icons/Restore";
import Swal from "sweetalert2";
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
import axios from 'axios';
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




const RecycleUserTable = () => {
  const tableRef = useRef(null);
  const defaultMaterialTheme = createTheme();
  const columns = [
    {
      title: "ID",
      field: "ID",
    },
    { title: "Name", field: "display_name" },
    {
      title: "Email",
      field: "user_email",
    },
    { title: "Nice Name", field: "user_nicename" },
    {
      title: "Status",
      field: "user_status",
      render: (rowData) =>
        rowData.user_status === 1 ? (
          <button className="btn btn-info">Active</button>
        ) : (
          <button className="btn btn-danger">Inactive</button>
        ),
    },
  ];



  const [entries, setEnteries] = useState([]);
  const [dashToken, setDashToken] = useState();
  const [delete01, setDelete01] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token"));
    setDashToken(token);
    try {
      axios.get(`${process.env.REACT_APP_MY_SECRET_KEY}/api/admin/deleted-user`, {
        headers: { "x-auth-token": token, "Content-Type": "application/json", }
      }).then((res) => {
        console.log("Response", res.data.data);
        const result = res.data.data.map(({ ID, display_name, user_email, user_nicename, user_status }) => {
          return {
            ID,
            display_name,
            user_email,
            user_nicename,
            user_status
          };
        })
        setEnteries(result)
        // setEnteries(res.data.data)
      })
    } catch (error) {
      console.log("cat error :", error)
    }
  }, [delete01])


  const ResotreHandler = (data, id) => {
    const token = JSON.parse(localStorage.getItem("Token"));
    console.log("Data:", id, data.d.ID);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete User",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "grey",
      denyButtonColor: "rgb(48, 133, 214)",
      confirmButtonText: "Yes Delete it!",
      cancelButtonText: "Cancel",
      denyButtonText: 'Restore',
    }).then((result) => {
      if (result.isDenied) {
        try {
          axios.post(`${process.env.REACT_APP_MY_SECRET_KEY}/api/admin/restore-user/${data.d.ID}`, {},
            { headers: { "x-auth-token": token, "Content-Type": "application/json" } }
          ).then((res) => {
            if (res.data.success == 1) {
              setDelete01(true);
              Swal.fire("Restored!", "User Restored", "success");
            }
            else {
              Swal.fire({
                position: "center",
                icon: "error",
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
        }
        catch (err) {
          Swal.fire({
            position: "center",
            icon: err,
            title: "There Are Some Error",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
      if (result.isConfirmed) {
        try {
          axios.delete(`${process.env.REACT_APP_MY_SECRET_KEY}/api/admin/permanent-delete-user/${data.d.ID}`,
            { headers: { "x-auth-token": dashToken, "Content-Type": "application/json" } }
          ).then((res) => {
            // console.log("confirm delete response :", res);
            if (res.data.success == 1) {
              setDelete01(true);
              Swal.fire("Deleted!", "User Deleted", "success");
            }
            else {
              Swal.fire({
                position: "center",
                icon: "error",
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
        }
        catch (err) {
          Swal.fire({
            position: "center",
            icon: err,
            title: "There Are Some Error",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    })

  }
  const Viewhandler = (data) => {
    console.log("view Data:", data)
    navigate(`/user/view/${data.ID}`);
  }

  return (
    <>
      <div className="col-lg-12">
        <div className="aw_table_wrapper_user">
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
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <ThemeProvider theme={defaultMaterialTheme}>
                  <MaterialTable
                    tableRef={tableRef}
                    icons={tableIcons}
                    title="Users Listing"
                    columns={columns}
                    data={entries}
                    actions={[

                      {
                        icon: () => <Restore />,
                        tooltip: "Restore/Delete",
                        onClick: (event, data) =>
                          ResotreHandler({
                            e: event,
                            d: data,
                          }),
                      },

                      {
                        icon: () => <VisibilityOutlinedIcon />,
                        tooltip: "View",
                        onClick: (event, data) =>
                          Viewhandler(data),
                      }
                    ]}
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
  )
}

export default RecycleUserTable