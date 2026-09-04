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
n=\int_{E_C}^{\infty}g(E)f(E)\,dE\tag{3A}
$$
で求められる。ここで $g(E)=4\pi(2m_n/h^2)^{3/2}(E-E_C)^{1/2}$ は伝導帯の電子の単位体積あたりの状態密度，$f(E)=[1+\exp((E-E_F)/kT)]^{-1}$ はフェルミ・ディラック分布関数であり，$E$ は電子のエネルギー，$m_n$ は電子の有効質量，$h$ はプランク定数，$E_C$ は伝導帯底のエネルギー，$E_F$ はフェルミエネルギー，$k$ はボルツマン定数，$T$ は温度である。

$E>E_C$ において $E-E_F\gg kT$ が成り立つと仮定し，以下の問に答えよ。

(1) 式 (3A) の積分を計算して以下の式を導き，有効状態密度 $N_C$ の式を求めよ。
$$
n=N_C\exp\left(-\frac{E_C-E_F}{kT}\right)\tag{3B}
$$

(2) 伝導帯の電子の平均エネルギーを求めよ。

(3) ドナー密度が $N_D$ である $n$ 型半導体を考える。$n=N_D$ であるとき，$E_F$ の式を求めよ。

(4) 低温において $n$ 型半導体中の電子密度は

$$
n=N_D\left[1-\frac1{1+\frac12\exp\{(E_D-E_F)/kT\}}\right]\tag{3C}
$$

で与えられる。ここで $E_D$ はドナー準位である。$E_F-E_D\gg kT$ が成り立つと仮定し，$E_F$ および $n$ を $E_C,E_D,N_C,N_D,k$ および $T$ で表す式を求めよ。

### 题目描述

本题按给定状态密度和载流子密度公式作积分与代数计算。给定能量密度

$$
g(E)=4\pi\left(\frac{2m_n}{h^2}\right)^{3/2}(E-E_C)^{1/2},\qquad
f(E)=\frac1{1+e^{(E-E_F)/(kT)}}\quad(E\ge E_C).
$$

定义 $n=\int_{E_C}^{\infty}g(E)f(E)\,dE$，并假设相关能量范围内 $E-E_F\gg kT$。

1. 计算积分，写成 $n=N_C e^{-(E_C-E_F)/(kT)}$，求 $N_C$。
2. 求按密度 $g(E)f(E)$ 加权的平均能量。

3. 给定施主密度 $N_D$，且 $n=N_D$，求 $E_F$。
4. 低温电子密度满足

$$
n=N_D\left[1-\frac1{1+\frac12e^{(E_D-E_F)/(kT)}}\right].
$$

假设 $E_F-E_D\gg kT$，联立 (1) 的结果，用 $E_C,E_D,N_C,N_D,k,T$ 表示 $E_F$ 与 $n$。

## **Kai**

### (1)

取 $f(E)\simeq e^{-(E-E_F)/(kT)}$，令 $u=(E-E_C)/(kT)$，则

$$
n=4\pi\left(\frac{2m_n}{h^2}\right)^{3/2}(kT)^{3/2}e^{-(E_C-E_F)/(kT)}
\int_0^\infty u^{1/2}e^{-u}\,du.
$$

由 $\Gamma(3/2)=\sqrt\pi/2$，

$$
\boxed{N_C=2\left(\frac{2\pi m_nkT}{h^2}\right)^{3/2}.}
$$

### (2)

$$
\langle E\rangle-E_C=
\frac{\int_{E_C}^\infty(E-E_C)g(E)f(E)\,dE}{n}
=kT\frac{\Gamma(5/2)}{\Gamma(3/2)}=\frac32kT.
$$

所以

$$
\boxed{\langle E\rangle=E_C+\frac32kT.}
$$


### (3)

由 $N_D=N_C e^{(E_F-E_C)/(kT)}$，取对数得

$$
\boxed{E_F=E_C+kT\ln\frac{N_D}{N_C}.}
$$

### (4)

令 $q=\frac12e^{(E_D-E_F)/(kT)}\ll1$，则 $n=N_Dq/(1+q)\simeq N_Dq$。与 (1) 联立：

$$
N_C e^{(E_F-E_C)/(kT)}\simeq\frac{N_D}2e^{(E_D-E_F)/(kT)}.
$$

因此

$$
\boxed{E_F\simeq\frac{E_C+E_D}{2}+\frac{kT}{2}\ln\frac{N_D}{2N_C},\qquad
n\simeq\sqrt{\frac{N_CN_D}{2}}e^{-(E_C-E_D)/(2kT)}.}
$$
