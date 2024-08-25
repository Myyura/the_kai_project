---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2019年8月実施 力学系数学
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2019年8月実施 力学系数学

## **Author**
Casablanca

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

が成立する．各 $i, j = 1, 2$ に対して $(i, j)$ 成分が $a_ij (\sigma)$ の 2 次正方行列を $A(\sigma)$ と表す．
このとき，任意の $\sigma_1, \sigma_2 \in G$ に対して $A(\sigma_1) A(\sigma_2) = A(\sigma_2) A(\sigma_1)$ が成立することを示せ．

### English Version


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
u(t) = C_1(-(t+1)e^{-t} + C_2)
$$

where $C_1$ and $C_2$ are constants.

By setting $C_1 = 1$, $C_2 = 0$, we have

$$
\Phi(t) = u(t)e^t = -t-1
$$

### (iii)

$$
\frac{d^2 \sigma(x(t))}{dt^2} = \frac{d\frac{ \sigma(x(t))}{dt}}{dt} = \sigma(\frac{d^2 x(t)}{dt^2})
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
$A(\sigma_i) = \begin{bmatrix}
1 & 0 \\
0 & c_i
\end{bmatrix}
$ is symmetric.
