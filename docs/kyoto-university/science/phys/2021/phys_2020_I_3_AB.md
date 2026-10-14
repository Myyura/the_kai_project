---
sidebar_label: "2021年度 I-3-AB（力学・量子力学）"
tags:
  - Kyoto-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Quantum-Mechanics.One-Dimensional-Infinite-Square-Well
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2021年度 I-3-AB

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I-3A（力学）

長さ $\ell$ の糸に質量 $m$ のおもりを吊るす。重力加速度を $g$、鉛直下方からの角度を $\theta$ とする。

1. ラグランジアンを示せ。
2. $|\theta|\ll1$ として、ラグランジュ方程式から単振動の運動方程式を導け。

### I-3B（量子力学）

質量 $m$ の粒子を一次元無限深井戸 $V(x)=0$（$0<x<a$）、$V(x)=+\infty$（領域外）に閉じ込める。内部では

$$
-\frac{\hbar^2}{2m}\phi''(x)=E\phi(x).
$$

1. 方程式を解き、エネルギー準位を求めよ。
2. 波動関数を規格化せよ。

#### 题目描述

I-3A：质量 $m$ 的摆球系于长 $\ell$ 的无质量绳，重力加速度 $g$，偏离竖直向下的角为 $\theta$。写出拉格朗日量，并在小角近似下由拉格朗日方程导出简谐振动方程。

I-3B：质量 $m$ 的粒子位于 $0<x<a$ 的一维无限深势阱，阱内势能为零，阱外无穷大。解 $-\hbar^2\phi''/(2m)=E\phi$ 求能级，并归一化波函数。

## **Kai**

### I-3A

#### (1)

最下点を位置エネルギーの零点とすると

$$
\boxed{L=\frac12m\ell^2\dot\theta^2-mg\ell(1-\cos\theta).}
$$

#### (2)

オイラー–ラグランジュ方程式は
$m\ell^2\ddot\theta+mg\ell\sin\theta=0$。小角近似により

$$
\boxed{\ddot\theta+\frac g\ell\theta=0,\qquad\omega_0=\sqrt{g/\ell}.}
$$

### I-3B

#### (1)

$\phi=A\sin kx+B\cos kx$、$E=\hbar^2k^2/(2m)$。壁で $\phi(0)=\phi(a)=0$ より $B=0,\ ka=n\pi$。$n=0$ は零関数なので除く。

$$
\boxed{E_n=\frac{\pi^2\hbar^2n^2}{2ma^2},\quad n=1,2,\ldots.}
$$

#### (2)

$\int_0^a\sin^2(n\pi x/a)\,dx=a/2$ なので、全体位相を除き

$$
\boxed{\phi_n(x)=\sqrt{\frac2a}\sin\frac{n\pi x}{a}\quad(0<x<a),}
$$

領域外では $\phi_n=0$ である。

## **Reference**

- [京都大学公式問題（2021年度 I、PDF 6–7ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/R3-I.pdf)
