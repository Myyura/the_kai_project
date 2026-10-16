---
sidebar_label: "2019年8月実施 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2019年8月実施 機械力学 問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

水平な床の上に、質量 $m$、半径 $r$ の同一の一様円柱 1、2 を置き、中心間をばね定数 $k$ のばねでつなぐ。円柱 1 が右側、円柱 2 が左側にある。各円柱はすべらずに転がる。ばねは $t=0$ に自然長であり、円柱は静止している。右向きを正とする中心の変位を $x_1,x_2$、時計回りを正とする回転角を $\theta_1,\theta_2$ とする。円柱 1 に時計回りのトルク $N=N_0+\bar N\sin\Omega t$ が作用する。$N_0,\bar N,\Omega$ は定数である。

1. 各円柱が床から受ける摩擦力の向きを図示し、水平方向の運動方程式を示せ。
2. 各円柱の回転の運動方程式を示せ。
3. $N=0$ の自由振動について、固有角振動数および対応する固有モードを求めよ。
4. モード座標 $\xi_1,\xi_2$ を適切に取り、各モードが連成しない運動方程式を求めよ。
5. 円柱 1、2 からなる系の重心位置の時間変化を求めよ。

#### 题目描述

质量 $m$、半径 $r$ 的两个相同均匀圆柱在水平地面无滑动滚动，中心之间连接弹簧 $k$；1 在右、2 在左。初始弹簧自然长且两柱静止。中心位移向右为正，转角顺时针为正。圆柱 1 受到 $N=N_0+\bar N\sin\Omega t$ 的顺时针力矩。① 画摩擦力方向并写平动方程。② 写转动方程。③ 求无外力矩时的固有频率和振型。④ 定义模态坐标并解耦。⑤ 求系统质心的位置变化。

## **Kai**

### (1)

摩擦力 $f_1,f_2$ は右向きを正として定義する。実際の向きは得られた値の符号で決まる。

![円柱に作用する力と正方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/kyushu_201908_dynamics2.svg)

$$
\boxed{m\ddot x_1=-k(x_1-x_2)+f_1,\qquad
m\ddot x_2=k(x_1-x_2)+f_2}.
$$

### (2)

$I=mr^2/2$、$x_i=r\theta_i$ より

$$
\boxed{\frac{mr^2}{2}\ddot\theta_1=N-rf_1,\qquad
\frac{mr^2}{2}\ddot\theta_2=-rf_2}.
$$

摩擦力を消去すると

$$
\frac{3m}{2}\binom{\ddot x_1}{\ddot x_2}
+k\begin{pmatrix}1&-1\\-1&1\end{pmatrix}\binom{x_1}{x_2}
=\binom{N/r}{0}.
$$

なお $f_1=2N/(3r)+k(x_1-x_2)/3$、$f_2=-k(x_1-x_2)/3$ である。

### (3)

$$
\det\left[k\begin{pmatrix}1&-1\\-1&1\end{pmatrix}
-\frac{3m\omega^2}{2}I\right]=0
$$

より

$$
\boxed{\omega_1=0,\quad\boldsymbol X_1=\binom11},\qquad
\boxed{\omega_2=2\sqrt{\frac{k}{3m}},\quad\boldsymbol X_2=\binom1{-1}}.
$$

$\omega_1=0$ はばねを伸縮させない剛体並進モードである。

### (4)

$$
\binom{x_1}{x_2}=\xi_1\binom11+\xi_2\binom1{-1},\qquad
\xi_1=\frac{x_1+x_2}{2},\quad\xi_2=\frac{x_1-x_2}{2}.
$$

二つの運動方程式を加減して

$$
\boxed{3m\ddot\xi_1=\frac Nr,\qquad
3m\ddot\xi_2+4k\xi_2=\frac Nr}.
$$

### (5)

重心変位は $x_G=\xi_1$。初期条件 $x_G(0)=\dot x_G(0)=0$ の下で積分すると

$$
\boxed{x_G(t)=\frac{N_0t^2}{6mr}
+\frac{\bar N}{3mr\Omega^2}(\Omega t-\sin\Omega t)}.
$$

重心の絶対位置は初期位置にこの変位を加えたものである。$\Omega=0$ では極限を取り、第2項は $0$ となる。

## **Reference**

- [九州大学 2020年度 機械力学 公式問題（PDF 2ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-dynamics.pdf)
