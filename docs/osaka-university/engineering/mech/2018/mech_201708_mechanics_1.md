---
sidebar_label: "2017年8月実施 力学 問題1"
tags:
  - Osaka-University
  - Physics.Mechanics.Work-and-Mechanical-Energy
  - Physics.Mechanics.Angular-Momentum-Conservation-and-Areal-Velocity
---

# 大阪大学 工学研究科 機械工学専攻 2017年8月実施 力学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

原点を O、$z$ 軸を鉛直上向きとする直交座標 $(x,y,z)$ と円筒座標 $(r,\theta,z)$ を考える。両者は $x=r\cos\theta,y=r\sin\theta$ で関係付けられる。$\theta$ を一定とする平面上に、滑らかで単調増加する曲線 $z=f(r)$ があり、$f(0)=0,f(a)=b$（$a,b>0$）、$r>0$ で $0<df/dr<\infty$ を満たす。この曲線を $z$ 軸のまわりに回転してできる面の内側を、質量 $m$ の質点が摩擦なく運動する。重力加速度の大きさを $g$ とする。

1. 質点が高さ $z$ を一定にして半径 $r$ の円周を速さ $v$ で運動するとき、面からの抗力の大きさ $N$ と曲面の傾き $dz/dr$ を求めよ。
2. (1) の円運動の速さ $v$ が半径 $r$ に比例するとき、$f(r)$ を求めよ。
3. 質点の運動エネルギーと位置エネルギーを $r,\theta,z$ およびそれらの時間微分で表せ。位置エネルギーは $z=0$ で $0$ とする。
4. 原点 O まわりの角運動量の $z$ 成分から、$r^2\dot\theta$ が一定であることを示せ。
5. (2) の曲面で、質点を初期位置 $(r_0,0,z_0)$ から水平方向に速さ $v_0$ で運動させると、半径 $r_0$、高さ一定の円運動となる。同じ位置から水平な接線方向の初速を $v_1<v_0$ に変えたとき、その後の $z$ 座標の最小値を求めよ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2018/mech_201708_mechanics_1-question-fig1.png)

#### 题目描述

取竖直向上为 $z$ 轴，直角坐标和柱坐标满足 $x=r\cos\theta,y=r\sin\theta$。光滑单调增加的母线 $z=f(r)$ 满足 $f(0)=0,f(a)=b$（$a,b>0$），且对 $r>0$ 有 $0<f'(r)<\infty$。将其绕 $z$ 轴旋转得到一个曲面，质量为 $m$ 的质点沿曲面内侧无摩擦运动，重力加速度为 $g$。

1. 当质点在高度不变、半径为 $r$ 的圆周上以速率 $v$ 运动时，求支持力大小 $N$ 和曲面斜率 $dz/dr$。
2. 若这样的圆周运动速率与半径成正比，求 $f(r)$。
3. 用柱坐标及其时间导数表示动能和重力势能，取 $z=0$ 处势能为零。
4. 由绕原点的角动量的竖直分量证明 $r^2\dot\theta$ 守恒。
5. 在 (2) 的曲面上，从 $(r_0,0,z_0)$ 给予水平切向速率 $v_0$ 时恰好做等高圆周运动。若从相同位置将初速降为 $v_1<v_0$，求以后运动的最低高度。

## **Kai**

### (1)

曲面の接線と水平面のなす角を $\phi$ とすると、$\tan\phi=dz/dr$ である。抗力の鉛直・半径方向成分から

$$
N\cos\phi=mg,\qquad N\sin\phi=\frac{mv^2}{r}.
$$

よって

$$
\boxed{N=m\sqrt{g^2+\frac{v^4}{r^2}}},\qquad
\boxed{\frac{dz}{dr}=\frac{v^2}{gr}}.
$$

### (2)

$v=cr$ とおくと、$f'(r)=c^2r/g$。$f(0)=0$ と $f(a)=b$ を使って

$$
f(r)=\frac{c^2r^2}{2g},\qquad c^2=\frac{2gb}{a^2}.
$$

従って

$$
\boxed{f(r)=\frac{b}{a^2}r^2}.
$$

### (3)

$\dot x^2+\dot y^2=\dot r^2+r^2\dot\theta^2$ なので

$$
\boxed{T=\frac m2(\dot r^2+r^2\dot\theta^2+\dot z^2)},
\qquad \boxed{U=mgz}.
$$

### (4)

角運動量の $z$ 成分は

$$
L_z=m(x\dot y-y\dot x)=mr^2\dot\theta.
$$

重力と面の法線抗力はいずれも $z$ 軸まわりのモーメントを持たない。従って $\dot L_z=0$、すなわち

$$
\boxed{r^2\dot\theta=\text{一定}}.
$$

### (5)

円運動の条件から

$$
v_0^2=gr_0f'(r_0)=\frac{2gb}{a^2}r_0^2=2gz_0.
$$

初速 $v_1$ の場合、角運動量保存より $r^2\dot\theta=r_0v_1$。また $r^2/r_0^2=z/z_0$ だから

$$
r^2\dot\theta^2=\frac{v_1^2z_0}{z}.
$$

高さの極値では $\dot r=\dot z=0$ となるため、エネルギー保存は

$$
\frac12mv_1^2+mgz_0
=\frac12m\frac{v_1^2z_0}{z}+mgz.
$$

整理すると

$$
(z-z_0)(2gz-v_1^2)=0.
$$

$v_1^2<v_0^2=2gz_0$ より、初期高度 $z_0$ は最大値、他方が最小値となる。したがって

$$
\boxed{z_{\min}=\frac{v_1^2}{2g}
=z_0\left(\frac{v_1}{v_0}\right)^2}.
$$

$v_1=0$ の場合も、質点が底 $z=0$ に達するので同じ式となる。
