---
sidebar_label: 2016年3月実施 専門科目 問題3 電子工学（積分・平均値）
tags:
  - Tohoku-University
  - Mathematics.Calculus.Gamma-Function
---

# 東北大学 工学研究科 電気・情報系 2016年3月実施 専門科目 問題3 電子工学（積分・平均値）

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

平衡状態にある半導体を考える。伝導帯の電子密度は
$$
n=\int_{E_c}^{\infty}g(E)f(E)\,dE\tag{3A}
$$
で求められる。ここで $g(E)=4\pi(2m_n/h^2)^{3/2}(E-E_c)^{1/2}$ は伝導帯の電子の単位体積あたりの状態密度，$f(E)=[1+\exp((E-E_F)/kT)]^{-1}$ はフェルミ・ディラック分布関数であり，$E$ は電子のエネルギー，$m_n$ は電子の有効質量，$h$ はプランク定数，$E_c$ は伝導帯底のエネルギー，$E_F$ はフェルミエネルギー，$k$ はボルツマン定数，$T$ は温度である。

$E>E_c$ において $E-E_F\gg kT$ が成り立つと仮定し，以下の問に答えよ。

(1) 式 (3A) の積分を計算して以下の式を導き，有効状態密度 $N_c$ の式を求めよ。
$$
n=N_c\exp\left(-\frac{E_c-E_F}{kT}\right)\tag{3B}
$$

(2) 伝導帯の電子の平均エネルギーを求めよ。

### 题目描述

本题取原问题的 (1)、(2)。给定能量密度

$$
g(E)=4\pi\left(\frac{2m_n}{h^2}\right)^{3/2}(E-E_c)^{1/2},\qquad
f(E)=\frac1{1+e^{(E-E_F)/(kT)}}\quad(E\ge E_c).
$$

定义 $n=\int_{E_c}^{\infty}g(E)f(E)\,dE$，并假设相关能量范围内 $E-E_F\gg kT$。

1. 计算积分，写成 $n=N_c e^{-(E_c-E_F)/(kT)}$，求 $N_c$。
2. 求按密度 $g(E)f(E)$ 加权的平均能量。

## **Kai**

### (1)

取 $f(E)\simeq e^{-(E-E_F)/(kT)}$，令 $u=(E-E_c)/(kT)$，则

$$
n=4\pi\left(\frac{2m_n}{h^2}\right)^{3/2}(kT)^{3/2}e^{-(E_c-E_F)/(kT)}
\int_0^\infty u^{1/2}e^{-u}\,du.
$$

由 $\Gamma(3/2)=\sqrt\pi/2$，

$$
\boxed{N_c=2\left(\frac{2\pi m_nkT}{h^2}\right)^{3/2}.}
$$

### (2)

$$
\langle E\rangle-E_c=
\frac{\int_{E_c}^\infty(E-E_c)g(E)f(E)\,dE}{n}
=kT\frac{\Gamma(5/2)}{\Gamma(3/2)}=\frac32kT.
$$

所以

$$
\boxed{\langle E\rangle=E_c+\frac32kT.}
$$
