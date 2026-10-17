---
sidebar_label: "2019年8月実施 III-2-AB（力学・電磁気学）"
tags:
  - Kyoto-University
  - Physics.Mechanics.Rocket-Equation-and-Attitude-Stability
  - Physics.Electromagnetism.Electric-Dipole-Potential
  - Physics.Electromagnetism.Electrostatic-Shielding
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2019年8月実施 問題III-2-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### III-2A（力学）

平面内を運動する物体が、その進行方向に対して右 90 度向き $\boldsymbol n\ (|\boldsymbol n|=1)$ に常に質量を放出しているとする。この物体の運動の様子を調べよう。時刻 $t$ での物体の質量を $m(t)$、速度を $\boldsymbol V(t)$ とし、$|\boldsymbol V(0)|=V_0$ とする。微小時間間隔 $dt$ の間に放出される質量は $\alpha m(t)\,dt$ で、$\alpha$ は一定で正とする。物体に対して放出される速さを $u$ とする。物体の内部構造は考えない。

(1) 時刻 $t+dt$ での物体の速度を $\boldsymbol V(t)+d\boldsymbol V$ とし、運動量保存の式を書け。

(2) これより、

$$
m\frac{d\boldsymbol V}{dt}=\boxed{\mathrm A}
$$

となる。$\boxed{\mathrm A}$ にあてはまる式を示せ。ただし、この式に $\boldsymbol n$ を残してよい。

(3) 時刻 $t$ での物体の速さを求めよ。

(4) 運動の軌跡の時刻 $t$ における曲率半径 $\rho(t)$ を求めよ。

### III-2B（電磁気学）

図 1 のように、接地された導体の内部にある球状の空洞（半径 $a$）の中心に電気双極子を置いたとき、空洞の表面に誘起される電荷分布を考えよう。なお、空洞中は真空とし、真空の誘電率を $\varepsilon_0$ とする。解答は SI 単位系を用いよ。

(1) はじめに導体のない場合を考えよう。電気双極子を原点 O に置いたとき、球座標を用いて位置 $\mathrm P(r,\theta,\varphi)$ での軸対称な静電ポテンシャル $\phi_{\mathrm{di}}(r,\theta)$ を求めよ。ここで、$r$ は原点からの距離、$\theta$ は電気双極子ベクトルの方向を $z$ 軸としたとき、$\boldsymbol r$ と $z$ 軸のなす角度とする。電気双極子ベクトルは $\boldsymbol p=q\boldsymbol s$ とし、$\boldsymbol s$ は電荷 $-q$ と $+q$ を結ぶベクトル、$s=|\boldsymbol s|$、$p=|\boldsymbol p|$ である。また、$r\gg s$ で、$s/r$ の 1 次項まで計算せよ。

(2) 次に電気双極子を空洞の中心に置いた場合を考える。空洞の表面に誘起された電荷がつくる静電ポテンシャルは、適切な定数 $A_0,B_0,A_1,B_1$ を用いて次の形で表せる。

$$
\phi_{\mathrm{in}}(r,\theta)=\left(A_0+\frac{B_0}{r}\right)+\left(A_1r+\frac{B_1}{r^2}\right)\cos\theta.
$$

$A_0,B_0,A_1,B_1$ を決定し、位置 $\mathrm P(r,\theta,\varphi)$ での静電ポテンシャル $\phi(r,\theta)$ を求めよ。

(3) 空洞の表面に誘起される電荷密度を求めよ。

![図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2020/201908-III-2B-fig1.png)

#### 题目描述

**III-2A（力学）**

一个在平面内运动的物体，持续沿相对前进方向向右转 $90^\circ$ 的方向 $\boldsymbol n\ (|\boldsymbol n|=1)$ 排出质量。研究该物体的运动。设时刻 $t$ 的质量为 $m(t)$，速度为 $\boldsymbol V(t)$，初始速率满足 $|\boldsymbol V(0)|=V_0$。微小时间 $dt$ 内排出的质量为 $\alpha m(t)\,dt$，其中 $\alpha$ 为正常数。相对于物体的排出速率为 $u$，不考虑物体内部结构。

(1) 设 $t+dt$ 时刻物体速度为 $\boldsymbol V(t)+d\boldsymbol V$，写出动量守恒方程。

(2) 由此得到

$$
m\frac{d\boldsymbol V}{dt}=\boxed{\mathrm A}.
$$

