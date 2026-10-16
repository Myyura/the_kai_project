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

### III-2A

平面を運動する物体が、進行方向に対して常に右へ $90^\circ$ の単位ベクトル $\boldsymbol n$ の向きに質量を放出する。時刻 $t$ の質量と速度を $m(t),\boldsymbol V(t)$ とし、$|\boldsymbol V(0)|=V_0$。時間 $dt$ に放出する質量は $\alpha m(t)dt$、$\alpha>0$、相対放出速度は $u\boldsymbol n$ とする。内部構造は考えない。

1. 時刻 $t$ と $t+dt$ の運動量保存を書け。
2. 運動方程式 $m\,d\boldsymbol V/dt$ を求めよ。
3. 速さを求めよ。
4. 軌道の曲率半径 $\rho(t)$ を求めよ。

### III-2B

図1のように、接地された導体の内部に半径 $a$ の球状真空空洞があり、その中心に電気双極子を置く。$\boldsymbol p=q\boldsymbol s=p\boldsymbol e_z$、$\boldsymbol s$ は電荷 $-q$ から $+q$ へのベクトルとする。真空の誘電率は $\varepsilon_0$。球座標の極角 $\theta$ は $+z$ 軸から測る。SI 単位系を用いる。

![原題 図1：接地導体の球状空洞内の電気双極子](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2020/201908-III-2B-fig1.png)

1. 導体がない場合の双極子電位 $\phi_{\rm di}(r,\theta)$ を、$r\gg s$ で $s/r$ の一次まで求めよ。
2. 空洞表面の誘導電荷が作る電位は

$$
\phi_{\rm in}=\left(A_0+\frac{B_0}r\right)+\left(A_1r+\frac{B_1}{r^2}\right)\cos\theta
$$

と書ける。定数を決定し、空洞内の全電位を求めよ。
3. 空洞表面に誘起される電荷密度を求めよ。

#### 题目描述

A：平面运动物体持续向速度右侧垂直喷出物质，喷出质量率为 $\alpha m$，相对速度 $u\boldsymbol n$，初速大小 $V_0$。求动量收支、运动方程、速率和曲率半径。

B：如上方图1，接地导体的半径 $a$ 球形真空空腔中心放置沿 $+z$ 的电偶极子 $\boldsymbol p=q\boldsymbol s$。(1) 求无导体时的一阶远场偶极电势；(2) 由给定轴对称形式确定诱导电势和总电势；(3) 求空腔内壁的感应面电荷密度。

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
\boxed{A_0=0,\quad A_1=-\frac p{4\pi\varepsilon_0a^3},\qquad
\phi(r,\theta)=\frac p{4\pi\varepsilon_0}\left(\frac1{r^2}-\frac r{a^3}\right)\cos\theta.}
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
