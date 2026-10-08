---
sidebar_label: "2016年8月実施 基礎科目 [4]"
tags:
  - Kyoto-University
  - Mathematics.Functional-Analysis.Uniform-Convergence
---

# 京都大学 理学研究科 数学・数理解析専攻 2016年8月実施 基礎科目 [4]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$f$ を $I=\{x\in\mathbb R\mid x\ge0\}$ 上の実数値連続関数とする。正の整数 $n$ に対し、$I$ 上の関数 $f_n$ を

$$
f_n(x)=f(x+n)
$$

で定める。関数列 $\{f_n\}_{n=1}^{\infty}$ が $I$ 上で一様収束するとき、以下の問に答えよ。

(i) $I$ 上の関数 $g$ を $g(x)=\lim_{n\to\infty}f_n(x)$ で定める。このとき $g$ は $I$ 上で一様連続であることを示せ。

(ii) $f$ は $I$ 上で一様連続であることを示せ。

#### 题目描述

设 $f:[0,\infty)\to\mathbb R$ 连续，令 $f_n(x)=f(x+n)$。已知 $\{f_n\}$ 在 $[0,\infty)$ 上一致收敛。

(i) 令 $g(x)=\lim_{n\to\infty}f_n(x)$，证明 $g$ 在 $[0,\infty)$ 上一致连续。

(ii) 证明 $f$ 在 $[0,\infty)$ 上一致连续。

## **Kai**

### (i)

連続関数列の一様極限であるから $g$ は連続である。また

$$
g(x+1)=\lim_{n\to\infty}f(x+n+1)=g(x)
$$

なので、$g$ は周期 $1$ を持つ。

$g$ はコンパクト区間 $[0,2]$ 上で一様連続である。任意の $\varepsilon>0$ に対し、$u,v\in[0,2]$、$|u-v|<\delta$ なら $|g(u)-g(v)|<\varepsilon$ となる $0<\delta<1$ を取る。

$0\le x\le y$、$y-x<\delta$ とし、$j=\lfloor x\rfloor$ と置けば、$x-j,y-j\in[0,2]$ である。周期性により

$$
|g(x)-g(y)|=|g(x-j)-g(y-j)|<\varepsilon.
$$

したがって $g$ は $I$ 上で一様連続である。

### (ii)

$\varepsilon>0$ とする。一様収束により、ある正の整数 $N$ について

$$
\sup_{u\ge0}|f(N+u)-g(u)|<\frac{\varepsilon}{3}.
$$

(i) により、$|u-v|<\delta_1$ なら $|g(u)-g(v)|<\varepsilon/3$ となる $\delta_1>0$ が存在する。よって $x,y\ge N$、$|x-y|<\delta_1$ なら

$$
\begin{aligned}
|f(x)-f(y)|
&\le |f(x)-g(x-N)|+|g(x-N)-g(y-N)|\\
&\qquad+|g(y-N)-f(y)|<\varepsilon.
\end{aligned}
$$

一方、$f$ は $[0,N+1]$ 上で一様連続なので、この区間で $|x-y|<\delta_2$ なら $|f(x)-f(y)|<\varepsilon$ となる $\delta_2>0$ がある。

$\delta=\min\{1,\delta_1,\delta_2\}$ と置く。$x,y\ge0$、$|x-y|<\delta$ のとき、両方が $N$ 以上なら前者の評価を使える。それ以外なら両方が $[0,N+1]$ に入るので後者の評価を使える。したがって $f$ は $I$ 上で一様連続である。

## **Reference**

- [京都大学公式問題（2017年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2016math_kiso.pdf)
- [照合用参考解答（H29-basic.pdf、PDF 5–6ページ）](https://drive.google.com/file/d/1RJ3cPCMYxorlM3itSeJSplPrldEYm1k3/view?usp=sharing)
