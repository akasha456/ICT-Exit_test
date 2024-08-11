import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import "../App.css";

const Home = () => {
  // Mock data
  const mockData = [
    {
      empId: "KO 551",
      EmpName: "Margaret John",
      designation: "Knowledge officer",
      img_url: "https://www.clipartmax.com/png/middle/255-2557794_animated-person-animated-picture-of-man.png"
    },
    {
      empId: "LKO 123",
      EmpName: "Shankaran T",
      designation: "Lead Knowledge officer",
      img_url: "https://www.clipartmax.com/png/middle/255-2557794_animated-person-animated-picture-of-man.png"
    },
    {
      empId: "IN 54",
      EmpName: "Ameen M",
      designation: "HR",
      img_url: "https://www.clipartmax.com/png/middle/255-2557794_animated-person-animated-picture-of-man.png"
    }
  ];

  // State to hold data
  const [data, setData] = useState(mockData);

  return (
    <div className="home-container">
      <Grid container spacing={6}>
        {data.map((val) => (
          <Grid item xs={12} sm={6} md={4} key={val.empId}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardContent>
                <img
                  src={val.img_url}
                  className="img-fluid rounded-start"
                  width="100%"
                  alt="Employee"
                />
                <Typography gutterBottom variant="h5">
                  {val.EmpName}
                </Typography>
                <Typography component="div">{val.designation}</Typography>
                <Typography component="div">{val.empId}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", marginTop: "auto" }}>
                <Button size="small" variant="contained" color="secondary">
                  Delete
                </Button>
                <Button size="small" variant="contained" color="secondary">
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
