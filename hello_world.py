#count=0
#for x in range(0,10):
 #   if(x%2 == 0):
  #      print("even number:",x)
   #     count+=1
#print("count of number of even numbers in between is:",count)
#def greet():
 #   print("hello world")
  #  print("hii preethi")
   # print("good morning")


#greet()
#c,b = 0,1
#while(a<10):
 #print(a)
 #a,b =b,a+b

"""a=int(input("enter the number:"))
if(a<0):
 a=0
 print("a is changes into the negitive to zero")
elif(a==0):
 print("a is zero")
elif(a>0):
 print("a is positive number")
else:
 print("none of the abouve")
"""
"""word = ['preethi','is','a','good','girl']
for i in range(len(word)):
 print(word[i])cde fg
s"""
"""fruits = ['orange','apple','banana','orange','apple','banana','banana']
print(fruits.count('banana'))
fruits.remove('banana')
print(fruits)
fruits.insert(0,'preethi')
print(fruits)
fruits.append('lokesh')
print(fruits)
fruits.reverse()
print(fruits)
fruits.pop(3)
print(fruits)"""
"""stack = [1,3,5]
stack.append(7)
stack.append(8)
print(stack)
stack.pop(3)
print(stack)"""
"""from collections import deque
queue = deque(["preethi","ramu",'appi','janu'])
queue.append("loke")
queue.append("nikhi")
print(queue)
queue.popleft()
print(queue)"""
"""square=[]
for i in range(10):
 square.append(i*i)
print(square)"""
"""squares=list(map(lambda x:x*x,range(10)))
print(squares)"""
"""count=[(x,y) for x in[1,2,3] for y in [4,5,6] if(x!=y)]
print(count)"""
"""count=[2,6,7,8]
count1=(list(map((count1,count) lambda x:x+10)))
print(count1)"""
"""vec=[[1,2,3],[4,5,6],[7,8,9]]
print([num for elem in vec for num in elem])"""
"""count = [2,4,8,9]
print(list(map(count1[i for i in range(count)])))"""
"""numbers=[4,5,3,1]
numbers.sort()
print(numbers)
numbers.sort(reverse=True)
print(numbers)"""
#import operator
"""name="preethigeerks"
frequency={}
for i in name:
 if i in frequency:
  frequency[i]+=1
 else:
  frequency[i]=1
print(frequency)
sort_key=sorted(frequency.items(), key=operator.itemgetter(0))
print(sort_key)"""
"""matrix = [[1,2,3],[4,5,6],[7,8,9]]
for i in range(len(matrix)):
 for j in range(len(matrix[i])):
  print(f"{matrix[j][i]}",end=",")
"""
#def myfunc(n)5
"""knights={'gallahad':'the pure','robin':'the breve'}
for k,v in knights.items():
 print(f"{k},{v}")"""
 """import datetime
 d=datetime.date(2016, 7, 24)
 print(d)"""
 
 import json

x = {
  "name": "Ken",
  "age": 45,
  "married": True,
  "children": ("Alice","Bob"),
  "pets": ['Dog'],
  "cars": [
    {"model": "Audi A1", "mpg": 15.1},
    {"model": "Zeep Compass", "mpg": 18.1}
  ]
}
# sorting result in asscending order by keys:
sorted_string = json.dumps(x, indent=4, sort_keys=True)
print(sorted_string)
 
  

