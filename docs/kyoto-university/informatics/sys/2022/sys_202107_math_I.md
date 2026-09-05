---
sidebar_label: 2021年7月実施 数学【I】
tags:
  - Kyoto-University
  - Discrete-Mathematics.Combinatorics.Recurrence-Relation
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Limit
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Gram-Schmidt-Orthogonalization
  - Mathematics.Linear-Algebra.Projection-Operator
---
# 京都大学 情報学研究科 システム科学専攻 2021年7月実施 数学【I】

## **Author**
[AKIRA](https://www.xiaohongshu.com/explore/688045b4000000002203eeee?xsec_token=ABD2nmTyzV9BsHCYcB91Nc8s2vuU_pZXeBKIkJXwTSCp4=), 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_sys.pdf)
### 問1
次の漸化式を満たす実数の数列 $\{x_n\} \ (n = 0, 1, 2, ...)$ について、以下の設問に答え
よ.なお, $a\ (\neq0)$ は実数である。

$$
x_{n+3} = 2ax_{n+2} + a^2x_{n+1}-2a^3x_n
$$

(i) この数列について、次式が成り立つ行列 $A$ を求めよ。

$$
\begin{bmatrix}
  x_{n+1} \\ x_{n+2} \\ x_{n+3}
\end{bmatrix}
=A
\begin{bmatrix}
  x_{n} \\ x_{n+1} \\ x_{n+2}
\end{bmatrix}
$$

(ii) 行列 $A$ の固有値と固有ペクトルをすべて求めよ。

(iii) 任意の $x_0, x_1, x_2$ に対して数列 $\{x_n\}$ が収束するとき、実数 $a$ が満たすべき必要十分条件を求めよ。

(iv) $a = \frac{1}{2}$ のとき、次式で与えられる $A^{\infty}$ を求めよ。

$$
A^{\infty} = \lim_{n \to \infty} A^n
$$

### 問2
$\mathbb{R}$ は実数全体からなる集合, $e$ はネイピア数(自然対数の底)とする.
$x \in \mathbb{R}$ についての高々2次の実係数多項式の集合 $V$ は $\mathbb{R}$ 上のベクトル空間とみなせる。
$x \in \mathbb{R}$ についての二つの連続関数 $f(x), g(x)$ に対する内積を

$$
\langle f,g \rangle = \int_0^1 f(x)g(x)\ dx
$$

で定めると、$V$ は上記の内積について内積空間となる。以下の設問に答えよ。

(i) 任意の $f(x) \in V$ と $g(x) \in V$ について、コーシー・シュワルツの不等式

$$
\langle f,g \rangle^2 \leq \langle f,f \rangle \langle g,g \rangle
$$

が成り立つことを示せ。

(ii) $V$ の基底 $\{1, \sqrt{3}x, \sqrt{5}x^2\}$ が正規直交基底をなすか否かを、理由とともに示せ。

(iii) Vの基底 $\{1, x,x^2\}$ は正規直交基底をなさない、グラム・シュミットの直交化法により、正規直交基底を構成せよ。

(iv) $e^x \ (x \in \mathbb{R})$ を多項式 $h(x) \in V$ を用いて、

$$
\int_0^1 (e^x - h(x))^2 dx
$$

が最小となるように近似したい。(iii) で求めた正規直交基底を用いて、$h(x)$ を求めよ。

### 题目描述

1. 实数序列 $\{x_n\}$（$n=0,1,2,\ldots$）满足

   $$
   x_{n+3}=2ax_{n+2}+a^2x_{n+1}-2a^3x_n,
   $$

   其中 $a\ne0$ 为实数。

   （i）求使下式成立的矩阵 $A$：

   $$
   \begin{bmatrix}
   x_{n+1}\\x_{n+2}\\x_{n+3}
   \end{bmatrix}
   =
   A
   \begin{bmatrix}
   x_n\\x_{n+1}\\x_{n+2}
   \end{bmatrix}.
   $$

   （ii）求矩阵 $A$ 的全部特征值和特征向量。

   （iii）求实数 $a$ 的充要条件，使序列 $\{x_n\}$ 对任意初值 $x_0,x_1,x_2$ 都收敛。

   （iv）当 $a=\frac12$ 时，求

   $$
   A^\infty=\lim_{n\to\infty}A^n.
   $$

2. 令 $\mathbb R$ 为实数集，$e$ 为自然对数的底。所有关于变量 $x\in\mathbb R$ 的次数不超过 2 的实系数多项式组成实向量空间 $V$。对两个连续函数 $f(x),g(x)$ 定义内积

   $$
   \langle f,g\rangle=\int_0^1f(x)g(x)\,dx,
   $$

   从而 $V$ 成为该内积下的内积空间。

   （i）证明对任意 $f,g\in V$，Cauchy–Schwarz 不等式

   $$
   \langle f,g\rangle^2
   \leq\langle f,f\rangle\langle g,g\rangle
   $$

   成立。

   （ii）判断 $V$ 的基

   $$
   \{1,\sqrt3x,\sqrt5x^2\}
   $$

   是否为标准正交基，并说明理由。

   （iii）基 $\{1,x,x^2\}$ 不是标准正交基。使用 Gram–Schmidt 正交化构造 $V$ 的一组标准正交基。

   （iv）希望用 $h(x)\in V$ 近似 $e^x$，使

   $$
   \int_0^1(e^x-h(x))^2\,dx
   $$

   最小。使用第（iii）问所得标准正交基求 $h(x)$。

## **Kai**
### 問1
#### (i)

$$
A = \begin{bmatrix}
  0 & 1 & 0 \\ 0 & 0 & 1 \\ -2a^3 & a^2 &2a
\end{bmatrix}
$$

#### (ii)

$$
|A - \lambda I| = (a - \lambda)(a + \lambda)(\lambda - 2a)
$$

$$
\lambda_1 = a, p_1 = \begin{bmatrix} 1 \\ a \\ a^2 \end{bmatrix}
$$

$$
\lambda_2 = -a, p_2 = \begin{bmatrix} 1 \\ -a \\ a^2 \end{bmatrix}
$$

$$
\lambda_3 = 2a, p_3 = \begin{bmatrix} 1 \\ 2a \\ 4a^2 \end{bmatrix}
$$

#### (iii)

$$
P = \begin{bmatrix}
  1 & 1 & 1 \\
  a & -a & 2a \\
  a^2 & a^2 & 4a^2
\end{bmatrix},
\ 
A = P\begin{bmatrix}
  a & 0 & 0 \\
  0 & -a & 0 \\
  0 & 0 & 2a
\end{bmatrix} P^{-1},
\ 
A^n = P\begin{bmatrix}
  a^n & 0 & 0 \\
  0 & (-a)^n & 0 \\
  0 & 0 & (2a)^n
\end{bmatrix} P^{-1}
$$

(i) より、$A = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ -2a^3 & a^2 &2a \end{bmatrix}$ が成り立つから、任意の $x_0, x_1, x_2$ に対して数列 $\{x_n\}$ が収束するとき、実数 $a$ が満たすべき必要十分条件は

$$
\begin{cases}
  |a| \leq 1 \\
  |2a| \leq 1 \\
  a \neq \pm 1 \\
  2a \neq -1
\end{cases}
$$

問題の仮定 $a\ne0$ も含めると、必要十分条件は

$$
\boxed{-\frac12<a<0\quad\text{or}\quad0<a\le\frac12}
$$

である。

#### (iv)
$a = \frac{1}{2}$ のとき、

$$
A^{\infty} = P
\begin{bmatrix}
  0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1
\end{bmatrix}
P^{-1},\ 
P^{-1} = \begin{bmatrix}
  1 & \frac{1}{2a} & -\frac{1}{2a^2} \\
  \frac{1}{3} & -\frac{1}{2a} & \frac{1}{6a^2} \\
  -\frac{1}{3} & 0 & \frac{1}{3a^2}
\end{bmatrix}
$$

従って、

$$
\begin{aligned}
A^{\infty} &= \begin{bmatrix}
  0 & 0 & 1 \\ 0 & 0 & 2a \\ 0 & 0 & 4a^2
\end{bmatrix}
\begin{bmatrix}
  1 & \frac{1}{2a} & -\frac{1}{2a^2} \\
  \frac{1}{3} & -\frac{1}{2a} & \frac{1}{6a^2} \\
  -\frac{1}{3} & 0 & \frac{1}{3a^2}
\end{bmatrix}
=
\begin{bmatrix}
  -\frac{1}{3} & 0 & \frac{1}{3a^2} \\
  -\frac{2a}{3} & 0 & \frac{2}{3a} \\
  -\frac{4a^2}{3} & 0 & \frac{4}{3}
\end{bmatrix} \\
&= \begin{bmatrix}
  -\frac{1}{3} & 0 & \frac{4}{3} \\
  -\frac{1}{3} & 0 & \frac{4}{3} \\
  -\frac{1}{3} & 0 & \frac{4}{3}
\end{bmatrix}
\end{aligned}
$$

### 問2

(i) $g=0$ のときは明らか。$g\ne0$ のとき、$t=\langle f,g\rangle/\langle g,g\rangle$ とおくと

$$0\leq\int_0^1(f-tg)^2dx=\langle f,f\rangle-\frac{\langle f,g\rangle^2}{\langle g,g\rangle}.$$

これに $\langle g,g\rangle>0$ を掛ければコーシー・シュワルツの不等式を得る。

(ii) $\langle1,\sqrt3x\rangle=\sqrt3/2\ne0$ なので、正規直交基底ではない。

(iii) グラム・シュミット法で得られる直交多項式は $1,x-1/2,x^2-x+1/6$。それぞれのノルムの二乗は $1,1/12,1/180$ なので

$$e_1=1,\qquad e_2=2\sqrt3(x-1/2),\qquad e_3=6\sqrt5(x^2-x+1/6)$$

が正規直交基底となる。

(iv) 直交射影 $h=\sum_i\langle e^x,e_i\rangle e_i$ が最小値を与える。部分積分により係数は

$$\langle e^x,e_1\rangle=e-1,\quad\langle e^x,e_2\rangle=\sqrt3(3-e),\quad\langle e^x,e_3\rangle=\sqrt5(7e-19).$$

従って

$$h(x)=(e-1)+(18-6e)(x-1/2)+(210e-570)(x^2-x+1/6).$$

任意の $q\in V$ に対し $\|e^x-q\|^2=\|e^x-h\|^2+\|h-q\|^2$ なので、これが一意な最適近似である。
