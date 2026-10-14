---
sidebar_label: "2018年度 III-2-AB（量子力学・実験）"
tags:
  - Kyoto-University
  - Physics.Quantum-Mechanics.Partial-Wave-Scattering
  - Physics.Electromagnetism.Cherenkov-Radiation
  - Physics.Mechanics.Lorentz-Transformation-and-Relativistic-Energy
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2018年度 問題III-2-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### III-2A（量子力学）

質量 $\mu$ の粒子が固定された剛体球ポテンシャル

$$
V(r)=\begin{cases}\infty&r<a,\\0&r\ge a\end{cases}
$$

で散乱される定常状態を考える。$r=|\mathbf r|$、プランク定数を $2\pi$ で割ったものを $\hbar$ とする。

1. $\psi(\mathbf r,t)=\varphi(\mathbf r)e^{-iEt/\hbar}$ を代入し、$\varphi$ が満たすシュレディンガー方程式を書け。
2. $s$ 波（$\ell=0$）について $\varphi(\mathbf r)=\chi_0(r)/r$ とおき解を求めよ。規格化定数は問わない。
3. $s$ 波の全散乱断面積を求め、$E$ を固定して $a$ を変えたときの最大値・最小値を求めよ。$k=\sqrt{2\mu E}/\hbar$ とし、$-z$ 側から入射する平面波の遠方条件

   $$
   \varphi=e^{ikz}+f(\theta,\phi)\frac{e^{ikr}}r,\qquad
   \sigma_{\rm tot}=\int|f|^2\sin\theta\,d\theta d\phi
   $$

   および $e^{ikz}=\sum_{\ell=0}^\infty i^\ell(2\ell+1)j_\ell(kr)P_\ell(\cos\theta)$ を用いてよい。ここで $j_0(kr)=\sin(kr)/(kr)$、$P_\ell$ はルジャンドル多項式である。

### III-2B（実験）

真空中を光速 $c$ に近い速さ $v$ で進む荷電粒子が、屈折率 $n>1$ の物質に入射した直後に光子を放つチェレンコフ放射を考える。入射方向と物質内の光子の進行方向の角度を $\theta$ とする。相対論的効果を考慮せよ。

1. 入射前の粒子の運動量の大きさ $p$ を、エネルギー $E$ と速さ $v$ で表せ。
2. 物質内に放出された光子のエネルギーを $E_\gamma$ とすると、その運動量の大きさはいくらか。
3. 入射前後で粒子・光子系のエネルギーと運動量が保存するとして、$\cos\theta$ を $E,E_\gamma$ を用いて表せ。粒子の物質中での速さの変化は無視できるものとする。
4. (3) の条件下で、光子を放出できる $v$ の条件を求めよ。

#### 题目描述

**III-2A：** 质量 $\mu$ 的粒子被半径 $a$ 的无限硬球势散射，球内势能无限大、球外零。(1) 分离时间因子写定态方程；(2) 以 $\varphi=\chi_0(r)/r$ 求 $s$ 波解；(3) 利用题给的远场散射振幅定义与平面波展开，求 $s$ 波总截面及在固定能量、改变半径时的最大最小值。

**III-2B：** 相对论性荷电粒子从真空以速度 $v$ 入射折射率 $n>1$ 的介质，并在介质中发射与入射方向成角 $\theta$ 的光子。(1) 用入射总能量 $E$ 和速度 $v$ 表示粒子动量；(2) 求能量为 $E_\gamma$ 的介质光子动量；(3) 根据总能量、动量守恒求 $\cos\theta$，忽略入射介质引起的粒子速度改变；(4) 求可发生辐射的速度条件。

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
\boxed{\sigma_{0,\max}=\frac{4\pi}{k^2}\quad(ka=(n+1/2)\pi),\qquad
\sigma_{0,\min}=0\quad(ka=n\pi).}
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
