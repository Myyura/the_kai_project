---
sidebar_label: '2016年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Reinforcement-Learning
  - Machine-Learning
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2016年8月実施 筆記試験 第1問

## **Author**
[tomfluff](https://github.com/tomfluff)

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
5.9 & 4.0 & \text{B} & 5.2 & -5.0 \\ \hline
7.3 & 5.0 & 1.2 & 1.2 & -10.0 \\ \hline
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
The difference comes from the new probability which was introduced.
The new function $W(s)$ calculates for each cell the probability of the score of the route starting from that cell to the goal.
The suggested route is the route with the highest score probability. Since the robot might "choose" with 20% probability a different route from the suggested one.
The suggested route should maximize the probability for a high score, whatever the choice was by the robot.