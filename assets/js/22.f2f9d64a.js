(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{281:function(e,t,a){"use strict";a.r(t);var o=a(28),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"linked-lists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linked-lists"}},[e._v("#")]),e._v(" Linked Lists")]),e._v(" "),a("p",[e._v("A few advantages of linked lists:")]),e._v(" "),a("ul",[a("li",[e._v("Worst case "),a("code",[e._v("O(1)")]),e._v(" push and pop. Dynamic arrays ammortize that.")]),e._v(" "),a("li",[e._v("No advantage for "),a("code",[e._v("select!")]),e._v(" as you can do in "),a("code",[e._v("O(n)")]),e._v(" time and "),a("code",[e._v("O(1)")]),e._v(" space for a dynarray.\n"),a("ul",[a("li",[e._v("Does recover space as you delete.")])])]),e._v(" "),a("li",[e._v("Persistent data structure. Easier to make into a concurrent queue.\n"),a("ul",[a("li",[e._v("If you don't need concurrent, can just do a ring buffer.")]),e._v(" "),a("li",[e._v("In fact, if you only have one thread on each side, or if you're okay with locks, you can do this with a ring buffer.")]),e._v(" "),a("li",[e._v("But if you want multiple threads on each side without locking, you want a linked list.")])])]),e._v(" "),a("li",[e._v("In fact, comes up a lot in concurrent algos.")]),e._v(" "),a("li",[e._v("With hints can be fast for random access removal. LRUCache is a good example.\n"),a("ul",[a("li",[e._v("Keep a LL of elements from most recently access to least.")]),e._v(" "),a("li",[e._v("Also keep a hash map to the links, so you can move them around on access.")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);