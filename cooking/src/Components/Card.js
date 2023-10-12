import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SourceIcon from "@mui/icons-material/Source";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "../index.css";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const MediaCard = ({
  title,
  origin,
  src,
  description,
  alt,
 source
}) => {
  const [show, setShow] = useState(false);
    const handleExpandClick = () => {
      setShow(!show);
    };
  return (
    <Card sx={{ maxWidth: 350 }} className="cardInfo">
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" className="text">
          {title}
        </Typography>
        <Typography gutterBottom variant="p" component="div" className="text">
          Area: {origin}
        </Typography>
      </CardContent>

      <CardMedia sx={{ height: 300 }} image={src} title={alt} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description != "" ? (
            <Typography gutterBottom variant="p">
              {show ? description : description.substr(0, 100) + "....."}{" "}
              <ExpandMore
                expand={show}
                onClick={handleExpandClick}
                aria-expanded={show}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Typography>
          ) : (
             <Typography gutterBottom variant="p" ></Typography>
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="share">
          <Link to={source}>
            <SourceIcon />
          </Link>
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default MediaCard;
