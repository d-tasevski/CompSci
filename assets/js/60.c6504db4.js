(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{463:function(s,e,a){"use strict";a.r(e);var t=a(42),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"shellscripting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shellscripting"}},[s._v("#")]),s._v(" Shellscripting")]),s._v(" "),a("h2",{attrs:{id:"variables-and-shebang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables-and-shebang"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Variables and Shebang")])]),s._v(" "),a("p",[s._v("The Shell is the standard interface to every Unix and Linux system; users and administrators alike have experience with the shell, and combining commands into scripts is a natural progression. However, this is just a tip of the iceberg.")]),s._v(" "),a("p",[s._v("I've spent some time lately learning about shell and writing scripts, and I've realized that the shell is actually a full programming language with variables and functions, and also more advanced structures such as arrays (including associative arrays) and being so directly linked to the kernel it has native IO primitives built into it's very syntax, as well as process and job control.")]),s._v(" "),a("p",[s._v("I've planned this as a series of a few posts, and I'll try to be concise and on the point.")]),s._v(" "),a("p",[a("em",[s._v("So, what is shellscripting?")])]),s._v(" "),a("p",[s._v("Shellscripting is writing a series of commands for the shell to execute. It can combine lengthy and repetitive sequences of commands into a single and simple script, which can be stored and executed anytime, which is great for automating tasks. This reduces the effort required by the end user.")]),s._v(" "),a("p",[s._v("Script's commands are being executed by the interpreter (shell), one by one, and everything you can type in the command line you can also put in the script.")]),s._v(" "),a("blockquote",[a("p",[s._v("Before running scripts, we need to set up permissions for execution with: "),a("code",[s._v("chmod 755 script.sh")]),s._v(" We can then run the script with "),a("code",[s._v("./script.sh")]),s._v(" via command line.")])]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("p",[a("code",[s._v("#!")]),s._v(" (shebang) specifies binary of the shell (interpreter) we want to execute the script, for example: "),a("code",[s._v("#! /bin/bash")]),s._v(", "),a("code",[s._v("#! /bin/zsh")]),s._v(" or for the best portability "),a("code",[s._v("#! /bin/sh")]),s._v(" (this will run system shell).")]),s._v(" "),a("p",[a("em",[s._v("Note that the most of code in this series is tested only with "),a("code",[s._v("bash")]),s._v(" and "),a("code",[s._v("zsh")]),s._v(" shell, most sh scripts can be run by Bash without modification, but some stuff wont work.")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#! /bin/sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v("\n")])])]),a("p",[s._v("When we execute the script that contains "),a("code",[s._v("#!")]),s._v(" what actually happens is that interpreter is executed and the path used to call the script is passed as an argument. To confirm that, let's say we have "),a("code",[s._v("sleepy.sh")]),s._v(" script, then we can run the script with "),a("code",[s._v("./sleepy.sh &")]),s._v(", where "),a("code",[s._v("&")]),s._v(" is used (it seems) to return the PID of the script execution process, and then we can run "),a("code",[s._v("ps -fp [PID]")]),s._v(" to see process info:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("UID")]),s._v(" PID "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PPID")]),s._v(" C STIME TTY TIME CMD\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("505")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65418")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59985")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(":09PM ttys000 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00.01 /bin/zsh ./sleepy.sh\n")])])]),a("p",[s._v("We can see here that "),a("code",[s._v("./sleepy.sh")]),s._v(" is passed to my "),a("code",[s._v("/bin/zsh")]),s._v(" binary as an argument.")]),s._v(" "),a("p",[s._v("If a script doesn't contain "),a("code",[s._v("#!")]),s._v(" commands are executed with default shell, but it's the best practice to be explicit as different shells have slightly varying syntax.")]),s._v(" "),a("p",[s._v("Also, we don't have to use only shells as interpreters for scripts. We can also use other binaries like "),a("code",[s._v("python")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#! /usr/bin/python")]),s._v("\n\nprint "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is a Python script"')]),s._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("chmod 755 hi.py\n./hi.py\nThis is a Python script\n")])])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[s._v("#")]),s._v(" Variables")]),s._v(" "),a("p",[s._v("Variables are storage locations that have a name, and you can think of them as name-value pairs. Syntax used to create a variable is: "),a("code",[s._v('VARIABLE_NAME="Value"')]),s._v(". It's important to note that variable names are case sensitive, and that, by convention, variable names should be all in uppercase. Also make sure to not use spaces after and before "),a("code",[s._v("=")]),s._v(" sign, when declaring a variable.")]),s._v(" "),a("p",[a("strong",[s._v("By default all variables are global, also they have to be defined before used.")]),s._v(" Variables can be defined in the functions (we'll talk about them eventually), but we cannot access them before a function is called.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FUNC_VAR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# FUNC_VAR is not defined at this point and this will not return anything")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FUNC_VAR")]),s._v("\nvar "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is how we call a function in the shell")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# FUNC_VAR is now available because the function has been called")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FUNC_VAR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Output: 1")]),s._v("\n")])])]),a("p",[s._v("Valid variable names can consist of letters, numbers, and underscores, except that number cannot be the first char in the name.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Valid names")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DARK_JEDI")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Vader"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GR4Y_J3DI")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ahsoka"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Regular_Jedi")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Obi-Wan"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Invalid names")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("3DARK_LORDS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Vader Sidius Plagueis"')]),s._v("\nTWO-REBELS"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Solo Leia"')]),s._v("\nONE@SHIP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ebon Hawk"')]),s._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#! /bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MY_SHELL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zsh"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I like the '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MY_SHELL")]),s._v(' shell"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Output: I like the zsh shell")]),s._v("\n")])])]),a("p",[s._v("We can also enclose the variable name in curly braces:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MY_SHELL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zsh"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I like the '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_SHELL}")]),s._v(' shell"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Output: I like the zsh shell")]),s._v("\n")])])]),a("p",[s._v("Curly braces syntax is optional unless you need to precede or follow up the variable with additional data, like so:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MY_SHELL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"I'm "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_SHELL}")]),s._v('ing on my keyboard!"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Output: I'm bashing on my keyboard.")]),s._v("\n")])])]),a("p",[s._v("Without curly braces this wouldn't work as the interpreter will take that "),a("code",[s._v("ing")]),s._v(" following the name variable as a part of the variable name.")]),s._v(" "),a("p",[s._v("Another best practice is to enclose variables in quotes, when working with them, to prevent some unexpected side effects.")]),s._v(" "),a("p",[s._v("We can also assign the output of the command to a variable:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SERVER_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"You are running this script on '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SERVER_NAME}")]),s._v('"')]),s._v("\n")])])]),a("h4",{attrs:{id:"local-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-variables"}},[s._v("#")]),s._v(" Local variables")]),s._v(" "),a("p",[s._v("Local vars are created with "),a("code",[s._v("local")]),s._v(" keyword, and "),a("strong",[s._v("only functions can have the local variables")]),s._v(", so they can only be accessed within the function where they're declared.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("myFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOCAL_VAR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" I\'m locally scoped"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("It's the best practice to use only local variables inside functions.")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("That's it for now, I'll write a bit about tests and loops in the next one. Thanks for reading, and if you have any question, feel free to shoot me a message!")])])}),[],!1,null,null,null);e.default=n.exports}}]);