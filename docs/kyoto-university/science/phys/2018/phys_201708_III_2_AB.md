---
sidebar_label: "2017年8月実施 III-2-AB（量子力学・実験）"
tags:
  - Kyoto-University
  - Physics.Quantum-Mechanics.Partial-Wave-Scattering
  - Physics.Electromagnetism.Cherenkov-Radiation
  - Physics.Mechanics.Lorentz-Transformation-and-Relativistic-Energy
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2017年8月実施 問題III-2-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### III-2A（量子力学）

固定された剛体球ポテンシャル

$$
V(r)=\begin{cases}\infty&(r<a)\\0&(r\ge a)\end{cases}\tag{A}
$$

による質量 $\mu$ の粒子の散乱を考える。散乱状態を定常状態として扱う。ここで、動径座標を $r=|\vec r|$、光速を $c$、プランク定数を $2\pi$ で割ったものを $\hbar$ とする。

(1) エネルギー $E$ で時刻 $t$ の波動関数を

$$
\psi(\vec r,t)=\varphi(\vec r)\exp\left(-\frac{iEt}{\hbar}\right)\tag{B}
$$

と表したとき、シュレディンガー方程式から $\varphi(\vec r)$ の満たす式を書き下せ。

(2) $s$-波（軌道角運動量量子数 $\ell=0$）の解を

$$
\varphi(\vec r)=\frac{\chi_0(r)}r\tag{C}
$$

とおいて求めよ。ただし、規格化定数は問わない。

(3) $s$-波の全散乱断面積を求めよ。また、エネルギー $E$ を固定して半径 $a$ を変えたとき、$s$-波の全散乱断面積の最大と最小の値を導け。ここで、$z$ 軸の負の方向から波数 $k=\sqrt{2\mu E/\hbar^2}$ の平面波が入射している場合、$z$ 軸を軸とする極座標を $(r,\theta,\phi)$ として、無限遠方での境界条件は

$$
\varphi(\vec r)=e^{ikz}+f(\theta,\phi)\frac{e^{ikr}}r,\qquad(r\to\infty)\tag{D}
$$

という形をとり、全散乱断面積は、

$$
\sigma_{\mathrm{tot}}=\int|f(\theta,\phi)|^2\sin\theta\,d\theta\,d\phi\tag{E}
$$

であることを用いてよい。また、平面波の球面波展開

$$
e^{ikz}=\sum_{\ell=0}^{\infty}i^\ell(2\ell+1)j_\ell(kr)P_\ell(\cos\theta)\tag{F}
$$

を用いてよい。ここで、$P_\ell(x)$ はルジャンドル多項式、$j_\ell(x)$ は球ベッセル関数、$j_0(kr)=\sin(kr)/(kr)$ である。

### III-2B（実験）

物質中を荷電粒子が通過する際に光子を放出する現象（チェレンコフ放射）について考える。図に示すように、真空中を運動する荷電粒子が、屈折率 $n$（$n>1$）を持つ物質に入射した直後に起こるチェレンコフ放射について考える。荷電粒子の速さ $v$ は光速 $c$ に近いものとし、特殊相対論的効果を考慮に入れて以下の問いに答えよ。

![物質に入射した荷電粒子によるチェレンコフ放射（原題図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2018/201708-III-2B-fig.png)

(1) 物質入射前の荷電粒子について、その運動量の大きさ $p$ を、荷電粒子のエネルギー $E$ および速さ $v$ で表せ。

(2) 放出された光子について、そのエネルギーを $E_\gamma$ とすると、運動量の大きさはいくらか。

(3) 荷電粒子あるいは荷電粒子と光子の系について、物質への入射前後でエネルギーおよび運動量が保存するとして、入射方向に対して物質内で光子が放出された角度 $\theta$ の余弦を $E$ および $E_\gamma$ を用いて表せ。荷電粒子については物質中の速さの変化は無視できるとする。

(4) 小問 (3) の条件が成り立つとして、光子が放出されるための $v$ の条件を求めよ。

### 题目描述

**III-2A（量子力学）**

考虑质量为 $\mu$ 的粒子受到固定硬球势

$$
V(r)=\begin{cases}\infty&(r<a)\\0&(r\ge a)\end{cases}\tag{A}
$$

的散射，将散射态作为定态处理。径向坐标为 $r=|\vec r|$，光速为 $c$，普朗克常数除以 $2\pi$ 为 $\hbar$。

(1) 将能量为 $E$、时刻为 $t$ 的波函数表示为

$$
\psi(\vec r,t)=\varphi(\vec r)\exp\left(-\frac{iEt}{\hbar}\right),\tag{B}
$$

从 Schrödinger 方程写出 $\varphi(\vec r)$ 满足的方程。

(2) 令

$$
\varphi(\vec r)=\frac{\chi_0(r)}r,\tag{C}
$$

求 $s$ 波（轨道角动量量子数 $\ell=0$）的解，不要求归一化常数。

(3) 求 $s$ 波的总散射截面。并在固定能量 $E$、改变半径 $a$ 时，导出 $s$ 波总散射截面的最大值和最小值。可以使用以下事实：波数为 $k=\sqrt{2\mu E/\hbar^2}$ 的平面波从 $z$ 轴负方向入射时，取以 $z$ 轴为极轴的极坐标 $(r,\theta,\phi)$，无穷远边界条件为

