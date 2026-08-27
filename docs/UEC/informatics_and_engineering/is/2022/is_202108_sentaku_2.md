---
sidebar_label: 2021年8月実施 選択問題 確率・オペレーションズリサーチ
tags:
  - University-of-Electro-Communications
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Uniform-Distribution
  - Probability-Statistics.Probability-Basics.Conditional-Density
  - Probability-Statistics.Probability-Basics.Correlation-Coefficient
  - Operations-Research.Linear-Programming.Production-Planning
  - Operations-Research.Linear-Programming.Simplex-Method
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
---

# 電気通信大学 情報理工学研究科 情報学専攻 2021年8月実施 選択問題 確率・オペレーションズリサーチ

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

この科目では問1に必ず解答し、問2または問3の一方を選ぶ。ここでは全問を扱う。

1. 1 時間の来客数が平均 2 の Poisson 分布に従うとき、積率母関数と 10 時間の合計来客数の分布・平均・分散を求めよ。
2. $X,Y$ を独立な $U(0,100)$ とし、相関係数と $P(X+Y\ge a)$ を求めよ。さらに $X+Y\ge120$ の条件下で、同時密度、独立性および条件付き平均を求めよ。
3. 製品 1、2 の生産量を $x_1,x_2$ とし、利益 $3x_1+5x_2$ を、制約
   $$
   x_1\le4,\qquad2x_2\le12,\qquad3x_1+2x_2\le18,\qquad x_1,x_2\ge0
   $$
   の下で最大化せよ。Simplex 法で解き、双対問題も示せ。

### 题目描述

考查 Poisson 分布的可加性、二维均匀分布在三角区域上的条件分布，以及生产计划线性规划的单纯形法和对偶问题。

## **Kai**

### 問1

#### 1-1

$N\sim\operatorname{Pois}(2)$ より、

$$
\boxed{M_N(t)=\exp\{2(e^t-1)\}}.
$$

#### 1-2

独立な Poisson 確率変数の和も Poisson 分布に従うので、10 時間の合計 $S$ は

$$
\boxed{S\sim\operatorname{Pois}(20)}.
$$

#### 1-3

$$
\boxed{E[S]=20,\qquad V[S]=20}.
$$

### 問2

#### 2-1

独立性より $\operatorname{Cov}(X,Y)=0$ であるから、

$$
\boxed{\rho_{XY}=0}.
$$

#### 2-2

正方形 $[0,100]^2$ 内の面積比より、

$$
\boxed{
P(X+Y\ge a)=
\begin{cases}
1-\dfrac{a^2}{20000},&0\le a\le100,\\[6pt]
\dfrac{(200-a)^2}{20000},&100\le a\le200.
\end{cases}}
$$

#### 2-3

$P(X+Y\ge120)=8/25$ なので、

$$
\boxed{
f_{X,Y\mid X+Y\ge120}(x,y)=
\begin{cases}
\dfrac1{3200},&
0\le x,y\le100,\ x+y\ge120,\\
0,&\text{otherwise}.
\end{cases}}
$$

#### 2-4

事象 $E=\{20<X<30\}$、$F=\{20<Y<30\}$ は、条件 $X+Y\ge120$ のもとでそれぞれ正の確率をもつ。一方、$E\cap F$ では $X+Y<60$ なので条件を満たさず、その条件付き確率は $0$ である。したがって、

$$
\boxed{X,Y\text{ は条件付きでは独立でない}}.
$$

#### 2-5

三角形の頂点は $(20,100),(100,20),(100,100)$ である。重心より、

$$
\boxed{
E[X\mid X+Y\ge120]
=E[Y\mid X+Y\ge120]
=\frac{220}{3}}.
$$

### 問3

#### 3-1

スラック変数 $x_3,x_4,x_5$ を導入すると、

$$
\begin{cases}
x_1+x_3=4,\\
2x_2+x_4=12,\\
3x_1+2x_2+x_5=18,
\end{cases}
\qquad x_i\ge0,
$$

であり、目的関数は $\max Z=3x_1+5x_2$ である。

#### 3-2

初期表から $x_2$、次に $x_1$ を基底へ入れると、最終表は

| 基底 | $c_B$ | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | 定数項 |
|:---:|---:|---:|---:|---:|---:|---:|---:|
| $x_3$ | 0 | 0 | 0 | 1 | $1/3$ | $-1/3$ | 2 |
| $x_2$ | 5 | 0 | 1 | 0 | $1/2$ | 0 | 6 |
| $x_1$ | 3 | 1 | 0 | 0 | $-1/3$ | $1/3$ | 2 |
| $c_j-z_j$ |  | 0 | 0 | 0 | $-3/2$ | $-1$ |  |

となる。したがって、

$$
\boxed{(x_1,x_2)=(2,6)},\qquad
\boxed{Z_{\max}=36}.
$$

#### 3-3

双対問題は

$$
\begin{aligned}
\text{minimize}\quad&4y_1+12y_2+18y_3,\\
\text{subject to}\quad
&y_1+3y_3\ge3,\\
&2y_2+2y_3\ge5,\\
&y_1,y_2,y_3\ge0.
\end{aligned}
$$

である。最適解は $(y_1,y_2,y_3)=(0,3/2,1)$、最適値は $36$ である。
