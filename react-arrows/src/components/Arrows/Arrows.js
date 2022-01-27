import React, { useEffect, useState } from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import styles from "./Arrows.module.scss";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px",
  height: "100px",
  top: 250,
  right: 50,
};
const boxStyleDashed = {
  border: "grey solid 3px",
  borderRadius: "10px",
  padding: "5px",
  top: 250,
  right: 150,
};
const boxStyleDashed2 = {
  border: "grey solid 3px",
  borderRadius: "10px",
  padding: "5px",
  top: 250,
  right: 250,
};
const boxStyleDashed3 = {
  border: "grey solid 3px",
  borderRadius: "10px",
  padding: "5px",
  top: 250,
  right: 350,
};
const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DraggableBox = ({ id }) => {
  const updateXarrow = useXarrow();

  const getStyle = () => {
    let returnStyle = boxStyle;
    switch (id) {
      case "elem9":
        returnStyle = boxStyleDashed;
        break;
      case "elem10":
        returnStyle = boxStyleDashed2;
        break;
      case "elem11":
        returnStyle = boxStyleDashed3;
        break;
      default:
        break;
    }
    return returnStyle;
  };
  return (
    <Draggable
      start={{
        position: {
          x: 500,
          y: 250,
        },
      }}
      onClick={console.log("here")}
      onDrag={updateXarrow}
      onStop={updateXarrow}
    >
      <div id={id} style={getStyle()}>
        {console.log(id)}
        {id}
      </div>
    </Draggable>
  );
};

const BadgeComponent = ({ id }) => {
  const updateXarrow = useXarrow();
  const [open, setOpen] = useState(false);

  const getStyle = () => {
    let returnStyle = boxStyle;
    switch (id) {
      case "elem1":
        returnStyle = boxStyleDashed;
        break;
      case "elem2":
        returnStyle = boxStyleDashed;
        break;
      case "elem3":
        returnStyle = boxStyleDashed;
        break;
      default:
        break;
    }
    return returnStyle;
  };

  return (
    <div style={boxStyle} onDrag={updateXarrow} onStop={updateXarrow}>
      
      <div 
      style={{ minHeight:150}} 
      id={id} onClick={e=>setOpen(!open)}>
    1    {id}

    <div style={{display:!open?"block":"none" ,  }}onClick={e=>setOpen(!open)}>
     
     
        {id}
      </div>

      <div style={{display:open?"block":"none" , backgroundColor:'rgba(0, 0, 0, 0.8)'}} onClick={e=>setOpen(!open)}>
      <img src="https://random.imagecdn.app/145/100"/>
        <h1>Details for component</h1>
        {id}
      </div>


      </div>

    </div>
  );
};
export default function Arrows() {
  return (
    <div className={styles.Arrows} data-testid="Arrows">
      <div
        style={{
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Xwrapper>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Item>
                <BadgeComponent id={"elem11"} />
              </Item>
            </Grid>
          
            <Grid item xs={4}>
              <Item>
                {" "}
                <BadgeComponent id={"elem12"} />
              </Item>
            </Grid>
        
            <Grid item xs={4}>
              <Item>
              <BadgeComponent id={"elem13"} />
              </Item>
            </Grid>
          </Grid>
          
          <br></br>    <br></br>    <br></br>
          <Xarrow start={"elem11"} end="elem12" />
          <Xarrow start={"elem12"} end="elem13" dashness={{ animation: 0 }} />
          
        <Grid container spacing={3}>
            <Grid item xs={4}>
              <Item>
                <BadgeComponent id={"elem21"} />
              </Item>
            </Grid>
 
            <Grid item xs={4}>
              <Item></Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
              <BadgeComponent id={"elem22"} />
              </Item>
            </Grid>
          </Grid>

          <Xarrow start={"elem21"} end="elem12" />
          <Xarrow start={"elem21"} end="elem22" dashness={{ animation: 0 }} />
          <Xarrow start={"elem22"} end="elem13" dashness={{ animation: 0 }} />
          
      
       
          <br></br>    <br></br>    <br></br>

    
        <Grid container spacing={3}>
            <Grid item xs={4}>
              <Item>
                <BadgeComponent id={"elem31"} />
              </Item>
            </Grid>
          
            <Grid item xs={4}>
              <Item>
              <BadgeComponent id={"elem32"} />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
              <BadgeComponent id={"elem33"} />
              </Item>
            </Grid>
          </Grid>

          <Xarrow start={"elem31"} end="elem32" />
          <Xarrow start={"elem32"} end="elem22" />
      
        </Xwrapper>
      </div>
    </div>
  );
}
