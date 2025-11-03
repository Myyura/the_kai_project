---
sidebar_label: '2021年8月実施 セッション 1'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 技術経営戦略学専攻 2021年8月実施 セッション 1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**
### I.
以下の微分方程式に関する問いに答えよ。

$$
\frac{dy}{dx} - x^2y + e^{-x^3}y^4 = 0
$$

1. $u=y^{-3}$ とおき，式を $u$ の一階線形微分方程式として表せ。
2. 問 I.1 の結果を用いて式の一般解を求めよ。

### II.
以下の行列 $A$ に関する問いに答えよ。

$$
A = \begin{pmatrix}
  1 & -1 & -2 \\
  2 & 4 & 2 \\
  1 & 1 & 4
\end{pmatrix}
$$

1. 行列 $A$ の全ての固有値と，これらに対応する固有ベクトルを求めよ。
2. 問 II.1 の結果を用いて $A^n$ を求めよ。

### III.
以下の問いに答えよ。 

1. 次の積分の値を求めよ。$I_1 = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \exp(-\frac{x^2+y^2}{2})dxdy$ ただし，実変数 $r$ と $\theta$ を用いて, $x = r \cos \theta, y = r\sin \theta \ (0 \leq r < \infty, 0 \leq \theta < 2 \pi)$ と置換してもよい。 
2. 問 III.1 で得た結果を用いて，以下の積分の値を求めよ。$I_2 = \int_{-\infty}^{\infty} \exp(-ax^2) dx$ ただし，$a$ は正の定数とする。 

### IV.
人がウイルスに感染しているかどうかの検査を考える。当該ウイルスの市中の感染者の割合 $x$ について，$x=0.001$ であると仮定し，市中のある人が当該ウイルスに感染している事前確率は $x$ に等しいとする。また，感染者が陽性と判定される確率を $y$，感染していない人が陽性と誤判定される確率を $z$ とする。以下の問いに答えよ。

1. $y=0.8, z=0.001$ とする。ある人がこの検査で陽性と判定された場合に，実際に当該ウイルスに感染している確率を求めよ。
2. $y$ と $z$ の間に，$z=0.001y^2 + 0.0005 \ (0 \leq y \leq 1)$ の関係が成り立つものとする。このとき，
ある人が検査で陽性と判定された場合，実際に当該ウイルスに感染している確率が最大となる $y$ を求めよ。


## **Kai**
### I.
#### 1.
$u=y^{-3}$ とおくと、

$$
\begin{aligned}
\frac{du}{dx}
&= -3 y^{-4} \frac{dy}{dx}
\\
&= -3 y^{-4} \left( x^2 y - e^{-x^3} y^4 \right)
\ \ \ \ \ \ \ \ (\because \text{(1)})
\\
&= - 3x^2u + 3e^{-x^3}
\end{aligned}
$$

なので、 $u$ に関する微分方程式

$$
\begin{align}
\frac{du}{dx} &= - 3x^2u + 3e^{-x^3}
\tag{2} \label{2}
\end{align}
$$

を得る。

#### 2.
まず、微分方程式

$$
\begin{aligned}
\frac{du}{dx} &= - 3x^2u
\end{aligned}
$$

は、

$$
\begin{aligned}
\frac{du}{u} &= - 3x^2 dx
\\
\therefore \ \ 
u &= A e^{-x^3}
\ \ \ \ \ \ \ \ \text{( $A$ は積分定数 )}
\end{aligned}
$$

と一般解が求まる。
そこで、 $A(x)$ を $x$ の適当な関数として、 ($2$) に $u=A(x)e^{-x^3}$ を代入して整理すると、

$$
\begin{aligned}
\frac{dA(x)}{dx} &= 3
\\
\therefore \ \ 
A(x) &= 3x + C
\ \ \ \ \ \ \ \ \text{( $C$ は積分定数 )}
\end{aligned}
$$

と求まるので、 ($2$) の一般解は

$$
\begin{aligned}
u &= (3x + C) e^{-x^3}
\ \ \ \ \ \ \ \ \text{( $C$ は積分定数 )}
\end{aligned}
$$

とわかる。
よって、(1) の一般解は

$$
\begin{aligned}
y &= (3x + C)^{- \frac{1}{3}} e^x
\ \ \ \ \ \ \ \ \text{( $C$ は積分定数 )}
\end{aligned}
$$

とわかる。

### II.
#### 1.

$$
-\lambda^3 + 9\lambda^2 - 26\lambda + 24 = 0 \Rightarrow \lambda_1 = 4, \lambda_2 = 3, \lambda_3 = 2
$$

$$
v_1 = (-1, 1, 1), v_2 = (-1, 0, 1), v_3 = (-1, 1, 0)
$$

#### 2.

$$
A^n = \begin{pmatrix}
  2^n+3^n-4^n & 3^n-4^n & 2^n-4^n \\
  4^n-2^n & 4^n & 4^n-2^n \\
  4^n-3^n & 4^n-3^n & 4^n
\end{pmatrix}
$$

### III.

See [高斯函数、高斯积分和正态分布](https://zhuanlan.zhihu.com/p/461610469).

### IV.
