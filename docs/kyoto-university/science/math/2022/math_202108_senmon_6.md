---
sidebar_label: "2022年度 専門科目 [6]"
tags:
  - Kyoto-University
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
---

# 京都大学 理学研究科 数学・数理解析専攻 2022年度 専門科目 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$\mu$ を $[0,\infty)$ 上の Borel 測度とする。$f$ は $[0,\infty)$ 上の関数で一様連続かつ非負値とし、

$$
\int_{[0,\infty)}e^{f(x)}\,\mu(dx)<\infty
$$

を満たすと仮定する。このとき、極限

$$
\lim_{n\to\infty}\int_{[0,\infty)}
\left(1+\int_0^{1/n}f(x+t)\,dt\right)^n\mu(dx)
$$

を求めよ。

#### 题目描述

设 $\mu$ 是 $[0,\infty)$ 上的 Borel 测度，$f$ 是该区间上的非负一致连续函数，且

$$
\int_{[0,\infty)}e^{f(x)}\,\mu(dx)<\infty.
$$

求极限

$$
\lim_{n\to\infty}\int_{[0,\infty)}
\left(1+\int_0^{1/n}f(x+t)\,dt\right)^n\mu(dx).
$$

## **Kai**

$b_n(x)=n\int_0^{1/n}f(x+t)\,dt$ とおく。$f$ の連続性から各 $x\ge0$ で $b_n(x)\to f(x)$ であり、

$$
\left(1+\frac{b_n(x)}n\right)^n\longrightarrow e^{f(x)}.
$$

一様連続性により、ある $N$ が存在して $n\ge N$, $x\ge0$, $0\le t\le1/n$ ならば $f(x+t)\le f(x)+1$ となる。従って $n\ge N$ では、$1+u\le e^u$ を用いて

$$
0\le\left(1+\frac{b_n(x)}n\right)^n
\le e^{b_n(x)}\le e\,e^{f(x)}.
$$

右辺は仮定により $\mu$ 可積分である。優収束定理から、求める極限は

$$
\boxed{\int_{[0,\infty)}e^{f(x)}\,\mu(dx)}.
$$

## **Reference**

- [京都大学公式問題（2022年度・専門科目、PDF 5ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2021math_senmon_for2022_honshi.pdf)
- [照合用参考解答（2022年度・専門科目 問題6、PDF 1–2ページ）](https://drive.google.com/file/d/13VP_uw-pTcypra8PZmwMvf1-TFGKwnMp/view)
