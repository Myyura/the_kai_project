---
sidebar_label: "2013年8月実施 機械力学 1-2"
tags:
  - Kyoto-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Small-Angle-Pendulum
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 京都大学 工学研究科 機械工学群 2013年8月実施 機械力学 1-2

## **Author**

祭音Myyura (Based on [SN's answer](https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000) refined with GPT 6 Astra)

## **Description**

1-2　図1-1から図1-3に示すような、重力加速度 $g$ の働く場における紙面内での微小振動について考える。

(1) 図1-1に示すような質量の無視できる長さ $l$ の棒の一端に、質量 $m$ の質点を付けた単振り子の運動について考える。質点の鉛直下方からの振れ角を $\varphi$ として、Newton の運動方程式から質点の運動が単振動であることを示し、周期 $T_1$ を求めよ。ここで、角度 $\varphi$ が微小であることを用いよ。

![原題の図1-1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/engineering/mech/2014/mech_201308_dynamics_1_2_original_figure_1.png)

(2) Lagrange 方程式を用いて、上記 (1) と同じ運動方程式が得られることを示せ。

(3) 図1-2に示すように、単振り子の支点 O が水平方向にのみ伸び縮みするばね定数 $k$ のばねによって支えられている場合を考える。この質点の運動方程式を Lagrange 方程式を用いて、角度 $\varphi$ を微小近似することなく導出せよ。さらに、角度 $\varphi$ は微小であるという仮定のもとに線形近似し、周期 $T_2$ を求めよ。なお、ばねが自然長のときに変位量 $x$ を0とする。

![原題の図1-2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/engineering/mech/2014/mech_201308_dynamics_1_2_original_figure_2.png)

(4) 図1-3に示すように、単振り子を質量 $m$ の剛体振り子（実体振り子）で置き換えた場合について考える。支点 O から剛体振り子の重心 G までの距離を $h$、支点周りの慣性モーメントを $I$ とする。この系の運動方程式を Lagrange 方程式を用いて、角度 $\varphi$ を微小近似することなく導出せよ。さらに、角度 $\varphi$ は微小であるという仮定のもとに線形近似し角振動数を求め、振動の様子を簡潔に説明せよ。なお、ばねが自然長のときに変位量 $x$ を0とする。

![原題の図1-3](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/engineering/mech/2014/mech_201308_dynamics_1_2_original_figure_3.png)

### 题目描述

1-2　考虑图1-1至图1-3所示、重力加速度为 $g$ 的场中纸面内的微小振动。

(1) 如图1-1，在质量可忽略、长为 $l$ 的杆的一端连接质量为 $m$ 的质点，构成单摆。令质点相对于竖直向下方向的摆角为 $\varphi$。根据牛顿运动方程，证明质点作简谐运动，并求周期 $T_1$。利用角度 $\varphi$ 很小这一条件。

(2) 用拉格朗日方程证明可以得到与 (1) 相同的运动方程。

(3) 如图1-2，单摆支点 O 由弹簧常数为 $k$、仅沿水平方向伸缩的弹簧支承。用拉格朗日方程推导质点的运动方程，推导时不要对 $\varphi$ 作小角近似。然后在 $\varphi$ 很小的假设下线性化，求周期 $T_2$。弹簧为自然长度时取位移 $x=0$。

(4) 如图1-3，将单摆替换为质量为 $m$ 的刚体摆（复摆）。从支点 O 到刚体摆质心 G 的距离为 $h$，绕支点的转动惯量为 $I$。用拉格朗日方程推导系统的运动方程，推导时不要对 $\varphi$ 作小角近似。然后在 $\varphi$ 很小的假设下线性化，求角频率，并简要说明振动的形式。弹簧为自然长度时取位移 $x=0$。

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
\begin{gathered}
\boxed{\omega_{\pm}=\sqrt{\frac{kI+m^2gh\ \pm\sqrt{(kI-m^2gh)^2+4km^3gh^3}}{2m(I-mh^2)}}},\\
\omega_-<\omega_+.
\end{gathered}
$$

各モードの振幅比は

$$
\boxed{\frac{X}{\Phi}=\frac{mh\omega_\pm^2}{k-m\omega_\pm^2}}.
$$

$\omega_-^2<k/m<\omega_+^2$ より、低次モードでは支点変位 $x$ と角変位 $\varphi$ が同位相、高次モードでは逆位相になる。一般の微小運動はこの二つの固有振動の重ね合わせである。

## **Reference**

- [京都大学公式原問題のアーカイブ（2014年度、PDF 3ページ）](https://web.archive.org/web/20160619035159id_/http://www.me.t.kyoto-u.ac.jp:80/ja/admission/exam/body/past_problems/files/sm62wf)
- [SN：H26 機械力学 1-2](https://bloodystream.hatenadiary.jp/entry/2021/05/05/183000)
