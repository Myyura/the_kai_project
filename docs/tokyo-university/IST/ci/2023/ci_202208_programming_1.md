---
sidebar_label: '2022年8月実施 プログラミング 第1問'
tags:
  - Tokyo-University
  - Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2022年8月実施 プログラミング 第1問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**

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
