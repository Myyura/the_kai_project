---
sidebar_label: "2018年度 I-3-AB（物理数学・統計熱力学）"
tags:
  - Kyoto-University
  - Mathematics.Fourier-Analysis.Parseval-Identity
  - Mathematics.Fourier-Analysis.Fourier-Transform
  - Physics.Thermodynamics.Fermi-Dirac-Grand-Canonical-Distribution
  - Physics.Thermodynamics.Photon-Gas-and-Stefan-Boltzmann-Law
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2018年度 問題I-3-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### I-3A（物理数学）

有限個以下の不連続点を持つ絶対積分可能な関数について、フーリエ変換と逆変換を

$$
\widetilde f(k)=\int_{-\infty}^{\infty}f(x)e^{-ikx}\,dx,\qquad
f(x)=\frac1{2\pi}\int_{-\infty}^{\infty}\widetilde f(k)e^{ikx}\,dk
$$

とする。

1. $\int_{-\infty}^{\infty}|f(x)|^2dx$ を $\widetilde f$ を用いた一重積分で表せ。$\delta(x)=(2\pi)^{-1}\int e^{ikx}dk$ を用いてよい。
2. $T>0$ とし、$f_1(x)=1$（$|x|\le T$）、$f_1(x)=0$（$|x|>T$）をフーリエ変換せよ。
3. $\int_{-\infty}^{\infty}\sin^2k/k^2\,dk$ を求めよ。

### I-3B（統計熱力学）

三次元の光子気体は化学ポテンシャル零のボース分布に従う。高温では純粋な光子気体から電子・陽電子対の生成 $\gamma\rightleftarrows e^++e^-$ が可能になる。これらを温度 $T$ の熱平衡にある理想気体として扱う。電子の質量は $m$、運動量の大きさは $p$、エネルギーは $\varepsilon_p=c\sqrt{p^2+m^2c^2}$、ボルツマン定数は $k_B$、プランク定数を $2\pi$ で割ったものは $\hbar$ とする。

1. 温度 $T$、化学ポテンシャル $\mu_-$ の電子数密度

   $$
   n_-=\frac2{(2\pi\hbar)^3}\int_0^\infty\frac{4\pi p^2dp}{\boxed{\text{ア}}}
   $$

   の空欄を $p$ の関数で表せ。
2. この熱平衡にある電子と陽電子の化学ポテンシャルを求めよ。
3. $k_BT\gg mc^2$ のとき、電子数密度は $T$ の何乗に比例するか。
4. 同じ高温極限で、全気体のエネルギー密度を求めよ。$\int_0^\infty x^3/(e^x+1)\,dx=7\pi^4/120$、$\int_0^\infty x^3/(e^x-1)\,dx=\pi^4/15$ を用いてよい。

#### 题目描述

**I-3A：** 傅里叶变换与逆变换按上式约定。(1) 将 $\int|f|^2dx$ 用频域单积分表示；(2) 求宽度为 $2T$、高度为 $1$ 的矩形函数的变换；(3) 求全实轴上的 $\sin^2k/k^2$ 积分。可使用题给的狄拉克函数表达式。

**I-3B：** 三维纯光子气体的化学势为零，高温时可产生电子、正电子对。三种粒子作为温度 $T$ 下的平衡理想气体处理，电子能量为 $c\sqrt{p^2+m^2c^2}$。(1) 写出电子数密度积分中费米分布的分母；(2) 求电子与正电子的化学势；(3) 在 $k_BT\gg mc^2$ 时求数密度的温度幂次；(4) 利用题给的两项积分，求光子、电子和正电子合计的能量密度。

## **Kai**

### I-3A

#### (1)

$\int f(x)f(x)^*dx$ に逆変換を代入し、$\int e^{i(k-k')x}dx=2\pi\delta(k-k')$ を用いると

$$
\boxed{\int_{-\infty}^{\infty}|f(x)|^2dx
=\frac1{2\pi}\int_{-\infty}^{\infty}|\widetilde f(k)|^2dk.}
$$

有限値の等式としては $f\in L^2$ を仮定する。絶対可積分性だけでは二乗積分の有限性までは保証されない。

#### (2)

$$
\boxed{\widetilde f_1(k)=\int_{-T}^{T}e^{-ikx}dx=\frac{2\sin kT}{k},\qquad \widetilde f_1(0)=2T.}
$$

#### (3)

$T=1$ とし (1) を用いれば

$$
2=\frac1{2\pi}\int_{-\infty}^{\infty}\frac{4\sin^2k}{k^2}dk,\qquad
\boxed{\int_{-\infty}^{\infty}\frac{\sin^2k}{k^2}dk=\pi.}
$$

### I-3B

#### (1)

電子はフェルミ粒子なので

$$
\boxed{\text{ア}=\exp\!\left[\frac{c\sqrt{p^2+m^2c^2}-\mu_-}{k_BT}\right]+1.}
$$

#### (2)

反応平衡から $\mu_-+\mu_+=\mu_\gamma=0$。純光子から対生成されるため全電荷は零であり、$n_-=n_+$。電子と陽電子は同じ質量・状態密度を持ち、数密度は化学ポテンシャルの単調増加関数なので $\mu_- =\mu_+$。したがって

$$
\boxed{\mu_- =\mu_+=0.}
$$

#### (3)

$\varepsilon_p\simeq cp$ とし $x=cp/(k_BT)$ に変数変換すると

$$
n_-=\frac{(k_BT)^3}{\pi^2\hbar^3c^3}\int_0^\infty\frac{x^2}{e^x+1}dx,\qquad
\boxed{n_-\propto T^3.}
$$

#### (4)

電子・陽電子はそれぞれスピン縮退度 $2$、光子は偏光自由度 $2$ を持つ。したがって

$$
u_{e^-}=u_{e^+}=\frac{7\pi^2}{120}\frac{(k_BT)^4}{\hbar^3c^3},\qquad
u_\gamma=\frac{\pi^2}{15}\frac{(k_BT)^4}{\hbar^3c^3}.
$$

よって全エネルギー密度は

$$
\boxed{u_{\rm tot}=\frac{11\pi^2}{60}\frac{(k_BT)^4}{\hbar^3c^3}.}
$$

## **Reference**

- [京都大学公式問題（2018年度、PDF 6–7ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H30-I.pdf)
