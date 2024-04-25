import React from "react";
import "./clock2.scss";
import moment from "moment";
/* import 'moment/locale/tr'   */

const Clock2 = (props) => {

  

    const timeStr=moment().format("HH:mm")
    const dateStr=moment().format('LL')
    const dayStr=moment().format('dddd')
    const hour=moment().format("HH")
 
   let message="";

    if(hour>=6&&hour<12){
        message="Morning"

    }else if(hour>=12&&hour<17){
        message="Afternoon"

    }else if(hour>=17&&hour<22){
        message="Evening"

    }else{
        message="Night"
    }


    const {textColor,bgColor,fontSize,oval}=props

    const clockStyle={
      color: textColor,
      backgroundColor: bgColor,
      fontSize:fontSize,
      borderRadius:oval
    }



  return (
    <div className="clock-container" style={clockStyle}>
      <div className="time">{timeStr}</div>
      <div>
        <div className="date">{dateStr} </div>
        <div className="day">{dayStr} {message} </div>
      </div>
    </div>
  );
};

export default Clock2;
