const Notification = (props) => {
  const { className, text } = props;
  const containerClassName = {`notification-container ${className}`}
  console.log(containerClassName);

  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-container">
    <Notification>
      <div className="primary-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          className="image"
        />
        <p className="info" >Information Message</p>
      </div>
      </Notification>
      <Notification>
      <div className="success-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          className="image"
        />
        <p className="success">Success Message</p>
      </div>
      </Notification>
      <Notification>
      <div className="warning-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          className="image"
        />
        <p className="warning">Warning Message</p>
      </div></Notification>
      <Notification>
      <div className="error-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/error-icon-img.png"
          className="image"
        />
        <p className="error">Error Message</p>
      </div></Notification>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
