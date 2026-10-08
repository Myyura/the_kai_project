---
sidebar_label: "2020年度 基礎科目 問題7"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Riemann-Sum
---

# 京都大学 理学研究科 数学・数理解析専攻 2020年度 基礎科目 問題7

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

関数 $f:\mathbb R\to\mathbb R$ が $C^1$ 級のとき、極限

$$
\lim_{n\to\infty}\left(\sum_{k=1}^n f\left(\frac{k}{n}\right)-n\int_0^1 f(x)\,dx\right)
$$

を求めよ。

#### 题目描述

设 $f:\mathbb R\to\mathbb R$ 为 $C^1$ 函数。求

$$
\lim_{n\to\infty}\left(\sum_{k=1}^n f\left(\frac{k}{n}\right)-n\int_0^1 f(x)\,dx\right).
$$

## **Kai**

括弧内を $E_n$ と置き、$a_k=(k-1)/n,b_k=k/n$ とする。微積分の基本定理と積分順序の交換より、

$$
\begin{aligned}
E_n
&=n\sum_{k=1}^n\int_{a_k}^{b_k}\bigl(f(b_k)-f(x)\bigr)\,dx\\
&=n\sum_{k=1}^n\int_{a_k}^{b_k}(t-a_k)f'(t)\,dt.
\end{aligned}
$$

$f'$ は $[0,1]$ 上一様連続である。その連続度を

$$
\omega(\delta)=\sup\{|f'(s)-f'(t)|:s,t\in[0,1],\ |s-t|\le\delta\}
$$

とすると $\omega(\delta)\to0\ (\delta\to0+)$ であり、

$$
\left|E_n-\frac1{2n}\sum_{k=1}^n f'\left(\frac{k}{n}\right)\right|
\le n\omega(1/n)\sum_{k=1}^n\int_{a_k}^{b_k}(t-a_k)\,dt
=\frac12\omega(1/n)\longrightarrow0.
$$

右端点の Riemann 和の収束から、求める極限は

$$
\boxed{\frac12\int_0^1 f'(x)\,dx=\frac{f(1)-f(0)}2}.
$$

## **Reference**

- [京都大学公式問題（2020年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2019math_kiso_for2020.pdf)
- [照合用参考解答（R2-basic.pdf、PDF 8ページ）](https://drive.google.com/file/d/12Ok4g9koHUXlcNBVN2XlaIIBAhTuR546/view)
