---
sidebar_label: 2024年8月実施 数学 第3問
tags:
  - Tokyo-University
  - Probability-Statistics.Stochastic-Processes.Pattern-Occurrence-in-Independent-Identically-Distributed-Sequence
  - Discrete-Mathematics.Combinatorics.Recurrence-Relation
  - Mathematics.Complex-Analysis.Complex-Exponential-and-Polar-Form
---
# 東京大学 情報理工学系研究科 2024年8月実施 数学 第3問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

表の出る確率が $p$ の硬貨を $n$ 回投げる。表が2回連続して現れない確率を $a_n$、表が3回連続して現れない確率を $b_n$ とする。$a_1=1,\ b_1=b_2=1$ として、以下に答えよ。

(1) $a_2$ を $p$ の関数として表せ。

(2) $n\ge3$ のとき、$a_n$ を $p,a_{n-1},a_{n-2}$ で表せ。

(3) $p=2/3$ のとき、漸化式

$$
a_n+\alpha a_{n-1}=\beta(a_{n-1}+\alpha a_{n-2})
$$

を満たす実数の組 $(\alpha,\beta)$ をすべて求めよ。

(4) $p=2/3$ のとき、$a_n$ を $n$ の関数として表せ。

(5) $b_3$ を $p$ の関数として表せ。

(6) $n\ge4$ のとき、$b_n$ を $p,b_{n-1},b_{n-2},b_{n-3}$ で表せ。

(7) $p=3/4$ のとき、任意の正整数 $n$ に対し、次式が成り立つことを示せ。

$$
\begin{aligned}
b_n={}&\frac98\left(\frac34\right)^{n-1}
-\frac{(-1)^{n-1}}8\left(\frac{\sqrt3}{4}\right)^{n-1}
\cos((n-1)\theta)\\
&-\frac{\sqrt2\,i}{8}\left\{
\left(\frac{-1+\sqrt2\,i}{4}\right)^{n-1}
-\left(\frac{-1-\sqrt2\,i}{4}\right)^{n-1}
\right\}.
\end{aligned}
$$

ただし $i$ は虚数単位であり、$\theta$ は $\cos\theta=1/\sqrt3,\ \sin\theta=\sqrt2/\sqrt3$ を満たす角である。

#### 题目描述

将正面概率为 $p$ 的硬币投掷 $n$ 次。设 $a_n$ 为没有连续两次正面的概率，$b_n$ 为没有连续三次正面的概率，并设 $a_1=1,\ b_1=b_2=1$。

（1）用 $p$ 表示 $a_2$。

（2）当 $n\ge3$ 时，用 $p,a_{n-1},a_{n-2}$ 表示 $a_n$。

（3）当 $p=2/3$ 时，求满足下列递推关系的所有实数对 $(\alpha,\beta)$：

$$
a_n+\alpha a_{n-1}=\beta(a_{n-1}+\alpha a_{n-2}).
$$

（4）当 $p=2/3$ 时，求 $a_n$ 关于 $n$ 的显式表达式。

（5）用 $p$ 表示 $b_3$。

（6）当 $n\ge4$ 时，用 $p,b_{n-1},b_{n-2},b_{n-3}$ 表示 $b_n$。

（7）当 $p=3/4$ 时，证明对所有正整数 $n$，都有

$$
\begin{aligned}
b_n={}&\frac98\left(\frac34\right)^{n-1}
-\frac{(-1)^{n-1}}8\left(\frac{\sqrt3}{4}\right)^{n-1}
\cos((n-1)\theta)\\
&-\frac{\sqrt2\,i}{8}\left\{
\left(\frac{-1+\sqrt2\,i}{4}\right)^{n-1}
-\left(\frac{-1-\sqrt2\,i}{4}\right)^{n-1}
\right\},
\end{aligned}
$$

其中 $i$ 为虚数单位，$\cos\theta=1/\sqrt3,\ \sin\theta=\sqrt2/\sqrt3$。

