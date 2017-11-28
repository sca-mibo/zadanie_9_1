function getTriangleArea(a,h) {
  if ((a > 0) && (h > 0))
    return a*h/2;
  else
    return "Nieprawidłowe dane!";
}
console.log(getTriangleArea(10,6)); //30

var triangleArea1 = getTriangleArea(2,4);
console.log(triangleArea1); //4
var triangleArea2 = getTriangleArea(-1,8); 
console.log(triangleArea2); //Nieprawidłowe dane!
var triangleArea3 = getTriangleArea(8,0); 
console.log(triangleArea3); //Nieprawidłowe dane!