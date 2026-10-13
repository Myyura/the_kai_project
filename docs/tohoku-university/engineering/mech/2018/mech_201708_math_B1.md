---
sidebar_label: "2017年秋季 数学B 第1問"
tags:
  - Tohoku-University
  - Mathematics.Fourier-Analysis.Fourier-Series
---

# 東北大学 工学研究科 機械・知能系 2017年秋季 数学B 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

実関数 $f(x)$ の複素フーリエ級数を

$$
f(x)=\sum_{n=-\infty}^{\infty}c_ne^{inx},\qquad
c_n=\frac1{2\pi}\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx
$$

とする。

1. 実形式 $f(x)=a_0/2+\sum_{n=1}^\infty(a_n\cos nx+b_n\sin nx)$ の $a_n,b_n$ を $c_n,c_{-n}$ で表せ。
2. 整数 $m,n$ について $(2\pi)^{-1}\int_{-\pi}^\pi e^{imx}e^{-inx}\,dx=\delta_{mn}$ を示せ。
3. $f(x)=\sum_{k=1}^4\cos^k x$ をフーリエ級数に展開せよ。

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

实函数的复傅里叶系数和展开如上。（1）以 $c_n,c_{-n}$ 表示三角形式的 $a_n,b_n$。（2）证明整数 $m,n$ 的复指数正交关系，即该积分在 $m=n$ 时为1，否则为0。（3）将 $\cos x+\cos^2x+\cos^3x+\cos^4x$ 展开为傅里叶级数。

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
\cos^2x=\frac{1+\cos2x}2,\quad
\cos^3x=\frac{3\cos x+\cos3x}4,\quad
\cos^4x=\frac{3+4\cos2x+\cos4x}8.
$$

これらを足して

$$
\boxed{f(x)=\frac78+\frac74\cos x+\cos2x+\frac14\cos3x+\frac18\cos4x}.
$$

従って $a_0=a_1=7/4,a_2=1,a_3=1/4,a_4=1/8$、他の $a_n$ と全 $b_n$ はゼロである。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 7ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
