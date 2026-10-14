---
sidebar_label: "2022年度 I-2-AB（電磁気学・物理数学）"
tags:
  - Kyoto-University
  - Physics.Electromagnetism.Electric-Dipole-Potential
  - Physics.Electromagnetism.Electric-Quadrupole
  - Mathematics.Differential-Equations.Wave-Equation
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2022年度 I-2-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### I-2A（電磁気学）

真空の誘電率を $\varepsilon_0$ とし、SI 単位系を用いる。$q,d>0$ とする。必要なら $(1+x)^\alpha=1+\alpha x+\alpha(\alpha-1)x^2/2+\cdots$ を用いてよい。

1. 点電荷 $+q,-q$ をそれぞれ $(0,0,d/2),(0,0,-d/2)$ に置く。点 $\mathbf r=(x,y,z)$ の静電ポテンシャル $\phi_1$ と、$z$ 軸上での概略図を示せ。
2. $d/r\ll1$（$r=|\mathbf r|$）で二次以上を無視し、双極子モーメント $\mathbf p=qd\mathbf e_z$ を用いて $\phi_2$ を求めよ。
3. $\mathbf E=-\nabla\phi_2$ を計算し、$\mathbf r,\mathbf p$ で表せ。結果に $\nabla$ を残さないこと。
4. 点電荷 $+q,-2q,+q$ を $(0,0,d),(0,0,0),(0,0,-d)$ に置く。$\theta$ を $\mathbf r$ と $+z$ 軸の角度とし、$d/r$ の三次以上を無視して遠方のポテンシャル $\phi_3(r,\theta)$ を求めよ。
5. $\phi_3$ から電場の $r,\theta$ 成分を求めよ。
6. 中央の $-2q$ を除き、$z=\pm d$ の $+q$ 二個だけにする。遠方の $\phi_4$ を求め、四重極子との大きさの違いを述べよ。

### I-2B（物理数学）

無限区間の一次元波動方程式 $u_{tt}=c^2u_{xx}$（$c>0$）を考える。

1. $f_{xy}=0$ の一般解は $f=\psi(x)+\phi(y)$ であることを示せ。
2. $\xi=x+ct,\eta=x-ct$ と置いて $u_{\xi\eta}$ を求めよ。
3. 波動方程式の一般解を $\xi,\eta$ の任意関数で表せ。
4. 初期条件 $u(x,0)=e^{-x^2},\ u_t(x,0)=0$ を $\psi,\phi$ とそれらの導関数の線形結合で表せ。
5. 積分定数を $C_1$ として $\psi(x)$ を求めよ。
6. $\phi(x)$ と $u(x,t)$ を決定せよ。
7. 横軸 $x$、縦軸 $u$ の図に、$u(x,0)$ を点線、$u(x,3/c)$ を実線で図示せよ。

#### 题目描述

I-2A：真空介电常数 $\varepsilon_0$，$q,d>0$，采用 SI 制。

1. $+q,-q$ 分别位于 $z=d/2,-d/2$，求任意位置的电势及其轴上图像。
2. 在 $d/r\ll1$ 下保留偶极主项，用 $\mathbf p=qd\mathbf e_z$ 表示电势。
3. 计算电场，结果不含梯度算符。
4. 将 $+q,-2q,+q$ 放在 $z=d,0,-d$，求远处电势至 $(d/r)^2$ 阶，$\theta$ 是位置矢量与正 $z$ 轴夹角。
5. 求径向、极角方向电场。
6. 去除中央负电荷，求两个正电荷的远场电势，并与四极电势比较。

I-2B：无限直线上的波动方程 $u_{tt}=c^2u_{xx}$，$c>0$。

1. 证明 $f_{xy}=0$ 的通解为 $\psi(x)+\phi(y)$。
2. 用 $\xi=x+ct,\eta=x-ct$ 计算混合偏导。
3. 写出波动方程通解。
4. 将 $u(x,0)=e^{-x^2},u_t(x,0)=0$ 化为 $\psi,\phi$ 的条件。
5. 积分求 $\psi$。
6. 求 $\phi$ 和 $u$。
7. 用虚线、实线分别画初始波形和 $t=3/c$ 时波形。

