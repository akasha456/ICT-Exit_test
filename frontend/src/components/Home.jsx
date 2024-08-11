import { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        console.log("Data fetched:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then(() => {
        axios.get("http://localhost:3001/get").then((res) => {
          console.log("Data after delete:", res.data);
          setData(res.data);
        });
      })
      .catch((err) => {
        console.error("Error deleting employee:", err);
      });
  };

  const navigateToUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="Mar">
      <Grid container spacing={6}>
        {data.length === 0 ? (
          <Typography variant="h6" component="div" align="center">
            No employees found.
          </Typography>
        ) : (
          data.map((val, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ display: "flex", flexDirection: "column", height: '500px'}}>
                <CardContent>
                  <img
                    src={val.img_url || 'path/to/fallback/image.png'}
                    className="img-fluid rounded-start"
                    width="100%"
                    height="300px"
                    alt={val.EmpName || "Employee image"}
                  />
                  <Typography gutterBottom variant="h5">
                    {val.EmpName}
                  </Typography>
                  <Typography component="div">{val.designation}</Typography>
                  <Typography component="div">{val.empId}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button size="small" variant="contained" color="secondary" onClick={() => deleteEmployee(val._id)}>
                    Delete
                  </Button>
                  <Button size="small" variant="contained" color="secondary" onClick={() => navigateToUpdate(val._id)}>
                    Update
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Home;
