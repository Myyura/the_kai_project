---
sidebar_label: "2019年8月実施 力学系数学"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Reduction-of-Order
  - Mathematics.Differential-Equations.Differential-Galois-Theory
---
# 京都大学 情報学研究科 数理工学専攻 2019年8月実施 力学系数学

## **Author**
Casablanca, 祭音Myyura

## **Description**
### 日本語版
$a, b \in \mathbb{R}$ を定数として次の実微分方程式を考える．

$$
\begin{align}
t \frac{d^2 x}{d t^2} + (at + b)\frac{dx}{dt} + x = 0  \tag{1}
\end{align}
$$

$X$ を $t$ の有理関数，式 (1) の解およびそれらの高階導関数の有理式全体からなる集合とする．
特に，$X$ は式 (1) の任意の解の 2 階導関数を含む．次の条件を満たす全単射写像 $\sigma: X \rightarrow X$ 全体の集合を $G$ で表す．

(A1) 任意の $f, g \in X$ に対して $\sigma(f + g) = \sigma(f) + \sigma(g)$ および $\sigma(fg) = \sigma(f)\sigma(g)$ が成立

(A2) 任意の有理関数 $f$ に対して $\sigma(f) = f$ が成立

(A3) 任意の $f \in X$ に対して $\frac{d}{dt} \sigma(f) = \sigma \left( \frac{df}{dt} \right)$ が成立

$x = e^t$ が式 (1) の解であるとき，以下の問いに答えよ．

(i) 定数 $a, b$ を定めよ．

(ii) $x = e^t$ と 1 次独立な解 $x = \phi(t)$ を一つ求めよ．

(iii) $x(t)$ が解のとき $\sigma (x(t))$ も解であることを示せ．

(iv) $\phi(t)$ を(ii)で求めた解とする．(iii)により，任意の $\sigma \in G$ に対して，ある定数 $a_{ij}(\sigma) \in \mathbb{R} \ (i, j = 1, 2)$ が存在して

$$
\sigma(e^t) = a_{11} (\sigma) e^t + a_{12} (\sigma) \phi(t), \quad \sigma(\phi(t)) = a_{21} (\sigma) e^t + a_{22} (\sigma) \phi(t)
$$

が成立する．各 $i, j = 1, 2$ に対して $(i, j)$ 成分が $a_{ij}(\sigma)$ の 2 次正方行列を $A(\sigma)$ と表す．
このとき，任意の $\sigma_1, \sigma_2 \in G$ に対して $A(\sigma_1) A(\sigma_2) = A(\sigma_2) A(\sigma_1)$ が成立することを示せ．

### English Version


### 题目描述

设 $a,b\in\mathbb R$，考虑实微分方程

$$
t\frac{d^2x}{dt^2}+(at+b)\frac{dx}{dt}+x=0. \tag{1}
$$

令 $X$ 为由 $t$ 的有理函数、方程 (1) 的解以及这些解的高阶导数所组成的所有有理式的集合；特别地，$X$ 包含任意解的二阶导数。令 $G$ 为所有满足下列条件的双射 $\sigma:X\to X$ 的集合：

- 对任意 $f,g\in X$，
  $\sigma(f+g)=\sigma(f)+\sigma(g)$ 且
  $\sigma(fg)=\sigma(f)\sigma(g)$；
- 对任意有理函数 $f$，$\sigma(f)=f$；
- 对任意 $f\in X$，
  $\dfrac d{dt}\sigma(f)=\sigma\!\left(\dfrac{df}{dt}\right)$。

已知 $x=e^t$ 是方程 (1) 的解。回答：

1. 确定常数 $a,b$。
2. 求一个与 $e^t$ 线性无关的解 $x=\phi(t)$。
3. 证明若 $x(t)$ 是解，则 $\sigma(x(t))$ 对任意 $\sigma\in G$ 也为解。
4. 取第 2 问的 $\phi(t)$。由第 3 问，对每个 $\sigma\in G$ 存在实常数 $a_{ij}(\sigma)$ 使

   $$
   \begin{aligned}
   \sigma(e^t)&=a_{11}(\sigma)e^t+a_{12}(\sigma)\phi(t),\\
   \sigma(\phi(t))&=a_{21}(\sigma)e^t+a_{22}(\sigma)\phi(t).
   \end{aligned}
   $$

   令 $A(\sigma)$ 为以 $a_{ij}(\sigma)$ 为 $(i,j)$ 元的二阶方阵。证明对任意 $\sigma_1,\sigma_2\in G$，

   $$
   A(\sigma_1)A(\sigma_2)=A(\sigma_2)A(\sigma_1).
   $$

## **Kai**
### (i)
substitute $x$ by $e^t$ in (1),

$$
te^t + (at + b)e^t + e^t = 0
$$

we have $a = b = -1$

### (ii)
Let $\phi(t) = u(t)e^t$ and substitute $x$ by $\phi(t)$ in (1), we have

$$
tu''(t) + (t-1)u'(t) = 0
$$

by solving this equation, we obtain:

$$
u(t) = -C_1(t+1)e^{-t} + C_2
$$

where $C_1$ and $C_2$ are constants.

By setting $C_1 = 1$, $C_2 = 0$, we have

$$
\phi(t) = u(t)e^t = -t-1
$$

### (iii)

$$
\frac{d^2 \sigma(x(t))}{dt^2} = \frac{d}{dt}\left(\frac{d\sigma(x(t))}{dt}\right) = \sigma(\frac{d^2 x(t)}{dt^2})
$$

$$
t \frac{d^2 \sigma(x(t))}{dt^2} = \sigma(t)\sigma(\frac{d^2x(t)}{dt^2}) = \sigma(t \frac{d^2 x(t)}{dt^2})
$$

$$
-(t+1)\frac{d\sigma(x(t))}{dt} = \sigma(-(t+1)\frac{dx(t)}{dt})
$$

And we obtain

$$
t \frac{d^2 \sigma(x(t))}{dt^2} - (t+1)\frac{d\sigma(x(t))}{dt} + \sigma(x(t)) = \sigma(0) = 0
$$

### (iv)
Since $\phi(t)=-t-1$ is rational, (A2) gives $\sigma(\phi)=\phi$. Also (A3) gives

$$
\frac d{dt}\sigma(e^t)=\sigma(e^t).
$$

Writing $\sigma(e^t)=a_{11}e^t+a_{12}\phi$ and differentiating shows $a_{12}=0$. Bijectivity gives $a_{11}\ne0$. Thus

$$
A(\sigma)=\begin{pmatrix}c(\sigma)&0\\0&1\end{pmatrix},
\qquad c(\sigma)\ne0.
$$

All such diagonal matrices commute, so

$$
A(\sigma_1)A(\sigma_2)=A(\sigma_2)A(\sigma_1).
$$
