 #pallidrome number
n= int (input("enter a number"))
rev = 0 
temp = 1
while n > 0:
    digits = n% 10
    rev = rev+digits ** 3
    n = n//10
    if temp == rev
print("the digit is =",rev)