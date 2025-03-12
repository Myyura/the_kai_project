window.MathJax = {
    loader: {
      load: ['[tex]/boldsymbol', '[tex]/mathtools', '[tex]/empheq']
    },
    tex: {
      tags: 'ams',
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true,
      packages: {
        '[+]': ['boldsymbol'],
        '[+]': ['mathtools'],
        '[+]': ['empheq']
      }
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    },
  };
  
  document$.subscribe(() => { 
    MathJax.startup.output.clearCache()
    MathJax.typesetClear()
    MathJax.texReset()
    MathJax.typesetPromise()
  })
