---
sidebar_label: "2019年8月実施 情報数理学 数理基礎"
tags:
  - Osaka-University
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Polynomial-Regression-via-Maximum-Likelihood-Estimation-and-Least-Squares
---
# 大阪大学 情報科学研究科 情報数理学専攻 2019年8月実施 情報数理学 数理基礎

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

### 1

線形計画問題

$$
\begin{aligned}
\mathrm P:\quad\min\ &-2x_1-3x_2\\
\text{subject to }&2x_1+6x_2+x_3=12,\\
&3x_1+3x_2+x_4=12,\qquad x_1,x_2,x_3,x_4\ge0
\end{aligned}
$$

について、(1) 基底解をすべて求め、実行可能基底解を示せ。

(2) $x_1=x_3=0$ の実行可能基底解からシンプレックス法を開始するとき、次のステップで得られる実行可能基底解をすべて示せ。

(3) Pの双対問題を示せ。

### 2

部品A、Bの故障までの年数をそれぞれ $X,Y$ とし、同時密度を

$$
f(x,y)=\begin{cases}ce^{-2(x+2y)}&x>0,\ y>0,\\0&\text{それ以外}\end{cases}
$$

とする。(1) $c$ を求めよ。(2) $X,Y$ が独立か従属か調べよ。

(3) 装置の寿命（部品A、Bのどちらか一方が故障するまでの年数）が半年以上である確率を、百分率で小数第1位まで求めよ。$e\simeq2.7183$ を用いてよい。

### 3

データ $(x_k,y_k)$（$k=1,\ldots,N$）を曲線 $y=ax^2+bx+c$ に当てはめるため

$$
y_k=ax_k^2+bx_k+c+\varepsilon_k
$$

とする。$\varepsilon_k$ は独立な $N(0,\sigma^2)$ に従う。

(1) $y_1,\ldots,y_N$ の尤度を示せ。

(2) $J=\sum_{k=1}^N(y_k-ax_k^2-bx_k-c)^2$ を最小とする $a,b,c$ は最尤推定量となるか。

## **Kai**

### 1

(1) 4変数から基底変数を2個選んで解く。

| 基底変数 | $(x_1,x_2,x_3,x_4)$ | 実行可能性 |
|---|---|---|
| $x_1,x_2$ | $(3,1,0,0)$ | 可 |
| $x_1,x_3$ | $(4,0,4,0)$ | 可 |
| $x_1,x_4$ | $(6,0,0,-6)$ | 不可 |
| $x_2,x_3$ | $(0,4,-12,0)$ | 不可 |
| $x_2,x_4$ | $(0,2,0,6)$ | 可 |
| $x_3,x_4$ | $(0,0,12,12)$ | 可 |

(2) 初期基底は $(x_2,x_4)$ であり、

$$
x_2=2-\frac13x_1-\frac16x_3,\qquad
x_4=6-2x_1+\frac12x_3,
$$

$$
-2x_1-3x_2=-6-x_1+\frac12x_3.
$$

目的値を減らす進入変数は $x_1$ のみ。$x_3=0$ のまま増やすと、$x_2\ge0$ から $x_1\le6$、$x_4\ge0$ から $x_1\le3$。従って $x_4$ が離脱し、次の実行可能基底解は $\boxed{(3,1,0,0)}$ のみである。

(3) 等式制約に対する双対変数を $y_1,y_2$ とすれば

$$
\boxed{\begin{aligned}
\max\ &12y_1+12y_2\\
\text{subject to }&2y_1+3y_2\le-2,\\
&6y_1+3y_2\le-3,\qquad y_1\le0,\quad y_2\le0.
\end{aligned}}
$$

### 2

(1) 正規化条件から

$$
1=c\int_0^\infty e^{-2x}dx\int_0^\infty e^{-4y}dy=\frac c8,
$$

よって $\boxed{c=8}$。

(2) 周辺密度は $f_X(x)=2e^{-2x}$（$x>0$）、$f_Y(y)=4e^{-4y}$（$y>0$）で、区間外では0である。$f(x,y)=f_X(x)f_Y(y)$ だから $\boxed{X,Y\text{ は独立}}$。

(3) 装置の寿命は $\min(X,Y)$ である。したがって

$$
P\left(\min(X,Y)\ge\frac12\right)
=P\left(X\ge\frac12,Y\ge\frac12\right)
=e^{-1}e^{-2}=e^{-3}\simeq0.049787.
$$

求める確率は $\boxed{5.0\%}$。

### 3

(1) $x_k$ を固定したときの尤度は

$$
\boxed{L(a,b,c)=(2\pi\sigma^2)^{-N/2}
\exp\left[-\frac1{2\sigma^2}\sum_{k=1}^N(y_k-ax_k^2-bx_k-c)^2\right]}.
$$

(2) $\sigma^2>0$ を固定すれば、対数尤度は $\log L=-\frac N2\log(2\pi\sigma^2)-J/(2\sigma^2)$。よって $J$ の最小化と尤度の最大化は同値であり、最小二乗解は最尤推定量となる。
