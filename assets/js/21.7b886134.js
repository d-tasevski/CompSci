(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{263:function(e,t,o){"use strict";o.r(t);var i=o(28),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"heaps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#heaps"}},[e._v("#")]),e._v(" Heaps")]),e._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#binary-heap"}},[e._v("Binary Heap")])]),o("li",[o("a",{attrs:{href:"#binary-heap-vs-self-balancing-bst"}},[e._v("Binary Heap vs Self-Balancing BST")])]),o("li",[o("a",{attrs:{href:"#array-implementation"}},[e._v("Array Implementation")])]),o("li",[o("a",{attrs:{href:"#binomial-trees-heaps"}},[e._v("Binomial Trees/Heaps")])]),o("li",[o("a",{attrs:{href:"#fibonacci-heap"}},[e._v("Fibonacci Heap")])]),o("li",[o("a",{attrs:{href:"#importance"}},[e._v("Importance")])])])]),o("p"),e._v(" "),o("p",[e._v("[TOC]")]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"binary-heap"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#binary-heap"}},[e._v("#")]),e._v(" Binary Heap")]),e._v(" "),o("p",[e._v("Main operations for binary heap:")]),e._v(" "),o("ul",[o("li",[e._v("Find min: "),o("code",[e._v("O(1)")]),e._v(".")]),e._v(" "),o("li",[e._v("Insert: "),o("code",[e._v("O(log(n))")]),e._v(".\n"),o("ul",[o("li",[e._v("But expected "),o("code",[e._v("O(1)")]),e._v(".")])])]),e._v(" "),o("li",[e._v("Delete min: "),o("code",[e._v("O(log(n))")]),e._v(".")]),e._v(" "),o("li",[e._v("Decrease key: "),o("code",[e._v("O(log(n))")]),e._v(".\n"),o("ul",[o("li",[e._v("If you put a hash map in front.")])])])]),e._v(" "),o("h2",{attrs:{id:"binary-heap-vs-self-balancing-bst"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#binary-heap-vs-self-balancing-bst"}},[e._v("#")]),e._v(" Binary Heap vs Self-Balancing BST")]),e._v(" "),o("ul",[o("li",[e._v("Expected insertion time is "),o("code",[e._v("O(1)")]),e._v(" in a Heap!\n"),o("ul",[o("li",[e._v("Because each level is bigger numbers.")]),e._v(" "),o("li",[e._v("And that's before you go binomial or fibonacci.")]),e._v(" "),o("li",[e._v("For a BST, it's "),o("code",[e._v("O(log n)")]),e._v(".")]),e._v(" "),o("li",[e._v("Note that this logic "),o("em",[e._v("does not")]),e._v(" apply for extraction.")])])]),e._v(" "),o("li",[e._v("Efficient implementation in Array.")]),e._v(" "),o("li",[e._v("Heap creation from "),o("code",[e._v("n")]),e._v(" elements is "),o("code",[e._v("O(n)")]),e._v(".\n"),o("ul",[o("li",[e._v("Put everything in array.")]),e._v(" "),o("li",[e._v("Bottom-most level consists of 1-el subtrees already heapified.")]),e._v(" "),o("li",[e._v("Consider subtrees rooted in 2nd to bottom level; both the left and right subtrees respect heap properties, so just heapify the root down.")]),e._v(" "),o("li",[e._v("Repeat upward.")]),e._v(" "),o("li",[e._v("Each level there are half the subtrees, but the work you're doing per subtree is increasing linearly.")]),e._v(" "),o("li",[e._v("Therefore the sum of the work is dominated by a linear function.")])])])]),e._v(" "),o("h2",{attrs:{id:"array-implementation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#array-implementation"}},[e._v("#")]),e._v(" Array Implementation")]),e._v(" "),o("p",[e._v("A common approach is to build a heap with an array, in which case inserting into/removing from the tail position is O(1).")]),e._v(" "),o("p",[e._v("This means that insert is actually amortized, expected time O(1). Can we eliminate the amortization? One way is to keep a doubly-linked list at each level. You can then keep a cursor into the previous filled level. Each time you have added a second child, you move on to the next item. When you are done, you start iterating through the new level. This also allows fast removal.")]),e._v(" "),o("p",[e._v("I think you can also just use clever math to find the right position. Finally, you can use a dynamic array with O(1) WC insert that does the lazy copying.")]),e._v(" "),o("h2",{attrs:{id:"binomial-trees-heaps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#binomial-trees-heaps"}},[e._v("#")]),e._v(" Binomial Trees/Heaps")]),e._v(" "),o("p",[e._v("The goal of the binomial heap is to provide fast amortized insert.")]),e._v(" "),o("p",[e._v("A binomial heap is a collection of "),o("strong",[e._v("binomial trees")]),e._v(". Binomial trees are recursively defined as:")]),e._v(" "),o("ul",[o("li",[e._v('The tree of one element ("order 0"),')]),e._v(" "),o("li",[e._v('The "order n" tree consists of a root, where all children are, left-to-right, the trees of order "0" up through "order n-1".')])]),e._v(" "),o("p",[e._v("A binomial heap consists of a series of binomial trees, all of which:")]),e._v(" "),o("ul",[o("li",[e._v("Obey the heap property.")]),e._v(" "),o("li",[e._v("There is either one or zero of each size heap.")])]),e._v(" "),o("p",[o("strong",[e._v("Lemma")]),e._v(": There are at most "),o("code",[e._v("log(n)")]),e._v(" trees in the heap. This is because since binomial heaps have size of "),o("code",[e._v("1, 2, 4 ...")]),e._v(', since they\'re always the sum of all prior sizes, plus one. Basically, this is kind of "binary" in the sense that each tree holds '),o("code",[e._v("2**i")]),e._v(" elements. So the number of trees in the heap is popcount of the binary representation.")]),e._v(" "),o("p",[e._v("Merging two binomial "),o("em",[e._v("trees")]),e._v(" of the same order is trivially "),o("code",[e._v("O(1)")]),e._v(": you keep the tree with the smaller root, and affix the other tree as a subtree.")]),e._v(" "),o("p",[e._v("Insertion into the heap operates as a merge with the heap of one element. This can take "),o("code",[e._v("O(log(n))")]),e._v(" time. Consider if there are "),o("code",[e._v("2**k-1")]),e._v(" elements in the heap; then there are "),o("code",[e._v("k")]),e._v(" trees in the heap. Adding a single element causes the first tree to merge with the new element, which needs to merge with the second tree, which needs to merge... Each rollover takes "),o("code",[e._v("O(1)")]),e._v(" time, and there are "),o("code",[e._v("log(n)")]),e._v(" trees, so this is "),o("code",[e._v("O(log(n))")]),e._v(" time overall.")]),e._v(" "),o("p",[e._v("Let's consider the insertion on an amortized basis. The rollover clears out all the small trees, which means we'll next do a rollover this bad in "),o("code",[e._v("2**k")]),e._v(" inserts. Thus the cost amortizes out to "),o("code",[e._v("O(1)")]),e._v(". A little hand-wavy, but should give the idea.")]),e._v(" "),o("p",[e._v("Note that whenever adding a new element, you will have to update the min for finding the minimum, which can be done in "),o("code",[e._v("O(1)")]),e._v(" time by comparing to the current minimum.")]),e._v(" "),o("p",[e._v("Removal means cutting a root, considering its children as another binomial heap, and merging its subtrees with the heap's other subtrees. The worst case is to pick the highest order tree, which has the most children. Consider if there are "),o("code",[e._v("2**k - 1")]),e._v(" elements; then the largest binomial tree stores "),o("code",[e._v("2**(k-1)")]),e._v(" elements; in particular, its root has "),o("code",[e._v("k-1")]),e._v(" children.")]),e._v(" "),o("p",[e._v("Each of these children must be merged in. If we merge the largest subtree first, there can be at most one rollover; "),o("code",[e._v("O(1)")]),e._v(" time. This is true by induction for each subsequent subtree. Therefore, the overall time of the cut is "),o("code",[e._v("O(log(n))")]),e._v(".")]),e._v(" "),o("p",[e._v("Note that the cut very rarely reduces the size of the largest tree (the high order bit in the count), so we won't see the cost ammortize out.")]),e._v(" "),o("p",[e._v("Decreasing a key is still "),o("code",[e._v("O(log(n))")]),e._v(", because you have to bubble up. The worst case is that the decreased key lives in the largest tree, which is of depth "),o("code",[e._v("O(log(n))")]),e._v(". This of course assumes a hash map in front.")]),e._v(" "),o("ul",[o("li",[e._v("Find min: "),o("code",[e._v("O(1)")]),e._v(".")]),e._v(" "),o("li",[e._v("Insert: "),o("code",[e._v("O(log(n))")]),e._v(" WC, "),o("code",[e._v("O(1)")]),e._v(" amortized.\n"),o("ul",[o("li",[o("strong",[e._v("This improved!")]),e._v(" Not just expected "),o("code",[e._v("O(1)")]),e._v(" anymore!")])])]),e._v(" "),o("li",[e._v("Delete min: "),o("code",[e._v("O(log(n))")]),e._v(".")]),e._v(" "),o("li",[e._v("Decrease key: "),o("code",[e._v("O(log(n))")]),e._v(".")])]),e._v(" "),o("p",[o("strong",[e._v("NB: Called a Binomial Heap because there are "),o("code",[e._v("n choose d")]),e._v(" nodes at depth "),o("code",[e._v("d")]),e._v(" in an order "),o("code",[e._v("n")]),e._v(" binomial heap.")]),e._v(" Not particularly exciting, but helps explain the name.")]),e._v(" "),o("p",[e._v('Merge time is also logarithmic in the size of the larger heap. That could be helpful for algorihtms that are exploring from different points than want to "link up".')]),e._v(" "),o("h2",{attrs:{id:"fibonacci-heap"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fibonacci-heap"}},[e._v("#")]),e._v(" Fibonacci Heap")]),e._v(" "),o("p",[e._v("The goal of Fibonacci Heap is to get "),o("code",[e._v("O(1)")]),e._v(" amortized reduce key. It will also give us true "),o("code",[e._v("O(1)")]),e._v(" insert (worst case, not expected, not amortized). The downside is amortized "),o("code",[e._v("O(log(n))")]),e._v(" extract; this used to be a worst-case bound.")]),e._v(" "),o("p",[e._v("Notice, that the Fibonacci heap is likely to be useful if we are calling reduce-key a lot. That can happen in graph algorithms where we call reduce-key once per edge.")]),e._v(" "),o("p",[e._v("We keep a linked list of trees, each obeying the heap property. We always maintain a pointer to the root containing the minimum element. Notice this is a looser structure thus far from Binomial Heaps: no restriction on structure of the trees yet.")]),e._v(" "),o("p",[e._v("We immediately have that "),o("code",[e._v("findMin")]),e._v(" (i.e., "),o("code",[e._v("peek")]),e._v(") is "),o("code",[e._v("O(1)")]),e._v(". Merging two heaps is "),o("code",[e._v("O(1)")]),e._v(" by appending to the doubly-linked list. Updating the minimum element may be necessary. Insertion is "),o("code",[e._v("O(1)")]),e._v(" (worst-case) by creating a new tree of size 1 and adding it to the linked list.")]),e._v(" "),o("p",[e._v("Because we haven't been diligent about combining trees as in Binomial Heap, we have a potential problem with our delete min. The steps of extraction are:")]),e._v(" "),o("ul",[o("li",[e._v("Cut and remove the minimum that you saved.")]),e._v(" "),o("li",[e._v("Add all its children as trees of the heap.")]),e._v(" "),o("li",[o("em",[e._v("Compact the trees. Any two trees with equal degree are merged; one becomes the child of the other.")])]),e._v(" "),o("li",[e._v("We then iterate through the remaining trees to calculate the new minimum.")])]),e._v(" "),o("p",[e._v("At this point, note that the trees we are dealing with (so far!) are binomial trees. The order 0 fibonacci trees have 1 element, the order 1 have a single order 0 subtree. The order 2 subtrees have an order 1 subtree and an order 0 subtree. And likewise.")]),e._v(" "),o("p",[e._v("All we've done is made our compaction "),o("em",[e._v("lazy")]),e._v(". Instead of doing "),o("code",[e._v("O(1)")]),e._v(" amortized work when inserting, we're doing WC "),o("code",[e._v("O(1)")]),e._v(". Then we do "),o("code",[e._v("O(n)")]),e._v(" compaction work when we extract next. But when you amortize this cost out across all the inserts you did, you're doing like "),o("code",[e._v("O(1)")]),e._v(" extra work in extract per previous insert. And of course future extractions are fast.")]),e._v(" "),o("p",[o("strong",[e._v("Decrease Key")])]),e._v(" "),o("p",[e._v("This is where it gets exciting. When we decrease a key, if it violates the heap property, instead of bubbling up, we cut the subtree and push it onto the list of trees. This is "),o("code",[e._v("O(1)")]),e._v(" (append a LL of children to the roots list); the idea is that we'll create more trees, but then we'll clean this all up on extraction.")]),e._v(" "),o("p",[e._v("By cutting out nodes, are trees will not stay binomial. This can hurt the bounds given above.")]),e._v(" "),o("p",[o("strong",[e._v("Potential Method")])]),e._v(" "),o("p",[e._v("For the purpose of reasoning about the amortized analysis, we're going to talk about the "),o("em",[e._v("potential")]),e._v(" of the heap. This is a measure of the disorganization of the tree.")]),e._v(" "),o("p",[e._v("The potential will be defined as "),o("code",[e._v("t(H)+2m(H)")]),e._v(", where "),o("code",[e._v("t(H)")]),e._v(" is the number of trees in the list, and "),o("code",[e._v("m(H)")]),e._v(" is the number of "),o("em",[e._v("marked nodes")]),e._v('. Nodes are marked when they lose a child due to a decrease-key operation. A node is "unmarked" when it is added as a child of another node (e.g., when compaction occurs).')]),e._v(" "),o("p",[e._v("Let's consider the various operations:")]),e._v(" "),o("ul",[o("li",[e._v("Find min is "),o("code",[e._v("O(1)")]),e._v("; it doesn't change the potential. This is constant time.")]),e._v(" "),o("li",[e._v("Insertion is "),o("code",[e._v("O(1)")]),e._v(", but also increases the potential by a constant amount "),o("code",[e._v("O(1)")]),e._v(". It is still, in the amortized analysis, constant time.")]),e._v(" "),o("li",[e._v("Merge involves the concatenation of two root lists. This is O(1). The overall potential does not change.")]),e._v(" "),o("li",[e._v("Extraction is "),o("code",[e._v("O(1)")]),e._v(' to cut the min-root and merge its children onto the root list. But then increases the potential by 1 for each child of the min root appended to the root list. Also, we need to look at all trees to find the new minimum; this is the "consolidation" phase.\n'),o("ul",[o("li",[e._v("To consolidate, we merge root trees with equal root degree.")]),e._v(" "),o("li",[e._v("The easiest way to do this is to create an array that indexes root trees by root degree. Iterate through, adding root trees to this. Merge as necessary, moving up to the next tree.")]),e._v(" "),o("li",[e._v("Then we run through the consolidated tree, finding the new minimum, and turning the array to a LL.")]),e._v(" "),o("li",[e._v("I claim that the consolidation is linear in the size of the root set after cutting the min root. We add each item into the array. We may have to roll over; but that means there is one less item in the array. Let's put it another way: for every two trees that combine, one tree is eliminated. The maximum number of combines is therefore "),o("code",[e._v("num_roots-1")]),e._v(".")]),e._v(" "),o("li",[e._v("This is linear in the overall number of trees.")]),e._v(" "),o("li",[e._v("We'll show (later) that the maximum degree of a root is always "),o("code",[e._v("log(n)")]),e._v(". Likewise, that means that there are at most "),o("code",[e._v("log(n)")]),e._v(" roots "),o("em",[e._v("after")]),e._v(" consolidation.")]),e._v(" "),o("li",[e._v("Thus, we create "),o("code",[e._v("log(n)")]),e._v(" work to consolidate with our cut of the min, then we do the consolidation work, which cleans up all but "),o("code",[e._v("log(n)")]),e._v(" trees, any of which was excess potential. Therefore, we should only be billed "),o("code",[e._v("log(n)")]),e._v(" work!")]),e._v(" "),o("li",[e._v("Basically, we only create "),o("code",[e._v("log(n)")]),e._v(" work; the rest is cleanup. Cleanup time is proportional to the amount of mess that has been made.")])])]),e._v(" "),o("li",[e._v("To decrease a key, we cut it and add it to the list. This is "),o("code",[e._v("O(1)")]),e._v(" and increases the number of trees by 1.\n"),o("ul",[o("li",[e._v("Except it also increases the potential by reducing the children in the parent. If parents had too few children, then we would not be able to ensure the maximum branching factor was "),o("code",[e._v("log(n)")]),e._v(".")]),e._v(" "),o("li",[e._v('We\'ll do a "cascading cut" up the tree; removing the parent if it has lost two children. Obviously this could go all the way up the tree ('),o("code",[e._v("O(log(n))")]),e._v(" work).")]),e._v(" "),o("li",[e._v("Notice that each time we remove a marked node and add it to the root list, we're actually starting some cleanup work. So we actually shouldn't be charged for this work; that should be charged toward the person who marked that node in the first place.")])])])]),e._v(" "),o("p",[e._v("It only remains to prove that the maximum degree of a node is "),o("code",[e._v("log(n)")]),e._v(' when you only let one node be removed. You prove this assuming a "maximally damaged tree", where every node has one child removed.')]),e._v(" "),o("p",[e._v("I'm lazy and won't do this today. But basically it's a very similar argument to the binomial heap. You combine roots just as the binomial heap; the only difference is that you might damage them! That removes one node per child. Basically, I'd consider a binomial heap where every element is one smaller than it should be. Then the number of elements in such a tree is still exponential in the degree of the tree. Thus the max degree must be logarithmic.")]),e._v(" "),o("h2",{attrs:{id:"importance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#importance"}},[e._v("#")]),e._v(" Importance")]),e._v(" "),o("p",[e._v("To my knowledge, mostly in Dijkstra's algorithm to maintain a priority queue that updates fast. Helps for dense graphs.")])])}),[],!1,null,null,null);t.default=a.exports}}]);