---
sidebar_label: 2022年8月実施 プログラミング 第1問
tags:
  - Tokyo-University
  - Computer-Science.Programming
  - Operations-Research.Combinatorial-Optimization.Shortest-Path-Problem
  - Discrete-Mathematics.Graph-Theory.Connectivity
  - Discrete-Mathematics.Graph-Theory.Spanning-Tree
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2022年8月実施 プログラミング 第1問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

Suppose that we have a maze on a square board with $m \times m$ cells. 
The cell in the $i$-th row and the $j$-th column is denoted by $(i,j)$, where $0 \leq i \leq m-1$ and $0 \leq j \leq m-1$. 
For example, Figure 1 shows a maze on $6 \times 6$ cells. The cell A is $(0,0)$ and the cell B is $(2,5)$. 

The walls composing a maze are denoted as follows. 
The upper wall of the cell $(i,j)$ is denoted by $(2i, 2j+1)$, the lower wall is $(2i+2, 2j+1)$, 
the left wall is $(2i+1, 2j)$, and the right wall is $(2i+1, 2j+2)$. 
For example, the wall p in Figure 2 is $(1,6)$ and the wall q is $(8,1)$.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_202208_p_p1.png" width="600" alt=""/>
</figure>


The layout of walls composing a maze is stored as a character string such as:

```
0,1,1,0,13,6,8,1
```

This represents that there are four walls $(0, 1)$, $(1, 0)$, $(13, 6)$, and $(8, 1)$.

(1) We have a maze on $3 \times 3$ cells. The layout of the walls is stored in file `maze1.txt`. Draw this maze on the answer sheet so that the layout of the walls will be clearly depicted.

(2) We have a maze on $40 \times 40$ cells. The layout of the walls is stored in file `maze2.txt`. Count the number of the dead-end cells, which are surrounded with three walls. Write down that number on the answer sheet.


(3) We have a maze on $40 \times 40$ cells. The layout of the walls is stored in file `maze3.txt`. The start is the cell $(0,0)$ and the goal is the cell $(39,29)$.
Count the number of the cells that will be visited when we move from the start to the goal along the shortest path. Write down that number on the answer sheet. Count the start and the goal for one, respectively. Assume that there exists exactly one path between any pair of two cells in the maze.

(4) We have ten mazes on $40 \times 40$ cells. The layout of the walls for each maze is stored in a file from `maze10.txt` to `maze19.txt`. Which maze satisfies that there exists exactly one path between any pair of two cells in the maze? Write down the names of all the files in which the layouts of the walls are stored for such a maze.

### 题目描述

有一个 $m\times m$ 方格迷宫。第 $i$ 行第 $j$ 列格记为 $(i,j)$，其中 $0\le i,j\le m-1$。例如图 1 的 $6\times6$ 迷宫中，A 为 $(0,0)$，B 为 $(2,5)$。

格 $(i,j)$ 的上、下、左、右墙分别编号为

$$
(2i,2j+1),\quad(2i+2,2j+1),\quad(2i+1,2j),\quad(2i+1,2j+2).
$$

例如图 2 的墙 p 为 $(1,6)$，q 为 $(8,1)$。迷宫墙布局存成逗号分隔字符串，例如

```text
0,1,1,0,13,6,8,1
```

表示四堵墙 $(0,1),(1,0),(13,6),(8,1)$。

1. `maze1.txt` 存有 $3\times3$ 迷宫墙布局。在答题纸上画出迷宫，清楚标示墙。
2. `maze2.txt` 存有 $40\times40$ 迷宫。统计恰被三堵墙包围的死路格数量，写在答题纸上。
3. `maze3.txt` 存有 $40\times40$ 迷宫，起点 $(0,0)$，终点 $(39,29)$。沿最短路前进时会访问多少格？起、终点各计 1。题设保证迷宫任意两格间恰有一条路径。
4. `maze10.txt`～`maze19.txt` 分别存有十个 $40\times40$ 迷宫。找出满足“任意两格之间恰有一条路径”的所有迷宫，并写出相应文件名。

## **Kai**
The sample data files are [here](https://github.com/sophytoeat/Problem/tree/main/%E9%81%8E%E5%8E%BB%E5%95%8F/%E5%89%B5%E9%80%A0%E6%83%85%E5%A0%B1%E5%AD%A6/%E4%B8%80%E8%88%AC%E6%95%99%E8%82%B2%E7%A7%91%E7%9B%AE(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0)/2023%E5%B9%B4%E5%BA%A6_%E5%A4%8F_%E4%B8%80%E8%88%AC/%E9%85%8D%E5%B8%83%E3%83%86%E3%82%99%E3%83%BC%E3%82%BF).
