(window.webpackJsonp=window.webpackJsonp||[]).push([[441],{901:function(a,t,e){"use strict";e.r(t);var s=e(56),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[a._v("#")]),a._v(" Files")]),a._v(" "),e("h3",{attrs:{id:"editing-a-file-and-then-saving-the-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#editing-a-file-and-then-saving-the-changes"}},[a._v("#")]),a._v(" Editing a file and then saving the changes")]),a._v(" "),e("p",[a._v("Here we are making edits to "),e("code",[a._v("Cargo.toml")]),a._v(". We increase the patch version of the crate using "),e("code",[a._v("inc")]),a._v(" and then save it back to the file.\nUse "),e("code",[a._v("help inc")]),a._v(" to get more information.")]),a._v(" "),e("p",[a._v("Read the file's initial contents")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),a._v(" Cargo.toml "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" get package.version\n")])])]),e("p",[a._v("Output")]),a._v(" "),e("p",[e("code",[a._v("0.59.0")])]),a._v(" "),e("p",[a._v("Make the edit to the version number and save it.")]),a._v(" "),e("p",[e("em",[a._v("Note: running this command should work but it will reorder the toml file alphabetically by section.")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),a._v(" Cargo.toml "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" update package.version "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("p"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" get package.version "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" inc --patch "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" save Cargo.toml\n")])])]),e("p",[a._v("Output\n"),e("em",[a._v("none")])]),a._v(" "),e("p",[a._v("View the changes we made to the file.")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),a._v(" Cargo.toml "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" get package.version\n")])])]),e("p",[a._v("Output")]),a._v(" "),e("p",[e("code",[a._v("0.59.1")])]),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"parsing-a-file-in-a-non-standard-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parsing-a-file-in-a-non-standard-format"}},[a._v("#")]),a._v(" Parsing a file in a non-standard format")]),a._v(" "),e("p",[a._v("Suppose you have a file with the following format.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("band:album:year\nFugazi:Steady Diet of Nothing:1991\nFugazi:The Argument:2001\nFugazi:7 Songs:1988\nFugazi:Repeater:1990\nFugazi:In On The Kill Taker:1993\n")])])]),e("p",[a._v("You can parse it into a table.")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),a._v(" bands.txt "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" lines "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("split")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("column")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('":"')]),a._v(" Band Album Year "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" skip "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" sort-by Year\n")])])]),e("p",[a._v("Output")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("━━━┯━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━\n # │ Band   │ Album                  │ Year\n───┼────────┼────────────────────────┼──────\n 0 │ Fugazi │ 7 Songs                │ 1988\n 1 │ Fugazi │ Repeater               │ 1990\n 2 │ Fugazi │ Steady Diet of Nothing │ 1991\n 3 │ Fugazi │ In On The Kill Taker   │ 1993\n 4 │ Fugazi │ The Argument           │ 2001\n━━━┷━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━\n")])])]),e("p",[a._v("You can alternatively do this using "),e("code",[a._v("parse")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),a._v(" bands.txt "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" lines "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" parse "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{Band}:{Album}:{Year}"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" skip "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" sort-by Year\n")])])]),e("p",[a._v("Or, you can utilize the "),e("code",[a._v("headers")]),a._v(" command to use the first row as a header row like. The only difference would be the headers would match the case of the text file. So, in this case, the headers would be lowercase.")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),a._v(" bands.txt "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" lines "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("split")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("column")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('":"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" headers "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" sort-by year\n")])])]),e("hr"),a._v(" "),e("h3",{attrs:{id:"word-occurrence-count-with-ripgrep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#word-occurrence-count-with-ripgrep"}},[a._v("#")]),a._v(" Word occurrence count with Ripgrep")]),a._v(" "),e("p",[a._v('Suppose you would like to check the number of lines the string "Value" appears per file in the nushell project, then sort those files by largest line count.')]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" rg -c Value "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" lines "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("split")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("column")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('":"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" line_count "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" into int line_count "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" sort-by line_count "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" reverse\n")])])]),e("p",[a._v("Output")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("───┬──────────────────────────────────────┬────────────\n # │ file                                 │ line_count\n───┼──────────────────────────────────────┼────────────\n 0 │ crates/nu-source/src/meta.rs         │         27\n 1 │ crates/nu-protocol/src/value/dict.rs │         10\n 2 │ src/commands/config.rs               │         10\n 3 │ crates/nu_plugin_sys/src/sys.rs      │         10\n 4 │ src/commands/from_bson.rs            │          9\n 5 │ src/utils/data_processing.rs         │          9\n 6 │ src/deserializer.rs                  │          8\n 7 │ src/commands/histogram.rs            │          7\n 8 │ src/commands/split_column.rs         │          6\n 9 │ src/data/dict.rs                     │          6\n───┴──────────────────────────────────────┴────────────\n... example output limited due to large output\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);