写出空格 $\boxed{\mathrm A}$ 的表达式，允许保留 $\boldsymbol n$。

(3) 求时刻 $t$ 的速率。

(4) 求运动轨迹在时刻 $t$ 的曲率半径 $\rho(t)$。

**III-2B（电磁学）**

如图 1，将电偶极子放在接地导体内半径为 $a$ 的球形空腔中心，考察空腔表面的感应电荷分布。空腔内为真空，真空介电常数为 $\varepsilon_0$，答案采用 SI 单位制。

(1) 先考虑没有导体的情况。将电偶极子放在原点 O，用球坐标求位置 $\mathrm P(r,\theta,\varphi)$ 处的轴对称静电势 $\phi_{\mathrm{di}}(r,\theta)$。其中 $r$ 为距原点的距离；取偶极矩方向为 $z$ 轴，$\theta$ 为 $\boldsymbol r$ 与 $z$ 轴的夹角。偶极矩为 $\boldsymbol p=q\boldsymbol s$，$\boldsymbol s$ 为连接电荷 $-q$ 和 $+q$ 的矢量，$s=|\boldsymbol s|$，$p=|\boldsymbol p|$。在 $r\gg s$ 条件下，计算至 $s/r$ 的一阶。

(2) 再考虑电偶极子位于空腔中心的情况。空腔表面感应电荷产生的静电势可用适当常数 $A_0,B_0,A_1,B_1$ 表示为

$$
\phi_{\mathrm{in}}(r,\theta)=\left(A_0+\frac{B_0}{r}\right)+\left(A_1r+\frac{B_1}{r^2}\right)\cos\theta.
$$

确定这些常数，并求位置 $\mathrm P(r,\theta,\varphi)$ 处的静电势 $\phi(r,\theta)$。

(3) 求空腔表面的感应电荷密度。

![图1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2020/201908-III-2B-fig1.png)

## **Kai**

### III-2A

(1) 放出物の実験室系での速度は $\boldsymbol V+u\boldsymbol n$ である。従って

$$
m\boldsymbol V=(m-\alpha mdt)(\boldsymbol V+d\boldsymbol V)
+\alpha mdt(\boldsymbol V+u\boldsymbol n).
$$

(2) 一次の項を整理して

$$
\boxed{m\dot{\boldsymbol V}=-\alpha mu\boldsymbol n,\qquad m(t)=m(0)e^{-\alpha t}.}
$$

(3) $\boldsymbol V\cdot\boldsymbol n=0$ なので $d|\boldsymbol V|^2/dt=0$。よって $\boxed{|\boldsymbol V(t)|=V_0}$。

(4) 法線加速度の大きさが $\alpha u$ なので

$$
\boxed{\rho(t)=\frac{V_0^2}{\alpha u}.}
$$

$V_0>0,u>0$ なら一定半径で左へ曲がる円運動となる。

### III-2B

(1) 二電荷の電位を一次まで展開して

$$
\phi_{\rm di}=\frac q{4\pi\varepsilon_0}
\left(\frac1{|\boldsymbol r-\boldsymbol s/2|}-\frac1{|\boldsymbol r+\boldsymbol s/2|}\right)
\simeq\boxed{\frac{p\cos\theta}{4\pi\varepsilon_0r^2}}.
$$

(2) 表面電荷だけの作る $\phi_{\rm in}$ は原点で正則なので $B_0=B_1=0$。接地条件 $\phi_{\rm di}(a,\theta)+\phi_{\rm in}(a,\theta)=0$ から

$$
\boxed{\begin{aligned}
A_0&=0,\qquad A_1=-\frac p{4\pi\varepsilon_0a^3},\\
\phi(r,\theta)&=\frac p{4\pi\varepsilon_0}\left(\frac1{r^2}-\frac r{a^3}\right)\cos\theta.
\end{aligned}}
$$

(3) 導体から空洞へ向く法線は $-\boldsymbol e_r$ である。従って

$$
\sigma=\varepsilon_0\boldsymbol E(a^-)\cdot(-\boldsymbol e_r)
=\varepsilon_0\left.\frac{\partial\phi}{\partial r}\right|_{a^-}
=\boxed{-\frac{3p}{4\pi a^3}\cos\theta}.
$$

正電荷側の壁に負の電荷が誘起され、全球面の積分はゼロとなる。

## **Reference**

- [京都大学公式原題（2020年度、PDF 20–21ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/R2.pdf)
