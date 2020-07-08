// Failed: 8
// Test Case #1
// Input:
//
// "ABCDEFG", "ABDFFGH"
// Expected:
//
// ["A","B","-C","D","-E","F","+F","G","+H"]
// Actual:
//
// undefined
// Test Case #2
// Input: "CCBC", "CCBC",Expected: ["C","C","B","C"],Actual:  undefined
// Test Case #3
// Input: "CBBC", "CABAABBC",Expected: ["C","+A","B","+A","+A","B","+B","C"],Actual:  undefined
// Test Case #4
// Input: "CABAAABBC", "CBBC",Expected: ["C","-A","B","-A","-A","-A","B","-B","C"],Actual:  undefined
// Test Case #5
// Input: "AABACC", "BABCAC",Expected: ["-A","-A","B","A","+B","C","+A","C"],Actual:  undefined
// Test Case #6
// Input: "HMXPHHUM", "HLZPLUPH",Expected: ["H","-M","-X","+L","+Z","P","-H","-H","+L","U","-M","+P","+H"],Actual:  undefined
// Test Case #7
// Input: "GHMXGHUGXL", "PPGGXHHULL",Expected: ["+P","+P","G","-H","-M","-X","G","+X","H","+H","U","-G","-X","L","+L"],Actual:  undefined
// Test Case #8
// Input: "GMMGZGGLUGUH", "HPGPPMGLLUUU",Expected: ["+H","+P","G","-M","+P","+P","M","G","-Z","-G","-G","L","+L","U","-G","U","-H","+U"],Actual:  undefined