## **Kai**

### I-2A

#### (1)

無限遠を電位の基準に取れば

$$
\boxed{\phi_1=\frac{q}{4\pi\varepsilon_0}
\left[\frac1{\sqrt{x^2+y^2+(z-d/2)^2}}-\frac1{\sqrt{x^2+y^2+(z+d/2)^2}}\right].}
$$

軸上では奇関数で、$z=0$ でゼロ、$z=d/2$ で両側から $+\infty$、$z=-d/2$ で両側から $-\infty$、無限遠ではゼロに近づく。

![双極子の軸上電位](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/2022-I-2A-potential.svg)

#### (2)

$|\mathbf r\mp(d/2)\mathbf e_z|^{-1}=r^{-1}\pm dz/(2r^3)+O(d^2/r^3)$ より

$$
\boxed{\phi_2=\frac{\mathbf p\cdot\mathbf r}{4\pi\varepsilon_0r^3}.}
$$

#### (3)

$\nabla r^{-3}=-3\mathbf r/r^5$ を用いて

$$
\boxed{\mathbf E=\frac1{4\pi\varepsilon_0}\left[\frac{3(\mathbf p\cdot\mathbf r)\mathbf r}{r^5}-\frac{\mathbf p}{r^3}\right].}
$$

#### (4)

$$
\phi_3=\frac{q}{4\pi\varepsilon_0}
\left[\frac1{\sqrt{r^2-2rd\cos\theta+d^2}}+
\frac1{\sqrt{r^2+2rd\cos\theta+d^2}}-\frac2r\right].
$$

定数項と一次項が相殺され、

$$
\boxed{\phi_3(r,\theta)\simeq\frac{qd^2}{4\pi\varepsilon_0r^3}(3\cos^2\theta-1).}
$$

#### (5)

$$
\boxed{E_r=\frac{3qd^2}{4\pi\varepsilon_0r^4}(3\cos^2\theta-1),\qquad
E_\theta=\frac{6qd^2}{4\pi\varepsilon_0r^4}\sin\theta\cos\theta.}
$$

#### (6)

$$
\boxed{\phi_4=\frac{q}{4\pi\varepsilon_0}\left[\frac2r+\frac{d^2}{r^3}(3\cos^2\theta-1)+O\left(\frac{d^4}{r^5}\right)\right].}
$$

総電荷が $2q$ であるため、主項は $r^{-1}$。四重極子の $r^{-3}$ より緩やかに減衰し、一般の方向では遠方で $(r/d)^2$ 程度大きい。

### I-2B

#### (1)

$\partial_yf_x=0$ から $f_x=g(x)$。$x$ で積分して $f=\psi(x)+\phi(y)$ を得る。逆にこの形は方程式を満たす。

#### (2)

$$
\partial_\xi=\frac12\partial_x+\frac1{2c}\partial_t,\qquad
\partial_\eta=\frac12\partial_x-\frac1{2c}\partial_t,
$$

より $\boxed{u_{\xi\eta}=(u_{xx}-u_{tt}/c^2)/4=0}$。

#### (3)

$$
\boxed{u(x,t)=\psi(x+ct)+\phi(x-ct).}
$$

#### (4)

$$
\boxed{\psi(x)+\phi(x)=e^{-x^2},\qquad c[\psi'(x)-\phi'(x)]=0.}
$$

#### (5)

和の式を微分すると $\psi'+\phi'=-2xe^{-x^2}$。差の式と合わせて
$\psi'=-xe^{-x^2}$、従って $\boxed{\psi=e^{-x^2}/2+C_1}$。

#### (6)

$\phi=e^{-x^2}/2-C_1$ であり

$$
\boxed{u(x,t)=\frac12\left[e^{-(x+ct)^2}+e^{-(x-ct)^2}\right].}
$$

#### (7)

初期の高さ $1$ のガウス波形が、左右に速さ $c$ で進む高さ約 $1/2$ の二つの波に分かれる。$t=3/c$ では中心は $x=\pm3$。

![ガウス波束の分裂](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/2022-I-2B-wave.svg)

## **Reference**

- [京都大学公式問題（2022年度、PDF 4–6ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/R4.pdf)
