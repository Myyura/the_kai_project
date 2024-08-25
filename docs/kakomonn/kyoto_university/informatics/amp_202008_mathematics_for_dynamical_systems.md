---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2020年8月実施 力学系数学
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2020年8月実施 力学系数学

## **Author**
Casablanca

## **Description**
### 日本語版
$n > 1$ を整数，$f : \mathbb{R}^n \rightarrow \mathbb{R}^n$ を $C^1$ 級関数として，$\mathbb{R}$ 上の微分方程式系

$$
\begin{align}
\frac{dx}{dt} = f(x), \quad x \in \mathbb{R}^n \tag{1}
\end{align}
$$

を考える。$x = \phi(t)$ を $\mathbb{R}$ 上で有界な式 (1) の非定数解とする。
次式を式 (1) の解 $x = \phi(t)$ のまわりの変分方程式という：

$$
\frac{dy}{dt} = Df(\phi(t))y, \quad y \in \mathbb{R}^n \tag{2}
$$

ここで，$Df(x)$ は $f(x)$ のヤコビ行列で，各 $j = 1, 2, \ldots, n$ に対して，$f_j(x)$ と $x_j$ をそれぞれ，$f(x)$ と $x$ の第 $j$ 成分として，

$$
Df(x) = \begin{pmatrix} 
\frac{\partial f_1}{\partial x_1}(x) & \dots & \frac{\partial f_1}{\partial x_n}(x) \\ 
\vdots & \ddots & \vdots \\ 
\frac{\partial f_n}{\partial x_1}(x) & \dots & \frac{\partial f_n}{\partial x_n}(x) 
\end{pmatrix}
$$

で与えられる $n$ 次正方行列である。以下の問いに答えよ。

(i) 極限 $a_+ = \lim_{t \to +\infty} \phi(t)$ と $a_- = \lim_{t \to -\infty} \phi(t)$ が存在するとき，$x = a_+$ と $a_-$ が式 (1) の定数解であることを示せ。また，変分方程式 (2) が $\lim_{t \to \pm \infty} \psi(t) = 0$ かつ $\mathbb{R}$ 上で有界な解 $y = \psi(t)$ をもつことを示せ。

(ii) 次式を満たす $C^1$ 級関数 $u : \mathbb{R}^n \rightarrow \mathbb{R}^n$ が存在するものとする。

$$
Du(x)f(x) - Df(x)u(x) = 0
$$

2 個のベクトル $f(\phi(0))$ と $u(\phi(0))$ が線形独立であるとき，変分方程式 (2) の線形独立な解を2個求めよ。

(iii) 次式を満たす $n - 1$ 個の $C^1$ 級関数 $v_j : \mathbb{R}^n \rightarrow \mathbb{R}^n \ (j = 1, 2, \ldots, n - 1)$ が存在するものとする。

$$
Dv_j(x)f(x) - Df(x)v_j(x) = 0 \quad (j = 1, 2, \ldots, n - 1)
$$

$n$ 個のベクトル $f(\phi(0))$ と $v_j(\phi(0)) \ (j = 1, 2, \ldots, n - 1)$ が線形独立であるとき，変分方程式 (2) の一般解を求めよ。


### English Version


## **Kai**
### (i)
Since $\phi (t)$ is a solution, we have

$$
\frac{d \phi(t)}{dt} = f(\phi(t))
$$

From $\lim_{t\rightarrow +\infty}\phi(t) = a_+$ and continuity, we have

$$
\lim_{t \rightarrow +\infty} \frac{d\phi(t)}{dt} = f(a_+)
$$

suppose that

$$
f(a_+) > 0
$$

then we have

$$
\lim_{t \rightarrow \infty} \frac{d\phi(t)}{dt} > 0 \Rightarrow \lim_{t\rightarrow \infty} \phi(t) = +\infty
$$

which is conflict with

$$
\lim_{t\rightarrow \infty} \phi(t) = a_+
$$

and therefore $f(a_+) = 0$.
Thus $\phi(t) = a_+$ is a constant solution. Similarly, $\phi(t) = a_{-}$ is a constant solution,too.

Notice that

$$
\frac{df(\phi(t))}{dt} = Df(\phi(t))\frac{d\phi(t)}{dt}, f(\phi(t)) = \frac{d\phi(t)}{dt}
$$

hence

$$
\frac{d\frac{d\phi(t)}{dt}}{dt} = Df(\phi(t))\frac{d\phi(t)}{dt}, \psi(t) = \frac{d\phi(t)}{dt} = f(\phi(t))
$$

and we konw

$$
\lim_{t\rightarrow \infty} \psi(t) = f(a_+) = 0
$$

since $f \in C^1$, $\phi(t)$ is bounded, then $\psi(t)$ is bounded


### (ii)
$f(\phi(t))$ is a solution, then

$$
\frac{v(\phi(t))}{dt} = Dv(\phi(t))\frac{d\phi(t)}{dt} = Dv(x)f(x) = Df(x)v(x) = Df(\phi(t))v(\phi(t))
$$

and we see that $v(\phi(t))$ is a solution to (2) and we have

$$
v(\phi(t)) = v(\phi(0)) + \int Df(\phi(t))v(\phi(t)) dt
$$

$$
f(\phi(t)) = f(\phi(0)) + \int Df(\phi(t))v(\phi(t)) dt
$$

thus, $v(\phi(0))$, $f(\phi(0))$ are independent $\Rightarrow$ $v(\phi(t))$, $f(\phi(t))$ are independent.

### (iii)
Similar to $\boldsymbol{(\text{ii})}$, omitted