$$
\varphi(\vec r)=e^{ikz}+f(\theta,\phi)\frac{e^{ikr}}r,\qquad(r\to\infty),\tag{D}
$$

总散射截面为

$$
\sigma_{\mathrm{tot}}=\int|f(\theta,\phi)|^2\sin\theta\,d\theta\,d\phi.\tag{E}
$$

还可以使用平面波的球面波展开

$$
e^{ikz}=\sum_{\ell=0}^{\infty}i^\ell(2\ell+1)j_\ell(kr)P_\ell(\cos\theta),\tag{F}
$$

其中 $P_\ell(x)$ 是 Legendre 多项式，$j_\ell(x)$ 是球 Bessel 函数，$j_0(kr)=\sin(kr)/(kr)$。

**III-2B（实验）**

考虑带电粒子通过物质时发射光子的现象（切伦科夫辐射）。如上图，研究在真空中运动的带电粒子入射折射率为 $n$（$n>1$）的物质后立即发生的切伦科夫辐射。带电粒子的速率 $v$ 接近光速 $c$，考虑狭义相对论效应，回答以下问题。

(1) 对进入物质前的带电粒子，用其能量 $E$ 和速率 $v$ 表示动量的大小 $p$。

(2) 设发射光子的能量为 $E_\gamma$，其动量的大小是多少？

(3) 对带电粒子或带电粒子与光子的系统，假设进入物质前后能量和动量守恒。用 $E$ 和 $E_\gamma$ 表示光子在物质内相对于入射方向的发射角 $\theta$ 的余弦。对于带电粒子，忽略在物质中的速率变化。

(4) 假设第 (3) 问的条件成立，求能够发射光子的速率 $v$ 应满足的条件。

## **Kai**

### III-2A

#### (1)

$$
\boxed{\left[-\frac{\hbar^2}{2\mu}\nabla^2+V(r)\right]\varphi=E\varphi.}
$$

#### (2)

$r>a$ では $\nabla^2(\chi_0/r)=\chi_0''/r$ だから

$$
\chi_0''+k^2\chi_0=0,\qquad \chi_0(a)=0.
$$

よって

$$
\boxed{\varphi(r)=C\frac{\sin[k(r-a)]}{r}\quad(r\ge a),\qquad
\varphi(r)=0\quad(r<a).}
$$

位相のずれは $\delta_0=-ka\pmod\pi$ である。

#### (3)

$s$ 波成分の遠方形は

$$
\frac{\sin kr}{kr}+f_0\frac{e^{ikr}}r.
$$

硬球境界で零になる条件から

$$
f_0=-\frac{e^{-ika}\sin ka}{k}
=\frac{e^{-2ika}-1}{2ik}.
$$

したがって

$$
\boxed{\sigma_0=4\pi|f_0|^2=\frac{4\pi}{k^2}\sin^2ka.}
$$

$E$ 固定なら $k$ 固定なので

$$
\boxed{\begin{aligned}
\sigma_{0,\max}&=\frac{4\pi}{k^2}\quad(ka=(n+1/2)\pi),\\
\sigma_{0,\min}&=0\quad(ka=n\pi).
\end{aligned}}
$$

これは $s$ 波の寄与である。全部分波を足した硬球の全断面積とは区別する。

### III-2B

#### (1)

静止質量を $m$ とすると $E=\gamma mc^2$、$p=\gamma mv$ だから

$$
\boxed{p=\frac{Ev}{c^2}.}
$$

#### (2)

媒質中の波数は $k_\gamma=n\omega_\gamma/c$。波の運動量 $p_\gamma=\hbar k_\gamma$、$E_\gamma=\hbar\omega_\gamma$ を用いれば

$$
\boxed{p_\gamma=\frac{nE_\gamma}{c}.}
$$

ここでは題意の位相整合に対応する媒質中の正準運動量を用いている。

#### (3)

放射後の粒子のエネルギー・運動量を $E',\mathbf p'$ とする。保存則は

$$
E'=E-E_\gamma,\qquad \mathbf p'=\mathbf p-\mathbf p_\gamma.
$$

粒子の同じ静止質量を用いた $E^2-p^2c^2=E'^2-p'^2c^2=m^2c^4$ から

$$
p'^2-p^2=\frac{-2EE_\gamma+E_\gamma^2}{c^2}
=p_\gamma^2-2pp_\gamma\cos\theta.
$$

(1)、(2) を代入すると

$$
\boxed{\cos\theta=\frac{c}{nv}\left[1+\frac{(n^2-1)E_\gamma}{2E}\right].}
$$

光子のエネルギーが粒子エネルギーに比べ十分小さいとき、通常の $\cos\theta\simeq c/(nv)$ を得る。

#### (4)

$E_\gamma>0$ かつ $\cos\theta\le1$ が必要なので、与えられた光子エネルギーに対して

$$
v\ge\frac cn\left[1+\frac{(n^2-1)E_\gamma}{2E}\right].
$$

ある正のエネルギーの光子が放出可能となる速度の閾値は

$$
\boxed{v>\frac cn.}
$$

等号では許される光子エネルギーが零になり、有限エネルギーの放射は起こらない。

## **Reference**

- [京都大学公式問題（2018年度、PDF 4–5ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H30-III.pdf)
