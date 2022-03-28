import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";

function Coding() {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Card sx={{ width: 445, margin: 10 }}>
          <CardMedia
            component="img"
            alt=""
            height="140"
            image="http://yxxshin.github.io/images/CodeForces_Cover.jpg"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Check Out the upcoming contest
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="/contest">Let's Go</a>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 445, margin: 10 }}>
          <CardMedia
            component="img"
            alt=""
            height="140"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qRdFXM8BZmQ7I5ArSq7obmMTJo0ty-O95hMamqHRm6yRglDmaCVHdscnu56ZulUuR8c&usqp=CAU"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Check Out the upcoming contest
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Let's Go</Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 445, margin: 10 }}>
          <CardMedia
            component="img"
            alt=""
            height="140"
            image="https://www.yoreoyster.com/wp-content/uploads/2021/06/LeetCode-Review.png"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Check Out the upcoming contest
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Let's Go</Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 445, margin: 10 }}>
          <CardMedia
            component="img"
            alt=""
            height="140"
            image="https://www.digitalfirstmagazine.com/wp-content/uploads/2020/05/interviewbit-550x330.jpg"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Check Out the upcoming contest
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Let's Go</Button>
          </CardActions>
        </Card>
      </div>
    </Fragment>
  );
}
export default Coding;
