---
sidebar_label: "2017年8月実施 基礎科目 [4]"
tags:
  - Kyoto-University
  - Mathematics.Functional-Analysis.Uniform-Convergence
---

# 京都大学 理学研究科 数学・数理解析専攻 2017年8月実施 基礎科目 [4]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

閉区間 $[0,1]$ 上の実数値関数列 $\{f_n\}_{n=1}^{\infty}$ について、各 $f_n$ は広義単調増加であるものとする。つまり、$0\le x<y\le1$ なら $f_n(x)\le f_n(y)$ である。この関数列が $n\to\infty$ で関数 $f$ に各点収束したとする。

(1) 任意の $0\le x<y\le1$ に対し、不等式

$$
\sup_{z\in[x,y]}|f_n(z)-f(z)|
\le\max\{|f_n(x)-f(y)|,\ |f_n(y)-f(x)|\}
$$

を示せ。

(2) 関数 $f$ が連続であるとき、関数列 $\{f_n\}$ は $f$ に $[0,1]$ 上で一様収束することを示せ。

#### 题目描述

设实值函数列 $f_n:[0,1]\to\mathbb R$ 中每个 $f_n$ 都关于自变量单调不减，且 $f_n$ 逐点收敛于 $f$。

(1) 证明对任意 $0\le x<y\le1$，

$$
\sup_{z\in[x,y]}|f_n(z)-f(z)|
\le\max\{|f_n(x)-f(y)|,\ |f_n(y)-f(x)|\}.
$$

(2) 若极限函数 $f$ 连续，证明 $f_n$ 在 $[0,1]$ 上一致收敛于 $f$。

## **Kai**

### (1)

$f_n(x)\le f_n(y)$ で $n\to\infty$ とすれば $f(x)\le f(y)$ となるので、$f$ も広義単調増加である。したがって $z\in[x,y]$ について

$$
f_n(x)-f(y)\le f_n(z)-f(z)\le f_n(y)-f(x).
$$

実数 $u\le v\le w$ なら $|v|\le\max\{|u|,|w|\}$ であるから、上式の絶対値を評価して $z$ に関する上限を取れば、求める不等式を得る。

### (2)

$\varepsilon>0$ とする。$f$ は $[0,1]$ 上で一様連続なので、

$$
|u-v|\le\frac1m\quad\Longrightarrow\quad
|f(u)-f(v)|<\frac{\varepsilon}{2}
$$

となる正の整数 $m$ を取れる。分点 $t_j=j/m$（$0\le j\le m$）は有限個であり、各点収束により、ある $N$ について

$$
n\ge N\quad\Longrightarrow\quad
\max_{0\le j\le m}|f_n(t_j)-f(t_j)|<\frac{\varepsilon}{2}.
$$

このとき、各区間 $[t_{j-1},t_j]$ の両端では

$$
\begin{aligned}
|f_n(t_{j-1})-f(t_j)|
&\le |f_n(t_{j-1})-f(t_{j-1})|+|f(t_{j-1})-f(t_j)|<\varepsilon,\\
|f_n(t_j)-f(t_{j-1})|
&\le |f_n(t_j)-f(t_j)|+|f(t_j)-f(t_{j-1})|<\varepsilon.
\end{aligned}
$$

(1) を各区間に適用すれば、$n\ge N$ に対して

$$
\sup_{z\in[0,1]}|f_n(z)-f(z)|<\varepsilon.
$$

よって $f_n$ は $f$ に一様収束する。

## **Reference**

- [京都大学公式問題（2018年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2017math_kiso.pdf)
- [照合用参考解答（H30-basic.pdf、PDF 5–6ページ）](https://drive.google.com/file/d/1cdRh94F0dh7hFNtDQU6I4yFQcgsSAyYB/view)
