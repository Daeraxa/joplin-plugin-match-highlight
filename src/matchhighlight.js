function plugin(CodeMirror) {}

module.exports = {
  default: function(_context) {
    return {
      plugin: plugin,
      codeMirrorResources: ['addon/search/match-highlighter'],
      codeMirrorOptions: {
        'highlightSelectionMatches': {
        'style': "matchhighlight",
        'minChars': 2,
        'delay': 100,
        'wordsOnly': false,
        'annotateScrollbar': false,
        'showToken': false,
        'trim': true},
      },
      assets: function() {
        return [{
          name: './highlight.css'
        }];
      }
    }
  },
}
