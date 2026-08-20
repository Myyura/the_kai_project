---
sidebar_label: 2016年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Data-Science-Artificial-Intelligence.Machine-Learning.Reinforcement-Learning
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2016年8月実施 筆記試験 第1問

## **Author**
[tomfluff](https://github.com/tomfluff), 祭音Myyura

## **Description**
Let us consider to order a mobile robot to move from the start $S$ to the goal $G$ in the grid maze illustrated as in Fig. 1.
We can order the robot either of two actions at each cell (state), **up**; move one cell upward, or **right**; move one cell to the right.
When the robot moves into a cell, the robot gets the score written in that cell as the reward.
Black cells represent obstacles.
We cannot order impossible actions to move to obstacles or outside of the maze.
We assume that there are no dead ends in the maze.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201608_1_p1.png" width="350" alt=""/>
</figure>

We consider how we can give the orders at individual cells to reach the goal so that the sum of rewards obtained in the route is maximized.
First, let us consider the case where the robot always moves to the ordered direction.
State value $V(s)$ at each cell $s$ is defined as the maximum value of the sum of rewards that can be obtained by going from $s$ to the goal.
Suppose that the robot moves from cell $s$ to cell $s'$ by order $a$ and obtains the reward $R_{ss'}^a$.
Then $V(s)$ can be recursively calculated as follows:

$$
\begin{align}
    V(s) = \max_{a \in \{\text{up}, \text{right}\}} \{ R_{s s'}^a + V(s') \}. \tag{1}
\end{align}
$$

We assume that the state value and the reward of the goal are both zero.
The order which attains the maximum in the right-hand side of equation (1) is called the best order at the cell $s$.
The best route is defined as the route given by a sequence of the best orders from the start $S$ to the goal $G$.
Let’s consider an example for which rewards are given in Fig. 2. We can calculate state values of individual cells from the goal according to equation (1), as illustrated in Fig. 3.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201608_1_p2.png" width="600" alt=""/>
</figure>

Answer the following questions.

(1) Fill out the empty cells in Fig. 3.

(2) Draw the best route in the maze in Fig. 2. Use the symbols $\uparrow$ for **up** and $\rightarrow$ for **right**, and put either of them in each cell in the route.

(3) For each cell $s$ in the maze in Fig. 1, fill the value of $V(s)$.

(4) Draw the best route in the maze in Fig. 1.

Next, let us consider the case where the robot takes an action (**up** or **right**) different from the order with 20% probability.
Note that the robot always takes an action following the order when moving toward the other direction is impossible.
Here, we define the state value $W(s)$ as the maximum value of the expected value of the sum of rewards that can be obtained by going from $s$ to the goal.
We assume that the state value and the reward of the goal are both zero.

(5) Let $P_{ss'}^a$ denote the probability that the robot moves from cell $s$ to cell $s'$ by order $a$. Write down an equation to calculate $W(s)$ recursively.

(6) For each cell $s$ in the maze in Fig. 1, fill the value of $W(s)$. Round down the calculation results to one decimal place.

(7) Draw the order that should be given at each cell in question (6).

(8) Describe the reason for the difference in the answers of questions (4) and (7).

### 题目描述

让移动机器人在图 1 的网格迷宫中从起点 $S$ 到终点 $G$。每个非障碍格为一个状态，可下达“上移一格”或“右移一格”两种指令；机器人进入某格时获得该格标注的奖励。黑格是障碍，不能下达会进入障碍或越界的动作，且迷宫无死路。

先假设机器人总按指令行动。定义状态价值 $V(s)$ 为从格 $s$ 到终点可获得的最大奖励总和。若在 $s$ 下达动作 $a$ 后进入 $s'$，获得奖励 $R_{ss'}^a$，则

$$
V(s)=\max_{a\in\{\mathrm{up},\mathrm{right}\}}
\left\{R_{ss'}^a+V(s')\right\}. \tag{1}
$$

终点的状态价值和奖励均为 0。使式 (1) 右侧最大的指令称为该格的最佳指令；从 $S$ 连续执行最佳指令所得路线为最佳路线。图 2 给出一组奖励，图 3 示范从终点逆推价值。

