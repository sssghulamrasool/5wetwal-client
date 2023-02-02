import React, { useRef, forwardRef, useEffect } from "react";
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
import pika from "../../assets/images/pika.jpg";
import sale from "../../assets/images/sale.jpg";
import shop from "../../assets/images/shop1.jpg";
import shop2 from "../../assets/images/shop2.jpg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
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
const PostTable = () => {
  const navigate = useNavigate();

  const [CurrToken, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const tableRef = useRef(null);
  const defaultMaterialTheme = createTheme();
  const columns = [
    {
      title: "ID",
      field: "ID",
    },
    { title: "Name", field: "post_title" },
    {
      title: "Email",
      field: "post_status",
    },
    {
      title: "Date",
      field: "post_date",
    },
    // { title: "Posts", field: "Posts" },
    {
      title: "Status",
      field: "post_status",
        render: (rowData) =>
          rowData.post_status === "auto-draft" ? (
            <button className="btn btn-info">{rowData.post_status}</button>
          ) : (
            <button className="btn btn-danger">{rowData.post_status}</button>
          ),
    },
    // {
    //   title: "Action",
    //   field: "action",
    // },
  ];

  const [entries, setEnteries] = useState();

  const DeleteHandler = (data, id) => {
    const header = {
      "x-auth-token": CurrToken,
      "Content-Type": "application/json",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete User",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes Delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://5setwalbackend-production.up.railway.app/api/admin/post/${data.ID}`,
            {
              headers: header,
            }
          )
          .then((res) => {
            setIsLoading(true);
            if (res.data.success === 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // router(0);
            } else {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((err) => {
            console.log(err, "An Error Occured");
          });
      }
    });
    

  };


  const Updatehandler = (data, id) => {
    setIsLoading(true);
    console.log("data", data);
    const header = {
      "x-auth-token": CurrToken,
      "Content-Type": "application/json",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You want to update status",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes Update it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // const body = {
        //   user_status: data.d.post_status === "auto-draft" ? 0 : 1,
        // };
        axios
          .put(
            `https://5setwalbackend-production.up.railway.app/api/admin/post/${data.d.ID}`,
          
            {
              headers: header,
            }
          )
          .then((res) => {
            if (res.data.success === 1) {
              console.log(res.data,"resp data");
              Swal.fire("Updated!", "User status has been Updated.", "success");
              setIsLoading(false);
            } else {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((err) => {
            console.log(err, "An Error Occured");
          });
      }
    });
  };
  const Viewhandler = (data) => {
    navigate(`/post/view/${data.ID}`);
  };
  useEffect(() => {
    
    let token = JSON.parse(localStorage.getItem("Token"));
    setToken(JSON.parse(localStorage.getItem("Token")));

    const header = {
      "x-auth-token": token,
      "Content-Type": "application/json",
    };

    axios
      .get("https://5setwalbackend-production.up.railway.app/api/admin/post", {
        headers: { "x-auth-token": token, "Content-Type": "application/json" },
      })
      .then((resp) => {
        if (resp.data.success === 1) {
          setEnteries(resp.data.data);
       
        }
      }).catch((err)=>{
        console.log(err);
      })


  }, [isLoading]);
  return (
    <>
      <div className="col-lg-12">
        <div className="aw_table_wrapper_user">
          <div className="table_body">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <ThemeProvider theme={defaultMaterialTheme}>
                  <MaterialTable
                    tableRef={tableRef}
                    icons={tableIcons}
                    title="Posts "
                    columns={columns}
                    data={entries}
                    actions={[
                      {
                        icon: () => <DeleteIcon />,
                        tooltip: "Remove",
                        onClick: (event, data) => DeleteHandler(data),
                      },
                      {
                        icon: () => <Edit />,
                        tooltip: "Change Status",
                        onClick: (event, data) =>
                          Updatehandler({
                            e: event,
                            d: data,
                          }),
                      },

                      {
                        icon: () => <VisibilityOutlinedIcon />,
                        tooltip: "View",
                        onClick: (event, data) =>
                          Viewhandler(data),
                      },
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
                        <TablePagination {...props} rowsPerPage={10} />
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

export default PostTable;
