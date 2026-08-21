---
sidebar_label: "2021年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2021年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

二つの確率変数 $X$ と $Y$ の間の相関係数は $\rho$ であり、それぞれの分散は $\sigma_x^2$ と $\sigma_y^2$ で与えられている。このとき、以下の問いに答えよ。

(1) $a, b, c, d$ は全て定数で, $a > 0, c > 0$ である。このとき、 $aX + b$ と $cY + d$ の相関係数が $\rho$ となることを示せ。

(2) $Z = Y - \rho(\frac{\sigma_y}{\sigma_x})X$ で表される確率変数 $Z$ と $X$ の相関係数がゼロになることを示せ。

### 题目描述

两个随机变量 $X,Y$ 的相关系数为 $\rho$，方差分别为 $\sigma_x^2,\sigma_y^2$。回答下列问题。

（1）设 $a,b,c,d$ 均为常数，且 $a>0,\ c>0$。证明 $aX+b$ 与 $cY+d$ 的相关系数仍为 $\rho$。

（2）定义随机变量

$$
Z=Y-\rho\left(\frac{\sigma_y}{\sigma_x}\right)X.
$$

证明 $Z$ 与 $X$ 的相关系数为零。这里需要注意：当 $|\rho|<1$ 时该相关系数有定义并等于零；若 $|\rho|=1$，则 $\operatorname{Var}(Z)=0$，相关系数本身无定义，但仍有 $\operatorname{Cov}(Z,X)=0$。

## **Kai**

(1) 確率変数 $X$ と $Y$ の相関係数が $\rho$ であるとき、

$$
\text{Corr}(X, Y) = \rho = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y}
$$

ここで、 $aX + b$ と $cY + d$ の相関係数を求めると、

$$
\text{Corr}(aX + b, cY + d) = \frac{\text{Cov}(aX + b, cY + d)}{\sigma_{aX+b} \sigma_{cY+d}}
$$

共分散の性質より、

$$
\text{Cov}(aX + b, cY + d) = ac \cdot \text{Cov}(X, Y)
$$

分散の性質より、

$$
\sigma_{aX+b} = |a| \sigma_X = a \sigma_X \quad (a > 0)
$$

$$
\sigma_{cY+d} = |c| \sigma_Y = c \sigma_Y \quad (c > 0)
$$

したがって、

$$
\text{Corr}(aX + b, cY + d) = \frac{ac \cdot \text{Cov}(X, Y)}{a\sigma_X c\sigma_Y} = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y} = \rho
$$

よって、 $aX + b$ と $cY + d$ の相関係数は $\rho$ である。

(2) $Z = Y - \rho(\frac{\sigma_y}{\sigma_x})X$ と $X$ の共分散を求める。

$$
\text{Cov}(Z, X) = \text{Cov}(Y - \rho(\frac{\sigma_y}{\sigma_x})X, X) = \text{Cov}(Y, X) - \rho(\frac{\sigma_y}{\sigma_x}) \text{Cov}(X, X)
$$

ここで、 $\text{Cov}(X, X) = \sigma_X^2$ である。

また、 $\text{Cov}(Y, X) = \rho \sigma_X \sigma_Y$ である。

したがって、

$$
\text{Cov}(Z, X) = \rho \sigma_X \sigma_Y - \rho(\frac{\sigma_y}{\sigma_x}) \sigma_X^2 = \rho \sigma_X \sigma_Y - \rho \sigma_y \sigma_x = 0
$$

さらに、

$$
\begin{aligned}
\operatorname{Var}(Z)
&=\operatorname{Var}\left(Y-\rho\frac{\sigma_Y}{\sigma_X}X\right)\\
&=\sigma_Y^2+\rho^2\sigma_Y^2
-2\rho\frac{\sigma_Y}{\sigma_X}\operatorname{Cov}(X,Y)\\
&=\sigma_Y^2(1-\rho^2).
\end{aligned}
$$

したがって、 $|\rho|<1$ ならば $\sigma_Z>0$ であり、

$$
\operatorname{Corr}(Z,X)
=\frac{\operatorname{Cov}(Z,X)}{\sigma_Z\sigma_X}=0
$$

となる。一方、 $|\rho|=1$ のときは $\operatorname{Var}(Z)=0$ なので、 $Z$ はほとんど確実に定数であり、 $Z$ と $X$ の相関係数は定義されない。よって、問題文の結論には $|\rho|<1$ という条件が必要である（共分散については常に $\operatorname{Cov}(Z,X)=0$ である）。
