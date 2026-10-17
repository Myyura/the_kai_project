---
sidebar_label: "2017年8月実施 数学B 第1問"
tags:
  - Tohoku-University
  - Mathematics.Fourier-Analysis.Fourier-Series
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 数学B 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

1. 実関数 $f(x)$ の複素フーリエ級数は次のように与えられる。

$$
f(x)=\sum_{n=-\infty}^{\infty}c_ne^{inx}
$$

ただし，

$$
c_n=\frac1{2\pi}\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx
$$

である。以下の問いに答えよ。

**(1)** $f(x)$ のフーリエ級数は以下のように与えられる。

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)
$$

このとき，$a_n$ と $b_n$ をそれぞれ $c_n$ および $c_{-n}$ を用いて表せ。

**(2)** 次の関係を示せ。

$$
\frac1{2\pi}\int_{-\pi}^{\pi}e^{imx}e^{-inx}\,dx=
\begin{cases}1&(m=n),\\0&(m\ne n).\end{cases}
$$

ただし，$m$ と $n$ は整数である。

**(3)** $f(x)=\displaystyle\sum_{k=1}^4\cos^k x$ をフーリエ級数に展開せよ。

#### 题目描述

1. 实函数 $f(x)$ 的复数形式傅里叶级数为

$$
f(x)=\sum_{n=-\infty}^{\infty}c_ne^{inx},
$$

其中

$$
c_n=\frac1{2\pi}\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx.
$$

回答下列问题。

**(1)** $f(x)$ 的傅里叶级数也可表示为

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx).
$$

分别用 $c_n$ 和 $c_{-n}$ 表示 $a_n$ 和 $b_n$。

**(2)** 证明下列关系，其中 $m,n$ 为整数。

$$
\frac1{2\pi}\int_{-\pi}^{\pi}e^{imx}e^{-inx}\,dx=
\begin{cases}1&(m=n),\\0&(m\ne n).\end{cases}
$$

**(3)** 将 $f(x)=\displaystyle\sum_{k=1}^4\cos^k x$ 展开为傅里叶级数。

## **Kai**

### (1)

正負の添字を組にすると

$$
c_ne^{inx}+c_{-n}e^{-inx}
=(c_n+c_{-n})\cos nx+i(c_n-c_{-n})\sin nx.
$$

よって

$$
\boxed{a_0=2c_0,\quad a_n=c_n+c_{-n},\quad b_n=i(c_n-c_{-n})\ (n\ge1)}.
$$

実関数では $c_{-n}=\overline{c_n}$ だから $a_n=2\operatorname{Re}c_n$、$b_n=-2\operatorname{Im}c_n$ でもある。

### (2)

$m=n$ なら被積分関数は1で、積分は $2\pi$。$m\ne n$ なら $k=m-n\in\mathbb Z\setminus\{0\}$ とおき

$$
\frac1{2\pi}\int_{-\pi}^{\pi}e^{ikx}\,dx
=\frac{e^{ik\pi}-e^{-ik\pi}}{2\pi ik}
=\frac{\sin k\pi}{\pi k}=0.
$$

従って示すべき値は $\boxed{\delta_{mn}}$。

### (3)

倍角・三倍角の関係から

$$
\begin{gathered}
\cos^2x=\frac{1+\cos2x}2,\\
\cos^3x=\frac{3\cos x+\cos3x}4,\\
\cos^4x=\frac{3+4\cos2x+\cos4x}8.
\end{gathered}
$$

これらを足して

$$
\boxed{f(x)=\frac78+\frac74\cos x+\cos2x+\frac14\cos3x+\frac18\cos4x}.
$$

従って $a_0=a_1=7/4,a_2=1,a_3=1/4,a_4=1/8$、他の $a_n$ と全 $b_n$ はゼロである。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 7ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