## **Kai**

### (1)

除外されるのは2回とも表の場合だけなので、

$$
\boxed{a_2=1-p^2}.
$$

### (2)

条件を満たす列の末尾は「裏」または「裏・表」である。これらは互いに排反であり、残りの部分も連続する2個の表を含まない。独立性より

$$
\boxed{a_n=(1-p)a_{n-1}+p(1-p)a_{n-2}\qquad(n\ge3)}.
$$

### (3)

$p=2/3$ では

$$
a_n=\frac13a_{n-1}+\frac29a_{n-2}.
$$

求める漸化式の係数と比較して

$$
\beta-\alpha=\frac13,\qquad \alpha\beta=\frac29.
$$

したがって $(\alpha+2/3)(\alpha-1/3)=0$ であり、

$$
\boxed{(\alpha,\beta)=\left(\frac13,\frac23\right),
\quad\left(-\frac23,-\frac13\right)}.
$$

なお $a_1=1,\ a_2=5/9,\ a_3=11/27$ から $a_2^2-a_1a_3=-8/81\ne0$ なので、係数比較で他の組を落とすことはない。

### (4)

特性方程式は

$$
r^2-\frac13r-\frac29
=\left(r-\frac23\right)\left(r+\frac13\right)=0.
$$

よって $a_n=A(2/3)^{n-1}+B(-1/3)^{n-1}$ と書ける。$a_1=1,\ a_2=5/9$ を代入すると $A=8/9,\ B=1/9$ だから、

$$
\boxed{a_n=\frac89\left(\frac23\right)^{n-1}
+\frac19\left(-\frac13\right)^{n-1}}.
$$

### (5)

除外されるのは3回とも表の場合だけなので、

$$
\boxed{b_3=1-p^3}.
$$

### (6)

条件を満たす列の末尾を「裏」「裏・表」「裏・表・表」に分ける。独立性より

$$
\boxed{
b_n=(1-p)b_{n-1}+p(1-p)b_{n-2}+p^2(1-p)b_{n-3}
\qquad(n\ge4)}.
$$

### (7)

$p=3/4$ のとき、(6) の特性多項式は

$$
\begin{aligned}
r^3-\frac14r^2-\frac3{16}r-\frac9{64}
&=\left(r-\frac34\right)\left(r^2+\frac12r+\frac3{16}\right)\\
&=\left(r-\frac34\right)(r-r_+)(r-r_-),
\end{aligned}
\qquad r_\pm=\frac{-1\pm\sqrt2\,i}{4}.
$$

したがって、初期値 $b_1=b_2=1,\ b_3=37/64$ を満たす解は

$$
b_n=\frac98\left(\frac34\right)^{n-1}
+\left(-\frac1{16}-\frac{\sqrt2\,i}{8}\right)r_+^{n-1}
+\left(-\frac1{16}+\frac{\sqrt2\,i}{8}\right)r_-^{n-1}.
$$

実際、各項は漸化式を満たし、$n=1,2,3$ の値は順に $1,1,37/64$ であるから、漸化式の解の一意性によりこの表示が成立する。

ここで $r_\pm=-(\sqrt3/4)e^{\mp i\theta}$ なので、

$$
r_+^{n-1}+r_-^{n-1}
=2(-1)^{n-1}\left(\frac{\sqrt3}{4}\right)^{n-1}
\cos((n-1)\theta).
$$

これを上の表示に代入すれば

$$
\boxed{\begin{aligned}
b_n={}&\frac98\left(\frac34\right)^{n-1}
-\frac{(-1)^{n-1}}8\left(\frac{\sqrt3}{4}\right)^{n-1}
\cos((n-1)\theta)\\
&-\frac{\sqrt2\,i}{8}
\left(r_+^{n-1}-r_-^{n-1}\right),
\end{aligned}}
$$

となり、題意の式を得る。
