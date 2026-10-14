---
sidebar_label: "2016年度 III-3（統計力学）"
tags:
  - Kyoto-University
  - Physics.Thermodynamics.Bose-Einstein-Condensation
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2016年度 III-3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

相互作用しない質量 $m$ のボース粒子を三次元調和ポテンシャル
$$
V_{\rm ext}=\frac m2(\omega_x^2x^2+\omega_y^2y^2+\omega_z^2z^2)
$$
に閉じ込める。準位は $\epsilon_{\boldsymbol n}=\sum_{a=x,y,z}(n_a+1/2)\hbar\omega_a$、$n_a=0,1,2,\ldots$。温度 $T$、化学ポテンシャル $\mu$ で、$\beta=(k_BT)^{-1}$、$f(\epsilon)=[e^{\beta(\epsilon-\mu)}-1]^{-1}$、平均粒子数 $\mathcal N(T,\mu)=\sum_{\boldsymbol n}f(\epsilon_{\boldsymbol n})$ とする。

1. $f(\epsilon)=\sum_{\ell\ge1}e^{\ell\beta(\mu-\epsilon)}$ を用いて幾何級数和をとると
$$
\mathcal N(T,\mu)=\sum_{\ell=1}^\infty e^{\ell\beta(\mu-3\hbar\omega_m/2)}
h(\ell\beta\hbar\omega_x)h(\ell\beta\hbar\omega_y)h(\ell\beta\hbar\omega_z)
$$
となる。$\omega_m=(\omega_x+\omega_y+\omega_z)/3$ とし、$h$ を求めよ。

全粒子数 $N$ は十分大きく固定する。基底状態の占有数を $N_0$、励起粒子数を $N'$ とすると $N=N_0+N'$、
$$
N'=\sum_{\ell=1}^\infty e^{\ell\beta(\mu-3\hbar\omega_m/2)}
\left[\prod_{a=x,y,z}h(\ell\beta\hbar\omega_a)-1\right].
$$
2. $N_0$ を具体的に書き、$N_0\gg1$ のとき $\mu$ が近づく上限 $\mu_c$ を求めよ。

BEC の転移温度を $N=N'(T_c,\mu_c)$ で定義する。

3. $\beta\hbar\omega_a\ll1$ とし、角括弧内の最初の二項から
$$
N'=X\sum_{\ell=1}^\infty\widetilde z^\ell
\left(\frac1{\ell^3}+\frac Y{\ell^2}\right),\qquad
\widetilde z=e^{\beta(\mu-3\hbar\omega_m/2)}
$$
を得る。$\Omega=(\omega_x\omega_y\omega_z)^{1/3}$ とし、$X,Y$ を $T,\omega_m,\Omega$ で表せ。$h(x)\simeq[x(1-x/2)]^{-1}$ を用いてよい。
4. 第一項のみの近似で転移温度 $T_c^{(0)}$ と、$T\le T_c^{(0)}$ での $N_0/N$ を求めよ。$\zeta(s)=\sum_{\ell\ge1}\ell^{-s}$ を用いてよい。
5. $T_c=T_c^{(0)}+\Delta T_c$ とし、$Y$ と $\Delta T_c/T_c^{(0)}$ の一次までで転移温度の相対変化を求めよ。
6. $\omega_x=\omega_y=\omega_z/8$、$\Omega=10^3\,\mathrm{s^{-1}}$ とする。温度のずれを 1% に抑える粒子数とそのときの $T_c$ を有効数字 1 桁で求めよ。$\hbar=6.58\times10^{-16}\,\mathrm{eV\,s}$、$k_B=8.62\times10^{-5}\,\mathrm{eV\,K^{-1}}$ を用いよ。

| $s$ | 2 | 3 | 4 |
|---|---:|---:|---:|
| $\zeta(s)^{1/3}$ | 1.18 | 1.06 | 1.03 |
| $\zeta(s)^{2/3}$ | 1.39 | 1.13 | 1.05 |
| $\zeta(s)$ | 1.64 | 1.20 | 1.08 |

#### 题目描述

无相互作用玻色粒子被三维谐振势 $V=m\sum_a\omega_a^2x_a^2/2$ 束缚，能级 $\epsilon_{\boldsymbol n}=\sum_a(n_a+1/2)\hbar\omega_a$。取 $\beta=1/(k_BT)$、玻色分布 $f(\epsilon)=1/[e^{\beta(\epsilon-\mu)}-1]$。

1. 将分布展开为 $\sum_{\ell\ge1}e^{\ell\beta(\mu-\epsilon)}$，对各 $n_a$ 求和，粒子数写为 $\sum_\ell e^{\ell\beta(\mu-3\hbar\omega_m/2)}\prod_a h(\ell\beta\hbar\omega_a)$，求 $h$；$\omega_m=(\omega_x+\omega_y+\omega_z)/3$。

