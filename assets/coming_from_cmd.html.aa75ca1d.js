import{_ as c,o as r,c as n,a as t,b as a,e as d,d as e,r as i}from"../app.84cb432e.mjs";const l={},s=d('<h1 id="coming-from-cmd-exe" tabindex="-1"><a class="header-anchor" href="#coming-from-cmd-exe" aria-hidden="true">#</a> Coming from CMD.EXE</h1><p>This table was last updated for Nu 0.67.0.</p><table><thead><tr><th>CMD.EXE</th><th>Nu</th><th>Task</th></tr></thead><tbody><tr><td><code>ASSOC</code></td><td></td><td>Displays or modifies file extension associations</td></tr><tr><td><code>BREAK</code></td><td></td><td>Trigger debugger breakpoint</td></tr><tr><td><code>CALL &lt;filename.bat&gt;</code></td><td><code>&lt;filename.bat&gt;</code></td><td>Run a batch program</td></tr><tr><td></td><td><code>nu &lt;filename&gt;</code></td><td>Run a nu script in a fresh context</td></tr><tr><td></td><td><code>source &lt;filename&gt;</code></td><td>Run a nu script in this context</td></tr><tr><td></td><td><code>use &lt;filename&gt;</code></td><td>Run a nu script as a module</td></tr><tr><td><code>CD</code> or <code>CHDIR</code></td><td><code>$env.PWD</code></td><td>Get the present working directory</td></tr><tr><td><code>CD &lt;directory&gt;</code></td><td><code>cd &lt;directory&gt;</code></td><td>Change the current directory</td></tr><tr><td><code>CD /D &lt;drive:directory&gt;</code></td><td><code>cd &lt;drive:directory&gt;</code></td><td>Change the current directory</td></tr><tr><td><code>CLS</code></td><td><code>clear</code></td><td>Clear the screen</td></tr><tr><td><code>COLOR</code></td><td></td><td>Set the console default foreground/background colors</td></tr><tr><td></td><td><code>ansi {flags} (code)</code></td><td>Output ANSI codes to change color</td></tr><tr><td><code>COPY &lt;source&gt; &lt;destination&gt;</code></td><td><code>cp &lt;source&gt; &lt;destination&gt;</code></td><td>Copy files</td></tr><tr><td><code>COPY &lt;file1&gt;+&lt;file2&gt; &lt;destination&gt;</code></td><td><code>[&lt;file1&gt;, &lt;file2&gt;] | each { open --raw } | str collect | save --raw &lt;destination&gt;</code></td><td>Append multiple files into one</td></tr><tr><td><code>DATE /T</code></td><td><code>date now</code></td><td>Get the current date</td></tr><tr><td><code>DATE</code></td><td></td><td>Set the date</td></tr><tr><td><code>DEL &lt;file&gt;</code> or <code>ERASE &lt;file&gt;</code></td><td><code>rm &lt;file&gt;</code></td><td>Delete files</td></tr><tr><td><code>DIR</code></td><td><code>ls</code></td><td>List files in the current directory</td></tr><tr><td><code>ECHO &lt;message&gt;</code></td><td><code>print &lt;message&gt;</code></td><td>Print the given values to stdout</td></tr><tr><td><code>ECHO ON</code></td><td></td><td>Echo executed commands to stdout</td></tr><tr><td><code>ENDLOCAL</code></td><td><code>export env</code></td><td>Change env in the caller</td></tr><tr><td><code>EXIT</code></td><td><code>exit</code></td><td>Close the prompt or script</td></tr><tr><td><code>FOR %&lt;var&gt; IN (&lt;set&gt;) DO &lt;command&gt;</code></td><td><code>for $&lt;var&gt; in &lt;set&gt; { &lt;command&gt; }</code></td><td>Run a command for each item in a set</td></tr><tr><td><code>FTYPE</code></td><td></td><td>Displays or modifies file types used in file extension associations</td></tr><tr><td><code>GOTO</code></td><td></td><td>Jump to a label</td></tr><tr><td><code>IF ERRORLEVEL &lt;number&gt; &lt;command&gt;</code></td><td><code>if $env.LAST_EXIT_CODE &gt;= &lt;number&gt; { &lt;command&gt; }</code></td><td>Run a command if the last command returned an error code &gt;= specified</td></tr><tr><td><code>IF &lt;string&gt; EQU &lt;string&gt; &lt;command&gt;</code></td><td><code>if &lt;string&gt; == &lt;string&gt; { &lt;command&gt; }</code></td><td>Run a command if strings match</td></tr><tr><td><code>IF EXIST &lt;filename&gt; &lt;command&gt;</code></td><td></td><td>Run a command if the file exists</td></tr><tr><td><code>IF DEFINED &lt;variable&gt; &lt;command&gt;</code></td><td></td><td>Run a command if the variable is defined</td></tr><tr><td><code>MD</code> or <code>MKDIR</code></td><td><code>mkdir</code></td><td>Create directories</td></tr><tr><td><code>MKLINK</code></td><td></td><td>Create symbolic links</td></tr><tr><td><code>MOVE</code></td><td><code>mv</code></td><td>Move files</td></tr><tr><td><code>PATH</code></td><td><code>$env.Path</code></td><td>Display the current path variable</td></tr><tr><td><code>PATH &lt;path&gt;;%PATH%</code></td><td><code>let-env Path = ($env.Path | prepend &lt;path&gt;</code>)</td><td>Edit the path variable</td></tr><tr><td><code>PATH %PATH%;&lt;path&gt;</code></td><td><code>let-env Path = ($env.Path | prepend &lt;path&gt;</code>)</td><td>Edit the path variable</td></tr><tr><td><code>PAUSE</code></td><td><code>input &quot;Press any key to continue . . .&quot;</code></td><td>Pause script execution</td></tr><tr><td><code>PROMPT &lt;template&gt;</code></td><td><code>let-env PROMPT_COMMAND = { &lt;command&gt; }</code></td><td>Change the terminal prompt</td></tr><tr><td><code>PUSHD &lt;path&gt;</code>/<code>POPD</code></td><td><code>enter &lt;path&gt;</code>/<code>exit</code></td><td>Change working directory temporarily</td></tr><tr><td><code>REM</code></td><td><code>#</code></td><td>Comments</td></tr><tr><td><code>REN</code> or <code>RENAME</code></td><td><code>mv</code></td><td>Rename files</td></tr><tr><td><code>RD</code> or <code>RMDIR</code></td><td><code>rm</code></td><td>Remove directory</td></tr><tr><td><code>SET &lt;var&gt;=&lt;string&gt;</code></td><td><code>let-env &lt;var&gt; = &lt;string&gt;</code></td><td>Set environment variables</td></tr><tr><td><code>SETLOCAL</code></td><td>(default behavior)</td><td>Localize environment changes to a script</td></tr><tr><td><code>START &lt;path&gt;</code></td><td><code>explorer &lt;path&gt;</code></td><td>Open a file as if double-clicked in File Explorer</td></tr><tr><td><code>TIME /T</code></td><td><code>date now | date format &quot;%H:%M:%S&quot;</code></td><td>Get the current time</td></tr><tr><td><code>TIME</code></td><td></td><td>Set the current time</td></tr><tr><td><code>TITLE</code></td><td></td><td>Set the cmd.exe window name</td></tr><tr><td><code>TYPE</code></td><td><code>open --raw</code></td><td>Display the contents of a text file</td></tr><tr><td></td><td><code>open</code></td><td>Open a file as structured data</td></tr><tr><td><code>VER</code></td><td></td><td>Display the OS version</td></tr><tr><td><code>VERIFY</code></td><td></td><td>Verify that file writes happen</td></tr><tr><td><code>VOL</code></td><td></td><td>Show drive information</td></tr></tbody></table>',3),m=e("Before Nu version 0.67, Nu "),h={href:"https://www.nushell.sh/blog/2022-08-16-nushell-0_67.html#windows-cmd-exe-changes-rgwood",target:"_blank",rel:"noopener noreferrer"},g=e("used to"),u=d(" use CMD.EXE to launch external commands, which meant that the above builtins could be run as an <code>^external</code> command. As of version 0.67, however, Nu no longer uses CMD.EXE to launch externals, meaning the above builtins cannot be run from within Nu, except for <code>ASSOC</code>, <code>DIR</code>, <code>ECHO</code>, <code>FTYPE</code>, <code>MKLINK</code>, <code>START</code>, <code>VER</code>, and <code>VOL</code>, which are explicitly allowed to be interpreted by CMD if no executable by that name exists.",19);function p(f,E){const o=i("ExternalLinkIcon");return r(),n("div",null,[s,t("p",null,[m,t("a",h,[g,a(o)]),u])])}const b=c(l,[["render",p],["__file","coming_from_cmd.html.vue"]]);export{b as default};
