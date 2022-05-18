
let arr = [-4,-3,-1,1,2,3,4,5,7];
let N = arr.length;
let Empty_arr = new Array(N);
let s = 0;
let e= arr.length-1;
while(s<=e){
if(arr[s]*arr[s] <= arr[e]*arr[e])  {
Empty_arr[N-1] = arr[e]*arr[e];
 e--;
}
else if(arr[s]*arr[s] >= arr[e]*arr[e]){
Empty_arr[N-1] = arr[s]*arr[s]
s++;
}
N--;
}
console.log(Empty_arr);
