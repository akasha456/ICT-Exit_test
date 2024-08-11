import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    EmpName: "",
    designation: "",
    empId: "",
    img_url: ""
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/get/${id}`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.error("Error fetching employee data:", err);
      });
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3001/update/${id}`, employee)
      .then((res) => {
        console.log("Employee updated:", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.error("Error updating employee:", err);
      });
  };

  return (
    <div>
      <Typography variant="h4" component="div" align="center" gutterBottom>
        Update Employee
      </Typography>
      <TextField
        label="Employee Name"
        name="EmpName"
        value={employee.EmpName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Designation"
        name="designation"
        value={employee.designation}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Employee ID"
        name="empId"
        value={employee.empId}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Image URL"
        name="img_url"
        value={employee.img_url}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update
      </Button>
    </div>
  );
};

export default Update;
