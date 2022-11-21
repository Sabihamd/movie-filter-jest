import { createUseStyles } from "react-jss";

const classes = createUseStyles({
  title: {
    fontSize: "15px",
    color: ({ theme }) => theme.color,
    fontFamily: "Lucida Sans",
     textTransform: "uppercase",
  },
  link: {
    extend: "title",
    textDecoration: "none",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    backgroundColor: "lightblue",
    "&:hover": {
      fontSize: "larger",
      fontFamily: "Times New Roman",
      fontWeight: "bolder",
      boxShadow: "5px 5px 5px 0px white",
    },
  },
  cardData: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
});

export default classes;
