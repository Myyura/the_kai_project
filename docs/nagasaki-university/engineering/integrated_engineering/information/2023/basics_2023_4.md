---
sidebar_label: "2023年度 基礎科目 問題4"
tags:
  - Nagasaki-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---

# 長崎大学 工学研究科 総合工学専攻 情報工学コース・海洋未来科学コース 2023年度 基礎科目 問題4

## **Author**

祭音Myyura (Based on [miyake's answer](https://miyake.github.io/exams/%E9%95%B7%E5%B4%8E%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%B7%8F%E5%90%88%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E5%9F%BA%E7%A4%8E%E7%A7%91%E7%9B%AE_4.html) refined with GPT 6 Astra)

## **Description**

確率変数 $X$ の累積分布関数が

$$
F(x)=\begin{cases}0&(x\le0),\\\sin x&(0<x<\pi/2),\\1&(x\ge\pi/2)\end{cases}
$$

で与えられるとき、以下に答えよ。

1. 事象 $\pi/4<X\le\pi/3$ の確率を求めよ。
2. 確率密度関数 $f(x)$ を求めよ。
3. 期待値 $E(X)$ および分散 $V(X)$ を求めよ。

#### 题目描述

随机变量 $X$ 的累积分布函数在 $x\le0$ 时为 $0$，在 $0<x<\pi/2$ 时为 $\sin x$，在 $x\ge\pi/2$ 时为 $1$。求 $\Pr(\pi/4<X\le\pi/3)$、概率密度、期望与方差。

## **Kai**

### (1)

累積分布関数の定義より

$$
\Pr\left(\frac\pi4<X\le\frac\pi3\right)
=F(\pi/3)-F(\pi/4)
=\boxed{\frac{\sqrt3-\sqrt2}2}.
$$

### (2)

$F$ は全実数上で連続で、端点に点質量をもたない。区分的に微分して、密度の一つの表示は

$$
\boxed{f(x)=\begin{cases}\cos x&(0<x<\pi/2),\\0&\text{それ以外}.\end{cases}}
$$

### (3)

部分積分により

$$
\begin{aligned}
E(X)&=\int_0^{\pi/2}x\cos x\,dx\\
&=[x\sin x+\cos x]_0^{\pi/2}
=\boxed{\frac\pi2-1}.
\end{aligned}
$$

同様に

$$
\begin{aligned}
E(X^2)&=\int_0^{\pi/2}x^2\cos x\,dx\\
&=[x^2\sin x+2x\cos x-2\sin x]_0^{\pi/2}
=\frac{\pi^2}4-2.
\end{aligned}
$$

したがって

$$
\boxed{V(X)=E(X^2)-E(X)^2
=\frac{\pi^2}4-2-\left(\frac\pi2-1\right)^2=\pi-3}.
$$

## **Reference**

- [大学公式問題（2023年度、PDF 4ページ）](https://www.eng.nagasaki-u.ac.jp/wp-content/uploads/2024/03/07_R5hakasezenki_joho_kiso.pdf)
- [miyake：対応する解答](https://miyake.github.io/exams/%E9%95%B7%E5%B4%8E%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%B7%8F%E5%90%88%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E5%9F%BA%E7%A4%8E%E7%A7%91%E7%9B%AE_4.html)
