const MyFooter = function () {
  return (
    <p
      className="text-center m-0 py-3 fs-5"
      style={{ backgroundColor: "#776c098f", color: "white" }}
    >
      {" "}
      EPICODE - {new Date().getFullYear()}
    </p>
  );
};
export default MyFooter;
