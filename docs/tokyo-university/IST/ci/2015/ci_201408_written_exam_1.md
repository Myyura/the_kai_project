---
sidebar_label: '2014年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Algorithm-Complexity
  - Divide-and-Conquer
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2014年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Let a stack of $n$ pancakes with different sizes be given. A spatula is a tool to flip over pancakes. If you put the spatula under the $k$-th pancake from the top, all top to the $k$-th pancakes are flipped over and placed in the reverse order (Fig.1). Let us rearrange the stack using a spatula so that the smallest pancake appears on the top of the stack, monotonically increasing the size, and the largest at the bottom, which we call "ordered-state". We assume that both sides of each pancake are identical and we know which pancake is the $k$-th biggest in advance. From now, we use this pancake-number $k$ to identify the pancake. A "stack-state" is denoted by the sequence of pancake-numbers from the top to the bottom. For example, using our notation, state transitions in Fig. 1 are described as in Fig. 2. Answer the following questions.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201408_1_p1.png" width="300" alt=""/>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201408_1_p2.png" width="300" alt=""/>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201408_1_p3.png" width="300" alt=""/>
</figure>

(1) For $n=3$, draw a state transition graph, whose vertices are "stack-states" and arcs are transitions by a spatula. Fig. 3 shows one example of the state transition graph for $n=2$.

(2) For $n=3$, give an example of "stack-state" which requires the maximum number of flips to reach "ordered-state", and the corresponding number of flips.

(3) For $n=4$, give an example of "stack-state" which requires the maximum number of flips to reach "ordered-state", and the corresponding number of flips.

(4) For general $n$, describe an algorithm for rearrangement to reach "ordered-state" and give its time complexity.