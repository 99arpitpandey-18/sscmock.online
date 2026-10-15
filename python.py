# 01 #reverse number               02 #palidrome number        03#armstrong number          04#prime Number
# n = int(input("enter a number")) #n= int(input(enter num)) # n= int(input("enter anum"))  #n = int (input("enter a number"))                 
# rev = 0                          #temp = n                   #tem = n                     #a = 0
# while n>0:                       # rev = 0                   #sum = 0                     #for i in range (1,n+1)
#     digit = n%10                 # while n>0:                #while n>0:                  #if n%i == 0
#     rev = rev * 10 + digit       #digit = n % 10             #digit = n % 10              #a = a+1 
#     n = n // 10                  #rev = rev * 10 + digit     #sum = sum + digit ** 3      # if a ==2: 
# print("reverse = ",rev)          #n  = n//10                 #n = n // 10                 # print("prine number")
# rev = rev+digit = sum of digit# #if temp== rev:             #if temp == sum:             #else:
#                                 # #print(palidrome)           #print("armstrong number")   #print("not prime number") 
#                                  #eles:                      #else:                               
#                                  #print(not palidrome)       #print("not armstrong number") 
#____________________________________________________________________________________________________________________
#05 fibbonic series                06 # swap 2 number           07 # factorial number        08# leap year                    
# n = int(input("enter a number" )) #a = int(input("enter num")) #n = int(input("enter num")) #year = (input("year"))                                                          
# a = 0                            #b = int(input("enter num")) #fact = 1                    #if (year%4 ==0)or                                    
# b = 1                            #a , b = b , c               #for i in range(1,n+1):      #   (year% 400==0)and                     
# print("fibbonic series:")        #print("a=",a)               #fact = fact*i               #   (year!=100):                                  
# for i in range(n):               #print("b=",b)               #print("factorial=",fact)    #print("leap year")                                   
#     print(a,end=" ")                                                                       #else print("not leap year")        
#     c = a+b                                                                                #
#     a = b                                                                                  
#     b = c                                                         
# 08 recurtion function to find 
#the sum of digits
# n = int(input("enter a number"))
# sum = 0
# while n>0:
#     digit= n % 10
#     sum = sum +digit
#     n = n //10
# print("sum of digit=",sum)
 
 