(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{258:function(t,e,a){"use strict";a.r(e);var s=a(28),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ruby"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ruby"}},[t._v("#")]),t._v(" Ruby")]),t._v(" "),a("blockquote",[a("p",[t._v("Notes and examples")])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#ruby-data-types"}},[t._v("Ruby Data Types")]),a("ul",[a("li",[a("a",{attrs:{href:"#puts-and-print"}},[t._v("puts and print")])]),a("li",[a("a",{attrs:{href:"#returning-values"}},[t._v("Returning Values")])]),a("li",[a("a",{attrs:{href:"#methods"}},[t._v("Methods")])]),a("li",[a("a",{attrs:{href:"#string-interpolation"}},[t._v("String Interpolation")])]),a("li",[a("a",{attrs:{href:"#truthiness"}},[t._v("Truthiness")])]),a("li",[a("a",{attrs:{href:"#ruby-conditionals"}},[t._v("Ruby Conditionals")])]),a("li",[a("a",{attrs:{href:"#loops"}},[t._v("Loops")])])])])])]),a("p"),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"ruby-data-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ruby-data-types"}},[t._v("#")]),t._v(" Ruby Data Types")]),t._v(" "),a("p",[t._v("Ruby have six data types: booleans, symbols, numbers, strings, arrays, and hashes")]),t._v(" "),a("h3",{attrs:{id:"puts-and-print"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#puts-and-print"}},[t._v("#")]),t._v(" "),a("code",[t._v("puts")]),t._v(" and "),a("code",[t._v("print")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("puts")]),t._v(' (short for "out'),a("em",[t._v("put s")]),t._v('tring") and '),a("code",[t._v("print")]),t._v(" commands are both used to display in the console the results of evaluating Ruby code. The primary difference between them is that puts adds a new line after executing, and print does not.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("times "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" print "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello!"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# > Hello!Hello!Hello!")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("times "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello!"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# > Hello!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# > Hello!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# > Hello!")]),t._v("\n")])])]),a("p",[t._v("By default, Ruby doesn't display any output. The methods "),a("code",[t._v("puts")]),t._v(" and "),a("code",[t._v("print")]),t._v(" are a great way to explicitly tell the program to display specific information. Without these printing methods, Ruby will read the line, but not print anything out.")]),t._v(" "),a("h3",{attrs:{id:"returning-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returning-values"}},[t._v("#")]),t._v(" Returning Values")]),t._v(" "),a("p",[t._v("A return value is the data returned to the program by the execution of a method, the assignment of a variable, actually...")]),t._v(" "),a("p",[t._v("Every method in Ruby returns a value by default. This returned value will be the value of the last statement.")]),t._v(" "),a("p",[t._v("For example, let's look at this method called "),a("code",[t._v("restaurant")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("restaurant")])]),t._v("\n  restaurant_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Guy\'s American Kitchen & Bar"')]),t._v("\n  cuisine "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"american"')]),t._v("\n  motto "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Welcome to Flavor Town!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("The return value of the "),a("code",[t._v("restaurant")]),t._v(" method is "),a("code",[t._v('"Welcome to Flavor Town!"')]),t._v(" because that was the last statement evaluated.")]),t._v(" "),a("p",[t._v("To make a method that just prints your name and returns nil, you could write:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_name")])]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Guy Fieri"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("the return value of a puts, as seen in the table above, is always nil.")])]),t._v(" "),a("p",[t._v("To write a method that returns your name but doesn't print anything, you could write:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("return_name")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Guy Fieri"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("h4",{attrs:{id:"the-return-keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-return-keyword"}},[t._v("#")]),t._v(" The Return Keyword")]),t._v(" "),a("p",[t._v("There is one other way to return a value from a method and that is to use the "),a("code",[t._v("return")]),t._v(" keyword.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stylish_chef")])]),t._v("\n  best_hairstyle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Guy Fieri"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Martha Stewart"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Guy Fieri"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("the "),a("code",[t._v("return")]),t._v(" value of the above method is => Martha Stewart!")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("return")]),t._v(' keyword will disrupt the execution of your method. If you employ it, your method will return whatever you have explicitly told it to (in this case, "Martha Stewart"), and terminate.')]),t._v(" "),a("blockquote",[a("p",[t._v("The explicit use of the "),a("code",[t._v("return")]),t._v(" keyword is generally avoided by many Rubyists, but there are instances where you might want to use "),a("code",[t._v("return")]),t._v(" instead of relying on implicit returns.")])]),t._v(" "),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("p",[t._v("You can define a method in Ruby with the "),a("code",[t._v("def")]),t._v(" keyword. A method's name can begin with any lowercase letter. Here's a quick example:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Method Signature")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Method Body")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Method Closing")]),t._v("\n")])])]),a("p",[t._v("That first line, "),a("code",[t._v("def greeting")]),t._v(", is called the method signature, it defines the basic properties of the method including the name of the method, greeting.")]),t._v(" "),a("p",[t._v("Once you open a method definition with the "),a("code",[t._v("def")]),t._v(" keyword, all subsequent lines in your program are considered the method's body, the actual procedure or code that your method will run every time it's called.")]),t._v(" "),a("p",[t._v("You must terminate every opening "),a("code",[t._v("def")]),t._v(" of a method with a corresponding "),a("code",[t._v("end")]),t._v(" in order to close the method body. If you don't correctly end a method, your program will have unexpected results or break entirely because of a syntax error. A good practice is to define the method and then immediately close it before programming anything into the method.")]),t._v(" "),a("h4",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("p",[t._v("To add arguments to a method, you specify them in the method signature––the line that starts with def. Simply add parentheses after the name of the method and create a placeholder name for your argument.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Once you define arguments for a method, they become required when you invoke or call the method. If you define a method that accepts a singular argument, when you call that method, you must supply a value for that argument, otherwise, you get an ArgumentError. Additionally, a method defined to accept one argument will raise an error if called with more than one argument.")])]),t._v(" "),a("h5",{attrs:{id:"default-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-arguments"}},[t._v("#")]),t._v(" Default Arguments")]),t._v(" "),a("p",[t._v("In order to define a method that optionally takes in an argument, we define our method to take in an argument with a default value. By defining our method with default arguments, we make it possible to call the method with optional arguments, i.e. with or without arguments.")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#             assigning a default value")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ruby programmer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("It is possible to define a method that takes in both required and default arguments. To do so, however, we must place the default argument at the end of the argument list in the method definition.")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" language"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ruby"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v(". We heard you are a great "),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("language"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v(' programmer."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("h3",{attrs:{id:"string-interpolation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-interpolation"}},[t._v("#")]),t._v(" String Interpolation")]),t._v(" "),a("p",[t._v("To interpolate, you wrap the variable like "),a("code",[t._v("#{this}")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[t._v("answer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flamboyance"')]),t._v("\nputs "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A group of flamingos is called a '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("answer"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('."')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Another Way to Interpolate Variables into Strings")])]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[t._v("answer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Flamboyance"')]),t._v("\nputs "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A group of flamingos is called a "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" answer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v("\n")])])]),a("p",[t._v('Interpolation will only work on Strings wrapped in double quotes "". '),a("strong",[t._v("Single quotes: '' do not support string interpolation")])]),t._v(" "),a("h3",{attrs:{id:"truthiness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#truthiness"}},[t._v("#")]),t._v(" Truthiness")]),t._v(" "),a("p",[t._v("Many programming languages, including Ruby, have native "),a("code",[t._v("boolean")]),t._v(" (true or false) data types. In Ruby they're expressed directly as "),a("code",[t._v("true")]),t._v(" and "),a("code",[t._v("false")]),t._v(". These boolean values come in handy in programming when we want to implement control flow. Control flow is the idea that we can tell our program to execute certain lines of code based upon certain conditions.")]),t._v(" "),a("p",[t._v("In Ruby only false and nil are falsey. Everything else is truthy (yes, even 0 is truthy).")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Value")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Truthy?")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('" "')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('"hello"')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("nil")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("6.7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TRUE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("FALSE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("[1,2]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v('{:hi=>"there"}')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")])])])]),t._v(" "),a("p",[t._v("In Ruby there are three main boolean operators:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("!")]),t._v(' ("single-bang") which represents "NOT",')]),t._v(" "),a("li",[a("code",[t._v("&&")]),t._v(' ("double-ampersand") which represents "AND", and')]),t._v(" "),a("li",[a("code",[t._v("||")]),t._v(' ("double-pipe") which represents "OR".')])]),t._v(" "),a("p",[t._v("To check if two values are equal, we use the comparison operator represented with "),a("code",[t._v("==")]),t._v(' ("double-equal-sign"). If two values are equal, then the statement will return '),a("code",[t._v("true")]),t._v(". If they are not equal, then it will return "),a("code",[t._v("false")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> false")]),t._v("\n")])])]),a("h3",{attrs:{id:"ruby-conditionals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ruby-conditionals"}},[t._v("#")]),t._v(" Ruby Conditionals")]),t._v(" "),a("h4",{attrs:{id:"implementing-control-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementing-control-flow"}},[t._v("#")]),t._v(" Implementing Control Flow")]),t._v(" "),a("p",[t._v("There are a number of ways to tell your program to conditionally execute certain code, the basic forms of which are:")]),t._v(" "),a("ul",[a("li",[t._v("if, else, and elsif statements,")]),t._v(" "),a("li",[t._v("case statements,")]),t._v(" "),a("li",[t._v("loops.")])]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  print "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5 is greater than 2"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v('\n   puts "'),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("This")]),t._v(" will never get printed because the above\n     statement evaluates to "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v('"\n'),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n   puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This will get printed!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" dog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hungry"')]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Refilling food bowl."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elsif")]),t._v(" dog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thirsty"')]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Refilling water bowl."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Reading newspaper."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"loops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loops"}},[t._v("#")]),t._v(" Loops")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.")]),t._v("times "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi! I\'m printed 10 times"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("h4",{attrs:{id:"the-loop-keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-loop-keyword"}},[t._v("#")]),t._v(" The "),a("code",[t._v("loop")]),t._v(" Keyword")]),t._v(" "),a("p",[t._v("This is the simplest looping construct that we have in Ruby. It simply executes a block (the code that is between the "),a("code",[t._v("do")]),t._v(" and "),a("code",[t._v("end")]),t._v(" keywords).")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[t._v("loop "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I have found the Time Machine!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("This will output I have found the Time Machine! an infinite number of times, in other words it'll create infinite loop. We can use the "),a("code",[t._v("break")]),t._v(" keyword inside the body of the loop to exit or abort the "),a("code",[t._v("loop")]),t._v(" and continue with the rest of our code.")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[t._v("loop "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You\'ll see this exactly once."')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Exit the Loop")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("Counter example:")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[t._v("counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start our counter at 0, we have never run the loop")]),t._v("\nloop "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start our loop")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# increment our counter by 1 and set it equal to the sum of its current value, plus 1.")]),t._v("\n  counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or  counter += 1")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Do Something")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Iteration '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("counter"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v(' of the loop"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If our counter is 10 or more")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Stop the loop")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("h4",{attrs:{id:"while-and-until-loops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#while-and-until-loops"}},[t._v("#")]),t._v(" While and Until Loops")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("while")]),t._v(" construct is a little different from the loop construct that we looked at earlier. The while construct will keep executing a block as long as a specific condition is true.")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[t._v("counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The current number is less than 20."')]),t._v("\n  counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[a("code",[t._v("until")]),t._v(" is simply the inverse of a "),a("code",[t._v("while")]),t._v(" loop. An "),a("code",[t._v("until")]),t._v(' keyword will keep executing a block until a specific condition is true. In other words, the block of code following until will execute while the condition is false. One helpful way to think about it is to read until as "if not".')]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[t._v("counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("until")]),t._v(" counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The current number is less than 20."')]),t._v("\n  counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);