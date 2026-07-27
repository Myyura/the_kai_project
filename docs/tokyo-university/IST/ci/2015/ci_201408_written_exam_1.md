---
sidebar_label: 2014年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
  - Computer-Science.Algorithm-Design.Divide-and-Conquer
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2014年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
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

### 题目描述

给定 \(n\) 张大小互异的煎饼叠成的一摞。把锅铲插到从顶端数第 \(k\) 张下方，可把最上面的 \(k\) 张整体翻转并逆序放回。目标是使最小煎饼在最上方、大小向下单调增加、最大煎饼在最下方，称为“有序状态”。假设煎饼两面相同，且预先知道每张煎饼是第 \(k\) 大，直接以该编号标识；“堆叠状态”用从上到下的编号序列表示。翻转示例见原文图 1、2。

1. 对 \(n=3\)，画状态转移图：顶点为所有堆叠状态，弧表示一次锅铲翻转。图 3 给出 \(n=2\) 的示例。
2. 对 \(n=3\)，给出一个到有序状态所需最少翻转次数达到最大值的初始状态，并给出该次数。
3. 对 \(n=4\) 完成同样任务。
4. 对一般 \(n\)，说明一种把任意状态变为有序状态的算法，并给出其时间复杂度。

#### 考点

- **状态图与最短翻转序列**：枚举排列状态和前缀翻转边，通过最短路距离找出离目标最远的状态。
- **分治式煎饼排序**：逐步把当前最大未归位煎饼翻到顶部再翻到目标底部，缩小剩余问题并分析复杂度。
