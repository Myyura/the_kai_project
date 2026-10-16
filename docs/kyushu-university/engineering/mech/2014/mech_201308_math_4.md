---
sidebar_label: "2013年8月実施 問4（数学）"
tags:
  - Kyushu-University
  - Mathematics.Numerical-Analysis.Central-Finite-Difference-for-Second-Derivative
---

# 九州大学 工学府 機械系専攻 2013年8月実施 数学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

微分方程式 $d^2\phi/dx^2=-200$ を考える。$0\le x\le1$ を $0$ から $N$ の離散点に等分割し、$\Delta x=1/N$ とすると、任意の内点 $i$ における離散式は

$$
\frac{\phi_{i-1}-2\phi_i+\phi_{i+1}}{\Delta x^2}=-200
$$

となる。次の各問いに答えよ。（50点）

1. $\phi_0=\phi_N=0$ の境界条件を与えたとき、離散化した式を $A\boldsymbol\phi=\boldsymbol b$ の形式で示せ。$A$ は $(N-1)\times(N-1)$ 行列、$\boldsymbol\phi$ と $\boldsymbol b$ は $(N-1)\times1$ 行列とする。
2. 行列 $A$ の主対角成分より下の成分を全て $0$ にするよう式を変形し、そのときの $A$ と $\boldsymbol b$ を求めよ。
3. (2) から得られる $\phi_i$ と $\phi_{i+1}$ の漸化式を求めよ。
4. $N=10$ のとき、$i=0,1,\ldots,10$ の各点における $\phi_i$ を求め、グラフで図示せよ。

#### 题目描述

将一维二阶方程的差分形式写为矩阵方程，消元得到上三角矩阵和递推关系，最后计算并画出 $N=10$ 时的各节点值。

## **Kai**

### (1)

$B=200/N^2$ とおくと、$-\phi_{i-1}+2\phi_i-\phi_{i+1}=B$ なので

$$
\boxed{A=\begin{pmatrix}2&-1&&0\\-1&2&\ddots&\\&\ddots&\ddots&-1\\0&&-1&2\end{pmatrix},\qquad
\boldsymbol\phi=\begin{pmatrix}\phi_1\\\phi_2\\\vdots\\\phi_{N-1}\end{pmatrix},\qquad
\boldsymbol b=B\begin{pmatrix}1\\1\\\vdots\\1\end{pmatrix}}.
$$

### (2)

消元後の対角成分を $d_i$、右辺を $c_i$ とすると

$$
d_1=2,\ c_1=B,\qquad d_i=2-\frac1{d_{i-1}},\quad
c_i=B+\frac{c_{i-1}}{d_{i-1}}.
$$

帰納的に $d_i=(i+1)/i$、$c_i=B(i+1)/2$ となる。よって上三角化後は

$$
\boxed{U_{ii}=\frac{i+1}{i},\quad U_{i,i+1}=-1,\quad
U_{ij}=0\ \text{（それ以外）},\qquad
\widetilde b_i=\frac{100(i+1)}{N^2}}.
$$

### (3)

$$
\boxed{\phi_i=\frac{i}{i+1}\phi_{i+1}+\frac{100i}{N^2},
\qquad i=N-1,\ldots,1,\quad\phi_N=0}.
$$

後退代入すると $\phi_i=100i(N-i)/N^2$ を得る。

### (4)

$N=10$ では $\boxed{\phi_i=i(10-i)}$。

| $i$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $\phi_i$ | 0 | 9 | 16 | 21 | 24 | 25 | 24 | 21 | 16 | 9 | 0 |

![差分解の各点](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_math-4-difference.svg)
