---
sidebar_label: "2019年7月実施 数理基礎 E"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-and-Statistics-Basics.Exponential-Distribution
  - Probability-Statistics.Statistical-Inference.Hypothesis-Testing
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2019年7月実施 数理基礎 E

## **Author**
祭音Myyura

## **Description**

1. データ $1,2,2,2,3$ の不偏分散を求めよ。
2. 密度 $f(x)=\lambda e^{-\lambda x}$（$x>0,\lambda>0$）に従う確率変数 $X$ の期待値を求めよ。
3. $V(X)=5$、$V(Y)=8$、$V(X+Y)=10$ のとき、$C(X,Y)$ を求めよ。
4. 統計的仮説検定における検出力を説明せよ。

## **Kai**

### [小問 1]

標本平均は $\bar x=2$、偏差平方和は

$$
(1-2)^2+3(2-2)^2+(3-2)^2=2
$$

である。不偏分散は $n-1=4$ で割るので

$$
\boxed{s^2=\frac24=\frac12}.
$$

### [小問 2]

部分積分により

$$
\begin{aligned}
E[X]
&=\int_0^\infty x\lambda e^{-\lambda x}\,dx\\
&=\left[-xe^{-\lambda x}\right]_0^\infty
+\int_0^\infty e^{-\lambda x}\,dx
=\boxed{\frac1\lambda}.
\end{aligned}
$$

### [小問 3]

$$
V(X+Y)=V(X)+V(Y)+2C(X,Y)
$$

より

$$
10=5+8+2C(X,Y).
$$

したがって

$$
\boxed{C(X,Y)=-\frac32}.
$$

### [小問 4]

検出力は、対立仮説 $H_1$ が真であるときに帰無仮説 $H_0$ を正しく棄却する確率である。第2種の過誤確率を $\beta=P(H_0\text{ を棄却しない}\mid H_1\text{ が真})$ とすれば

$$
\boxed{\text{検出力}=1-\beta}.
$$

標本数、真の効果量、有意水準が大きいほど一般に検出力は高くなり、母分散が大きいほど低くなる。
