---
sidebar_label: "2021年度 数理科学 II [8]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 II \[8\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は2以上の整数、$0<p<1$、$q=1-p$ とする。独立な $X_1,\ldots,X_n$ はベルヌーイ分布 $B(p)$ に従い、

$$
\overline X_n=\frac1n\sum X_i,\quad S_n^2=\frac1n\sum(X_i-\overline X_n)^2,\quad T_n=\overline X_n(1-\overline X_n)
$$

とおく。

(1) $E[S_n^2],E[T_n]$ を求めよ。

(2) $S_n^2-pq=(1-\overline X_n-p)(\overline X_n-p)$ を示せ。

(3) $p\ne1/2$ のとき $\sqrt n(S_n^2-pq)$ の漸近分布を求めよ。

(4) $p=1/2$ のとき $-4n(S_n^2-1/4)$ の漸近分布を求めよ。

## **Kai**

### (1)
$X_i^2=X_i$ より $S_n^2=\overline X_n-\overline X_n^2=T_n$。したがって

$$
\boxed{E[S_n^2]=E[T_n]=\frac{n-1}{n}pq}.
$$

### (2)

$$
S_n^2-pq=(\overline X_n-p)-(\overline X_n^2-p^2)
=(1-\overline X_n-p)(\overline X_n-p).
$$

### (3)
中心極限定理から $\sqrt n(\overline X_n-p)\Rightarrow N(0,pq)$。また $1-\overline X_n-p\xrightarrow{P}1-2p$ なので

$$
\boxed{\sqrt n(S_n^2-pq)\Rightarrow N(0,pq(1-2p)^2)}.
$$

### (4)
(2) より $-4n(S_n^2-1/4)=[2\sqrt n(\overline X_n-1/2)]^2$。角括弧内は標準正規分布に分布収束するので

$$
\boxed{-4n(S_n^2-1/4)\Rightarrow\chi^2_1}.
$$
