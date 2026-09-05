---
sidebar_label: "2024年8月実施 専門科目 第2問"
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Gamma-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---

# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2024年8月実施 専門科目 第2問

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 題意の要約


独立な正値確率変数 $X,Y$ を考える。$X$ の密度を

$$
p_X(x)=\lambda e^{-\lambda x}\quad (x>0),
$$

$Y$ の密度を

$$
p_Y(y)=c(\lambda)y e^{-\lambda y}\quad (y>0)
$$

とする。ただし $\lambda>0$ であり、$c(\lambda)$ は正規化定数である。

1. $X$ の累積分布関数を求めよ。
2. $X$ の期待値と中央値を求め、大小を比較せよ。
3. $c(\lambda)$ を求めよ。
4. $\Pr(X\le Y)$ を求めよ。

### 题目描述

设相互独立的正值随机变量 $X,Y$ 的密度分别为

$$
p_X(x)=\lambda e^{-\lambda x},\qquad
p_Y(y)=c(\lambda)y e^{-\lambda y},
$$

其中 $\lambda>0$，$c(\lambda)$ 为归一化常数。求 $X$ 的分布函数；求并比较 $X$ 的期望与中位数；求 $c(\lambda)$；最后求 $\Pr(X\le Y)$。

## **Kai**

### (2-1)

$$
\boxed{
F_X(x)=
\begin{cases}
0,&x\le0,\\
1-e^{-\lambda x},&x>0.
\end{cases}}
$$

### (2-2)

$$
E[X]=\int_0^\infty x\lambda e^{-\lambda x}\,dx
=\frac1\lambda.
$$

中央値 $m$ は $F_X(m)=1/2$ より

$$
m=\frac{\log 2}{\lambda}.
$$

$\log 2<1$ なので、

$$
\boxed{m<E[X]}.
$$

### (2-3)

$$
1=c(\lambda)\int_0^\infty y e^{-\lambda y}\,dy
=\frac{c(\lambda)}{\lambda^2},
$$

したがって、

$$
\boxed{c(\lambda)=\lambda^2}.
$$

### (2-4)

$$
\begin{aligned}
\Pr(X\le Y)
&=\int_0^\infty F_X(y)p_Y(y)\,dy\\
&=\lambda^2\int_0^\infty y e^{-\lambda y}
\left(1-e^{-\lambda y}\right)\,dy\\
&=1-\frac14
=\boxed{\frac34}.
\end{aligned}
$$

## **Reference**

- [東京大学大学院 情報学環・学際情報学府 修士課程 過去の入学試験問題](https://www.iii.u-tokyo.ac.jp/admissions/master-pastexams)
- [2025年度 専門科目（生物統計情報学コース）公式問題 PDF](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2025/03/2025toukei.pdf)
