---
sidebar_label: '2023年8月実施 物理学 第2問'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Electric-Potential-and-Field
  - Physics.Electromagnetism.Dielectrics-and-Boundary-Conditions
  - Physics.Electromagnetism.Method-of-Images
  - Physics.Mechanics.Simple-Harmonic-Motion
---

# 東京大学 工学系研究科 2023年8月実施 物理学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

以下の I、II に答えよ。

### I

真空中に、次の二つの電荷分布を別々に考える。電荷密度はどちらも一定の $\rho>0$、真空の誘電率は $\varepsilon_0$ とする。

- 図 2.1：半径 $a$ の球の内部に電荷が一様に分布している。中心からの距離を $r$ とし、中心の電位を $V=0$ とする。
- 図 2.2：$-a<x<a$、$-\infty<y,z<\infty$ の領域に電荷が一様に分布している。$x=0$ の電位を $V=0$ とする。

![一様に帯電した球と無限平板領域](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2024/kyotsu_202308_phys_2_distributions_audited.svg)

1. 図 2.1 の電位 $V$ を $r$ の関数として求め、図示せよ。
2. 図 2.2 の電位 $V$ を $x$ の関数として求め、図示せよ。

次に、質量 $m$、電荷 $-q\ (q>0)$ の点電荷 P を初速度なしで置く。P の存在・運動によって、もとの電荷分布は変化しないものとする。

3. 図 2.1 で、$0<r<a$ の点 $r_0$ に P を置いた後の運動方程式を求め、それを解いて運動を記述せよ。
4. 図 2.2 で、$-a<x<a$ の点 $x_0\ne0$ に P を置いた後の運動方程式を求め、それを解いて運動を記述せよ。

### II

誘電率 $\varepsilon_1$ の誘電体 1 が $z\le0$（領域 I）、誘電率 $\varepsilon_2$ の誘電体 2 が $z>0$（領域 II）を占め、両者は $xy$ 平面で接している。電荷 $q$ の点電荷が P$(0,0,a)$、$a>0$ にある。真空の誘電率を $\varepsilon_0$、無限遠の電位を零とする。

電気映像法を用いるため、図 2.4 では全空間を誘電体 1 で満たし P に電荷 $q'$ を置く。図 2.5 では全空間を誘電体 2 で満たし、P の電荷 $q$ に加え、Q$(0,0,-a)$ に電荷 $q''$ を置く。

![誘電体界面と二つの等価電荷配置](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2024/kyotsu_202308_phys_2_images_audited.svg)

1. 図 2.4 の点 $(x,y,z)$ における電位 $\phi_1(x,y,z)$ を求めよ。
2. 図 2.5 の点 $(x,y,z)$ における電位 $\phi_2(x,y,z)$ を求めよ。
3. 実際の領域 I、II の電位をそれぞれ $\phi_1,\phi_2$ で表す。界面の境界条件を満たす $q',q''$ を $\varepsilon_1,\varepsilon_2,q$ で表せ。
4. P の点電荷に働く力の大きさを求めよ。
5. $\varepsilon_2<\varepsilon_1$ のとき、その力の向きを答えよ。
6. 境界面上の分極電荷面密度 $\sigma(x,y)$ を求めよ。
7. 境界面上の総分極電荷量 $\Sigma$ を求めよ。

#### 题目描述

I. 在真空中分别考虑图 2.1 的均匀带电实心球与图 2.2 的均匀带电无限平板区域。两者的体电荷密度都是 $\rho>0$，真空介电常数为 $\varepsilon_0$。球的半径为 $a$，以球心为电势零点，距球心距离记为 $r$；平板区域为 $-a<x<a$、$y,z$ 任意，以 $x=0$ 为电势零点。

1. 求球的电势 $V(r)$ 并画图。
2. 求平板区域的电势 $V(x)$ 并画图。
3. 将质量 $m$、电荷 $-q\ (q>0)$ 的点电荷 P 在球内 $0<r_0<a$ 处从静止释放。列出并求解运动方程，描述其运动。
4. 将同样的点电荷在平板内 $-a<x_0<a$、$x_0\ne0$ 处从静止释放。列出并求解运动方程，描述其运动。

P 的存在和运动均不改变原来的电荷分布。

II. 介电常数为 $\varepsilon_1$ 的介质 1 占据 $z\le0$（区域 I），介电常数为 $\varepsilon_2$ 的介质 2 占据 $z>0$（区域 II），两者以 $xy$ 平面为界。电荷 $q$ 放在 P$(0,0,a)$、$a>0$，无穷远电势为零，真空介电常数为 $\varepsilon_0$。

图 2.4 以充满全空间的介质 1 和位于 P 的电荷 $q'$ 构造等效问题；图 2.5 以充满全空间的介质 2、位于 P 的电荷 $q$ 与位于 Q$(0,0,-a)$ 的电荷 $q''$ 构造等效问题。

1. 求图 2.4 中任意点的电势 $\phi_1(x,y,z)$。
2. 求图 2.5 中任意点的电势 $\phi_2(x,y,z)$。
3. 实际区域 I、II 的电势分别由 $\phi_1,\phi_2$ 表示。利用界面边界条件，求 $q',q''$。
4. 求 P 处电荷所受力的大小。
5. 若 $\varepsilon_2<\varepsilon_1$，指出力的方向。
6. 求界面上的总束缚电荷面密度 $\sigma(x,y)$。
7. 求界面上的束缚电荷总量 $\Sigma$。

## **Kai**

### I

#### I.1

ガウスの法則より、外向き電場は

$$
E_r(r)=\begin{cases}
\dfrac{\rho r}{3\varepsilon_0},&0\le r\le a,\\
\dfrac{\rho a^3}{3\varepsilon_0r^2},&r>a.
\end{cases}
$$

