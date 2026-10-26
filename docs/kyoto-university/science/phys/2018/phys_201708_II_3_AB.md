---
sidebar_label: "2017年8月実施 II-3-AB（力学・電磁気学）"
tags:
  - Kyoto-University
  - Physics.Mechanics.Two-Body-Central-Force-and-Effective-Potential
  - Physics.Mechanics.Angular-Momentum-Conservation-and-Areal-Velocity
  - Physics.Electromagnetism.Electric-Dipole-Potential
  - Physics.Electromagnetism.Conducting-Sphere-in-Uniform-Electric-Field
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2017年8月実施 問題II-3-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### II-3A（力学）

重力ポテンシャルの下での質点の運動について考える。質点の質量を $m$、万有引力定数を $G$、重力中心の質量を $M$ として以下の問いに答えよ。ただし、重力中心は十分重く動かないとする。また、重力ポテンシャルは無限遠点で0とする。

(1) ポテンシャル中心から質点までの位置ベクトルを $\vec r$、その大きさを $r(=|\vec r|)$ として系のラグランジアンを書け。

(2) 速度の絶対値の二乗 $|\dot{\vec r}|^2$ を二次元の極座標で表せ。また、小問 (1) のラグランジアンから質点の運動方程式を導き、角運動量の大きさ $\ell$ が保存することを示せ。

(3) 系のエネルギー $E$ と角運動量の大きさ $\ell$ は保存量であるのでこれを定数とみなし、動径方向の運動エネルギー $m\dot r^2/2$ を $r$ の関数として表せ。運動方程式が解を持つのは $m\dot r^2/2\ge0$ の場合であるが、このうち特に質点がポテンシャルに拘束されて楕円軌道を描く場合、長軸および短軸の両端では動径方向の運動エネルギー $m\dot r^2/2$ がゼロになることに注意して、楕円軌道を描くための系のエネルギー範囲を求めよ。ただし $\ell$ は与えられているものとせよ。

### II-3B（電磁気学）

図のような直角座標系において、$x$ 軸に平行な一様な外部電場 $\vec E$ の中に新たに電気双極子モーメント $\vec p$ を原点に置くことを考える。なお、双極子は外部電場と同じ向きに配置したとする。以下では真空中で考え、その誘電率を $\epsilon_0$ とする。解答は SI 単位系を用いて答えよ。

![一様電場・電気双極子と球状等電位面（原題図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2018/201708-II-3B-fig.png)

(1) 図に示すように、双極子まわりには球状の等電位面がある。その球面の半径 $a$ を $p=|\vec p|$ および $E=|\vec E|$ を用いて求めよ。

(2) さらに帯電していない半径 $a$ の導体球殻を置くことを考える。球殻の厚みは十分に薄いものとし、球殻の中心は双極子の位置と同じとする。そのとき、導体球殻の外側表面に誘起される電荷密度 $\sigma(\theta)$ を求めよ（$\theta$ は $x$ 軸からの角度）。

### 题目描述

**II-3A（力学）**

考虑质点在引力势下的运动。质点质量为 $m$、万有引力常数为 $G$、引力中心的质量为 $M$，回答以下问题。引力中心充分重、保持不动，且无穷远处的引力势为0。

(1) 设从势中心到质点的位置矢量为 $\vec r$，其大小为 $r=|\vec r|$，写出系统的拉格朗日量。

(2) 用二维极坐标表示速度大小的平方 $|\dot{\vec r}|^2$。并从第 (1) 问的拉格朗日量导出质点的运动方程，证明角动量大小 $\ell$ 守恒。

(3) 系统能量 $E$ 和角动量大小 $\ell$ 为守恒量，将它们视为常数，把径向动能 $m\dot r^2/2$ 表示为 $r$ 的函数。运动方程在 $m\dot r^2/2\ge0$ 时才有解。其中，特别考虑质点被势束缚、沿椭圆轨道运动的情况，注意在长轴和短轴的两端径向动能 $m\dot r^2/2$ 为0，求形成椭圆轨道的系统能量范围。设 $\ell$ 已给定。

**II-3B（电磁学）**

在上图所示的直角坐标系中，有平行于 $x$ 轴的均匀外电场 $\vec E$，现于原点放置电偶极矩 $\vec p$，方向与外电场相同。以下在真空中讨论，介电常数为 $\epsilon_0$，使用 SI 单位制作答。

(1) 如图，偶极子周围存在球形等势面。用 $p=|\vec p|$ 和 $E=|\vec E|$ 求该球面的半径 $a$。

(2) 进一步放置半径为 $a$、不带电的导体球壳。球壳足够薄，中心与偶极子的位置相同。求导体球壳外表面上感应的电荷密度 $\sigma(\theta)$，其中 $\theta$ 为从 $x$ 轴测量的角度。

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

左端の等号は円軌道であり、円も楕円に含める場合には $U_{\min}\le E<0$ とする。動径の折返し点は近日点・遠日点である。原題にある「短軸の両端」では、一般の非円形楕円軌道の動径速度はゼロにならない。

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
