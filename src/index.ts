import "flex-layout-system/dist/full.min.js";
import "flex-layout-system/dist/js-responsive.min.css";
import "./style.scss";
const hljs = require("highlight.js/lib/core");
// styles
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage(
  "javascript",
  require("highlight.js/lib/languages/javascript")
);
hljs.registerLanguage(
  "typescript",
  require("highlight.js/lib/languages/typescript")
);
hljs.registerLanguage("css", require("highlight.js/lib/languages/css"));
hljs.registerLanguage("scss", require("highlight.js/lib/languages/scss"));
hljs.registerLanguage("xml", require("highlight.js/lib/languages/xml"));
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"));
/// bash 
hljs.registerLanguage("bash", require("highlight.js/lib/languages/bash"));

hljs.highlightAll();
 