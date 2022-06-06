import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="col">
        <footer className="footer ms-sm-auto mt-auto py-3 bg-light">
            <div className="container">
            <span className="text-muted">Copyright ⓒ {year} Company Name</span>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
