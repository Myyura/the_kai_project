---
sidebar_label: '2021年8月実施 プログラミング 第1問'
tags:
  - Tokyo-University
  - Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2021年8月実施 プログラミング 第1問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**

Answer the following questions by writing programs. If you are taking an onsite examination, the files needed for answering the questions are found in the USB flash drive. Store the programs in the USB flash drive before the examination ends. Also the files generated for answering questions must be stored in the USB flash drive. If you are taking an online replacement examination, the files needed for answering the questions are in the given zip file. To submit the programs and the files, follow the instructions separately given. The submission URL is shown on the last page.

We store the daily numbers of newly infected people with some virus (*new infections*, below) in a text file in chronological order. The numbers are separated by colons (:). For example, when the numbers of new infections for 5 days are

`621 591 907 1121 1032`

the following text

`621:591:907:1121:1032`

is stored in a file.

### **Problem**

(1) Find the 10th biggest number of new infections stored in the text file `infections.txt` and write it on the answer sheet. Count after removing duplicate numbers. For example, the third biggest number among 1, 2, 3, 3, 4 is 2.

(2) For every text file $f$ in the data folder, find $N_f$, the 10th biggest number of new infections in $f$, as in Question (1). Then calculate the sum of all $N_f$ and write it on the answer sheet.

(3) For $x_0,x_1,x_2,x_3,\dots,x_{n-1}$, the numbers of new infections stored in the text file `infections.txt`, the *new-infection increment* on a day is the difference $x_i-x_{i-1}$ between the number of the new infections $x_i$ on that day and $x_{i-1}$ on the day before. Here, the number of new infections on the day before the first day is zero.

Concatenate the new-infection increment for every day into one character sequence and store it in the text file `diff.txt`. Furthermore, count the characters in this sequence and write that number on the answer sheet. The newline character is not counted. Start with + for a non-negative number and start with - for a negative number.

For example, when the new-infection increments are

`621 -30 0 -316 214 -89`

the following character sequence

`+621-30+0-316+214-89`

is stored and the number of characters is 20.

(4) For the numbers of new infections in the text file `infections.txt`, find the shortest period among the periods in which the sum of the new-infection increments is maximized. Write that period on the answer sheet. If more than one such period is found, write all the periods. The first day is Day 1. For example, answer like "From Day 8 to 24". Furthermore, calculate the sum of the new-infection increments during that period, and write that sum on the answer sheet.

## **Kai**

### (1)

```py
with open('infections.txt') as f_infe:
    tmp = f_infe.readline()
    orig_infelst = tmp.split(':')
    orig_infelst = [int(s) for s in orig_infelst]
    infelst = list(set(orig_infelst))
print(sorted(infelst, reverse=True)[2])
```

The third biggest number is 2268.

### (2)

```py
import os
# find all files with "dataxx.txt" 
filelist = []
for filename in os.listdir('.'):
    if filename.startswith('data') and filename.endswith('.txt'):
        filelist.append(filename)
def kth_biggest(ls, k):
    ls = list(set(ls))
    return sorted(ls, reverse=True)[k-1]
lists = [open(tmp).readline().split(':') for tmp in filelist]
lists = [[int(s) for s in l] for l in lists]
nfs = [kth_biggest(l, 10) for l in lists]
sum(nfs)
```

The sum is 8650.

### (3)

```py
diffs = []
diffstring = ""
for i, n in enumerate([0] + orig_infelst[:-1]):
    nn = orig_infelst[i]
    d = nn-n
    diffs += [d]
    diffstring += str(d) if d < 0 else '+' + str(d)
print(diffstring)
print(len(diffstring))
with open('diff.txt', 'w') as f:
    f.write(diffstring)
```

The character count is 1431.

### (4)

$O(n^3)$:

```py
# O(n^3)
print("Total: {} days".format(len(orig_infelst)))
tuples = []
for i in range(len(diffs)):
    for j in range(i, len(diffs)):
        tuples.append((sum(diffs[i:j+1]), i, j))
maximal = max(tuples, key=lambda x: x[0])
for t in tuples:
    if t[0] == maximal[0]:
        print(t[0], t[1]+1, t[2]+1)
```



$ O(n)$ (`dpmemory` to only save the last start point, since the question asks for the smallest period)

```py
dp = [diffs[0]] # dp[i] is the maximum constegious period ending with i
dpmemory = [0] # closest start point
for i, n in enumerate(diffs):
    if i == 0:
        continue
    if dp[i-1] < 0: # start newly with (i,i)
        dp += [n]
        dpmemory += [i]
    elif dp[i-1] > 0: # inherit
        dp += [dp[i-1] + n]
        dpmemory += [dpmemory[i-1]]
    else: # two choices
        dp += [n] # = dp[i-1] + n
        dpmemory += [i]
maximal = max(dp)
for i, (d, dd) in enumerate(zip(dp, dpmemory)):
    if d == maximal:
        print(maximal, dd+1, i+1)
```

The periods:

From Day 109 to 306 (including 306)

The sum is 2447.

