import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import React, {useContext, useEffect, useState} from "react";
import getTexts from "../../../public/texts/texts_optimized";
import UserContext from "../context/UserContext";
import FaqQuestionElement from "./FaqQuestionElement";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: theme.spacing(2),
    },
    header: {
      textAlign: "center",
      fontWeight: "bold",
      marginBottm: theme.spacing(2),
    },
  };
});

export default function FilteredFaqContent({ searchValue, questions }) {
  const classes = useStyles();
  const { locale } = useContext(UserContext);
  const [texts, setTexts] = useState({});

  useEffect(async () => {
    if (locale) {
      setTexts(await getTexts({ page: "faq", locale: locale}));
    }
  },[locale]);

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>
        {texts.search_results_for}
        {texts.search_results_for}
        <Typography className={classes.header} component="span" color="primary">
          {' "' + searchValue + '"'}
        </Typography>
      </Typography>
      {questions
        .filter((q) => q.question.includes(searchValue))
        .map((q, index) => (
          <FaqQuestionElement key={index} questionObject={q} />
        ))}
    </div>
  );
}