固定很大的总粒子数 $N$，分为基态粒子数 $N_0$ 和激发态 $N'$，后者由上述乘积减 1 得到。

2. 写出 $N_0$ 并求宏观占据时化学势趋近的上限 $\mu_c$。
3. 定义转变温度为 $N=N'(T_c,\mu_c)$。在 $\beta\hbar\omega_a\ll1$ 时展开前两项，写成 $N'=X\sum_\ell\widetilde z^\ell(\ell^{-3}+Y\ell^{-2})$，求 $X,Y$，其中 $\widetilde z=e^{\beta(\mu-3\hbar\omega_m/2)}$，$\Omega=(\omega_x\omega_y\omega_z)^{1/3}$。
4. 仅保留第一项求 $T_c^{(0)}$ 及其以下的凝聚占比，结果用黎曼 $\zeta$ 函数表示。
5. 保留第二项，一阶求 $\Delta T_c/T_c^{(0)}$。
6. 对 $\omega_x=\omega_y=\omega_z/8$、$\Omega=10^3\,\mathrm{s^{-1}}$，求温度偏移不超过 1% 所需粒子数及相应温度，保留一位有效数字。取 $\hbar=6.58\times10^{-16}\,\mathrm{eV\,s}$、$k_B=8.62\times10^{-5}\,\mathrm{eV/K}$；可用 $\zeta(2)=1.64$、$\zeta(3)=1.20$、$\zeta(3)^{1/3}=1.06$、$\zeta(3)^{2/3}=1.13$。

## **Kai**

### (1)
各方向について $\sum_{n=0}^\infty e^{-n x}=(1-e^{-x})^{-1}$ なので
$$
\boxed{h(x)=\frac1{1-e^{-x}}}.
$$
### (2)
$$
\boxed{N_0=\frac1{e^{\beta(3\hbar\omega_m/2-\mu)}-1},\qquad
\mu_c=\frac32\hbar\omega_m}.
$$
$\mu<\mu_c$ から上限に近づくと基底状態の占有数が大きくなる。
### (3)
$h(x)=x^{-1}+1/2+O(x)$ なので、積の最初の二項は
$$
\prod_ah(\ell\beta\hbar\omega_a)
=\frac1{(\ell\beta\hbar)^3\Omega^3}
+\frac{3\omega_m}{2(\ell\beta\hbar)^2\Omega^3}+\cdots.
$$
従って
$$
\boxed{X=\left(\frac{k_BT}{\hbar\Omega}\right)^3,
\qquad Y=\frac{3\hbar\omega_m}{2k_BT}}.
$$
### (4)
転移点では $\widetilde z=1$。$N=X\zeta(3)$ より
$$
\boxed{T_c^{(0)}=\frac{\hbar\Omega}{k_B}\left(\frac N{\zeta(3)}\right)^{1/3}}.
$$
凝縮相では $\mu\simeq\mu_c$、$N'/N=(T/T_c^{(0)})^3$ だから
$$
\boxed{\frac{N_0}{N}=1-\left(\frac T{T_c^{(0)}}\right)^3}
\qquad(0\le T\le T_c^{(0)}).
$$
### (5)
$\delta=\Delta T_c/T_c^{(0)}$、$Y_0=3\hbar\omega_m/(2k_BT_c^{(0)})$ とする。一次までで
$$
N=X_0[\zeta(3)(1+3\delta)+Y_0\zeta(2)]+O(Y_0^2).
$$
$Y_0\delta$ は二次なので除き、
$$
\boxed{\frac{\Delta T_c}{T_c^{(0)}}
=-\frac{\zeta(2)}{2\zeta(3)^{2/3}}\frac{\omega_m}{\Omega}N^{-1/3}}.
$$
有限粒子数の補正は転移温度を低下させる。
### (6)
$\omega_z=4\Omega$、$\omega_x=\omega_y=\Omega/2$ なので $\omega_m/\Omega=5/3$。従って
$$
N^{1/3}\ge\frac{1.64}{2\times1.13}\frac53\frac1{0.01}\simeq121,
\qquad N_{\min}\simeq1.77\times10^6.
$$
この閾値で
$$
T_c\simeq0.99\frac{6.58\times10^{-16}\times10^3}{8.62\times10^{-5}}
\frac{121}{1.06}\,\mathrm K\simeq8.6\times10^{-7}\,\mathrm K.
$$
有効数字 1 桁では
$$
\boxed{N\simeq2\times10^6,\qquad T_c\simeq9\times10^{-7}\,\mathrm K}.
$$

## **Reference**

- [京都大学公式問題（2016年度、PDF 20–22ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H28.pdf)
