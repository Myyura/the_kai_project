---
sidebar_label: "2019年8月実施 物理学 [II]"
tags:
  - Kyushu-University
  - Physics.Electromagnetism.Electric-Dipole-Potential
  - Physics.Electromagnetism.Conducting-Sphere-in-Uniform-Electric-Field
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Surface-Current-Boundary-Condition
---
# 九州大学 理学府 物理学専攻 2019年8月実施 物理学 \[II\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

題意の要約。

真空の誘電率と透磁率を $\varepsilon_0,\mu_0$ とし、直交座標の単位ベクトルを $\boldsymbol e_x,\boldsymbol e_y,\boldsymbol e_z$、球座標の単位ベクトルを $\boldsymbol e_r,\boldsymbol e_\theta,\boldsymbol e_\phi$ とする。

### [A-I]

原点から距離 $r$、$+z$ 軸との極角 $\theta$ の点 $P$ を考える。

1. 原点の点電荷 $q$ が作る静電ポテンシャル $\Phi_0$ を求める。
2. 点電荷 $q$ を $(0,0,d)$ に移した場合の $\Phi_1$ を求める。
3. $d/r\ll1$ として、$\Phi_1-\Phi_0$ を $d/r$ の一次まで展開し、$\Phi_d$ とする。
4. $\Phi_d$ を $+z$ 方向の電気双極子 $p=qd$ のポテンシャルとみなし、電場の $r$ 成分を求める。

球座標では $\nabla\Phi=\boldsymbol e_r\partial_r\Phi+\boldsymbol e_\theta r^{-1}\partial_\theta\Phi+\boldsymbol e_\phi(r\sin\theta)^{-1}\partial_\phi\Phi$ を使える。

### [A-II]

1. 一様電場 $\boldsymbol E_0=E_0\boldsymbol e_z$ に対する $P$ のポテンシャル $\Phi_u$ を求める。原点のポテンシャルは $0$ とする。
2. 総電荷 $0$、半径 $a$ の導体球を原点に置く。外部ポテンシャルを $\Phi=\Phi_u+\Phi_d$ とし、球面の境界条件から感応双極子の大きさ $p$ を求める。
3. 球面の電荷密度 $\sigma(\theta)$ を求める。

### [B-I]

媒質 I を $z<0$、媒質 II を $z>0$ とし、平面 $z=0$ に $+y$ 方向の面電流密度 $j_y$ がある。$H_x^{\mathrm{II}}(0^+)-H_x^{\mathrm I}(0^-)=j_y$ を電磁気学の法則から示す。

### [B-II]

真空中で原点を中心とする半径 $a$ の球面に、$z$ 軸対称なコイルを巻く。球内を領域 I、外部を II とし、透磁率はともに $\mu_0$ とする。球内に一様磁場

$$
\boldsymbol H_0=H_0\boldsymbol e_z
=H_0\cos\theta\,\boldsymbol e_r-H_0\sin\theta\,\boldsymbol e_\theta
$$

を作るため、巻線密度を調節して面電流 $\boldsymbol j=j(\theta)\boldsymbol e_\phi$ を流す。電流のない球外で磁気スカラーポテンシャル $\Phi_m$ を定義し、$\boldsymbol B=-\nabla\Phi_m$ とする。

1. Maxwell 方程式から $\nabla^2\Phi_m=0$ を示す。
2. 法線磁束密度の連続性による角依存性から $\Phi_m=\mu_0 A R(r)\cos\theta$ とおく。$R(r)=r^n$ を Laplace 方程式に代入して $n$ を求める。ただし $R(\infty)=0$。
3. $r=a$ で $H_r=H_0\cos\theta$ となる条件から $A$ を求める。
4. 球面の境界条件 $H_\theta^{\mathrm{II}}-H_\theta^{\mathrm I}=j(\theta)$ から面電流密度を求める。

