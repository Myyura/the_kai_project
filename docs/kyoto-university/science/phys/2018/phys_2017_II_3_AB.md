---
sidebar_label: "2018年度 II-3-AB（力学・電磁気学）"
tags:
  - Kyoto-University
  - Physics.Mechanics.Two-Body-Central-Force-and-Effective-Potential
  - Physics.Mechanics.Angular-Momentum-Conservation-and-Areal-Velocity
  - Physics.Electromagnetism.Electric-Dipole-Potential
  - Physics.Electromagnetism.Conducting-Sphere-in-Uniform-Electric-Field
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2018年度 問題II-3-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### II-3A（力学）

質量 $m$ の質点が、十分重く静止している質量 $M$ の重力中心の周りを運動する。万有引力定数を $G$、無限遠のポテンシャルを零とする。

1. 中心からの位置を $\mathbf r$、$r=|\mathbf r|$ としてラグランジアンを書け。
2. 速度の二乗を平面極座標で表せ。運動方程式を導き、角運動量の大きさ $\ell$ の保存を示せ。
3. 保存エネルギー $E$ と角運動量 $\ell$ を定数とし、動径運動エネルギー $m\dot r^2/2$ を $r$ の関数で表せ。動径運動が許される領域と折返し条件を用い、質点が束縛され楕円軌道を描くエネルギー範囲を、与えられた $\ell$ に対して求めよ。

### II-3B（電磁気学）

真空中に $x$ 軸と平行な一様外部電場 $\mathbf E=E\mathbf e_x$ を加え、原点に同方向の電気双極子 $\mathbf p=p\mathbf e_x$ を置く。真空誘電率を $\epsilon_0$ とし、SI 単位系で答えよ。

1. 双極子の周囲にある球状の等電位面の半径 $a$ を $p,E$ で求めよ。
2. この半径 $a$ の帯電していない、厚さを無視できる導体球殻を原点中心に置く。球殻外表面の電荷密度 $\sigma(\theta)$ を求めよ。$\theta$ は $+x$ 軸から測る角度である。

#### 题目描述

**II-3A：** 质量 $m$ 的粒子受静止重天体 $M$ 的引力作用，万有引力常数为 $G$，无穷远势能为零。(1) 写拉格朗日量；(2) 用平面极坐标写速度平方与运动方程，证明角动量 $\ell$ 守恒；(3) 用能量和角动量写径向动能，利用允许区与径向转折条件，求给定 $\ell$ 时束缚椭圆轨道的能量范围。

**II-3B：** 真空中有沿 $+x$ 的均匀电场 $E$，原点放置同向电偶极矩 $p$。(1) 求其周围球形等势面的半径 $a$；(2) 在该处放置不带净电荷、可忽略厚度的导体球壳，求外表面电荷密度。极角从 $+x$ 轴起算，使用 SI 单位。

## **Kai**

### II-3A

#### (1)

$$
\boxed{L=\frac m2|\dot{\mathbf r}|^2+\frac{GMm}{r}.}
$$

#### (2)

$|\dot{\mathbf r}|^2=\dot r^2+r^2\dot\theta^2$ なので

$$
m\ddot r=mr\dot\theta^2-\frac{GMm}{r^2},\qquad
\frac d{dt}(mr^2\dot\theta)=0.
$$

したがって $\boxed{\ell=|mr^2\dot\theta|=\text{const.}}$。

#### (3)

$$
\boxed{\frac12m\dot r^2=E-U_{\rm eff}(r),\qquad
U_{\rm eff}(r)=\frac{\ell^2}{2mr^2}-\frac{GMm}{r}.}
$$

$\ell>0$ とすると $U_{\rm eff}$ の最小位置と値は

$$
r_c=\frac{\ell^2}{GMm^2},\qquad
U_{\min}=-\frac{G^2M^2m^3}{2\ell^2}.
$$

負のエネルギーで有限な二つの動径折返し点を持つので、非円形の楕円軌道の条件は

$$
\boxed{-\frac{G^2M^2m^3}{2\ell^2}<E<0.}
$$

左端の等号は円軌道であり、円も楕円に含める場合には $U_{\min}\le E<0$ とする。動径の折返し点は近日点・遠日点である。

### II-3B

#### (1)

球座標の極軸を $x$ 軸に取ると、電位は

$$
V(r,\theta)=\left(\frac{p}{4\pi\epsilon_0r^2}-Er\right)\cos\theta.
$$

$r=a$ で $\theta$ に依存しないためには括弧が零となる。よって

$$
\boxed{a=\left(\frac{p}{4\pi\epsilon_0E}\right)^{1/3}.}
$$

#### (2)

球殻がもともとの等電位面と一致するため、外部の電位は上式のままで境界条件を満たす。外側の法線電場は

$$
E_r(a^+,\theta)=-\left.\partial_rV\right|_{r=a}
=\left(\frac{2p}{4\pi\epsilon_0a^3}+E\right)\cos\theta=3E\cos\theta.
$$

導体内部の電場は零なので

$$
\boxed{\sigma(\theta)=\epsilon_0E_r(a^+,\theta)=3\epsilon_0E\cos\theta.}
$$

球面積分は零であり、球殻の正味電荷が零という条件とも両立する。

## **Reference**

- [京都大学公式問題（2018年度、PDF 6–7ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H30-II.pdf)
