import React from "react";
import "./groupBox.scss"


const GroupBox = ( ) => {
  return (
    
    <div className="groupBoxx">
    <div className="groupName">
        <h2>Group F</h2>
        <div className="groupMembers">

            <div className="member">

                <div class="profImage">
                     <img src={process.env.PUBLIC_URL + "/images/profile2.jpg"}  alt={<h2>alt</h2>}/>
                 </div>
                <p className="memName">Anna Andersson</p>
            </div>

             <div className="member">

                <div class="profImage">
                     <img src={process.env.PUBLIC_URL + "/images/profile2.jpg"}  alt={<h2>alt</h2>}/>
                 </div>
                 <p className="memName">Stephen Williams</p>
            </div>

            <div className="member">

                <div class="profImage">
                     <img src={process.env.PUBLIC_URL + "/images/profile2.jpg"}  alt={<h2>alt</h2>}/>
                 </div>
                 <p className="memName">Peter Swann</p> 
            </div>

            <div className="member">

                <div class="profImage">
                     <img src={process.env.PUBLIC_URL + "/images/profile2.jpg"}  alt={<h2>alt</h2>}/>
                 </div>
                 <p className="memName">Anna Stone</p>
            </div>
            
        </div>
    </div>  
    </div>
  
  );
  
};

export default GroupBox;