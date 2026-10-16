---
sidebar_label: "2017年8月実施 物理学 [I]"
tags:
  - Kyushu-University
  - Physics.Mechanics.Two-Body-Central-Force-and-Effective-Potential
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
---

# 九州大学 理学府 物理学専攻 2017年8月実施 入学試験 物理学 \[I\]

## **Author**

祭音Myyura (Based on [ばたぱら's answer](https://batapara.com/archives/kakomon-9d-h30.html/) refined with GPT 6 Astra)

## **Description**
### [I-A]

図1のように、質量 $m_1,m_2$ の2質点が位置 $\boldsymbol r_1,\boldsymbol r_2$ にある。質点間には距離に比例する引力がはたらき、比例定数を $k$ とする。外力はない。

![図1：2質点の位置ベクトル](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/kyushu-university/science/phys/2018/phys_201708_I_fig1.png)

この系の運動を、重心

$$
\boldsymbol r_G=\frac{m_1\boldsymbol r_1+m_2\boldsymbol r_2}{m_1+m_2}
$$

の運動と、相対位置 $\boldsymbol r=\boldsymbol r_2-\boldsymbol r_1$ の運動に分離する。

1. 全運動エネルギーを重心の運動エネルギー $T_G$ と相対運動の運動エネルギー $T$ に分離し、

   $$
   T_{\mathrm{tot}}=T_G+T
   =\frac12(m_1+m_2)\dot{\boldsymbol r}_G^{\,2}
   +\frac12\mu\dot{\boldsymbol r}^{\,2}
   $$

   と表したときの換算質量 $\mu$ を、導出過程とともに求めよ。

これ以降は相対運動のみを考え、換算質量 $\mu$ と相対位置 $\boldsymbol r$ を用いて解答せよ。

2. $\boldsymbol r\times\dot{\boldsymbol r}$ の時間微分を計算し、$\boldsymbol r$ が同一平面内にとどまることを示せ。

これ以降はその平面上の極座標 $(r,\theta)$ を用いる。$\theta=0$ の方向は適当にとる。

3. 運動エネルギー $T$ と引力のポテンシャルエネルギー $U$ を、$r,\theta$ とその時間微分を用いて表せ。
4. ラグランジアン $\mathcal L=T-U$ から、$\theta$ に共役な運動量 $p_\theta$ を求めよ。
5. $p_\theta$ が時間によらない定数であることを示せ。

これ以降は $r$ 座標のみの一次元問題として考える。$p_\theta$ は初期条件として与えられるゼロでない定数とし、必要なら解答に含めてよい。

6. 一次元運動の運動エネルギー $T'$ を求めよ。
7. $T+U=T'+U'$ に注意して、有効ポテンシャルエネルギー $U'$ を $r$ のみの関数として求めよ。
8. $r$ が時間によらず一定値 $r_0$ をとるとき、その値を求めよ。

### [I-B]

図2aのように、質量と厚さを無視できる半径 $3a$ の円筒と、その表面上の点 $P$ に固定した質量 $m$ の質点からなる円筒振り子がある。円筒は水平に固定された中心軸 $O$ のまわりに回転でき、点 $P$ は重力によって振り子のように振動する。

![図2a：円筒振り子](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/kyushu-university/science/phys/2018/phys_201708_I_fig2a.png)

1. 円筒振り子の軸 $O$ のまわりの慣性モーメントを求めよ。

次に図2bのように、その内面上に半径 $a$、質量 $3m/2$ の一様な円柱を置く。円柱は中心軸 $O'$ を軸 $O$ と平行に保ち、円筒振り子の内面を滑らずに転がる。点 $P$ と円柱が接したときに $P$ と一致する円柱上の点を $P'$ とする。

![図2b：円筒内の一様な円柱](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/kyushu-university/science/phys/2018/phys_201708_I_fig2b.png)

2. 円柱の中心軸 $O'$ のまわりの慣性モーメントが $3ma^2/4$ となることを示せ。

図2cのように、円筒振り子の点 $P$ の軸 $O$ まわりの回転角を $\theta$、円柱の点 $P'$ の軸 $O'$ まわりの回転角を $\phi$、円柱重心 $O'$ の軸 $O$ まわりの回転角を $\alpha$ とする。いずれも鉛直下方をゼロとし、図の反時計回りを正とする。

![図2c：回転角の定義](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/kyushu-university/science/phys/2018/phys_201708_I_fig2c.png)

3. 系の運動エネルギーを、円筒振り子の軸 $O$ まわりの回転、円柱の軸 $O'$ まわりの回転、円柱重心の軸 $O$ まわりの回転の各運動エネルギーの和として、$\dot\theta,\dot\phi,\dot\alpha$ を用いて表せ。
4. 系の位置エネルギーは点 $P$ と円柱重心 $O'$ の位置エネルギーの和である。$|\theta|\ll1,|\alpha|\ll1$ の微小振動に対し、$\theta,\alpha$ の2次までの近似式を求めよ。点 $P$ には $\theta=0$、点 $O'$ には $\alpha=0$ を位置エネルギーの基準とし、重力加速度の大きさを $g$ とする。

滑らない条件から、

$$
a(\alpha-\phi)=3a(\alpha-\theta),
\qquad \phi=3\theta-2\alpha
$$

が成り立つ。この関係で運動エネルギー中の $\dot\phi$ を消去し、以後は $\theta,\alpha$ の微小振動を考える。$g$ のかわりに $\omega_g^2=g/(3a)$ を用いてもよい。

5. オイラー・ラグランジュ方程式から、$\theta,\alpha$ の連立運動方程式を求めよ。
6. 基準振動を $\theta=A\cos\omega t,\ \alpha=B\cos\omega t$ と置き、$\omega^2$ の2つの解 $\omega_1^2,\omega_2^2$ を $\omega_1^2>\omega_2^2$ として求めよ。
7. それぞれの基準振動について振幅比 $A/B$ を求めよ。

#### 题目描述

本题于2017年8月30日实施，对应2018年度入学考试。

**[I-A]** 如图1，质量为 $m_1,m_2$ 的两个质点位于 $\boldsymbol r_1,\boldsymbol r_2$，相互受到与距离成正比、比例常数为 $k$ 的引力，无外力。将运动分为质心

$$
\boldsymbol r_G=\frac{m_1\boldsymbol r_1+m_2\boldsymbol r_2}{m_1+m_2}
$$

的运动和相对位置 $\boldsymbol r=\boldsymbol r_2-\boldsymbol r_1$ 的运动。

1. 将总动能分解为 $T_{\mathrm{tot}}=T_G+T=\frac12(m_1+m_2)\dot{\boldsymbol r}_G^{\,2}+\frac12\mu\dot{\boldsymbol r}^{\,2}$，推导约化质量 $\mu$。
2. 此后只考虑相对运动，使用 $\mu,\boldsymbol r$ 作答。计算 $\boldsymbol r\times\dot{\boldsymbol r}$ 的时间导数，证明相对运动始终位于同一平面。
3. 在该平面内引入极坐标 $(r,\theta)$，任取 $\theta=0$ 的方向，用 $r,\theta$ 及其时间导数表示动能 $T$ 和势能 $U$。
4. 由拉格朗日量 $\mathcal L=T-U$ 求 $\theta$ 的共轭动量 $p_\theta$。
5. 证明 $p_\theta$ 守恒。
6. 此后将运动视为仅含 $r$ 的一维问题，$p_\theta$ 为初始条件给出的非零常数。求径向动能 $T'$。
7. 利用 $T+U=T'+U'$，求仅依赖 $r$ 的有效势能 $U'$。
8. 若 $r$ 恒等于 $r_0$，求 $r_0$。

**[I-B]** 如图2a，一个半径为 $3a$、质量和厚度均可忽略的圆筒，在表面点 $P$ 固定有质量 $m$ 的质点。圆筒可绕水平固定的中心轴 $O$ 转动，点 $P$ 在重力作用下形成摆动。

1. 求圆筒摆绕轴 $O$ 的转动惯量。
2. 如图2b，在圆筒内放入半径为 $a$、质量为 $3m/2$ 的均匀实心圆柱。圆柱保持中心轴 $O'$ 与轴 $O$ 平行，在内壁无滑动滚动。圆柱与点 $P$ 接触时重合于 $P$ 的圆柱材料点记为 $P'$。证明圆柱绕 $O'$ 的转动惯量为 $3ma^2/4$。
3. 如图2c，点 $P$ 绕 $O$ 的转角为 $\theta$，点 $P'$ 绕 $O'$ 的转角为 $\phi$，圆柱质心 $O'$ 绕 $O$ 的转角为 $\alpha$。三角度都以竖直向下为零、图中逆时针为正。将动能写成圆筒摆转动、圆柱自转和圆柱质心运动三部分的和，用 $\dot\theta,\dot\phi,\dot\alpha$ 表示。
4. 总势能为点 $P$ 和圆柱质心的重力势能之和，分别以 $\theta=0$ 和 $\alpha=0$ 为零点。设重力加速度大小为 $g$，在 $|\theta|\ll1,|\alpha|\ll1$ 时将势能展开到二阶。
5. 利用无滑动条件 $a(\alpha-\phi)=3a(\alpha-\theta)$，即 $\phi=3\theta-2\alpha$，消去动能中的 $\dot\phi$。由欧拉–拉格朗日方程推导 $\theta,\alpha$ 的线性运动方程，可使用 $\omega_g^2=g/(3a)$。
6. 令 $\theta=A\cos\omega t,\ \alpha=B\cos\omega t$，求两个简正频率的平方 $\omega_1^2>\omega_2^2$。
7. 分别求两个简正模的振幅比 $A/B$。

## **Kai**

### [I-A]

#### (1)

$M=m_1+m_2$ とおくと、

$$
\boldsymbol r_1=\boldsymbol r_G-\frac{m_2}{M}\boldsymbol r,
\qquad
\boldsymbol r_2=\boldsymbol r_G+\frac{m_1}{M}\boldsymbol r.
$$

したがって、交差項が打ち消し合い、

$$
\begin{aligned}
T_{\mathrm{tot}}
&=\frac12m_1\left|\dot{\boldsymbol r}_G-\frac{m_2}{M}\dot{\boldsymbol r}\right|^2
+\frac12m_2\left|\dot{\boldsymbol r}_G+\frac{m_1}{M}\dot{\boldsymbol r}\right|^2\\
&=\frac12M\dot{\boldsymbol r}_G^{\,2}
+\frac12\frac{m_1m_2}{M}\dot{\boldsymbol r}^{\,2}.
\end{aligned}
$$

よって、

$$
\boxed{\mu=\frac{m_1m_2}{m_1+m_2}}.
$$

#### (2)

各質点の運動方程式は $m_1\ddot{\boldsymbol r}_1=k\boldsymbol r$、$m_2\ddot{\boldsymbol r}_2=-k\boldsymbol r$ なので、相対運動について

$$
\mu\ddot{\boldsymbol r}=-k\boldsymbol r
$$

を得る。したがって、

$$
\frac{d}{dt}(\boldsymbol r\times\dot{\boldsymbol r})
=\dot{\boldsymbol r}\times\dot{\boldsymbol r}
+\boldsymbol r\times\ddot{\boldsymbol r}
=-\frac{k}{\mu}\boldsymbol r\times\boldsymbol r=\boldsymbol0.
$$

定ベクトル $\boldsymbol\ell=\boldsymbol r\times\dot{\boldsymbol r}$ がゼロでなければ、常に $\boldsymbol r\cdot\boldsymbol\ell=0$ であるため、運動は原点を通り $\boldsymbol\ell$ に垂直な一定平面内に限られる。$\boldsymbol\ell=\boldsymbol0$ の場合、初期位置と初速度は同一直線方向にあり、$\ddot{\boldsymbol r}=-(k/\mu)\boldsymbol r$ によりその直線上の運動となるので、やはり一定平面内に含まれる。

#### (3)

極座標では $\dot{\boldsymbol r}^{\,2}=\dot r^2+r^2\dot\theta^2$ なので、

$$
\boxed{T=\frac12\mu(\dot r^2+r^2\dot\theta^2)}.
$$

また、動径方向の力 $-kr=-dU/dr$ より、$U(0)=0$ と選べば

$$
\boxed{U=\frac12kr^2}.
$$

#### (4)

$$
\mathcal L=\frac12\mu(\dot r^2+r^2\dot\theta^2)-\frac12kr^2,
\qquad
\boxed{p_\theta=\frac{\partial\mathcal L}{\partial\dot\theta}
=\mu r^2\dot\theta}.
$$

#### (5)

$\theta$ は循環座標なので、オイラー・ラグランジュ方程式から

$$
\frac{dp_\theta}{dt}
=\frac{\partial\mathcal L}{\partial\theta}=0.
$$

よって $p_\theta$ は保存される。これは運動平面に垂直な角運動量の成分である。

#### (6)

径方向の速度は $\dot r$ なので、

$$
\boxed{T'=\frac12\mu\dot r^2}.
$$

#### (7)

$\dot\theta=p_\theta/(\mu r^2)$ を用いると、

$$
U'=T+U-T'
=\frac12\mu r^2\dot\theta^2+\frac12kr^2
=\boxed{\frac{p_\theta^2}{2\mu r^2}+\frac12kr^2}.
$$

#### (8)

径方向の運動方程式 $\mu\ddot r=-dU'/dr$ から、一定半径 $r_0$ は

$$
\left.\frac{dU'}{dr}\right|_{r_0}
=-\frac{p_\theta^2}{\mu r_0^3}+kr_0=0
$$

を満たす。したがって、$p_\theta\ne0$、$r_0>0$ より

$$
\boxed{r_0=\left(\frac{p_\theta^2}{\mu k}\right)^{1/4}}.
$$

このとき $\left.d^2U'/dr^2\right|_{r=r_0}=4k>0$ であり、相対運動は安定な円運動となる。

### [I-B]

#### (1)

円筒自体の質量は無視でき、質点 $m$ が軸 $O$ から距離 $3a$ にあるので、

$$
\boxed{I=m(3a)^2=9ma^2}.
$$

#### (2)

円柱の軸方向に積分した面密度は $\sigma=(3m/2)/(\pi a^2)$ である。半径 $s$、幅 $ds$ の円環の質量が $2\pi\sigma s\,ds$ であることから、

$$
I'=\int_0^a s^2(2\pi\sigma s\,ds)
=\frac{3m}{a^2}\frac{a^4}{4}
=\boxed{\frac34ma^2}.
$$

#### (3)

円柱重心は軸 $O$ から距離 $2a$ にあり、その速さは $2a|\dot\alpha|$ である。よって、

$$
\begin{aligned}
T
&=\frac12I\dot\theta^2
+\frac12I'\dot\phi^2
+\frac12\left(\frac32m\right)(2a\dot\alpha)^2\\
&=\boxed{\frac92ma^2\dot\theta^2
+\frac38ma^2\dot\phi^2+3ma^2\dot\alpha^2}.
\end{aligned}
$$

#### (4)

指定された基準位置からの高さは、点 $P$ について $3a(1-\cos\theta)$、円柱重心について $2a(1-\cos\alpha)$ である。したがって、

$$
\begin{aligned}
U
&=3mga(1-\cos\theta)
+\frac32mg\,2a(1-\cos\alpha)\\
&=\boxed{\frac32mga(\theta^2+\alpha^2)
+O(\theta^4+\alpha^4)}.
\end{aligned}
$$

#### (5)

$\dot\phi=3\dot\theta-2\dot\alpha$ を運動エネルギーに代入すると、

$$
T=ma^2\left(
\frac{63}{8}\dot\theta^2
-\frac92\dot\theta\dot\alpha
+\frac92\dot\alpha^2
\right).
$$

よって、2次までのラグランジアンは

$$
\mathcal L=ma^2\left(
\frac{63}{8}\dot\theta^2
-\frac92\dot\theta\dot\alpha
+\frac92\dot\alpha^2
\right)-\frac32mga(\theta^2+\alpha^2).
$$

オイラー・ラグランジュ方程式により、

$$
\begin{cases}
\displaystyle \frac{63}{4}ma^2\ddot\theta
-\frac92ma^2\ddot\alpha+3mga\theta=0,\\[3pt]
\displaystyle -\frac92ma^2\ddot\theta
+9ma^2\ddot\alpha+3mga\alpha=0.
\end{cases}
$$

$9ma^2$ で割り、$\omega_g^2=g/(3a)$ を用いると、

$$
\boxed{
\begin{cases}
\displaystyle \frac74\ddot\theta-\frac12\ddot\alpha
+\omega_g^2\theta=0,\\[3pt]
\displaystyle -\frac12\ddot\theta+\ddot\alpha
+\omega_g^2\alpha=0.
\end{cases}}
$$

#### (6)

基準振動を代入すると、

$$
\begin{pmatrix}
\omega_g^2-\frac74\omega^2&\frac12\omega^2\\
\frac12\omega^2&\omega_g^2-\omega^2
\end{pmatrix}
\begin{pmatrix}A\\B\end{pmatrix}=\boldsymbol0.
$$

非自明な解をもつ条件は、

$$
\begin{aligned}
0
&=\left(\omega_g^2-\frac74\omega^2\right)
\left(\omega_g^2-\omega^2\right)-\frac14\omega^4\\
&=\frac32\omega^4-\frac{11}{4}\omega_g^2\omega^2+\omega_g^4\\
&=\frac14(3\omega^2-4\omega_g^2)(2\omega^2-\omega_g^2).
\end{aligned}
$$

したがって、大きい順に

$$
\boxed{\omega_1^2=\frac43\omega_g^2=\frac{4g}{9a}},
\qquad
\boxed{\omega_2^2=\frac12\omega_g^2=\frac{g}{6a}}.
$$

#### (7)

振幅の方程式の第2行から、

$$
\frac AB=\frac{2(\omega^2-\omega_g^2)}{\omega^2}.
$$

よって、

$$
\boxed{
\begin{array}{c|c|c}
\text{基準振動}&A/B&(A,B)\text{ の比}\\ \hline
\omega_1^2=\frac43\omega_g^2&\frac12&(1,2)\\[2pt]
\omega_2^2=\frac12\omega_g^2&-2&(2,-1)
\end{array}}
$$

高い角振動数のモードでは $\theta,\alpha$ が同位相、低い角振動数のモードでは逆位相で振動する。

## **Reference**

- [九州大学公式：平成30年度大学院修士課程入学試験問題（物理学I、PDF 1–6ページ）](https://www.phys.kyushu-u.ac.jp/graduate/pdf/h30_inshi.pdf#page=1)
- [ばたぱら：過去問・物理（九大理物）H30](https://batapara.com/archives/kakomon-9d-h30.html/)
- [ばたぱら：円筒振り子の中の円柱（微小振動）](https://batapara.com/archives/pendulum2.html/)
