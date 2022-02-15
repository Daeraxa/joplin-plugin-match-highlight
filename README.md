# Joplin Highlight Matching Plugin

This plugin highlights words that match what the user has highlighted in the editor.

<img src=assets/example.png>

## Usage

Simply toggle the plugin on and highlight a word, matching strings will also be highlighted.

The plugin activates the CodeMirror addon [search/match-highlighter](https://codemirror.net/addon/search/match-highlighter.js) with the default options set.
The background highlighting is provided by CSS matching the new CSS class of `.cm-matchhighlight`. This can be overridden using CSS in `userchrome.css` with the `!important` option.

## Customising

Currently the options for `match-highlight` are hard coded but I'll be looking at exposing some of them to the Joplin settings in a future version.

## Known issues & limitations

- Can't currently see a way of only highlighting if the highlighted word occurs >1 - default behaviour of the addon is to apply `.cm-matchhightlight` to anything highlighted.
- Does not respect the application theme yet - by default the highlight match is the same colour as provided by the default light theme highlight colour. See the usage section to amend the highlight colour manually. For reference:
  - Light mode = #d7d4f0
  - Dark mode = #6b6b6b
