---
sidebar_label: "2019年8月実施 数学 II"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Triple-Integral
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Real-Analysis.Asymptotics-of-Nonlinear-Sequence-Recurrence
---
# 京都大学 情報学研究科 システム科学専攻 2019年8月実施 数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語版

#### 問1

$xyz$ -空間上の有界な閉集合

$$
D = \left\{ (x, y, z) : \frac{x^2}{a^2} + \frac{y^2}{b^2} \leq z, x \geq 0, y \geq 0, 0 \leq z \leq 1 \right\}
$$

について考える. ただし, $a, b$ は正の定数であるとする. 以下の設問に答えよ.

(i) 次のように変数 $(r, \theta, s)$ を変数 $(x, y, z)$ に移す写像のヤコビ行列式を求めよ.

$$
x = ar \cos\theta, \quad y = br \sin\theta, \quad z = s
$$

ただし, $r \geq 0, 0 \leq \theta \leq \pi/2$ であるとする.

(ii) 設問 (i) の写像によって $xyz$ -空間上の集合 $D$ に移される $r\theta s$ -空間上の集合は

$$
E = \{ (r, \theta, s) : 0 \leq r \leq \boxed{\quad}, 0 \leq \theta \leq \pi/2, 0 \leq s \leq 1 \}
$$

と表される. このとき, 空欄 $\boxed{\quad}$ に入る式を書け.

(iii) $\displaystyle\iiint_D dxdydz$ を求めよ.

(iv) 以下の積分が有限となるような正の整数 $l, m, n$ の組のうち, $l+m \leq n$ を満たすものを全て求めよ.

$$
\iiint_D \frac{x^l y^m}{z^n} dxdydz
$$

#### 問2

数列 $\{x_n : n = 1, 2, ...\}$ を次のように定義する。

$$
x_1 = 1, \quad x_n = \sin x_{n-1}, \quad n = 2, 3, ...
$$

また、2つの実数値関数 $f$ と $g$ が, $\lim_{x \to 0} f(x)/g(x) = 0$ を満たすとき、ランダウの記法によって、 $f(x) = o(g(x))$ と表記する.ただし, $f(x) = o(1)$ は, $\lim_{x \to 0} f(x) = 0$ を意味するものとする。以下の設問に答えよ。

(i) 次の不等式が成り立つことを(帰納法などにより)示せ。

$$
0 < x_{n+1} < x_n, \quad n = 1, 2, ...
$$

(ii) $\lim_{n \to \infty} x_n$ の値を求めよ。

(iii) $\sin x$ のマクローリン展開を書け。ただし、 $x$ の5次以上の項は、ランダウの記法を利用してまとめて表記せよ。

(iv) 次式を満たす定数 $a$ と $b$ を求めよ。

$$
\frac{1}{(\sin x)^2} = \frac{a}{x^2} + b + o(1)
$$

(v) 設問 (ii) と (iv) の結果を利用して, $\lim_{n \to \infty} \left(\frac{1}{x_{n+1}^2} - \frac{1}{x_n^2}\right)$ の値を導け。

(vi) 設問 (v) の結果を利用して、次式が成り立つことを示せ。

$$
\lim_{n \to \infty} nx_n^2 = 3
$$

#### 题目描述

#### 問1

设 $a,b$ 为正常数，考虑 $xyz$ 空间中的有界闭集

$$
D=
\left\{
(x,y,z)
\ \middle|\
\frac{x^2}{a^2}+\frac{y^2}{b^2}\leq z,\quad
x\geq0,\ y\geq0,\ 0\leq z\leq1
\right\}.
$$

回答：

1. 对从 $(r,\theta,s)$ 到 $(x,y,z)$ 的变量变换

$$
x=ar\cos\theta,
\qquad
y=br\sin\theta,
\qquad
z=s,
$$

其中 $r\geq0$、$0\leq\theta\leq\pi/2$，求 Jacobian 行列式

$$
\frac{\partial(x,y,z)}
{\partial(r,\theta,s)}.
$$

2. 在上述映射下，被映到 $D$ 的 $r\theta s$ 空间区域可写为

$$
E=
\left\{
(r,\theta,s)
\ \middle|\
0\leq r\leq\boxed{\phantom{\sqrt{s}}},
\ 0\leq\theta\leq\frac{\pi}{2},
\ 0\leq s\leq1
\right\}.
$$

