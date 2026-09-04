---
sidebar_label: "2021年度 数理科学 I [5]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 I \[5\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数、$\mu$ は実数とする。$X_1,\ldots,X_n$ は独立に $N(\mu,1)$ に従い、$\theta=\mu^3$ とする。

(1) $\theta$ の最尤推定量 $S$ を求めよ。

(2) $U=\sum_{i=1}^nX_i$ とする。$T=S-aU/n^2$ が $\theta$ の不偏推定量となる $a\in\mathbb R$ を求めよ。

(3) (2) の $T$ に対し、任意の $\theta$ について $E[(T-\theta)^2]<E[(S-\theta)^2]$ を示せ。

## **Kai**

### (1)
$\mu$ の最尤推定量は $\overline X=U/n$ で、三乗は一対一なので

$$
\boxed{S=\overline X^3}.
$$

### (2)
$\overline X\sim N(\mu,1/n)$ より $E[\overline X^3]=\mu^3+3\mu/n$。したがって

$$
E[T]=\mu^3+(3-a)\mu/n,
$$

ゆえに $\boxed{a=3,\quad T=\overline X^3-3\overline X/n}$。

### (3)
$v=1/n$ とする。正規分布のモーメント $E[\overline X^2]=\mu^2+v$、$E[\overline X^4]=\mu^4+6\mu^2v+3v^2$ より

$$
\begin{aligned}
E[(S-\theta)^2]-E[(T-\theta)^2]
&=6vE[\overline X(\overline X^3-\mu^3)]-9v^2E[\overline X^2]\\
&=27\mu^2v^2+9v^3>0.
\end{aligned}
$$
