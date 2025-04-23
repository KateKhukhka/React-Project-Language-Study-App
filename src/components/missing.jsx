import MissingImg from "./assets/404.png";
function Missing() {
  return (
    <main className="missing_page">
      <img src={MissingImg} alt="MissingImg" />
      <p>404 - SORRY, PAGE NOT FOUND</p>
      <p>please, try again...</p>
    </main>
  );
}

export default Missing;
