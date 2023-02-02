import React, { useRef, forwardRef, useEffect } from "react";
import "./RecyclePostTable.css";
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
import Restore from "@material-ui/icons/Restore";
import { TablePagination, Paper } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import { ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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
const RecyclePostTable = () => {
  const navigate=useNavigate();
  const [isLoading,setIsLoading]=useState(false)
  const tableRef = useRef(null);
  const defaultMaterialTheme = createTheme();
  const columns = [
    {
      title: "ID",
      field: "ID",
    },
    { title: "Name", field: "post_title" },
    {
      title: "Post",
      field: "post_name",
    },
    // {
    //   title: "Image",
    //   field: "image",
    // },
    { title: "Content", field: "post_title" },
    { title: "Created At", field: "post_date" },
    { title: "Status", field: "post_status" },
    // {
    //   title: "Action",
    //   field: "action",
    // },
  ];

  const [entries, setEnteries] = useState([]);
  const [reToken, setReToken] = useState("");

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("Token"));
    setReToken(token);
    const header = {
      "x-auth-token": token,
      "Content-Type": "application/json",
    };

    axios
      .get(
        "https://5setwalbackend-production.up.railway.app/api/admin/deleted-post",
        {
          headers: header,
        }
      )
      .then((resp) => {
        console.log("recyele posts =>", resp.data.data);
        setEnteries(resp.data.data);
      })
      .catch((err) => {
        console.log(err, "An Error Occured");
      });
  }, [isLoading]);

  const Viewhandler = (data) => {
    navigate(`/recyclepost/view/${data.ID}`);
  };
  const restorePost = (data) => {
    setIsLoading(true);
    let token = JSON.parse(localStorage.getItem("Token"));
    const header = {
      "x-auth-token": token,
      "Content-Type": "application/json",
    };

    Swal.fire({
      title: "Are you sure?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Restore`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(
            `${process.env.REACT_APP_MY_SECRET_KEY}/api/admin/permanent-delete-post/${data.ID}`,
            {
              headers: header,
            }
          )
          .then((resp) => {
            console.log(resp.data, "resp recu");
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (result.isDenied) {
        console.log(data, "denied");
        axios
          .post(
            `https://5setwalbackend-production.up.railway.app/api/admin/restore-post/${data.ID}`,
            { body: {} },
            {
              headers: header,
            }
          )
          .then((resp) => {
            setIsLoading(false);
            console.log(resp.data, " restore");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

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
                    title="Latest User "
                    columns={columns}
                    data={entries}
                    actions={[
                      {
                        icon: () => <Restore />,
                        tooltip: "Remove",
                        onClick: (event, data) => restorePost(data),
                      },

                      {
                        icon: () => <VisibilityOutlinedIcon />,
                        tooltip: "View",
                        onClick: (event, data) => Viewhandler(data),
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

export default RecyclePostTable;