1. 填完图 3 的空格。
2. 在图 2 迷宫中画最佳路线，沿路线每格用 $\uparrow$ 或 $\rightarrow$ 标出指令。
3. 填写图 1 每个可达格的 $V(s)$。
4. 画出图 1 的最佳路线。

再假设机器人有 20% 概率执行与指令不同的另一个动作；若另一个方向不可行，则必定按所下指令行动。定义 $W(s)$ 为从 $s$ 到终点可获奖励总和的最大期望，终点价值与奖励仍为 0。

5. 令 $P_{ss'}^a$ 为在状态 $s$ 下达 $a$ 后转移到 $s'$ 的概率，写出递推计算 $W(s)$ 的方程。
6. 计算图 1 各格的 $W(s)$，结果向下取到小数点后一位。
7. 画出第 6 问中每格应下达的指令。
8. 说明第 4 问最佳路线与第 7 问策略不同的原因。

## **Kai**
### (1)

$$
\begin{array}{|c|c|c|}
\hline
-1 & 0 & 0 \\ \hline
3 & 0 & 0 \\ \hline
\mathbf{3} & \mathbf{2} & \mathbf{0} \\ \hline
\end{array}
$$

### (2)

$$
\begin{array}{|c|c|c|}
\hline
\rightarrow & \rightarrow & G \\ \hline
\uparrow & & \\ \hline
\uparrow & & \\ \hline
\end{array}
$$

### (3)
tomfluff从(3)开始直接把[题意改了再重新做了一遍](https://github.com/tomfluff/utokyo-ci-masters-exam/blob/main/2017-Summer/written_exam.md)，其实是错误的。

$$
\begin{array}{|c|c|c|c|c|} \hline 2 & 0 & 0 & 0 & 0 \\ \hline 4 & 2 & \text{B} & 0 & 0 \\ \hline 6 & 4 & \text{B} & 10 & -5 \\ \hline 10 & 10 & 10 & 10 & -10 \\ \hline \end{array}
$$

### (4)

$$
\begin{array}{|c|c|c|c|c|}
\hline
\rightarrow & \rightarrow & \rightarrow & \rightarrow & G \\ \hline
\uparrow & \uparrow & \text{B} & \uparrow & \uparrow \\ \hline
\uparrow & \uparrow & \text{B} & \uparrow & \uparrow \\ \hline
\rightarrow & \rightarrow & \rightarrow & \uparrow & \uparrow \\ \hline
\end{array}
$$

### (5)

$$
W(s) = \max_{a \in \{\text{up}, \text{right}\}} \sum_{s'} P_{ss'}^a [ R_{ss'}^a + W(s') ]
$$

### (6)

$$
\begin{array}{|c|c|c|c|c|}
\hline
2.0 & 0.0 & 0.0 & 0.0 & 0.0 \\ \hline
3.2 & 2.0 & \text{B} & -1.0 & 0.0 \\ \hline
5.8 & 4.0 & \text{B} & 5.2 & -5.0 \\ \hline
7.2 & 5.0 & 1.1 & 1.1 & -10.0 \\ \hline
\end{array}
$$

### (7)

$$
\begin{array}{|c|c|c|c|c|}
\hline
\rightarrow & \rightarrow & \rightarrow & \rightarrow & G \\ \hline
\rightarrow & \uparrow & \text{B} & \uparrow & \uparrow \\ \hline
\rightarrow & \uparrow & \text{B} & \uparrow & \uparrow \\ \hline
\uparrow & \uparrow & \rightarrow & \uparrow & \uparrow \\ \hline
\end{array}
$$

### (8)
The difference comes from the 20% probability of taking the action opposite to the order.
The function $W(s)$ is the maximum expected sum of rewards from that cell to the goal; it is not the probability of a high score.
The suggested order at each cell therefore maximizes expected total reward, rather than only the reward obtained when every order is followed.
It may sacrifice reward on its intended route when that reduces the loss caused by an unintended action.
