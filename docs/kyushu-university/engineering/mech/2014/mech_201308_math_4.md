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

下記の微分方程式を考える。

$$
\frac{d^2\phi}{dx^2}=-200.
$$

座標 $x$ を $0\le x\le1$ の範囲で $0$ から $N$ の離散点に等分割し、上記の微分方程式を離散化すると、任意の離散点 $i$ における離散式の1つは以下のようになる。

$$
\frac{\phi_{i-1}-2\phi_i+\phi_{i+1}}{\Delta x^2}=-200.
$$

ここで、$\Delta x$ は離散点の間隔で、$\Delta x=1/N$ である。このとき、次の各問いに答えよ。（50点）

(1) $\phi_0=\phi_N=0$ の境界条件を与えたとき、離散化した式を $A\boldsymbol\phi=\boldsymbol b$ の形式で示せ。なお、$A$ は $(N-1)$ 行 $(N-1)$ 列の行列、$\boldsymbol\phi$ と $\boldsymbol b$ は $(N-1)$ 行1列の行列とする。

(2) (1)で得られた式を変形することで、行列 $A$ の主対角成分より下の成分を全て $0$ にすることができる（すなわち、行列 $A$ を上三角化できる）。このときの、行列 $A$ と $\boldsymbol b$ を求めよ。

(3) (2)の操作を行うと、$\phi_i$ と $\phi_{i+1}$ の関係は漸化式としてあらわせる。その漸化式を求めよ。

(4) $N=10$ としたとき $i=0,1,2,\ldots,10$ の各点における $\phi_i$ を求め、グラフで図示せよ。

### 题目描述

考虑下列微分方程。

$$
\frac{d^2\phi}{dx^2}=-200.
$$

在 $0\le x\le1$ 范围内将坐标 $x$ 等分为编号从 $0$ 到 $N$ 的离散点。对上述微分方程进行离散化后，任意离散点 $i$ 处的一种离散表达式为

$$
\frac{\phi_{i-1}-2\phi_i+\phi_{i+1}}{\Delta x^2}=-200.
$$

其中 $\Delta x$ 是离散点间距，$\Delta x=1/N$。回答以下各问。（50分）

(1) 给定边界条件 $\phi_0=\phi_N=0$，将离散方程写成 $A\boldsymbol\phi=\boldsymbol b$ 的形式。其中 $A$ 是 $(N-1)$ 行 $(N-1)$ 列矩阵，$\boldsymbol\phi$ 和 $\boldsymbol b$ 是 $(N-1)$ 行1列矩阵。

(2) 对(1)所得方程进行变形，可使矩阵 $A$ 主对角线下方的全部元素变为 $0$，即将 $A$ 上三角化。求此时的矩阵 $A$ 和 $\boldsymbol b$。

(3) 进行(2)的操作后，可以用递推关系表示 $\phi_i$ 与 $\phi_{i+1}$ 的关系。求该递推式。

(4) 取 $N=10$，求 $i=0,1,2,\ldots,10$ 各点的 $\phi_i$，并画出其图像。

## **Kai**

### (1)

$B=200/N^2$ とおくと、$-\phi_{i-1}+2\phi_i-\phi_{i+1}=B$ なので

$$
\boxed{\begin{gathered}
A=\begin{pmatrix}2&-1&&0\\-1&2&\ddots&\\&\ddots&\ddots&-1\\0&&-1&2\end{pmatrix},\\
\boldsymbol\phi=\begin{pmatrix}\phi_1\\\phi_2\\\vdots\\\phi_{N-1}\end{pmatrix},\\
\boldsymbol b=B\begin{pmatrix}1\\1\\\vdots\\1\end{pmatrix}
\end{gathered}}.
$$

### (2)

消元後の対角成分を $d_i$、右辺を $c_i$ とすると

$$
\begin{gathered}
d_1=2,\ c_1=B,\\
d_i=2-\frac1{d_{i-1}},\\
c_i=B+\frac{c_{i-1}}{d_{i-1}}.
\end{gathered}
$$

帰納的に $d_i=(i+1)/i$、$c_i=B(i+1)/2$ となる。よって上三角化後は

$$
\boxed{\begin{gathered}
U_{ii}=\frac{i+1}{i},\\
U_{i,i+1}=-1,\\
U_{ij}=0\ \text{（それ以外）},\\
\widetilde b_i=\frac{100(i+1)}{N^2}
\end{gathered}}.
$$

### (3)

$$
\boxed{\begin{gathered}
\phi_i=\frac{i}{i+1}\phi_{i+1}+\frac{100i}{N^2},\\
i=N-1,\ldots,1,\\
\phi_N=0
\end{gathered}}.
$$

後退代入すると $\phi_i=100i(N-i)/N^2$ を得る。

### (4)

$N=10$ では $\boxed{\phi_i=i(10-i)}$。

| $i$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $\phi_i$ | 0 | 9 | 16 | 21 | 24 | 25 | 24 | 21 | 16 | 9 | 0 |

![差分解の各点](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_math-4-difference.svg)