$V(r)=-\int_0^rE_r(s)\,ds$ から

$$
\boxed{V(r)=\begin{cases}
-\dfrac{\rho r^2}{6\varepsilon_0},&0\le r\le a,\\
\dfrac{\rho a^3}{3\varepsilon_0r}-\dfrac{\rho a^2}{2\varepsilon_0},&r>a.
\end{cases}}
$$

$V(0)=0$ から単調減少し、$V(a)=-\rho a^2/(6\varepsilon_0)$ を経て、$r\to\infty$ で $-\rho a^2/(2\varepsilon_0)$ に近づく。

#### I.2

平面対称性とガウスの法則から

$$
E_x(x)=\begin{cases}
\dfrac{\rho x}{\varepsilon_0},&|x|\le a,\\
\dfrac{\rho a}{\varepsilon_0}\operatorname{sgn}x,&|x|>a.
\end{cases}
$$

したがって

$$
\boxed{V(x)=\begin{cases}
-\dfrac{\rho x^2}{2\varepsilon_0},&|x|\le a,\\
-\dfrac{\rho a}{\varepsilon_0}|x|+\dfrac{\rho a^2}{2\varepsilon_0},&|x|>a.
\end{cases}}
$$

偶関数であり、内部は放物線、外部は接線につながる直線となる。

![球と無限平板領域の電位のグラフ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2024/kyotsu_202308_phys_2_potentials_audited.svg)

#### I.3

初期位置ベクトルを $\boldsymbol r_0$ とする。球内では

$$
m\ddot{\boldsymbol r}=-\frac{q\rho}{3\varepsilon_0}\boldsymbol r,
\qquad
\boxed{\boldsymbol r(t)=\boldsymbol r_0\cos\left(\sqrt{\frac{q\rho}{3m\varepsilon_0}}\,t\right)}.
$$

初期位置と球心を結ぶ直線上で、振幅 $r_0$、周期 $2\pi\sqrt{3m\varepsilon_0/(q\rho)}$ の単振動をする。距離 $r(t)$ はこのベクトルの絶対値である。

#### I.4

$$
m\ddot x=-\frac{q\rho}{\varepsilon_0}x,
\qquad
\boxed{x(t)=x_0\cos\left(\sqrt{\frac{q\rho}{m\varepsilon_0}}\,t\right)}.
$$

$y,z$ は一定で、$x=0$ を中心に振幅 $|x_0|$、周期 $2\pi\sqrt{m\varepsilon_0/(q\rho)}$ の単振動をする。

### II

#### II.1・II.2

$R_P=\sqrt{x^2+y^2+(z-a)^2}$、$R_Q=\sqrt{x^2+y^2+(z+a)^2}$ と置くと、

$$
\boxed{\phi_1=\frac{q'}{4\pi\varepsilon_1R_P}},
\qquad
\boxed{\phi_2=\frac1{4\pi\varepsilon_2}\left(\frac q{R_P}+\frac{q''}{R_Q}\right)}.
$$

#### II.3

自由表面電荷がないので、$z=0$ で電位と $D_z$ が連続する。よって

$$
\frac{q'}{\varepsilon_1}=\frac{q+q''}{\varepsilon_2},
\qquad q'=q-q''.
$$

これらを解いて

$$
\boxed{q'=\frac{2\varepsilon_1q}{\varepsilon_1+\varepsilon_2}},
\qquad
\boxed{q''=\frac{\varepsilon_2-\varepsilon_1}{\varepsilon_1+\varepsilon_2}q}.
$$

#### II.4・II.5

自己電場を除くと、P に働く力は映像電荷 $q''$ から受ける力に等しい。

$$
\boldsymbol F=\frac{qq''}{16\pi\varepsilon_2a^2}\boldsymbol e_z,
\qquad
\boxed{|\boldsymbol F|=\frac{q^2|\varepsilon_2-\varepsilon_1|}
{16\pi\varepsilon_2(\varepsilon_1+\varepsilon_2)a^2}}.
$$

$\varepsilon_2<\varepsilon_1$ では $\boxed{-z\text{ 方向（界面へ向かう方向）}}$ である。

#### II.6

$s=\sqrt{x^2+y^2+a^2}$ と置く。界面直下・直上では

$$
E_{1z}=-\frac{qa}{2\pi(\varepsilon_1+\varepsilon_2)s^3},
\qquad
E_{2z}=-\frac{\varepsilon_1qa}{2\pi\varepsilon_2(\varepsilon_1+\varepsilon_2)s^3}.
$$

各媒質の分極は $\boldsymbol P_i=(\varepsilon_i-\varepsilon_0)\boldsymbol E_i$ である。両側の表面分極電荷を足すと

$$
\sigma=P_{1z}-P_{2z}=\varepsilon_0(E_{2z}-E_{1z}).
$$

したがって

$$
\boxed{\sigma(x,y)=\frac{\varepsilon_0qa(\varepsilon_2-\varepsilon_1)}
{2\pi\varepsilon_2(\varepsilon_1+\varepsilon_2)(x^2+y^2+a^2)^{3/2}}}.
$$

#### II.7

界面内で極座標 $s_\parallel=\sqrt{x^2+y^2}$ を用いれば、

$$
\int_0^\infty\frac{2\pi s_\parallel\,ds_\parallel}{(s_\parallel^2+a^2)^{3/2}}=\frac{2\pi}{a}.
$$

ゆえに

$$
\boxed{\Sigma=\iint\sigma\,dx\,dy
=\frac{\varepsilon_0(\varepsilon_2-\varepsilon_1)}
{\varepsilon_2(\varepsilon_1+\varepsilon_2)}q}.
$$

