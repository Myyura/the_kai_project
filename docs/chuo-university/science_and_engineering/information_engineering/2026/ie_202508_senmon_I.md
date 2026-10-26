---
sidebar_label: "2025年8月実施 問題I（情報工学）"
tags:
  - Chuo-University
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
  - Mathematics.Real-Analysis.Functional-Equation
  - Mathematics.Differential-Equations.Bernoulli-Equation
---

# 中央大学 理工学研究科 情報工学専攻 2025年8月実施 一般入試 問題I

## **Author**

祭音Myyura (Based on [中央大学の公式解答例](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf) refined with GPT 6 Astra)

## **Description**

問題Iは必答。問題II〜Vのうち、2問を選んで解答すること。

**問題I（全員解答すること）**

1. 3次正方行列

   $$
   A=\begin{pmatrix}4&2&2\\2&3&0\\2&0&5\end{pmatrix}
   $$

   について以下の問いに答えよ。

   (1) 行列 $A$ の固有値を求めよ。

   (2) 直交行列 $P$ を用いて行列 $A$ を対角化せよ。行列 $P$ も答えること。

   (3) $B^2=A$ となる行列 $B$ を求めよ。

2. $\mathbb{R}$ を実数全体の集合とし、$f:\mathbb{R}\to\mathbb{R}$ を連続関数とする。任意の $x,y\in\mathbb{R}$ に対して

   $$
   f(x)+f(y)=f(x+y)
   $$

   が成り立つとき、以下の問いに答えよ。ただし $f(1)=c$ である。解答には導出過程も記述すること。

   (1) $f(0)$ を求めよ。

   (2) 自然数 $n$ について、$f(n)$ を求めよ。

   (3) 自然数 $m,n$ について、$f\left(\dfrac{m}{n}\right)$ を求めよ。

   (4) 有理数 $r$ について、$f(r)$ を求めよ。

   (5) 実数 $x$ について、$f(x)$ を求めよ。ただし、任意の実数 $x$ について、$n=1,2,\ldots$ に対して

   $$
   x-\frac1n<r_n<x+\frac1n
   $$

   をみたす有理数 $r_n$ が存在することを利用してよい。

3. 未知関数 $y(x)$ に関する微分方程式

   $$
   \frac{dy}{dx}=ay-by^2
   $$

   について以下の問いに答えよ。ただし $a,b$ は正の定数とする。

   (1) $u(x)=y^{-1}(x)$ とおく。この変数変換により得られる微分方程式を記述せよ。

   (2) (1) の微分方程式を $u(x)$ について解き、$\dfrac{dy}{dx}=ay-by^2$ の一般解を求めよ。

### 题目描述

问题 I 必答。从问题 II～V 中选择两题作答。

**问题 I（所有考生均须作答）**

1. 对三阶方阵

   $$
   A=\begin{pmatrix}4&2&2\\2&3&0\\2&0&5\end{pmatrix},
   $$

   回答以下问题。

   (1) 求矩阵 $A$ 的特征值。

   (2) 用正交矩阵 $P$ 将矩阵 $A$ 对角化，并给出 $P$。

   (3) 求满足 $B^2=A$ 的矩阵 $B$。

2. 设 $\mathbb{R}$ 为全体实数的集合，$f:\mathbb{R}\to\mathbb{R}$ 为连续函数。对任意 $x,y\in\mathbb{R}$，均有

   $$
   f(x)+f(y)=f(x+y).
   $$

   已知 $f(1)=c$，回答以下问题，并写出推导过程。

   (1) 求 $f(0)$。

   (2) 对自然数 $n$，求 $f(n)$。

   (3) 对自然数 $m,n$，求 $f\left(\dfrac{m}{n}\right)$。

   (4) 对有理数 $r$，求 $f(r)$。

   (5) 对实数 $x$，求 $f(x)$。可以使用以下事实：对任意实数 $x$ 和每个 $n=1,2,\ldots$，均存在有理数 $r_n$ 满足

   $$
   x-\frac1n<r_n<x+\frac1n.
   $$

3. 对未知函数 $y(x)$ 的微分方程

   $$
   \frac{dy}{dx}=ay-by^2,
   $$

   回答以下问题，其中 $a,b$ 为正常数。

   (1) 令 $u(x)=y^{-1}(x)$，写出该变量代换后得到的微分方程。

   (2) 解出 (1) 中的 $u(x)$，并求原微分方程的一般解。

