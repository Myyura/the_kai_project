---
sidebar_label: 2016年8月実施 専門科目 問題6 物理専門1
tags:
  - Tohoku-University
  - Physics.Quantum-Mechanics.Quantum-State-Time-Evolution
  - Physics.Quantum-Mechanics.Quantum-Observable-Expectation-and-Variance
---

# 東北大学 工学研究科 電気・情報系 2016年8月実施 専門科目 問題6 物理専門1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

Fig. 6 のように，$x=0$ に対して対称で下に凸な $1$ 次元ポテンシャル $V(x)$ に束縛された電子の状態を考える。この電子のエネルギー固有値を，エネルギーの低いものから順に $E_n=\hbar\omega_n$（$n=0,1,2,\ldots$）とし，その各々に対応する固有状態の規格化された波動関数を $\psi_n(x)$ とする。各々の固有状態に縮退はなく，$\psi_n(x)$ は実関数で，$n$ が偶数（奇数）のとき偶関数（奇関数）である。以下の問に答えよ。ただし，$i$ を虚数単位，$m$ を電子の質量，$\hbar=h/(2\pi)$（$h$ はプランク定数）とする。必要に応じ，記号
$$
x_{nn'}=\int_{-\infty}^{\infty}\psi_n(x)x\psi_{n'}(x)\,dx
$$
を用いよ。

(1) 電子が固有状態 $\psi_n(x)$ にあるときの電子の位置 $\hat x$（$=x$）の期待値を $X_n$ とする。$X_n=0$ となることを示せ。

(2) 電子が波動関数
$$
\psi(x)=\frac1{\sqrt2}\{\psi_0(x)+\psi_1(x)\}
$$
で表される状態にあったとき，電子の位置 $\hat x$ の期待値 $X$ を求めよ。

(3) 時刻 $t=0$ における電子の波動関数が $\psi_n(x)$ であったとき，時刻 $t$ における波動関数 $\Psi_n(x,t)$ を，$\psi_n(x)$ および $\omega_n$ を用いて表せ。

(4) 時刻 $t=0$ における電子の波動関数が問 (2) の $\psi(x)$ であったとき，時刻 $t$ における電子の位置 $\hat x$ の期待値 $X(t)$ を求めよ。

(5) 問 (4) において，時刻 $t$ における電子の運動量 $\hat p$ の期待値 $P(t)$ を求め，
$$
P(t)=m\frac d{dt}X(t)
$$
となることを示せ。ここで，関係式
$$
\hat p=\frac{im}{\hbar}[\hat H,\hat x]=\frac{im}{\hbar}(\hat H\hat x-\hat x\hat H)
$$
を用いて良い。$\hat H$ は系のハミルトニアンである。

### 题目描述

一维对称、下凸的束缚势满足 $V(x)=V(-x)$。能量本征值为 $E_n=\hbar\omega_n$，按能量递增排序。归一化本征函数 $\psi_n(x)$ 实值且非简并；$n$ 为偶数时是偶函数，为奇数时是奇函数。定义

$$
x_{nn'}=\int_{-\infty}^{\infty}\psi_n(x)x\psi_{n'}(x)\,dx.
$$

1. 证明每一本征态的位置均值 $X_n=0$。
2. 求叠加态 $\psi=(\psi_0+\psi_1)/\sqrt2$ 的位置均值 $X$。
3. 初态为 $\psi_n$ 时，写出 $t$ 时刻的波函数 $\Psi_n(x,t)$。
4. 初态为 (2) 的叠加态时，求 $X(t)$。
5. 对 (4) 求动量均值 $P(t)$，并证明 $P(t)=m\,dX(t)/dt$。可用 $\hat p=(im/\hbar)[\hat H,\hat x]$。

## **Kai**

### (1)–(2)

无论 $\psi_n$ 的奇偶性如何，$\psi_n^2$ 均为偶函数，故 $x\psi_n^2$ 是奇函数，所以

$$
\boxed{X_n=x_{nn}=0.}
$$

又 $x_{01}=x_{10}$ 为实数，因此

$$
\boxed{X=\frac12(x_{00}+x_{01}+x_{10}+x_{11})=x_{01}.}
$$

### (3)–(4)

$$
\boxed{\Psi_n(x,t)=e^{-i\omega_nt}\psi_n(x).}
$$

对叠加态，令 $\Omega=\omega_1-\omega_0>0$，则

$$
\Psi(x,t)=\frac{e^{-i\omega_0t}\psi_0(x)+e^{-i\omega_1t}\psi_1(x)}{\sqrt2},
$$

从而

$$
\boxed{X(t)=x_{01}\cos(\Omega t).}
$$

### (5)

给定对易关系使

$$
p_{nn'}=\langle n|\hat p|n'\rangle=im(\omega_n-\omega_{n'})x_{nn'}.
$$

因此 $p_{00}=p_{11}=0,p_{01}=-im\Omega x_{01},p_{10}=im\Omega x_{01}$，代入叠加态得

$$
\boxed{P(t)=-m\Omega x_{01}\sin(\Omega t)=m\frac{dX(t)}{dt}.}
$$
