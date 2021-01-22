import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
const range = 2;

function PageNav({ page, numPages }) {
  let renderArr = [];

  if (page !== 1) renderArr.push("la");
  renderArr.push(1);
  if (page > 1 + range + 1) renderArr.push("dots");
  for (let i = range; i >= 0; i--) {
    if (page - i > 1 && page - i !== numPages) renderArr.push(page - i);
  }
  for (let i = 1; i <= range; i++) {
    if (page + i < numPages) renderArr.push(page + i);
  }
  if (page + range < numPages - 1) renderArr.push("dots");
  if (numPages !== 1) renderArr.push(numPages);
  if (page !== numPages) renderArr.push("ra");

  console.log(renderArr, numPages, page);

  return renderArr.map((symbol, index) => {
    return <PageNavItem key={index} symbol={symbol} currPage={page} />;
  });
}

function PageNavItem({ symbol, currPage }) {
  if (symbol === "la")
    return (
      <Link to={currPage === 2 ? "/" : `/page/${currPage - 1}`}>
        <div className="page-nav-item me-1">
          <i className="fas fa-arrow-left"></i>
        </div>
      </Link>
    );
  else if (symbol === "ra")
    return (
      <Link to={`/page/${currPage + 1}`}>
        <div className="page-nav-item me-1">
          <i className="fas fa-arrow-right"></i>
        </div>
      </Link>
    );
  else if (symbol === "dots") return <span className="me-1">. . .</span>;
  else {
    if (symbol === currPage)
      return <div className="page-nav-item active me-1">{symbol}</div>;
    else {
      return (
        <Link to={symbol === 1 ? "/" : `/page/${symbol}`}>
          <div className="page-nav-item me-1">{symbol}</div>
        </Link>
      );
    }
  }
}

export default PageNav;