## **Kai**

### 1. (1)

特性多項式は

$$
\begin{aligned}
\det(\lambda I-A)
&=(\lambda-4)(\lambda-3)(\lambda-5)-4(\lambda-5)-4(\lambda-3)\\
&=\lambda^3-12\lambda^2+39\lambda-28\\
&=(\lambda-1)(\lambda-4)(\lambda-7).
\end{aligned}
$$

したがって固有値は $\boxed{1,4,7}$ である。

### 1. (2)

それぞれの固有値に対応する単位固有ベクトルとして

$$
v_1=\frac13\begin{pmatrix}-2\\2\\1\end{pmatrix},\qquad
v_4=\frac13\begin{pmatrix}-1\\-2\\2\end{pmatrix},\qquad
v_7=\frac13\begin{pmatrix}2\\1\\2\end{pmatrix}
$$

を取れる。これらは互いに直交するので、

$$
P=(v_1\ v_4\ v_7)
=\frac13\begin{pmatrix}-2&-1&2\\2&-2&1\\1&2&2\end{pmatrix}
$$

は直交行列であり、

$$
\boxed{P^{\mathsf T}AP=\operatorname{diag}(1,4,7)}
$$

を満たす。

### 1. (3)

対角成分の平方根を取ればよい。例えば

$$
\boxed{B=P\operatorname{diag}(1,2,\sqrt7)P^{\mathsf T}}
$$

とすると、$P^{\mathsf T}P=I$ より $B^2=P\operatorname{diag}(1,4,7)P^{\mathsf T}=A$ である。成分表示では

$$
B=\frac19\begin{pmatrix}
6+4\sqrt7&2\sqrt7&-6+4\sqrt7\\
2\sqrt7&12+\sqrt7&-6+2\sqrt7\\
-6+4\sqrt7&-6+2\sqrt7&9+4\sqrt7
\end{pmatrix}.
$$

なお、対角成分をそれぞれ $\pm1,\pm2,\pm\sqrt7$ に置き換えたものも平方根となる。

### 2. (1)

$x=y=0$ とすれば $2f(0)=f(0)$ だから、$\boxed{f(0)=0}$。

### 2. (2)

加法性を繰り返し用いると

$$
f(n)=f(\underbrace{1+\cdots+1}_{n\text{ 個}})=nf(1)=\boxed{nc}.
$$

### 2. (3)

加法性より $nf(m/n)=f(m)=mc$ である。したがって

$$
\boxed{f\left(\frac mn\right)=\frac mn c}.
$$

### 2. (4)

$f(t)+f(-t)=f(0)=0$ より $f(-t)=-f(t)$。正の有理数には (3) を適用でき、負の有理数にはこの等式を使えるので、$r=0$ も含め

$$
\boxed{f(r)=cr\qquad(r\in\mathbb Q)}.
$$

### 2. (5)

問題文の有理数列は $|r_n-x|<1/n$ を満たすから $r_n\to x$。$f$ の連続性と (4) より

$$
f(x)=\lim_{n\to\infty}f(r_n)
=\lim_{n\to\infty}cr_n=\boxed{cx}.
$$

実際、$f(x)=cx$ は連続で、与えられた加法性と $f(1)=c$ を満たす。

### 3. (1)

ここで $y^{-1}(x)$ は $1/y(x)$ を意味する。$y\ne0$ の区間で

$$
u'=-y^{-2}y'=-y^{-2}(ay-by^2)=-au+b.
$$

したがって変換後の方程式は $\boxed{u'+au=b}$。

### 3. (2)

積分因子 $e^{ax}$ を掛けると

$$
(e^{ax}u)'=be^{ax},\qquad
u=\frac ba+Ce^{-ax}.
$$

よって非零解は

$$
\boxed{y(x)=\frac1{b/a+Ce^{-ax}}=\frac{a}{b+Ke^{-ax}}}
$$

である。$K=aC$ は任意の実定数で、分母が零にならない区間で考える。$K=0$ は定常解 $y=a/b$ に当たる。また、変数変換で除いた $\boxed{y\equiv0}$ も原方程式の解である。

## **Reference**

- [中央大学公式問題：2026年度 情報工学専攻、冊内 pp.3–4（PDF 第4–5頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-01.pdf#page=5)
- [中央大学公式解答例・出題の意図：問題I、冊内 p.5（PDF 第6頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf#page=6)
