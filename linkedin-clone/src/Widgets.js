import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {

const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
           <h4>{heading}</h4>
           <p>{subtitle}</p>
      </div>
    </div>
);

    return (
        <div className="widgets ">
            <div className="widgets__header">
                <h2>Live News</h2>
                <InfoIcon />
            </div>
            

               {newsArticle("Coronavirus: UK updates","Top news - 886 readers ")}
               {newsArticle("PM Modi: TN updates","Top news - 8096 readers ")}
               {newsArticle("Election: TN updates","Top news - 1206 readers ")}
               {newsArticle("Cricket: TN updates","Top news - 83454 readers ")}
               {newsArticle("LockDown: TN updates","Top news - 607 readers ")}
               {newsArticle("Army: TN updates","Top news - 8861 readers ")}

            
        </div>
        
    );
}

export default Widgets;
