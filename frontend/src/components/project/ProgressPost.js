import { Button, Card, IconButton, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ButtonIcon from "./Buttons/ButtonIcon";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "#F2F2F2",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerLeft: {
    display: "flex",
    flexDirection: "column",
  },
  headerRight: {
    display: "flex",
    alignItems: "flex-start",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  likeButton: {
    height: 35,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  menuButton: {
    width: 35,
    height: 35,
    margin: theme.spacing(1),
  },
  heading: {
    color: theme.palette.primary.main,
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
  lessMargin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
  },
  border: {
    borderTop: `1px solid ${theme.palette.grey[500]}`,
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  editingButtonsContainer: {
    marginBottom: theme.spacing(2),
  },
  containerTop: {
    display: "flex",
    justifyContent: "space-between",
  },
  dateField: {
    minWidth: 140,
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

export default function ProgressPost({ post, locale, texts, abortNewPost }) {
  const classes = useStyles();
  const DateParser = ({ date, locale }) => {
    return new Intl.DateTimeFormat(locale).format(date);
  };

  //Interface for editing
  if (post.currentlyEdited) {
    return (
      <Card className={classes.card} raised="true">
        <div className={classes.containerTop}>
          <TextField
            className={classes.textField}
            value={post.title}
            variant="outlined"
            InputProps={{
              disableUnderline: true,
            }}
            label={texts.title}
            helperText={texts.add_your_title_here}
            fullWidth={true}
          />
          <TextField
            className={classes.dateField}
            label={texts.event_date_upper_case}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <TextField
          className={classes.textField}
          multiline
          rows={20}
          fullWidth={true}
          variant="outlined"
          InputProps={{
            disableUnderline: true,
          }}
          helperText={post.currentlyEdited ? texts.add_your_text_here : ""}
          label={post.currentlyEdited ? texts.text : ""}
        />

        <div className={classes.editingButtonsContainer}>
          <Button>{texts.save}</Button> <Button onClick={abortNewPost}>{texts.cancel}</Button>
        </div>
      </Card>
    );
  }
  //Interface for Viewing
  else {
    return (
      <Card className={classes.card} raised="true">
        <div className={classes.header}>
          <div className={classes.headerLeft}>
            {post.created_at && (
              <Typography>
                {DateParser(post.created_at, locale)} ({texts.created_lower_case})
              </Typography>
            )}
            {post.updated_at && (
              <Typography>
                {DateParser(post.updated_at, locale)} ({texts.updated})
              </Typography>
            )}
            {post.event_date && (
              <Typography>
                {DateParser(post.event_date, locale)} ({texts.event_date})
              </Typography>
            )}

            <Typography variant="h5" color="primary">
              {post.title}
            </Typography>
          </div>
          <div className={classes.headerRight}>
            {/*Button: Placeholder for LikeButton Component */}

            <Button
              className={classes.likeButton}
              variant="contained"
              color="primary"
              startIcon={<ButtonIcon icon="like" size={25} color="white" />}
            >
              Like • 12
            </Button>

            <IconButton className={classes.menuButton}>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <TextField
          className={classes.textField}
          multiline
          value={post.content}
          fullWidth={true}
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Card>
    );
  }
}
