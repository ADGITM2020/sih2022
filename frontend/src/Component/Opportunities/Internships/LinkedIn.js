import * as React from "react";
import CardActions from "@mui/material/CardActions";
import { Container, Card, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function LinkedIn() {
  const [jobs, setJobs] = useState([]);

  const getData = async() => {
    const config = { headers: {"Content-Type": "application/json"}};
    const {data} = await axios.get("/api/v1/linkedIn", config);
    console.log(data);
    setJobs(data);
  }

  useEffect(() => {
    getData();
    console.log(jobs);
  }, []);

  return(
    <Container>
    {jobs &&
      jobs.map((c) => (
        <Card sx={{margin:"20px"}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Job/Internship Name: {c.name}
            </Typography>
              <Typography>
                Company's Name :{c.company_name}
              </Typography>
              <Typography>
                Location :{c.location}
              </Typography>
          </CardContent>
        </Card>
      ))}
  </Container>
  );
}

export default LinkedIn;
