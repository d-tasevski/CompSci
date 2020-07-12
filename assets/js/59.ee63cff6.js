(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{462:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"shellscripting-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shellscripting-functions"}},[s._v("#")]),s._v(" Shellscripting - Functions")]),s._v(" "),a("blockquote",[a("p",[s._v("For functions we can say that they're shellscripts within shellscript.")])]),s._v(" "),a("p",[s._v("One of the main reasons why we are using functions is to follow the DRY principle, which means that we should write a function once, and then we can use it many times. This can sometimes drastically reduce the script length, and also it's much easier to maintain as we have a single function to edit and troubleshoot.")]),s._v(" "),a("p",[s._v("Function:")]),s._v(" "),a("ul",[a("li",[s._v("Hides implementation details from the main script, simplifying the shell script’s main body of code")]),s._v(" "),a("li",[s._v("Can be replaced if the underlying detail it works with is changed")]),s._v(" "),a("li",[s._v("Can be tested over and over again as a small piece of a larger script, with changing input values to prove that the code is correct")]),s._v(" "),a("li",[s._v("Allows consistent reuse of code from within the script, or even between several shell scripts.")])]),s._v(" "),a("hr"),s._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/4l1bsjjtpua17f1w4v1o.png",alt:"xkcd"}})]),s._v(" "),a("figcaption",[a("a",{attrs:{href:"https://xkcd.com/1168/"}},[s._v("Slightly relevant xkcd 😄")])]),s._v(" "),a("h3",{attrs:{id:"exit-statuses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exit-statuses"}},[s._v("#")]),s._v(" Exit statuses")]),s._v(" "),a("p",[s._v("Before we dive into functions it's essential to know that every command executed in shell returns an exit status in the range of 0 to 255. De facto status for success is "),a("code",[s._v("0")]),s._v(", all others are codes for an error condition. This codes can be used in scripts for throwing and checking errors. Usually, we can find what various exit statuses mean by checking the documentation for that error code or look into the source code.")]),s._v(" "),a("p",[s._v("We can use "),a("code",[s._v("$?")]),s._v(" to check the exit status of the previously executed command.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" dir/\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n")])])]),a("p",[s._v("If "),a("code",[s._v("dir")]),s._v(" exists "),a("code",[s._v("echo $?")]),s._v(" will return "),a("code",[s._v("0")]),s._v(" status code, otherwise, it should return "),a("code",[s._v("2")]),s._v(", the error code for directory not found.")]),s._v(" "),a("p",[s._v("We can explicitly define the return codes with "),a("code",[s._v("exit")]),s._v(" command:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#! bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"google.com"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOST")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v('"')]),s._v(" -ne "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOST")]),s._v(' unreachable"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),a("p",[s._v("Simply use the "),a("code",[s._v("exit")]),s._v(" command in your script and follow it with the integer in the range of 0 to 255. If we do not specify the return code with the "),a("code",[s._v("exit")]),s._v(" command, then the exit status of the previously executed command in the shellscript will be used as the exit status. This is also true if we do not include "),a("code",[s._v("exit")]),s._v(" command at all.")]),s._v(" "),a("blockquote",[a("p",[s._v("Whenever the "),a("code",[s._v("exit")]),s._v(" command is reached the shellscript will stop running.")])]),s._v(" "),a("p",[s._v("All functions have an exit status. We can explicitly return status within the function with "),a("code",[s._v("return")]),s._v(" keyword:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("myFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# returning exit status code 1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Also, status can be returned implicitly with the exit status of the last command executed in the function.")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"positional-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positional-parameters"}},[s._v("#")]),s._v(" Positional parameters")]),s._v(" "),a("p",[s._v("Positional parameters are the variables which we can use to specify arguments passed to the function via command line. For example, if we execute the script like this:")]),s._v(" "),a("p",[a("code",[s._v("script.sh param1 param2 param3")])]),s._v(" "),a("p",[s._v("Inside that script we can access all command line arguments like this:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"script.sh"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $0 is always the name of the script")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $1 is the first parameter,")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $2 is the second")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $3 is the third, and so on...")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("NOTE: You cannot change the values of these variables")])]),s._v(" "),a("p",[s._v("A practical example:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# args.sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I was called as '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"My first argument is: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"My second argument is: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I was called with '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v(' parameters."')]),s._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ ./args.sh one two\nI was called as ./args.sh\nMy first argument is: one\nMy second argument is: two\nI was called with "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" parameters.\n")])])]),a("p",[s._v("We can use "),a("code",[s._v("$#")]),s._v(" to check with how much parameters script was called, which is a good way to check if the user has executed the script with enough number of args, for example:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" argCheck.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v('"')]),s._v(" -eq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The script was called with exactly two parameters. Let’s continue."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"You provided '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v(' parameters, but 2 are required."')]),s._v("\n")])])]),a("p",[s._v("We can use "),a("code",[s._v("$@")]),s._v(" variable when we want to loop through script parameters:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This will loop through all parameter passed to the script when executed")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" -l "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lock the account")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),a("hr"),s._v(" "),a("h4",{attrs:{id:"creating-a-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-function"}},[s._v("#")]),s._v(" Creating a function")]),s._v(" "),a("p",[s._v("Let's get back to the functions. It's important to note that function must be defined before it's called, it is conventional to define functions at the start of the file, although this is not strictly necessary. The block of code defined as a function can be declared in one of three different ways, depending on the exact shell in use. The standard Bourne shell syntax uses the function name followed immediately by a pair of parentheses "),a("code",[s._v("()")]),s._v(" and curly brackets "),a("code",[s._v("{}")]),s._v(" around the code itself:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The most common way")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("myFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Code")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# function keyword is optional")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# so this is also correct")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("mySecondFunc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# More code")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"World"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("There is a third syntax, which is not accepted by the Bourne shell, although bash and ksh both accept it. Instead of following the function name by a pair of parentheses, the function name is preceded by the keyword function: "),a("code",[s._v("function myFunc")])]),s._v(" "),a("p",[s._v("As far as I've learned so far, the first one (without keyword "),a("code",[s._v("function")]),s._v(") is the most commonly used as it's accepted by all shells. The second syntax is also used frequently and by using the "),a("code",[s._v("function")]),s._v(" keyword, it provides a more clear declaration that it is a function. Regarding the 3rd one, I couldn't find any information about it, except that it exists 😐")]),s._v(" "),a("h4",{attrs:{id:"calling-a-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calling-a-function"}},[s._v("#")]),s._v(" Calling a function")]),s._v(" "),a("p",[s._v("We can call and execute the function by simply typing its name in the script (after it's been defined first):")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nhello\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${1}")]),s._v('!"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nhello World "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Output: Hello World")]),s._v("\n")])])]),a("p",[s._v("Functions can also call other functions. Here we can see there that the "),a("code",[s._v("hello")]),s._v(" function calls "),a("code",[s._v("now")]),s._v(" function before it's declared, but that's okay as the "),a("code",[s._v("now")]),s._v(" function gets read into the script before the "),a("code",[s._v("hello")]),s._v(" function is called, so in the order of the execution it's defined before it's used.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    now\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%r"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nhello "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Output: 02:15:36 PM")]),s._v("\n")])])]),a("p",[s._v("But, for example, something like this won't work:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    now\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nhello "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hello is called before now is defined")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%r"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Besides calling other functions, shell functions can also call themselves recursively. A simple example to demonstrate this is the mathematical factorial function.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" factorial.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("factorial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" -gt "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("previous")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" $1 - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("parent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("factorial $previous"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("result")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" $1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("* $parent"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nfactorial "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n$ ./factorial.sh "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("720")]),s._v("\n")])])]),a("p",[s._v("You should be very careful when working with recursive functions tho, especially if you are creating files in them, you could end up with more open files than allowed by the system.")]),s._v(" "),a("p",[s._v("Functions also have "),a("code",[s._v("positional parameters")]),s._v(", and "),a("code",[s._v("$@")]),s._v(" can also be used to retrieve the list of all passed arguments.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $0 is the script itself, not the function name")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("helloFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${1}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${2}")]),s._v('!"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nhelloFunc Shell World\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Output: Hello Shell World!")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("Functions also have access to all global variables. But, as a reminder, it's the best practice to use only "),a("code",[s._v("local")]),s._v(" variables inside the functions to avoid side effects, which can eventually cause bugs.")])]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("There is much more to be said about the functions in shellscript, so consider this post just as a small introduction to their usage in scripting. In the next post, I'll write a bit about Wildcards, Character Classes and about logging and debugging shellscript. Thanks for reading!")])])}),[],!1,null,null,null);t.default=n.exports}}]);