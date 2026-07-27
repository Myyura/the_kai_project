---
sidebar_label: "2019年8月実施 情報数理学 数学解析"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations.Systems-of-ODEs
  - Probability-Statistics.Stochastic-Processes.Poisson-Process-Forward-Equations
---
# 大阪大学 情報科学研究科 情報数理学専攻 2019年8月実施 情報数理学 数学解析

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原文题干缺失。根据现有解答，第 1 题可还原为以下常微分方程组；第 2、3 题无法还原。

1. 函数列 $\{x_k(t)\}_{k\ge0}$ 满足
   $$
   x_0'(t)=-x_0(t),\qquad
   x_k'(t)=x_{k-1}(t)-x_k(t)\quad(k\ge1),
   $$
   初值为
   $$x_0(0)=1,\qquad x_k(0)=0\quad(k\ge1).$$
   先求 $x_0,x_1,x_2$，再猜测并证明一般公式 $x_k(t)$。
2. 第 2 题题干与解答均缺失。
3. 第 3 题题干与解答均缺失。

#### 考点

- **一阶线性微分方程**：用积分因子或待定函数逐级求解。
- **递推微分方程组**：由低阶解识别一般模式。
- **数学归纳与代入验证**：验证通式同时满足微分方程和初始条件。

## **Kai**
### 1.
まず、 $x_0(t) = e^{-t}$ は、すぐにわかる。
$x_1(t)$ については、

$$
\begin{aligned}
\frac{dx_1(t)}{dt}
&= - x_1(t) + x_0(t) \\
&= - x_1(t) + e^{-t}
\end{aligned}
$$

なので、適当な関数 $A(t)$ を使って $x_1(t) = A(t) e^{-t}$ と書いて、
上の微分方程式に代入すると、

$$
\begin{aligned}
\frac{dA(t)}{dt} = 1
\end{aligned}
$$

となるので、積分定数を $C$ として、

$$
\begin{aligned}
A(t) &= t + C
\\
\therefore \ \  x_1(t) &= (t + C) e^{-t}
\end{aligned}
$$

であるが、初期条件 $x_1(0)=0$ を満たすようにするには、 $C=0$ とすればよく、

$$
\begin{aligned}
x_1(t) = t e^{-t}
\end{aligned}
$$

を得る。
同様にして、

$$
\begin{aligned}
x_2(t) = \frac{1}{2} t^2 e^{-t}
\end{aligned}
$$

を得る。

以上より、 $k=0,1,2,\cdots$ について、

$$
\begin{aligned}
x_k(t) = \frac{1}{k!} t^k e^{-t}
\end{aligned}
$$

と予想できるが、これは確かに初期条件を満たし、
$k=1,2,\cdots$ について、

$$
\begin{aligned}
\frac{dx_k(t)}{dt}
&= \frac{1}{(k-1)!} t^{k-1} e^{-t} - \frac{1}{k!} t^k e^{-t}
\\
&= x_{k-1}(t) - x_k(t)
\end{aligned}
$$

であるから微分方程式も満たす。

### 2.

### 3.
