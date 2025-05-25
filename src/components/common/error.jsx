import ErrorImg from "../assets/server_error.png";
import "./error.css";
function Error() {
  return (
    <main className="error_page">
      <img src={ErrorImg} alt="server-error" />
      <p>SORRY, SOMETHING WENT WRONG</p>
      <p>please, try again...</p>
    </main>
  );
}
export default Error;
