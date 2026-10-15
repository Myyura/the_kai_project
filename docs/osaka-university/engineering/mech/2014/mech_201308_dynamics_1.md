---
sidebar_label: "2014年度 機械力学・機構学 問題1"
tags:
  - Osaka-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
---

# 大阪大学 工学研究科 機械工学専攻 2014年度 機械力学・機構学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、質量を無視できる長さ $\ell$ の棒 OP の端 O を固定点に回転自由に支持し、端 P に質量 $m$、直径 $\sqrt2\ell$ の一様な薄い円板を回転自由に取り付ける。円板の中心を Q とし、$PQ=\ell/2$ とする。棒と円板は同じ鉛直面内で運動する。OP と PQ がそれぞれ鉛直下向きとなす角を $\theta,\phi$ とし、いずれも反時計回りを正とする。

P にねじりばねを取り付け、棒と円板の相対角 $\phi-\theta$ が $0$ のときに復元モーメントが $0$ となる。ばね定数は $mg\ell k$ とする。ここで $k\ge0$ は無次元の定数である。重力加速度を $g$ とし、$\theta=\phi=0$ 付近の微小運動を考える。摩擦、空気抵抗、棒・円板の厚さ、ばねの質量を無視する。

1. 系の運動エネルギーとポテンシャルエネルギーを求めよ。
2. 運動方程式を求めよ。
3. 2 つの固有角振動数 $\omega_1,\omega_2$（$\omega_1>\omega_2$）を求めよ。
4. $k\to\infty$ のときの $\omega_2$ の極限を求めよ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka-university/engineering/mech/2014/mech_201308_dynamics_1-question-fig1.png)

#### 题目描述

如图，无质量杆 OP 长 $\ell$，O 点固定且可自由转动。P 处铰接均匀薄圆盘，圆盘质量为 $m$、直径为 $\sqrt2\ell$，中心为 Q，且 $PQ=\ell/2$。杆和圆盘在同一竖直面内运动。OP、PQ 分别与竖直向下方向的夹角为 $\theta,\phi$，两角均以逆时针为正。

P 处安装扭转弹簧，相对角 $\phi-\theta=0$ 时恢复力矩为零，扭转刚度为 $mg\ell k$，其中 $k\ge0$ 无量纲。重力加速度为 $g$，考虑 $\theta=\phi=0$ 附近的小运动。忽略摩擦、空气阻力、杆及圆盘厚度和弹簧质量。

1. 求动能和势能。
2. 求运动方程。
3. 求两个固有角频率 $\omega_1>\omega_2$。
4. 求 $k\to\infty$ 时 $\omega_2$ 的极限。

## **Kai**

### (1)

円板の半径は $\ell/\sqrt2$ なので、中心 Q まわりの慣性モーメントは

$$
I_Q=\frac12m\left(\frac{\ell}{\sqrt2}\right)^2
=\frac{m\ell^2}{4}.
$$

Q の座標を右向き $X$、上向き $Y$ で表すと

$$
X_Q=\ell\sin\theta+\frac\ell2\sin\phi,
\qquad
Y_Q=-\ell\cos\theta-\frac\ell2\cos\phi.
$$

よって、重心の並進と重心まわりの回転を合わせて

$$
\begin{aligned}
T&=\frac m2(\dot X_Q^2+\dot Y_Q^2)+\frac{I_Q}{2}\dot\phi^2\\
&=\boxed{\frac{m\ell^2}{2}\dot\theta^2
+\frac{m\ell^2}{2}\cos(\theta-\phi)\dot\theta\dot\phi
+\frac{m\ell^2}{4}\dot\phi^2}.
\end{aligned}
$$

$\theta=\phi=0$ を位置エネルギーの基準とすると

$$
\boxed{U=mg\ell\left[(1-\cos\theta)+\frac12(1-\cos\phi)
+\frac{k}{2}(\phi-\theta)^2\right]}.
$$

微小運動の計算では、これらの二次部分

$$
T_2=\frac{m\ell^2}{2}\dot\theta^2
+\frac{m\ell^2}{2}\dot\theta\dot\phi
+\frac{m\ell^2}{4}\dot\phi^2,
$$

$$
U_2=\frac{mg\ell}{2}\left[\theta^2+\frac12\phi^2+k(\phi-\theta)^2\right]
$$

を用いる。$\phi$ は円板の絶対角なので、P の速度と円板の相対運動による速度の交差項を残す必要がある。

### (2)

$\mathcal L=T_2-U_2$ に Lagrange の方程式を適用すると

$$
\boxed{m\ell^2\left(\ddot\theta+\frac12\ddot\phi\right)
+mg\ell\left[(1+k)\theta-k\phi\right]=0},
$$

$$
\boxed{m\ell^2\left(\frac12\ddot\theta+\frac12\ddot\phi\right)
+mg\ell\left[-k\theta+\left(\frac12+k\right)\phi\right]=0}.
$$

### (3)

$\lambda=\omega^2\ell/g$ とおくと、固有値条件は

$$
\det\left[
\begin{pmatrix}1+k&-k\\-k&1/2+k\end{pmatrix}
-\lambda\begin{pmatrix}1&1/2\\1/2&1/2\end{pmatrix}
\right]=0.
$$

したがって

$$
\lambda^2-(4+10k)\lambda+(2+6k)=0,
$$

$$
\boxed{\omega_1=\sqrt{\frac g\ell\left(2+5k+\sqrt{25k^2+14k+2}\right)}},
$$

$$
\boxed{\omega_2=\sqrt{\frac g\ell\left(2+5k-\sqrt{25k^2+14k+2}\right)}}.
$$

### (4)

小さい固有値を有理化すると

$$
\lambda_2=
\frac{2+6k}{2+5k+\sqrt{25k^2+14k+2}}
\longrightarrow\frac35.
$$

よって

$$
\boxed{\lim_{k\to\infty}\omega_2=\sqrt{\frac{3g}{5\ell}}}.
$$

実際、ばねが無限に硬い極限では $\theta=\phi$ となり、Q は O から $3\ell/2$ にある。全慣性モーメントは $I_O=m(3\ell/2)^2+I_Q=5m\ell^2/2$、重力による角剛性は $3mg\ell/2$ だから、同じ結果が得られる。
