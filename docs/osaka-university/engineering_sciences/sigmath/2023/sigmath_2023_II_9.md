---
sidebar_label: "2023年度 数理科学 II [9]"
tags:
  - Osaka-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 II \[9\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

実数値確率変数 $X$ の積率母関数 $M(t)=E[e^{tX}]$ が全実数 $t$ で存在するとき、$\psi(t)=\log M(t)$ をキュムラント母関数、正の整数 $m$ に対し $\kappa_m=\psi^{(m)}(0)$ を $m$ 次キュムラントという。

$p$ は正の整数とし、実数値確率変数 $X_1,\ldots,X_p$ は独立で、各積率母関数は全実数で存在するとする。$X_j$ のキュムラント母関数を $\psi_j$、$m$ 次キュムラントを $\kappa_m^{(j)}$ とし、$a_j\in\mathbb R$ とする。$\sum_ja_jX_j$ の $m$ 次キュムラントを $\kappa_m(a_1,\ldots,a_p)$ とする。

(1) $\sum_ja_jX_j$ のキュムラント母関数を求めよ。

(2) $\kappa_m(a_1,\ldots,a_p)$ を求めよ。

(3) $\kappa_2(a_1,\ldots,a_p)$ を $V[X_j]$ で表せ。

(4) $\sum_ja_j^2=1$ なら

$$
\min\{0,\kappa_4^{(1)},\ldots,\kappa_4^{(p)}\}\le\kappa_4(a_1,\ldots,a_p)
\le\max\{0,\kappa_4^{(1)},\ldots,\kappa_4^{(p)}\}
$$

を示せ。

## **Kai**

### (1)
独立性から積率母関数は $\prod_jM_j(a_jt)$。対数をとって

$$
\boxed{\psi(t)=\sum_{j=1}^p\psi_j(a_jt)}.
$$

### (2)
$m$ 回微分し $t=0$ とすると

$$
\boxed{\kappa_m(a_1,\ldots,a_p)=\sum_{j=1}^pa_j^m\kappa_m^{(j)}}.
$$

### (3)
$\psi_j''(0)=M_j''(0)-M_j'(0)^2=V[X_j]$ より

$$
\boxed{\kappa_2(a_1,\ldots,a_p)=\sum_{j=1}^pa_j^2V[X_j]}.
$$

### (4)
$0\le a_j^2\le1$ より $s=\sum_ja_j^4\le\sum_ja_j^2=1$。 (2) より

$$
\kappa_4(a_1,\ldots,a_p)=\sum_ja_j^4\kappa_4^{(j)}+(1-s)\cdot0
$$

は $0,\kappa_4^{(1)},\ldots,\kappa_4^{(p)}$ の凸結合である。したがってその最小値と最大値の間にある。
