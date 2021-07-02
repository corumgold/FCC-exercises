function sum(arr, n) {
  
if (n<=0){
  return 0;
} else {
  return sum(arr, n - 1) + arr[n-1];
}

}
// This will add the first n numbers in the array