出典：[九州大学 令和2年度 物理学II](https://pr.phys.kyushu-u.ac.jp/graduate/pdf/R2_inshi.pdf#page=7)。

![電荷・導体球・電流境界・球面コイルの配置](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/science/phys/2020/kyushu-phys-2019-electromagnetism.svg)

### 题目描述

真空的介电常数、磁导率分别为 $\varepsilon_0,\mu_0$。

**A-I（电偶极子）**：以球坐标 $(r,\theta)$ 表示场点，$\theta$ 从 $+z$ 轴量起。

1. 求位于原点的点电荷 $q$ 的电势 $\Phi_0$。
2. 求将该电荷移至 $(0,0,d)$ 后的电势 $\Phi_1$。
3. 在 $d/r\ll1$ 时，将 $\Phi_1-\Phi_0$ 展开到一阶，记为 $\Phi_d$。
4. 将 $\Phi_d$ 看成沿 $+z$ 方向、偶极矩为 $p=qd$ 的电偶极子电势，求电场径向分量。

**A-II（均匀电场中的导体球）**：

1. 对沿 $+z$ 方向的均匀电场 $\boldsymbol E_0=E_0\boldsymbol e_z$，求电势 $\Phi_u$，取原点电势为零。
2. 原点处放置半径为 $a$、总电荷为零的导体球。设球外电势为 $\Phi_u+\Phi_d$，根据球面边界条件求感应偶极矩 $p$。
3. 求球面电荷密度 $\sigma(\theta)$。

**B-I（面电流边界条件）**：区域 I 为 $z<0$，区域 II 为 $z>0$，界面 $z=0$ 上沿 $+y$ 方向有面电流密度 $j_y$。证明

$$
H_x^{\mathrm{II}}(0^+)-H_x^{\mathrm I}(0^-)=j_y.
$$

**B-II（球面线圈）**：真空中以原点为球心、半径为 $a$ 的球面上绕有轴对称线圈。调节沿 $\boldsymbol e_\phi$ 方向的面电流密度 $j(\theta)$，使球内（区域 I）产生均匀磁场 $\boldsymbol H_0=H_0\boldsymbol e_z$。在无电流的球外（区域 II）定义磁标势，使 $\boldsymbol B=-\nabla\Phi_m$。

1. 由 Maxwell 方程证明 $\nabla^2\Phi_m=0$。
2. 设 $\Phi_m=\mu_0 A R(r)\cos\theta$、$R(r)=r^n$，代入 Laplace 方程求满足 $R(\infty)=0$ 的 $n$。
3. 由球面处 $H_r=H_0\cos\theta$ 求常数 $A$。
4. 由 $H_\theta^{\mathrm{II}}-H_\theta^{\mathrm I}=j(\theta)$ 求面电流密度。

## **Kai**
### \[A-I\]
#### (1)

$$
  \begin{aligned}
  \Phi_0 = \frac{q}{4 \pi \varepsilon_0 r}
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  \Phi_1
  &= \frac{q}{4 \pi \varepsilon_0
  \sqrt{r^2 \sin^2 \theta + (r \cos \theta - d)^2}}
  \\
  &= \frac{q}{4 \pi \varepsilon_0 \sqrt{r^2 - 2dr \cos \theta + d^2}}
  \end{aligned}
$$

#### (3)
(2) より、 $d/r$ の1次までで

$$
  \begin{aligned}
  \Phi_1
  &= \frac{q}{4 \pi \varepsilon_0 r}
  \left(1 - \frac{2d \cos \theta}{r} + \frac{d^2}{r^2} \right)^{-1/2}
  \\
  &\simeq \frac{q}{4 \pi \varepsilon_0 r}
  \left(1 + \frac{d \cos \theta}{r} \right)
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  \Phi_d
  &= \frac{qd \cos \theta}{4 \pi \varepsilon_0 r^2}
  \end{aligned}
$$

である。

#### (4)

$$
  \begin{aligned}
  E_r
  &= \left( - \boldsymbol{\nabla} \Phi_d \right) \cdot \boldsymbol{e}_r
  \\
  &= - \frac{\partial \Phi_d}{\partial r}
  \\
  &= \frac{p \cos \theta}{2 \pi \varepsilon_0 r^3}
  \end{aligned}
$$

### \[A-II\]
#### (1)
$\boldsymbol{\nabla} \Phi_u = - \boldsymbol{E}_0 = - E_0 \boldsymbol{e}_z$
から、適当な定数 $c$ を使って、

$$
  \begin{aligned}
  \Phi_u
  &= - E_0 z + c
  \end{aligned}
$$

と書けることがわかるが、原点で $\Phi_u = 0$ であることから $c=0$ がわかり、

$$
  \begin{aligned}
  \Phi_u
  &= - E_0 z
  \\
  &= - E_0 r \cos \theta
  \end{aligned}
$$

を得る。

#### (2)
\[A-II\] (1) と \[A-I\] (3) から

$$
\begin{aligned}
\Phi
&= \Phi_u + \Phi_d
\\
&= - E_0 r \cos \theta + \frac{p \cos \theta}{4 \pi \varepsilon_0 r^2}
\\
&= \frac{- 4 \pi \varepsilon_0 E_0 r^3 + p}{4 \pi \varepsilon_0 r^2}
\cos \theta
\end{aligned}
$$

がわかるが、$r=a$ でこれが $\theta$ によらない定数になることから、

$$
\begin{aligned}
p = 4 \pi \varepsilon_0 E_0 a^3
\end{aligned}
$$

を得る。

#### (3)
$r \geq a$ において、(2) より

$$
\begin{aligned}
\Phi
&= \left( -r + \frac{a^3}{r^2} \right) E_0 \cos \theta
\end{aligned}
$$

なので、 $r$ 方向の電場 $E_r = E_r(r, \theta)$ について

$$
\begin{aligned}
E_r (r, \theta)
&= - \frac{\partial \Phi}{\partial r}
\\
&= \left( 1 + \frac{2a^3}{r^3} \right) E_0 \cos \theta
\\
\therefore \ \ 
E_r (a, \theta) &= 3 E_0 \cos \theta
\end{aligned}
$$

がわかる。
そこで、電場に関するガウスの法則を導体表面に適用して、

$$
\begin{aligned}
\sigma
&= \varepsilon_0 E_r(a, \theta)
\\
&= 3 \varepsilon_0 E_0 \cos \theta
\end{aligned}
$$

を得る。

### \[B-I\]
例えば、 $a \gt 0, b \gt 0$ として、
4点 $(0,0,b), (a,0,b), (a,0,-b), (0,0,-b)$ を頂点とする長方形を考える。
この長方形の向きに対応する法線は $+y$ 方向であり、貫く電流は $a j_y$ であるから、
この長方形に関してアンペールの法則を適用すると、

$$
\begin{aligned}
a H_x^{II}(z=b) + \int_b^0 dz \ H_z^{II}
+ \int_0^{-b} dz \ H_z^I - a H_x^I(z=-b)
+ \int_{-b}^0 dz \ H_z^I + \int_0^b dz \ H_z^{II}
&= a j_y
\\
\therefore \ \ 
H_x^{II}(z=b) - H_x^I(z=-b)
+ \frac{1}{a} \int_b^0 dz \ H_z^{II} + \frac{1}{a} \int_0^{-b} dz \ H_z^I
+ \frac{1}{a} \int_{-b}^0 dz \ H_z^I + \frac{1}{a} \int_0^b dz \ H_z^{II}
&= j_y
\end{aligned}
$$

となるが、ここで $b \to +0$ とすると、題意の式を得る。

### \[B-II\]

#### (1)

磁束に関する Gauss の法則 $\nabla\cdot\boldsymbol B=0$ と $\boldsymbol B=-\nabla\Phi_m$ から、$\nabla^2\Phi_m=0$ となる。

#### (2)

$\phi$ への依存性はなく、$\Phi_m=\mu_0 A r^n\cos\theta$ を代入すると

$$
\nabla^2\Phi_m=\mu_0 A\{n(n+1)-2\}r^{n-2}\cos\theta=0.
$$

したがって $n=1,-2$ であり、無限遠で消える解は $n=-2$ である。よって $\Phi_m=\mu_0 A\cos\theta/r^2$。

#### (3)

$$
H_r^{\mathrm{II}}=-\frac1{\mu_0}\frac{\partial\Phi_m}{\partial r}
=\frac{2A\cos\theta}{r^3}.
$$

$r=a$ で $H_r^{\mathrm{II}}=H_0\cos\theta$ だから、$A=H_0a^3/2$ となる。

#### (4)

$$
H_\theta^{\mathrm{II}}=-\frac1{\mu_0r}\frac{\partial\Phi_m}{\partial\theta}
=\frac{A\sin\theta}{r^3}.
$$

$r=a$ では $H_\theta^{\mathrm{II}}=\frac12H_0\sin\theta$、$H_\theta^{\mathrm I}=-H_0\sin\theta$ なので、

$$
\boxed{j(\theta)=\frac32H_0\sin\theta}.
$$
