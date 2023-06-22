import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
 const currentDisplay = useSelector(selectDisplay);

 return (
  <div className="stack">
    <h1>{currentDisplay.name.official}</h1>
    <h2>{currentDisplay.name.common}</h2>

    <table className="overview-table">
        <tr>
            <td>Capitol:</td>
            <td>{currentDisplay.capital[0]}</td>
        </tr>
        <tr>
            <td>Borders:</td>
            <td>
                {currentDisplay.borders.map((country) => (
                    <h4 key={country}>{country}</h4>
                ))}
            </td>
        </tr>
        <tr>
            <td>Continents:</td>
            <td>
                {currentDisplay.continents.map((cont) => (
                    <h4 key={cont}>{cont}</h4>
                ))}
            </td>
        </tr>
        <tr>
            <td>Population:</td>
            <td>{currentDisplay.population}</td>
        </tr>
        <tr>
            <td>UN Member:</td>
            <td>{currentDisplay.unMember ? "Yes" : "No"}</td>
        </tr>
    </table>
  </div>
 );
};

export default Overview;