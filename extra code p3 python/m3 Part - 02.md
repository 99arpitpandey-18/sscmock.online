#### 1.multiplication table

n = int(input("enter a number"))

for i in range(1,11):

&#x20; print(f" {n} X {i}= {n\*i}"))

##### 2.fibbonic series exp 12358134



\# fibbonic number series

n = int (input("enter a number"))

a = 0

b = 1



for i in range(n):

&#x20;   print(a, end=" ")

&#x20;   c = a + b

&#x20;   a = b

&#x20;   b = c

#### 3\. lcf and hcf both combined practicle



a = int(input("Enter first number: "))

b = int(input("Enter second number: "))



x = a

y = b



while y != 0:

&#x20;   r = x % y

&#x20;   x = y

&#x20;   y = r



hcf = x

lcm = (a \* b) // hcf



print("HCF =", hcf)

print("LCM =", lcm)



JavaScript

let n = prompt("Enter Number");



document.write("Number = " + n + "<br>");

document.write("Square = " + (n\*n) + "<br>");

document.write("Cube = " + (n\*n\*n));

Python

n = int(input("Enter Number: "))



print("Number =", n)

print("Square =", n\*n)

print("Cube =", n\*n\*n)

Output

Enter Number: 5



Number = 5

Square = 25

Cube = 125

Agar Python me ek hi print() me sab print karna ho

n = int(input("Enter Number: "))



print("Number =", n, "\\nSquare =", n\*n, "\\nCube =", n\*n\*n)



Output:



Number = 5

Square = 25

Cube = 125

<!--<!DOCTYPE html>

<html> 

<head>

&#x20;   <title>square and cube</title>

</head>

<body>

<table align="center" border="5" cellpadding="5px" cellspacing="0"> 

<tr>

<th>Number</th>

<th>Square</th>

<th>Cube</th>

&#x20;</tr>

<script language = "javascript">

&#x20;   let n = Number(prompt("Enter a number"));

for(a=0;a<=10;a++)

{

document.write("<tr><td>"+a+"</td><td>"+(a\*a)+"</td><td>"+(a\*a\*a)+"</td></tr>");

}

&#x20;   // document.write("<tr><td>"+a+"</td><td>"+(a\*a)+"</td><td>"+(a\*a\*a)+"</td></tr>");

&#x20;   //document.write(n + " x " + i + " = " + (n \* i) + "<br>");

</script>



</body>

</html>

&#x20;

&#x20;<!DOCTYPE html>

<html>

<head>

&#x20;   <title>Table Program</title>

</head>

<body>



<script>

let n = Number(prompt("Enter a number"));



for(let i = 1; i <= 10; i++)

{

&#x20;   document.write(n + " x " + i + " = " + (n \* i) + "<br>");

}

</script>



</body>

</html>          

{

&#x20;   document.write("<tr><td>"+a+"</td><td>"+(a\*a)+"</td>

&#x20;       <td>"+(a\*a\*a)+"</td></tr>");

}

{

&#x20;   document.write(n + " x " + i + " = " + (n \* i) + "<br>");

}

&#x20;    

<!DOCTYPE html>

<html>

<head>

&#x20;   <title>Square and Cube</title>

</head>

<body>



<script>

&#x20;   let n = prompt("Enter a Number");



&#x20;   document.write("<table border='1'>");

&#x20;   document.write("<tr><th>Number</th><th>Square</th><th>Cube</th></tr>");

&#x20;   document.write("<tr>");

&#x20;   document.write("<td>" + n + "</td>");

&#x20;   document.write("<td>" + (n \* n) + "</td>");

&#x20;   document.write("<td>" + (n \* n \* n) + "</td>");

&#x20;   document.write("</tr>");

&#x20;   document.write("</table>");





</body>

</html> ---><script> 

&#x20;let n = prompt("enter a number")

document.write( "<td>" + n + "</td>"); 

document.write( "<td>" +n\*n +"</td>")<br>

document.write( "<td>" + (n\*n\*n+"</td>" ))</script>



\#include<LiquidCrystal.h>

//RS,E,D4,D5,D6,D7,pins of LCD connected to Arduino

LiquidCrystal lcd (12,11,5,4,3,2);



void setup(){

lcd.begin(32,5);

&#x20; lcd.print("hellow buddy!");

}

&#x20; 

&#x20;           void loop(){

&#x20;           lcd.setCursor(0,1);

&#x20;           lcd.print("Time:");

&#x20;           lcd.print(millis()/1000);

&#x20;           lcd.print("sec");

&#x20;           delay(1000);

&#x20;           }

&#x20;           



