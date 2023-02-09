import React from "react";
import { makeStyles } from "@mui/styles";
import ReactPaginate from "react-paginate";
import { KeyboardBackspace } from "@mui/icons-material";
import COLORS from "../../../theme/colors.json";

const useStyles = makeStyles(() => ({
  custPagination: {
    width: "60%",
  },
  pagination: {
    padding: 0,
    display: "flex",
    "& $li": {
      color: COLORS.GRAY,
      width: "41px",
      height: "41px",
      borderRadius: "50%",
      lineHeight: "41px",
      textAlign: "center",
      listStyle: "none",
      margin: "0px 2px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: COLORS.APP_THEME_COLOR,
        "& $a": {
          color: COLORS.WHITE,
        },
      },
      "&.previous": {
        marginRight: 25,
        "&:hover": {
          color: COLORS.APP_THEME_COLOR,
          backgroundColor: "transparent",
          "& $a": {
            color: "inherit",
          },
        },
        "&.disabled": {
          color: COLORS.BG_COLOR1,
          cursor: "auto",
        },
      },
      "&.next": {
        marginLeft: 25,
        transform: "rotate(180deg)",
        "&:hover": {
          color: COLORS.APP_THEME_COLOR,
          backgroundColor: "transparent",
          "& $a": {
            color: "inherit",
          },
        },
        "&.disabled": {
          color: COLORS.BG_COLOR1,
          cursor: "auto",
        },
      },
      "& $a": {
        width: "100%",
        height: "100%",
        display: "block",
        fontSize: "18px",
        fontWeight: 500,
        "& $svg": {
          width: "32px",
          height: "32px",
          padding: "4px 0px",
        },
      },
    },
  },
  active: {
    backgroundColor: COLORS.APP_THEME_COLOR,
    "& $a": {
      color: COLORS.WHITE,
    },
  },
}));

const Pagination = ({ itemsPerPage, totalItems, pageCount, setItemOffset }) => {
  const classes = useStyles();

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalItems;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    // @ts-ignore
    <ReactPaginate
      previousLabel={<KeyboardBackspace />}
      nextLabel={<KeyboardBackspace />}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={classes.pagination}
      activeClassName={classes.active}
    />
  );
};

export default Pagination;
