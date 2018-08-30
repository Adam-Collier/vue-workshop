import theme from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";

export default {
  ...theme,
  font: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif',
  prism: {
    style: okaidia
  },
  h2: {
    marginBottom: "40px"
  },
  img: {
    maxWidth: "650px",
    borderRadius: "5px"
  },
  css: {
    fontSize: "24px",
    textAlign: "center"
  },
  h3: {
    textAlign: "left"
  },
  ul: {
    fontSize: "24px",
    maxWidth: "650px"
  },
  li: {
    marginBottom: "15px"
  },
  p: {
    maxWidth: "650px"
  }

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
