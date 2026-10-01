---
sidebar_label: "2014年度 機械力学 1-2"
tags:
  - Kyoto-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Small-Angle-Pendulum
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 京都大学 工学研究科 機械工学群 2014年度 機械力学 1-2

## **Author**

祭音Myyura (Based on [SN's answer](https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000) refined with GPT 6 Astra)

## **Description**

重力加速度 $g$ のもとで、図の振り子の紙面内運動を考える。角度 $\varphi$ は鉛直下向きから右向きに測る。ばね定数を $k$、支点 O の右向き変位を $x$ とし、$x=0$ でばねは自然長である。

1. 長さ $l$ の質量を無視できる棒の先端に質点 $m$ を付け、支点 O を固定した単振り子について、Newton の運動方程式から微小振動の周期 $T_1$ を求めよ。
2. Lagrange 方程式を用いて同じ運動方程式を導け。
3. 単振り子の支点 O を、水平方向にのみ伸縮するばねで支える。角度を近似せずに Lagrange 方程式から運動方程式を導き、線形化して微小振動の周期 $T_2$ を求めよ。支点の質量は無視する。
4. (3) の単振り子を、質量 $m$、O から重心 G までの距離 $h$、O まわりの慣性モーメント $I$ の剛体振り子に替える。角度を近似せずに運動方程式を導き、線形化して固有角振動数を求め、振動の様子を簡潔に説明せよ。

![固定支点・ばね支点の単振り子と剛体振り子](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/sn-mechanics/materials/kyoto-2014-pendulums.svg)

#### 题目描述

重力加速度为 $g$，振动位于图示平面内，摆角 $\varphi$ 从竖直向下方向向右量取。先对长 $l$、末端质量 $m$ 的无质量杆单摆，分别用牛顿方程和拉格朗日方程求微振动周期。再把无质量支点连接至水平弹簧 $k$，用支点水平位移 $x$（自然长时为零）与摆角建立非线性运动方程，线性化求周期。最后替换为质量 $m$、支点至重心距离 $h$、支点转动惯量 $I$ 的复摆，求非线性方程、固有角频率及振型。

## **Kai**

### (1)

接線方向の運動方程式は

$$
ml\ddot\varphi=-mg\sin\varphi.
$$

$|\varphi|\ll1$ では $\ddot\varphi+(g/l)\varphi=0$ だから

$$
\boxed{T_1=2\pi\sqrt{\frac lg}}.
$$

### (2)

$$
T=\frac12ml^2\dot\varphi^2,\qquad U=mgl(1-\cos\varphi).
$$

$\mathcal L=T-U$ を用いると

$$
\frac{d}{dt}\frac{\partial\mathcal L}{\partial\dot\varphi}-\frac{\partial\mathcal L}{\partial\varphi}
=ml^2\ddot\varphi+mgl\sin\varphi=0,
$$

となり、(1) と一致する。

### (3)

質点の座標を $(x+l\sin\varphi,-l\cos\varphi)$ とすれば

$$
\mathcal L=\frac12m\dot x^2+ml\dot x\dot\varphi\cos\varphi+\frac12ml^2\dot\varphi^2-\frac12kx^2-mgl(1-\cos\varphi).
$$

$x,\varphi$ に関する Lagrange 方程式から

$$
\boxed{m\ddot x+ml(\ddot\varphi\cos\varphi-\dot\varphi^2\sin\varphi)+kx=0},
$$

$$
\boxed{\ddot x\cos\varphi+l\ddot\varphi+g\sin\varphi=0}.
$$

線形化すると

$$
m\ddot x+ml\ddot\varphi+kx=0,\qquad \ddot x+l\ddot\varphi+g\varphi=0.
$$

両式の差から $kx=mg\varphi$。したがって

$$
(mg+kl)\ddot\varphi+kg\varphi=0,\qquad
\boxed{T_2=2\pi\sqrt{\frac{mg+kl}{kg}}}.
$$

### (4)

重心まわりの慣性モーメントは $I_G=I-mh^2>0$。重心の並進と重心まわりの回転を加えると

$$
\mathcal L=\frac12m\dot x^2+mh\dot x\dot\varphi\cos\varphi+\frac12I\dot\varphi^2-\frac12kx^2-mgh(1-\cos\varphi).
$$

よって非線形の運動方程式は

$$
\boxed{m\ddot x+mh(\ddot\varphi\cos\varphi-\dot\varphi^2\sin\varphi)+kx=0},
$$

$$
\boxed{I\ddot\varphi+mh\ddot x\cos\varphi+mgh\sin\varphi=0}.
$$

線形化し、$x=X\cos\omega t,\ \varphi=\Phi\cos\omega t$ を代入すると

$$
\begin{pmatrix}k-m\omega^2&-mh\omega^2\\-mh\omega^2&mgh-I\omega^2\end{pmatrix}
\begin{pmatrix}X\\\Phi\end{pmatrix}=\boldsymbol0.
$$

係数行列の行列式をゼロとおけば

$$
m(I-mh^2)\omega^4-(kI+m^2gh)\omega^2+kmgh=0.
$$

したがって

$$
\boxed{\omega_{\pm}=\sqrt{\frac{kI+m^2gh\ \pm\sqrt{(kI-m^2gh)^2+4km^3gh^3}}{2m(I-mh^2)}}},\qquad \omega_-<\omega_+.
$$

各モードの振幅比は

$$
\boxed{\frac{X}{\Phi}=\frac{mh\omega_\pm^2}{k-m\omega_\pm^2}}.
$$

$\omega_-^2<k/m<\omega_+^2$ より、低次モードでは支点変位 $x$ と角変位 $\varphi$ が同位相、高次モードでは逆位相になる。一般の微小運動はこの二つの固有振動の重ね合わせである。

## **Reference**

- [京都大学公式原問題のアーカイブ（2014年度、PDF 3ページ）](https://web.archive.org/web/20160619035159id_/http://www.me.t.kyoto-u.ac.jp:80/ja/admission/exam/body/past_problems/files/sm62wf)
- [SN：H26 機械力学 1-2](https://bloodystream.hatenadiary.jp/entry/2021/05/05/183000)
