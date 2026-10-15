---
sidebar_label: "2013年度 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2013年度 機械力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

長さ $l$ の一様な棒 A（質量 $3m$）は上端 O_A から下向きに、棒 B（質量 $m$）は下端 O_B から上向きに支持されている。微小角変位を図の $\theta_A,\theta_B$ とする。両角ゼロで A の下端と B の上端は同じ高さとなり、その間をばね定数 $k_1$ のばねで結ぶ。また A の下端は $k_2$ のばねで左側基礎に水平に支持する。両ばねは両角ゼロで自然長。重力加速度は $g$。（50 点）

![下向き・上向きの棒とばね（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2013/dynamics-2-original.png)

1. O_A まわりのモーメントから A の方程式を求めよ。
2. O_B まわりのモーメントから B の方程式を求めよ。
3. $k_1=mg/l$、$k_2=\alpha k_1$ として、平衡点が安定な $\alpha$ の条件を求めよ。
4. $k_1=mg/l$、$k_2=k_1/2$ のときの運動を説明せよ。

#### 题目描述

两根长 $l$ 的均匀杆，一根质量 $3m$ 由上端悬挂，一根质量 $m$ 由下端支承，活动端用 $k_1$ 弹簧连接，前者活动端另用 $k_2$ 弹簧接墙。求微振动方程、刚度比例的稳定条件，并说明比例为二分之一时的运动。

## **Kai**

### (1)

両端の水平変位は $l\theta_A,l\theta_B$。$I_A=(3m)l^2/3=ml^2$ より

$$
\boxed{ml^2\ddot\theta_A+
\left[(k_1+k_2)l^2+\frac32mgl\right]\theta_A-k_1l^2\theta_B=0.}
$$

### (2)

$I_B=ml^2/3$ であり、直立棒の重力は不安定化モーメントとなる。

$$
\boxed{\frac13ml^2\ddot\theta_B-k_1l^2\theta_A+
\left(k_1l^2-\frac12mgl\right)\theta_B=0.}
$$

### (3)

剛性行列は

$$
K=mgl\begin{pmatrix}\alpha+5/2&-1\\-1&1/2\end{pmatrix}.
$$

質量行列は正定値なので、全固有振動数が正となる条件は $K$ が正定値であること。右下要素は正であり

$$
\det K=(mgl)^2\left(\frac\alpha2+\frac14\right)>0
\quad\Longleftrightarrow\quad\boxed{\alpha>-\frac12.}
$$

通常の正のばね定数 $k_2$ はこの条件を満たす。$\alpha=-1/2$ では零固有振動数があり、一般初速度に対してドリフトが生じる。

### (4)

$\alpha=1/2$ は安定領域にある。$z=\omega^2l/g$ とすると

$$
(3-z)(1/2-z/3)-1=0,
\qquad z_\pm=\frac{9\pm\sqrt{57}}4>0.
$$

よって二つの固有モードの振動が重ね合わさる。

$$
\boxed{\omega_\pm=\sqrt{\frac gl\frac{9\pm\sqrt{57}}4},\qquad
\boldsymbol\phi_\pm\propto(1,3-z_\pm)^T.}
$$

低次では両棒端が同方向、高次では反対方向に動く。一般解は各モードの正弦・余弦の線形結合である。
