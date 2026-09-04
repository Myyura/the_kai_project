---
sidebar_label: "2019年8月実施 数学 II"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Integration
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Limit
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

### 题目描述

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

(i) ヤコビ行列式の計算

与えられた変数変換は

$$
x = ar \cos\theta, \quad y = br \sin\theta, \quad z = s
$$

ヤコビ行列 $J$ は、各変数の偏導関数から構成される行列です。

$$
J = \frac{\partial(x, y, z)}{\partial(r, \theta, s)} = \begin{pmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} & \frac{\partial x}{\partial s} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} & \frac{\partial y}{\partial s} \\ \frac{\partial z}{\partial r} & \frac{\partial z}{\partial \theta} & \frac{\partial z}{\partial s} \end{pmatrix}
$$

各偏導関数を計算します。

$$
\frac{\partial x}{\partial r} = a \cos\theta, \quad \frac{\partial x}{\partial \theta} = -ar \sin\theta, \quad \frac{\partial x}{\partial s} = 0
$$

$$
\frac{\partial y}{\partial r} = b \sin\theta, \quad \frac{\partial y}{\partial \theta} = br \cos\theta, \quad \frac{\partial y}{\partial s} = 0
$$

$$
\frac{\partial z}{\partial r} = 0, \quad \frac{\partial z}{\partial \theta} = 0, \quad \frac{\partial z}{\partial s} = 1
$$

よって、ヤコビ行列は

$$
J = \begin{pmatrix} a \cos\theta & -ar \sin\theta & 0 \\ b \sin\theta & br \cos\theta & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

ヤコビ行列式（ヤコビアン）は、この行列の行列式です。

$$
\det(J) = 1 \cdot \det \begin{pmatrix} a \cos\theta & -ar \sin\theta \\ b \sin\theta & br \cos\theta \end{pmatrix} = (a \cos\theta)(br \cos\theta) - (-ar \sin\theta)(b \sin\theta)
$$

$$
= abr \cos^2\theta + abr \sin^2\theta = abr(\cos^2\theta + \sin^2\theta) = abr
$$

よって、ヤコビ行列式は $abr$ です。

(ii) 新しい積分領域 E の決定

集合 $D$ の定義域を $(r, \theta, s)$ 座標系に変換します。
$D$ の条件は以下の通りです。
1. $\frac{x^2}{a^2} + \frac{y^2}{b^2} \leq z$
2. $x \geq 0, y \geq 0$
3. $0 \leq z \leq 1$

変数変換 $x = ar \cos\theta, y = br \sin\theta, z = s$ を代入します。
1. $\frac{(ar \cos\theta)^2}{a^2} + \frac{(br \sin\theta)^2}{b^2} \leq s \implies \frac{a^2 r^2 \cos^2\theta}{a^2} + \frac{b^2 r^2 \sin^2\theta}{b^2} \leq s \implies r^2(\cos^2\theta + \sin^2\theta) \leq s \implies r^2 \leq s$ .
   $r \geq 0$ なので, $0 \leq r \leq \sqrt{s}$ となります。
2. $x = ar \cos\theta \geq 0$ と $y = br \sin\theta \geq 0$ . $a, b, r$ は非負なので, $\cos\theta \geq 0$ かつ $\sin\theta \geq 0$ が必要です。これは与えられた条件 $0 \leq \theta \leq \pi/2$ を満たします。
3. $0 \leq z \leq 1 \implies 0 \leq s \leq 1$ .

これらの条件をまとめると、 $r\theta s$ -空間上の集合 $E$ は

$$
E = \{ (r, \theta, s) : 0 \leq r \leq \sqrt{s}, 0 \leq \theta \leq \pi/2, 0 \leq s \leq 1 \}
$$

したがって、空欄に入る式は $\sqrt{s}$ です。

(iii) 体積の計算

求める体積は、領域 $D$ 上での $1$ の三重積分です。変数変換を用いて計算します。

$$
\iiint_D dxdydz = \iiint_E |\det(J)| dr d\theta ds = \iiint_E abr dr d\theta ds
$$

