---
sidebar_label: "2017年8月実施 力学 問題3"
tags:
  - Osaka-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Work-and-Mechanical-Energy
---

# 大阪大学 工学研究科 機械工学専攻 2017年8月実施 力学 問題3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題3（解答用紙：青）

質量 $m$、長さ $\ell$ の一様な棒があり、棒の両端は図のように鉛直壁と水平床に接している。棒を含む鉛直面内において、鉛直壁と水平床の交点を原点 O とし、床に沿って右向きに $x$ 軸を、壁に沿って上向きに $y$ 軸をとり、$xy$ 平面内の棒の運動を考える。壁と床はともに滑らかであり、壁から棒には棒の上端において $x$ 軸正の向きに垂直抗力 $N_x$ が作用し、床から棒には棒の下端において $y$ 軸正の向きに垂直抗力 $N_y$ が作用する。棒の重心 G の座標を $(x_G,y_G)$ とし、棒の回転角を鉛直下向きから測って $\theta$ とする。時刻 $0$ において棒は回転角 $\theta_0$（$0<\theta_0<\pi/2$）で静止しており、そこから棒を静かに放すと、棒は壁と床に沿って運動し、ある時刻において棒の上端は壁から離れる。棒が時刻 $0$ で動きだしてから、棒の上端が壁から離れるまでの間を対象に、以下の問いに答えなさい。ただし、棒の太さは無視できるものとし、棒の重心まわりの慣性モーメントを $I_G$ として、重力加速度の大きさを $g$ とする。

(1) 棒の並進の運動方程式と、重心 G のまわりの回転の運動方程式を、$m,I_G,x_G,y_G,\theta,N_x,N_y$ を用いて表しなさい。

(2) $I_G$ を $m,\ell$ を用いて表しなさい。

(3) 小問 (1) と小問 (2) の結果から、$N_x,N_y$ を消去して $\ddot\theta$ を求めなさい。

(4) エネルギーの保存則を用いて $\dot\theta$ を求めなさい。

(5) 棒の上端が壁から離れる瞬間の $\cos\theta$ の値を求めなさい。

(6) 棒の下端は床から離れないことを示しなさい。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2018/mech_201708_mechanics_3_original_figure_1.png)

### 题目描述

问题3（使用蓝色答题纸）

一根质量为 $m$、长度为 $\ell$ 的均匀杆，其两端如图分别接触竖直墙和水平地面。在包含杆的竖直平面内，以墙与地面的交点 O 为原点，沿地面向右取 $x$ 轴，沿墙向上取 $y$ 轴，考虑杆在 $xy$ 平面内的运动。墙与地面均光滑，墙在杆上端施加沿 $x$ 轴正向的支持力 $N_x$，地面在杆下端施加沿 $y$ 轴正向的支持力 $N_y$。杆质心 G 的坐标为 $(x_G,y_G)$，从竖直向下方向量取杆的转角 $\theta$。时刻 $0$ 时，杆静止于 $\theta_0$（$0<\theta_0<\pi/2$）；静止释放后，杆沿墙和地面运动，并在某一时刻上端离墙。针对从开始运动至上端离墙这段时间回答下列问题。忽略杆的粗细，杆绕质心的转动惯量为 $I_G$，重力加速度大小为 $g$。

(1) 用 $m,I_G,x_G,y_G,\theta,N_x,N_y$ 表示杆的平动方程和绕质心 G 的转动方程。

(2) 用 $m,\ell$ 表示 $I_G$。

(3) 利用 (1)、(2) 的结果，消去 $N_x,N_y$，求 $\ddot\theta$。

(4) 利用能量守恒求 $\dot\theta$。

(5) 求杆上端离墙瞬间的 $\cos\theta$。

(6) 证明杆下端不会离开地面。

## **Kai**

### (1)

並進と重心まわりの回転の運動方程式は

$$
\boxed{m\ddot x_G=N_x},\qquad
\boxed{m\ddot y_G=N_y-mg},
$$

$$
\boxed{I_G\ddot\theta
=\frac\ell2(N_y\sin\theta-N_x\cos\theta)}.
$$

### (2)

線密度 $m/\ell$ より

$$
\boxed{I_G=\frac m\ell\int_{-\ell/2}^{\ell/2}s^2\,ds
=\frac1{12}m\ell^2}.
$$

### (3)

両端が壁と床に接している間は

$$
x_G=\frac\ell2\sin\theta,\qquad y_G=\frac\ell2\cos\theta.
$$

従って

$$
\ddot x_G=\frac\ell2(\ddot\theta\cos\theta-\dot\theta^2\sin\theta),
\qquad
\ddot y_G=-\frac\ell2(\ddot\theta\sin\theta+\dot\theta^2\cos\theta).
$$

これらと $N_x=m\ddot x_G,N_y=m(\ddot y_G+g)$ を回転の式に代入すると

$$
\frac1{12}m\ell^2\ddot\theta
=-\frac14m\ell^2\ddot\theta+\frac12mg\ell\sin\theta.
$$

よって

$$
\boxed{\ddot\theta=\frac{3g}{2\ell}\sin\theta}.
$$

### (4)

抗力は仕事をしない。$\dot x_G^2+\dot y_G^2=\ell^2\dot\theta^2/4$ とエネルギー保存から

$$
\frac{mg\ell}{2}\cos\theta_0
=\frac{mg\ell}{2}\cos\theta
+\frac12m\frac{\ell^2}{4}\dot\theta^2
+\frac12\frac{m\ell^2}{12}\dot\theta^2.
$$

$\theta$ は増加するので

$$
\boxed{\dot\theta=\sqrt{\frac{3g}{\ell}(\cos\theta_0-\cos\theta)}}.
$$

### (5)

(3)、(4) を水平抗力の式に入れると

$$
N_x=\frac{3mg}{4}\sin\theta(3\cos\theta-2\cos\theta_0).
$$

$\sin\theta>0$ であり、上端が壁を離れるとき $N_x=0$ だから

$$
\boxed{\cos\theta=\frac23\cos\theta_0}.
$$

### (6)

鉛直抗力は

$$
\begin{aligned}
N_y&=mg-\frac{m\ell}{2}
(\ddot\theta\sin\theta+\dot\theta^2\cos\theta)\\
&=mg\left[\frac94\cos^2\theta
-\frac32\cos\theta_0\cos\theta+\frac14\right]\\
&=\frac{mg}{4}\left[
9\left(\cos\theta-\frac13\cos\theta_0\right)^2
+\sin^2\theta_0\right]>0.
\end{aligned}
$$

$0<\theta_0<\pi/2$ より右辺は正であり、対象としている運動中に下端は床から離れない。
