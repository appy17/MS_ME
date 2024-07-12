import React from "react";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "../App.css";
const Who = () => {
  const data = [
    { id: 1, name: "Sh. V.R. Sirsath", designation: "Joint Director (HoO)", contact: "0712-2510046/ 2510352", fax: "0712-2511985" },
    { id: 2, name: "Sh. Subhash Ingewear", designation: "Asstt. Director Gr-I", contact: "", fax: "" },
    { id: 3, name: "Smt. P.N. Pandhram", designation: "Asstt. Director Gr-I", contact: "", fax: "" },
    { id: 4, name: "Sh. V.V. Khare", designation: "Asstt. Director Gr-I", contact: "", fax: "" },
    { id: 5, name: "Sh. M.G. Bhurle", designation: "Asstt. Director Gr-I", contact: "", fax: "" },
    { id: 6, name: "Sh. V.G. Nikhade", designation: "Asstt. Director Gr-I", contact: "", fax: "" },
    { id: 7, name: "Sh. Manish V.K. Jha", designation: "Asstt. Director Gr-II", contact: "", fax: "" },
    { id: 8, name: "Sh. Abhai Nath", designation: "SSO", contact: "", fax: "" },
    { id: 9, name: "Sh. P.P. Bogare", designation: "O.S", contact: "", fax: "" },
    { id: 10, name: "Sh. P.S. Wasnik", designation: "Instructor", contact: "", fax: "" },
    { id: 11, name: "Smt. S. S. Takalkar", designation: "Steno Gr-II", contact: "", fax: "" },
    { id: 12, name: "Sh. N.M. Chauhan", designation: "UDC", contact: "", fax: "" },
    { id: 13, name: "Sh. Anirban Das", designation: "UDC", contact: "", fax: "" },
    { id: 14, name: "Sh. D.S. Dhabhekar", designation: "MTS", contact: "", fax: "" },
    { id: 15, name: "Sh. Mantu Kumar", designation: "MTS", contact: "", fax: "" }
  ];

  return (
    <>
      <div className="info">
        <h2>List of Officers and Staff for MSME-DFO, NAGPUR</h2>
        <table className="c_table">
          <thead style={{ backgroundColor: "#e4e4e4", color: "black" }}>
            <tr>
              <th>Sr No</th>
              <th>Name of the Officer & Staff</th>
              <th>Designation</th>
              <th>Phone Number</th>
              <th>Fax Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td style={{ textAlign: "center" }}>{row.id}</td>
                <td><strong>{row.name}</strong></td>
                <td>{row.designation}</td>
                <td>{row.contact}</td>
                <td>{row.fax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Who;
