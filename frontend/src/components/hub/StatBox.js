import { Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, {useContext, useEffect, useState} from "react";

import getTexts from "../../../public/texts/texts_optimized";
import UserContext from "../context/UserContext";
import Stat from "./Stat";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 310,
    background: "#EBEBEB",
    padding: theme.spacing(2),
  },
  h2: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: 21,
    marginBottom: theme.spacing(1),
    textAlign: "center",
  },
  link: {
    cursor: "pointer",
  },
  source: {
    fontSize: 14,
    textAlign: "center",
  },
}));

export default function StatBox({ title, stats }) {
  const classes = useStyles();
  const { locale } = useContext(UserContext);
  const [texts, setTexts] = useState({});

  useEffect(async () => {
    if (locale) {
      setTexts(await getTexts({page: "hub", locale: locale}));
    }
  },[locale]);

  return (
    <div className={classes.root}>
      <Typography component="h2" className={classes.h2}>
        {title}
      </Typography>
      {stats.map((s) => (
        <Stat key={s.name} statData={s} />
      ))}
      <Typography className={classes.source}>
        {texts.source}:{" "}
        <Link className={classes.link} target="_blank" href={stats[0]?.source_link}>
          {stats[0]?.source_name}
        </Link>
      </Typography>
    </div>
  );
}