$a,b>0, r \ge 0$ なので $|abr| = abr$ です。積分範囲を用いて計算します。

$$
V = \int_0^1 \int_0^{\pi/2} \int_0^{\sqrt{s}} abr \, dr \, d\theta \, ds
$$

まず $r$ で積分します。

$$
\int_0^{\sqrt{s}} abr \, dr = ab \left[ \frac{r^2}{2} \right]_0^{\sqrt{s}} = ab \frac{(\sqrt{s})^2}{2} = \frac{ab}{2}s
$$

次に $\theta$ で積分します。

$$
\int_0^{\pi/2} \frac{ab}{2}s \, d\theta = \frac{ab}{2}s [\theta]_0^{\pi/2} = \frac{ab}{2}s \cdot \frac{\pi}{2} = \frac{\pi ab}{4}s
$$

最後に $s$ で積分します。

$$
\int_0^1 \frac{\pi ab}{4}s \, ds = \frac{\pi ab}{4} \left[ \frac{s^2}{2} \right]_0^1 = \frac{\pi ab}{4} \cdot \frac{1}{2} = \frac{\pi ab}{8}
$$

よって、体積は $\frac{\pi ab}{8}$ です。

(iv) 積分の収束条件

与えられた積分を $I$ とします。

$$
I = \iiint_D \frac{x^l y^m}{z^n} dxdydz
$$

変数変換を行うと、

$$
I = \iiint_E \frac{(ar \cos\theta)^l (br \sin\theta)^m}{s^n} (abr) \, dr d\theta ds
$$

$$
I = a^{l+1}b^{m+1} \iiint_E \frac{r^{l+m+1} \cos^l\theta \sin^m\theta}{s^n} \, dr d\theta ds
$$

積分を分離します。

$$
I = a^{l+1}b^{m+1} \left( \int_0^{\pi/2} \cos^l\theta \sin^m\theta \, d\theta \right) \left( \int_0^1 \frac{1}{s^n} \left( \int_0^{\sqrt{s}} r^{l+m+1} \, dr \right) ds \right)
$$

$l, m$ は正の整数なので、 $\theta$ の積分は有限値になります。
$r$ の積分を計算します。

$$
\int_0^{\sqrt{s}} r^{l+m+1} \, dr = \left[ \frac{r^{l+m+2}}{l+m+2} \right]_0^{\sqrt{s}} = \frac{(\sqrt{s})^{l+m+2}}{l+m+2} = \frac{s^{\frac{l+m+2}{2}}}{l+m+2}
$$

これを $s$ の積分に代入します。

$$
\int_0^1 \frac{1}{s^n} \frac{s^{\frac{l+m+2}{2}}}{l+m+2} \, ds = \frac{1}{l+m+2} \int_0^1 s^{\frac{l+m+2}{2} - n} \, ds
$$

この広義積分が有限（収束）となるためには、指数が $-1$ より大きい必要があります。

$$
\frac{l+m+2}{2} - n > -1
$$

$$
l+m+2 > 2(n-1) = 2n - 2
$$

$$
l+m+4 > 2n \implies n < \frac{l+m+4}{2} = 2 + \frac{l+m}{2}
$$

問題の条件として、 $l, m, n$ は正の整数であり、 $l+m \leq n$ を満たす必要があります。
したがって、以下の連立不等式を満たす正の整数の組 $(l,m,n)$ を求めます。

$$
l+m \leq n < 2 + \frac{l+m}{2}
$$

この不等式から、

$$
l+m < 2 + \frac{l+m}{2}
$$

$$
\frac{l+m}{2} < 2 \implies l+m < 4
$$

$l, m$ は正の整数なので、 $l \geq 1, m \geq 1$ であり、 $l+m \geq 2$ です。したがって、 $l+m$ の取りうる値は $2$ と $3$ です。

場合 1: $l+m=2$
$l, m$ は正の整数なので、 $(l,m) = (1,1)$ のみです。
このとき、 $n$ の条件は、

$$
2 \leq n < 2 + \frac{2}{2} \implies 2 \leq n < 3
$$

