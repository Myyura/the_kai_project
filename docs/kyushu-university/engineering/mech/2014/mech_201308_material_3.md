---
sidebar_label: "2013年8月実施 問3（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2013年8月実施 材料力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図3の構造において，次の問に答えよ。（40点）

**1)** 点Aの変位を求めよ。

**2)** 点Bの変位を求めよ。

![原題の図3：半円弧丸棒と剛体AB](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_material-3-original.png)

図中，$E$ はヤング率，$\nu$ はポアソン比，$\phi d$ は直径 $d$ を表す。両端が固定された丸棒は半径 $a$ の半円弧をなし，その中央Aに長さ $\ell$ の剛体ABが接続されている。$a,\ell\gg d$ とし，点Bに下向き荷重 $P$ が作用する。座標の向きは図に示す。

### 题目描述

对于图3的结构，回答下列问题。（40分）

**1)** 求A点的位移。

**2)** 求B点的位移。

图中 $E$ 为杨氏模量，$\nu$ 为泊松比，$\phi d$ 表示直径 $d$。两端固定的圆杆构成半径为 $a$ 的半圆弧，在中点A连接长 $\ell$ 的刚体AB。$a,\ell\gg d$，B点承受向下载荷 $P$，坐标方向如图。

## **Kai**

$$
I=\frac{\pi d^4}{64},\qquad I_p=2I,\qquad
GI_p=\frac{EI}{1+\nu}.
$$

対称性により、A、B の一次の変位は鉛直方向だけである。以下、下向き変位を正とする。

### (1)

半円の中心を原点、A を $(a,0,0)$、B を $(a+\ell,0,0)$ とする。半円の片側、すなわち固定端 $(0,a,0)$ から A までの四分円を考える。A からこの片側に加わる荷重は下向き $p=P/2$、$+y$ 軸まわりのモーメント $T_0=P\ell/2$、および未知の $+x$ 軸まわりモーメント $m$ である。

断面位置を $(a\cos\theta,a\sin\theta,0)$、$0\leq\theta\leq\pi/2$ とする。荷重のモーメントを半径方向と接線方向に分解すると

$$
M=m\cos\theta+(T_0+pa)\sin\theta,
$$

$$
T=-m\sin\theta+T_0\cos\theta-pa(1-\cos\theta).
$$

片側に蓄えられるエネルギーは

$$
U=\frac{a}{2EI}\int_0^{\pi/2}
\{M^2+(1+\nu)T^2\}\,d\theta.
$$

対称面 A の $x$ 軸まわり回転は 0 なので、$\partial U/\partial m=0$。これより

$$
\frac{\pi(2+\nu)}4m-\frac\nu2T_0
+\frac{2+\nu}{2}pa=0,
$$

$$
m=\frac{2\nu T_0-2(2+\nu)pa}{\pi(2+\nu)}.
$$

簡潔に表すため

$$
\begin{aligned}
\mathcal A&=\frac{\pi(4+3\nu)}4-2(1+\nu)-\frac{2+\nu}{\pi},\\
\mathcal B&=\frac{\pi(2+\nu)}4-(1+\nu)+\frac\nu\pi,\\
\mathcal C&=\frac{\pi(2+\nu)}4-\frac{\nu^2}{\pi(2+\nu)}
\end{aligned}
$$

とおく。未知モーメントを消去したエネルギーは

$$
U_{\rm red}=\frac{a}{2EI}
\left(a^2\mathcal A p^2+2a\mathcal B pT_0+\mathcal C T_0^2\right).
$$

よって、$T_0$ を独立に保って $p$ で微分し、最後に実荷重を代入して

$$
\boxed{\begin{gathered}
\delta_A=\frac{\partial U_{\rm red}}{\partial p}
=\frac{Pa^2}{2EI}\left(a\mathcal A+\ell\mathcal B\right)\\
\text{（下向き）}
\end{gathered}}.
$$

### (2)

A の $+y$ 軸まわり回転は

$$
\phi_A=\frac{\partial U_{\rm red}}{\partial T_0}
=\frac{Pa}{2EI}\left(a\mathcal B+\ell\mathcal C\right).
$$

剛体棒 AB の回転による B の下向き変位は $\ell\phi_A$ だから

$$
\boxed{\begin{gathered}
\delta_B=\delta_A+\ell\phi_A
=\frac{Pa}{2EI}
\left(a^2\mathcal A+2a\ell\mathcal B+\ell^2\mathcal C\right)\\
\text{（下向き）}
\end{gathered}}.
$$

$x,y$ 方向の一次変位はいずれも 0 である。
