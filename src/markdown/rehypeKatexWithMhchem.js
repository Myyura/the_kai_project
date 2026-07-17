import 'katex/contrib/mhchem';
import rehypeKatex from 'rehype-katex';

// The mhchem extension registers \ce and \pu on the same KaTeX module used by
// rehype-katex. Keeping the side-effect import beside the plugin makes the
// required evaluation order explicit in Docusaurus' build workers.
export default rehypeKatex;
