---
sidebar_label: "2022年8月実施 A日程 基礎数学 II"
tags:
  - Future-University-Hakodate
  - Mathematics.Real-Analysis.Stirling-Formula
  - Mathematics.Calculus.Improper-Integral
---

# 公立はこだて未来大学 システム情報科学研究科 2022年8月実施 A日程 基礎数学 II

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%85%AC%E7%AB%8B%E3%81%AF%E3%81%93%E3%81%A0%E3%81%A6%E6%9C%AA%E6%9D%A5%E5%A4%A7%E5%AD%A6/%E5%9F%BA%E7%A4%8E%E6%95%B0%E5%AD%A6/2023%E5%B9%B4%E5%BA%A6_A%E6%97%A5%E7%A8%8B_2.html) refined with GPT 6 Astra)

## **Description**

**問1** $0$ 以上の整数 $n$ に対して $a_n=(2n)!/((n+1)!n!)$ と定める。ただし $0!=1$ とする。Stirling の公式

$$
n!\sim\left(\frac ne\right)^n\sqrt{2\pi n}
$$

を用いて $\lim_{n\to\infty}n^{3/2}a_n/4^n$ を求めよ。記号 $\sim$ は両辺の比が $1$ に収束することを示す。

**問2** 広義積分 $\int_{1/2}^1\frac{dx}{x\sqrt{1-x}}$ を求めよ。

#### 题目描述

1. 对非负整数 $n$ 定义 $a_n=(2n)!/((n+1)!n!)$，其中 $0!=1$。利用上述 Stirling 公式，计算 $\lim_{n\to\infty}n^{3/2}a_n/4^n$。
2. 计算广义积分 $\int_{1/2}^1[x\sqrt{1-x}]^{-1}\,dx$。

## **Kai**

### 問1

$a_n=\frac1{n+1}\binom{2n}{n}$ と書き、Stirling の公式を適用すると、

$$
\binom{2n}{n}
\sim\frac{(2n/e)^{2n}\sqrt{4\pi n}}{(n/e)^{2n}2\pi n}
=\frac{4^n}{\sqrt{\pi n}}.
$$

したがって、

$$
\boxed{\lim_{n\to\infty}\frac{n^{3/2}a_n}{4^n}
=\frac1{\sqrt\pi}\lim_{n\to\infty}\frac n{n+1}
=\frac1{\sqrt\pi}}.
$$

### 問2

$t=\sqrt{1-x}$ とおくと、$x=1-t^2$、$dx=-2t\,dt$ より、

$$
\begin{aligned}
\int_{1/2}^1\frac{dx}{x\sqrt{1-x}}
&=\int_0^{1/\sqrt2}\frac2{1-t^2}\,dt\\
&=\left[\log\frac{1+t}{1-t}\right]_0^{1/\sqrt2}\\
&=\boxed{\log(3+2\sqrt2)}.
\end{aligned}
$$

## **Reference**

- [大学公式問題（PDF 3ページ、冊子2ページ）](https://www.fun.ac.jp/wp/wp-content/uploads/R04.8.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E5%85%AC%E7%AB%8B%E3%81%AF%E3%81%93%E3%81%A0%E3%81%A6%E6%9C%AA%E6%9D%A5%E5%A4%A7%E5%AD%A6/%E5%9F%BA%E7%A4%8E%E6%95%B0%E5%AD%A6/2023%E5%B9%B4%E5%BA%A6_A%E6%97%A5%E7%A8%8B_2.html)
