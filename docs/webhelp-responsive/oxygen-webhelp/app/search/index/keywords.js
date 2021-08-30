define(function() {var keywords=[{w:"cookie",p:["p0","p3","p5"]},{w:"chocolate",p:["p1","p3","p5","p7"]},{w:"chip",p:["p1","p3","p5","p7"]},{w:"definition",p:["p2"]},{w:"Nestle",p:["p3","p5","p7"]},{w:"ingredient",p:["p4"]},{w:"Original",p:["p5"]},{w:"Ingredients",p:["p5"]},{w:"making",p:["p6","p7"]},{w:"Cookies",p:["p7"]}];
var ph={};
ph["p0"]=[0];
ph["p1"]=[1, 2];
ph["p2"]=[3];
ph["p3"]=[4, 1, 2, 0];
ph["p4"]=[5];
ph["p5"]=[6, 4, 1, 2, 0, 7];
ph["p6"]=[8];
ph["p7"]=[8, 4, 1, 2, 9];
     return {
         keywords: keywords,
         ph: ph
     }
});
