import random
import datetime

animals = ["cat", "dog", "bird", "lion"]
choice = random.choice(animals)
print("랜덤으로 동물 고르기 : " + choice)

print("----------------------------------------")

num1 = random.randrange(1,7)
num2 = random.randrange(1,7)
sum = num1 + num2

print("두 랜덤 주사위 숫자값의 합 :", sum) # + sum 으로 하면 타입에러남..

print("----------------------------------------")

date = datetime.datetime.now()

print("Today's date is :", date.year, date.month, date.day)

if(date.weekday() == 4):
    print("Friday...^^")

if(date.weekday() in [4]): # in [a, b] : if a or b 와 같은 의미임. 
    print("Wow Friday!")

print("----------------------------------------")



