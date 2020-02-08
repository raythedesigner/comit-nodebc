// let f0 = 0;
// let f1 =- 1;
// let f2 = 1;
// var i = 1;
// while (i <= 10) {
//     f = f1 + f2; // 1: -1 + 1 = 0; 2: 1 + 0 = 1;  3: 0 + 1 = 1; 4: 1+1=2;   5: 1+2=3
//     f1 = f2;     // 1: f1 = 1;     2: f1 = 0;     3: f1 = 1;    4: f1 = 1;  5: f1=2
//     f2 = f;      // 1: f2 = 0;     2: f2 = 1;     3: f2 = 1;    4: f2 = 2;  5: f2=3 
//     i++;         // 1: i=1;        2: i = 2;      3: i = 3;     4: i = 4;   5: i = 5
//     // = i = i + 1, shorthand is i++;
//     console.log(f) // 1: 0; 2: 1; 3: 1; 4: 3; 5: 5
// };

function fib(n){
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fib(n-1)+fib(n-2);
}
let result = '';
for(i=0;i<150;i++){
    result += fib(i) + "  ";    
}
console.log(result);