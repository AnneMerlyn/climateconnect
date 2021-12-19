import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import React, {useContext, useEffect, useState} from "react";
import getTexts from "../../../public/texts/texts_optimized";
import UserContext from "../context/UserContext";
import MiniHubPreviews from "./MiniHubPreviews";

const useStyles = makeStyles(() => ({
  headline: {
    fontWeight: 700,
  },
}));

export default function ActiveHubsSelect({
  selectedHubs,
  hubsToSelectFrom,
  onSelectNewHub,
  onClickRemoveHub,
}) {
  const classes = useStyles();
  const { locale } = useContext(UserContext);
    const [texts, setTexts] = useState({});

    useEffect(async () => {
        if (locale) {
            setTexts(await getTexts({page: "hub", locale: locale}));
        }
    },[locale]);
    return (
    <div>
      <Typography color="secondary" className={classes.headline}>
        {texts.add_hubs_in_which_your_organization_is_active}
      </Typography>
      <MiniHubPreviews
        allowCreate
        editMode
        allHubs={hubsToSelectFrom}
        hubs={selectedHubs}
        onSelectNewHub={onSelectNewHub}
        onClickRemoveHub={onClickRemoveHub}
      />
    </div>
  );
}
