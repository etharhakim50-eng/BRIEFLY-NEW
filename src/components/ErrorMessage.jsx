function ErrorMessage({ message }) {

  return (
    <div className="error-message">

      <div className="error-icon">
        !
      </div>

      <h2>
        Something went wrong
      </h2>

      <p>
        {message}
      </p>

    </div>
  );
}
export default ErrorMessage;