写出方框中应填的表达式。
3. 计算 $D$ 的体积

$$
\iiint_D dx\,dy\,dz.
$$

4. 在使广义积分

$$
\iiint_D
\frac{x^l y^m}{z^n}\,dx\,dy\,dz
$$

有限的正整数三元组 $(l,m,n)$ 中，列出所有还满足
$l+m\leq n$ 的三元组。

#### 問2

定义数列 $\{x_n:n=1,2,\ldots\}$：

$$
x_1=1,
\qquad
x_n=\sin x_{n-1}
\quad(n=2,3,\ldots).
$$

对两个实值函数 $f,g$，若

$$
\lim_{x\to0}\frac{f(x)}{g(x)}=0,
$$

则用 Landau 记号写作 $f(x)=o(g(x))$；特别地，
$f(x)=o(1)$ 表示
$\lim_{x\to0}f(x)=0$。回答：

1. 证明（可使用归纳法）

$$
0<x_{n+1}<x_n,
\qquad n=1,2,\ldots.
$$

2. 求

$$
\lim_{n\to\infty}x_n.
$$

3. 写出 $\sin x$ 的 Maclaurin 展开，并用上述 Landau 记号统一表示五次及更高次的项。
4. 求常数 $a,b$，使

$$
\frac{1}{(\sin x)^2}
=
\frac{a}{x^2}+b+o(1)
\qquad(x\to0).
$$

5. 利用第 2、4 问的结果求

$$
\lim_{n\to\infty}
\left(
\frac{1}{x_{n+1}^2}
-\frac{1}{x_n^2}
\right).
$$

6. 利用第 5 问证明

$$
\lim_{n\to\infty}nx_n^2=3.
$$


## **Kai**

### 問1

(i)

$$
\frac{\partial(x,y,z)}{\partial(r,\theta,s)}
=\det\begin{pmatrix}a\cos\theta&-ar\sin\theta&0\\b\sin\theta&br\cos\theta&0\\0&0&1\end{pmatrix}=abr.
$$

(ii) $x^2/a^2+y^2/b^2=r^2\le s$ より、空欄は $\sqrt s$。

(iii)

$$
\iiint_Ddx\,dy\,dz=ab\int_0^1\int_0^{\pi/2}\int_0^{\sqrt s}r\,dr\,d\theta\,ds=\frac{\pi ab}{8}.
$$

(iv) 変数変換により

$$
\iiint_D\frac{x^ly^m}{z^n}\,dx\,dy\,dz
=\frac{a^{l+1}b^{m+1}}{l+m+2}
\left(\int_0^{\pi/2}\cos^l\theta\sin^m\theta\,d\theta\right)
\int_0^1s^{(l+m+2)/2-n}\,ds.
$$

角度積分は有限かつ正なので、収束条件は $n<(l+m+4)/2$。$l+m\le n$ と正整数条件を合わせると

$$
\boxed{(l,m,n)=(1,1,2),(1,2,3),(2,1,3)}.
$$

### 問2

(i) $0<t\le1$ では $0<\sin t<t$。$x_1=1$ から帰納的に $0<x_{n+1}<x_n\le1$ が成り立つ。

(ii) 単調有界なので極限 $L\in[0,1]$ が存在する。$L=\sin L$ を満たすのは $L=0$ のみだから $x_n\to0$。

(iii)

$$
\sin x=x-\frac{x^3}{6}+O(x^5)
=x-\frac{x^3}{6}+o(x^4).
$$

(iv)

$$
\frac1{\sin^2x}
=\frac1{x^2}\left(1-\frac{x^2}{6}+O(x^4)\right)^{-2}
=\frac1{x^2}+\frac13+O(x^2).
$$

よって $a=1,\ b=1/3$。

(v) $x_n\to0$ と (iv) より

$$
\frac1{x_{n+1}^2}-\frac1{x_n^2}\longrightarrow\frac13.
$$

(vi) (v) の差分を足して平均をとれば

$$
\frac1{nx_n^2}
=\frac1n+\frac1n\sum_{k=1}^{n-1}\left(\frac1{x_{k+1}^2}-\frac1{x_k^2}\right)
\longrightarrow\frac13.
$$

したがって $\boxed{nx_n^2\to3}$。

