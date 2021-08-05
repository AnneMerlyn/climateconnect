import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import Linkify from "react-linkify";
import YouTube from "react-youtube";
import youtubeRegex from "youtube-regex";

const useStyles = makeStyles({
  link: {
    color: "inherit",
    "&:visited": {
      color: "inherit",
    },
  },
});

export default function MessageContent({ content, renderYoutubeVideos }) {
  const classes = useStyles();
  //workaround to get target="_blank" because setting 'properties' on the Linkify component doesn't work
  const componentDecorator = (href, text, key) => (
    <a href={href} className={classes.link} key={key} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );

  const opts = {
    height: "390",
    width: "640",
    host: "https://www.youtube-nocookie.com",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const getFirstYouTubeVideosLines = (content) => {
    const allLines = content.split("\n");
    const youtubeLines = allLines
      .filter((w) => w.length > 0 && youtubeRegex().test(w))
      .map((line) => {
        const words = line.split(" ");
        const enrichedLine = words.map((w) => {
          if (youtubeRegex().test(w)) {
            let video_id = YouTubeGetID(w);
            const ampersandPosition = video_id.indexOf("&");
            if (ampersandPosition !== -1) video_id = video_id.substring(0, ampersandPosition);
            return <YouTube videoId={video_id} opts={opts} />;
          } else {
            return <Linkify componentDecorator={componentDecorator}>{w + " "}</Linkify>;
          }
        });
        return {
          content: enrichedLine,
          index: allLines.indexOf(line),
        };
      });
    return youtubeLines.filter((l, index) => index < renderYoutubeVideos);
  };

  function YouTubeGetID(url) {
    var ID = "";
    url = url.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      // TODO: confirm this escape character is required
      // eslint-disable-next-line no-useless-escape
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    } else {
      ID = url;
    }
    return ID;
  }

  const youtubeVideoLines = renderYoutubeVideos ? getFirstYouTubeVideosLines(content) : null;

  return (
    <Linkify componentDecorator={componentDecorator}>
      {content.split("\n").map((i, index) => {
        if (!i.length) return <br key={index} />;
        if (youtubeVideoLines && youtubeVideoLines.find((l) => l.index === index)) {
          return <div key={index}>{youtubeVideoLines.find((l) => l.index === index).content}</div>;
        }
        r = /@@@__([^\^]*)\^\^__([^\@]*)@@@\^\^\^/g
        matches = i.matchAll(r)
        let array = [...matches]
        // [['full match', 'matchgroup0', matchgroup1, index, inputstr, length], ...]

        return (
          <div>
            {
              array.map((match, index) => {
                console.log(match)
                if (index % 2 === 0) {
                  <Typography>{match}</Typography>
                } else {
                  <Link href={`profiles/${match[1]}`}>{match[2]}</Link>
                }
              })
            }
          </div>
        )
        //return <div dangerouslySetInnerHTML={{ __html: i ? i : " " }} key={index}></div>;
      })}
    </Linkify>
  );
}

MessageContent.propTypes = {
  content: PropTypes.string.isRequired,
};