$n$ は整数なので、 $n=2$ となります。
よって、組 $(1,1,2)$ が一つの解です。

場合 2: $l+m=3$
$l, m$ は正の整数なので、 $(l,m)$ は $(1,2)$ または $(2,1)$ です。
このとき、 $n$ の条件は、

$$
3 \leq n < 2 + \frac{3}{2} \implies 3 \leq n < 3.5
$$

$n$ は整数なので、 $n=3$ となります。
よって、組 $(1,2,3)$ と $(2,1,3)$ が解となります。

以上をまとめると、求める正の整数の組 $(l, m, n)$ は以下の3つです。

$$
(1, 1, 2), \quad (1, 2, 3), \quad (2, 1, 3)
$$

### 問2

(i) 帰納法による証明:
$n = 1$ のとき, $x_1 = 1$ であり, $x_2 = \sin x_1 = \sin 1$ . $0 < \sin 1 < 1$ なので, $0 < x_2 < x_1$ が成り立つ。

$n = k$ のとき, $0 < x_{k+1} < x_k$ が成り立つと仮定する。
$x_{k+2} = \sin x_{k+1}$ である。
$0 < x_{k+1} < x_k$ より, $0 < \sin x_{k+1} < x_{k+1}$ が成り立つ。
したがって, $0 < x_{k+2} < x_{k+1}$ が成り立つ。
よって, すべての $n$ に対して, $0 < x_{n+1} < x_n$ が成り立つ。

(ii) $0 < x_{n+1} < x_n$ より, $\{x_n\}$ は単調減少数列であり, 下に有界であるから, 極限が存在する。
$\lim_{n \to \infty} x_n = L$ とすると, $\lim_{n \to \infty} x_{n+1} = \lim_{n \to \infty} \sin x_n$ より, $L = \sin L$ となる。
この方程式の解は $L = 0$ である。
したがって, $\lim_{n \to \infty} x_n = 0$ である。

(iii) $\sin x$ のマクローリン展開は次の通りである。

$$
\sin x
=x-\frac{x^3}{3!}+o(x^4)
=x-\frac{x^3}{6}+o(x^4).
$$

(iv)

$$
\sin x
=x\left(1-\frac{x^2}{6}+o(x^3)\right)
$$

$$
\frac{1}{(\sin x)^2}
=\frac{1}{x^2}
\left(1-\frac{x^2}{6}+o(x^3)\right)^{-2}
=\frac{1}{x^2}
\left(1+\frac{x^2}{3}+o(x^2)\right)
=\frac{1}{x^2}+\frac{1}{3}+o(1).
$$

したがって, $a = 1$ , $b = \frac{1}{3}$ である。

(v) $x_{n+1} = \sin x_n = x_n - \frac{x_n^3}{6} + o(x_n^4)$ である。

$$
\frac{1}{x_{n+1}^2} = \frac{1}{\sin^2 x_n} = \frac{1}{x_n^2} + \frac{1}{3} + o(1)
$$

$$
\lim_{n \to \infty} \left(\frac{1}{x_{n+1}^2} - \frac{1}{x_n^2}\right) = \lim_{n \to \infty} \left(\frac{1}{\sin^2 x_n} - \frac{1}{x_n^2}\right) = \frac{1}{3}
$$

(vi)

$$
\frac{1}{x_{n+1}^2} - \frac{1}{x_n^2} = \frac{1}{3} + o(1)
$$

$$
\sum_{k=1}^{n-1} \left(\frac{1}{x_{k+1}^2} - \frac{1}{x_k^2}\right) = \sum_{k=1}^{n-1} \left(\frac{1}{3} + o(1)\right)
$$

$$
\frac{1}{x_n^2} - \frac{1}{x_1^2} = \frac{n-1}{3} + o(n)
$$

$$
\frac{1}{x_n^2} = \frac{n}{3} + o(n)
$$

$$
nx_n^2 = \frac{n}{\frac{n}{3} + o(n)} = \frac{1}{\frac{1}{3} + o(1)}
$$

$$
\lim_{n \to \infty} nx_n^2 = 3
$$
