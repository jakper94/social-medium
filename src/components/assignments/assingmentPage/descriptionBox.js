import React from "react";
import "./descriptionBox.scss"


const DescriptionBox = ( ) => {
  return (
    
    <div className="assigDescription">
      <div className="assignInfo"> 
      <h2 className="assignDes">Description of assignment</h2>

      <p>In this assignment, you will work alone and use OAuth2 to build a simple web application that allows users to login through, for example, GitHub, Facebook, or Google. After login, the website should display some information about the user that you retrieve from the authentication provider. For users who have logged in before, you should also display when the user logged in last. This means that you will need to store users together with timestamps in some sort of data store.
      To make you website work with OAuth2, you need to register it at the provider you have chosen (we recommend GitHub). When you register the application, you need to enter a name for the application and its URL. In our case, since we will not publish this application, the URL will be something like http(s)://localhost:XXXX where XXXX is the port. Further, you need to enter a callback URL, for example http(s)://localhost:XXXX/callback. After registering the application, you will get a client ID and a client secret to access the authentication provider. You should keep both client ID and secret hidden from the user, only you and your application should know it.
      </p>
     <h2 className="assignPresentation">Presentation</h2>
     <p>For this assignment, you will write a report and manage your source code in a git repository, for example at GitHub, GitLab, or Bitbucket. In the report, you should explain how OAuth2 works and how you have solved the assignment. You should also include a link to the repository where you keep your source code (and make sure we have access to it</p>
</div>

    </div>  
  
  );
  
};

export default DescriptionBox;