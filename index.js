const Notification = (props) => {
  const { className, text,image } = props;
  const containerClassName = {`notification-container ${className}`};

  return (
    <div className={containerClassName}>
      <img className="image" src={iconUrl} />
      <p className="message">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-container">
    
      <Notification 
        className = "primary-container"
        iconUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text = "Information Message"
     /> 
     <Notification 
        className = "success-container"
        iconUrl = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text = "Success Message"
     />
     <Notification 
        className = "warning-container"
        iconUrl = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text = "Warning Message"
     />
     <Notification 
        className = "error-container"
        iconUrl = "https://assets.ccbp.in/frontend/react-js/error-icon-img.png"
        text = "Error Message"
     />
      
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
