---
sidebar_label: '2011年8月実施 物理学 第4問'
tags:
  - Tokyo-University
  - Physics.Quantum-Mechanics.Wavefunction-Matching-at-Potential-Steps
---

# 東京大学 工学系研究科 2011年8月実施 物理学 第4問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I

質量 $m$、エネルギー $E$ の粒子が、階段状ポテンシャル

$$
V(x)=\begin{cases}0,&x<0\quad\text{（領域 1）},\\-V_0,&x\ge0\quad\text{（領域 2）}\end{cases}
\qquad(V_0>0)
$$

のもとで一次元運動し、領域 1 から入射する。$\hbar=h/(2\pi)$ とすると、波動関数は

$$
-\frac{\hbar^2}{2m}\psi_1''=E\psi_1,
\qquad
-\frac{\hbar^2}{2m}\psi_2''-V_0\psi_2=E\psi_2
$$

に従う。

![下向きのポテンシャル段差と有限幅の井戸](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2012/kyotsu_201108_phys_4_potentials_audited.svg)

1. 入射波を $e^{ik_1x}$、$k_1>0$ とする。領域 2 の波数を $k_2$ として、反射波・透過波を含む $\psi_1,\psi_2$ を $k_1,k_2$ で表せ。$k_1,k_2$ と $E$ の関係も示せ。
2. 反射率 $R$ と透過率 $T$ を求めよ。

### II

同じ粒子が井戸型ポテンシャル

$$
V(x)=\begin{cases}
0,&x<0\quad\text{（領域 1）},\\
-V_0,&0\le x\le a\quad\text{（領域 2）},\\
0,&x>a\quad\text{（領域 3）}
\end{cases}
\qquad(V_0>0,\ a>0)
$$

に領域 1 から入射し、入射波を $e^{ik_1x}$ とする。

1. 領域 1 から領域 3 への透過率を求めよ。
2. 透過率が最大となる粒子のエネルギーを求めよ。
3. 最大透過の粒子について、領域 1 の波数 $k_1$ を求め、井戸幅 $a$ と関係付けて物理的意味を説明せよ。

#### 题目描述

I. 质量为 $m$、能量为 $E$ 的粒子从左侧入射到向下的势阶：$x<0$（区域 1）中 $V=0$，$x\ge0$（区域 2）中 $V=-V_0$，$V_0>0$。令 $\hbar=h/(2\pi)$，波函数满足

$$
-\frac{\hbar^2}{2m}\psi_1''=E\psi_1,
\qquad
-\frac{\hbar^2}{2m}\psi_2''-V_0\psi_2=E\psi_2.
$$

1. 入射波为 $e^{ik_1x}$，$k_1>0$，区域 2 波数为 $k_2$。用 $k_1,k_2$ 写出包含反射和透射的波函数，并写出两波数与 $E$ 的关系。
2. 求反射率 $R$ 与透射率 $T$。

II. 粒子仍从左侧以 $e^{ik_1x}$ 入射。有限势阱在 $0\le x\le a$（区域 2）内为 $-V_0$，在 $x<0$（区域 1）和 $x>a$（区域 3）中均为零，$V_0,a>0$。

1. 求从区域 1 到区域 3 的透射率。
2. 求使透射率最大的入射能量。
3. 求完全透射时区域 1 的波数 $k_1$，结合阱宽 $a$ 解释其物理意义。

## **Kai**

### I

#### I.1

各領域の波数は

$$
\boxed{k_1=\frac{\sqrt{2mE}}{\hbar}},
\qquad
\boxed{k_2=\frac{\sqrt{2m(E+V_0)}}{\hbar}}.
$$

$\psi_1=e^{ik_1x}+r_0e^{-ik_1x}$、$\psi_2=t_0e^{ik_2x}$ と置く。$x=0$ で $\psi,\psi'$ を連続にすると

$$
1+r_0=t_0,
\qquad k_1(1-r_0)=k_2t_0.
$$

したがって

$$
\boxed{\psi_1=e^{ik_1x}+\frac{k_1-k_2}{k_1+k_2}e^{-ik_1x}},
\qquad
\boxed{\psi_2=\frac{2k_1}{k_1+k_2}e^{ik_2x}}.
$$

#### I.2

平面波 $Ae^{ikx}$ の確率流は $j=\hbar k|A|^2/m$ だから、

$$
\boxed{R=\left(\frac{k_1-k_2}{k_1+k_2}\right)^2},
\qquad
\boxed{T=\frac{k_2}{k_1}|t_0|^2=\frac{4k_1k_2}{(k_1+k_2)^2}}.
$$

$R+T=1$ である。

### II

#### II.1

波動関数を

$$
\psi_1=e^{ik_1x}+r_0e^{-ik_1x},
\qquad\psi_2=Ae^{ik_2x}+Be^{-ik_2x},
\qquad\psi_3=t_0e^{ik_1x}
$$

と置く。$x=0,a$ での四つの接続条件から

$$
t_0=\frac{e^{-ik_1a}}
{\cos(k_2a)-i\dfrac{k_1^2+k_2^2}{2k_1k_2}\sin(k_2a)}.
$$

入射・透過領域の波数が等しいので、

$$
\boxed{T=|t_0|^2
=\left[1+\frac{V_0^2}{4E(E+V_0)}\sin^2(k_2a)\right]^{-1}}.
$$

#### II.2

$\sin(k_2a)=0$ のとき最大値 $T=1$ となる。よって

$$
\boxed{E_N=\frac{\hbar^2\pi^2N^2}{2ma^2}-V_0},
\qquad N=1,2,\ldots,\quad E_N>0.
$$

#### II.3

対応する入射波数は

$$
\boxed{k_{1,N}=\sqrt{\left(\frac{N\pi}{a}\right)^2-\frac{2mV_0}{\hbar^2}}}.
$$

井戸内の波長を $\lambda_2=2\pi/k_2$ とすると、条件は $a=N\lambda_2/2$ である。井戸内の往復位相が $2N\pi$ となり、両境界からの反射波が打ち消し合う透過共鳴を表す。

