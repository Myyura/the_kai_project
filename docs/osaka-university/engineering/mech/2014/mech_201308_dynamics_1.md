---
sidebar_label: "2013年8月実施 機械力学・機構学 問題1"
tags:
  - Osaka-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
---

# 大阪大学 工学研究科 機械工学専攻 2013年8月実施 機械力学・機構学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題1（解答用紙：赤）

図に示すように、紙面に平行な鉛直面内に固定された点 O から長さ $\ell$ の質量のない細い棒が吊り下げられている。棒の他端 P には質量 $m$、直径 $\sqrt{2}\ell$ の一様な薄い円板が取り付けられており、円板の幾何学的中心 Q は点 P から $\overline{\mathrm{PQ}}=\ell/2$ だけ離れている。棒は点 O を支点として、円板は点 P を支点としてそれぞれ鉛直面内を回転できるものとする。鉛直軸下方に対する $\overline{\mathrm{OP}}$ の角度を $\theta$、$\overline{\mathrm{PQ}}$ の角度を $\phi$ とし、いずれも反時計回りを正とする。また点 P には、$\phi-\theta=0$ を平衡点とする回転ばね定数 $K=mg\ell k$（ただし $k>0$）のばねが取り付けられていて、棒と円板との間に大きさ $K(\phi-\theta)$ の復元トルクが働くものとする。このとき、$\theta=0$、$\phi=0$ の状態からの微小運動について以下の問いに答えなさい。ただし点 O、P における摩擦、空気抵抗、棒の太さ、円板の厚さ、ばねの重さは無視できるものとし、重力加速度の大きさは $g$ とする。

(1) 系全体の運動エネルギー $T$ とポテンシャル $U$ を求めなさい。

(2) 微小運動の運動方程式を求めなさい。

(3) 微小運動に対する固有角振動数 $\omega_1$、$\omega_2$（ただし $\omega_1>\omega_2$）を $k$、$\ell$、$g$ を用いて表しなさい。

(4) $k$ が限りなく大きくなるときの $\omega_2$ の極限を $\ell$、$g$ を用いて表しなさい。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2014/mech_201308_dynamics_1_original_figure_1.png)

#### 题目描述

问题1（使用红色答题纸）

如图，在平行于纸面的竖直平面内，从固定点 O 悬挂一根长为 $\ell$、没有质量的细杆。杆另一端 P 连接一个质量为 $m$、直径为 $\sqrt{2}\ell$ 的均匀薄圆盘。圆盘的几何中心 Q 与 P 点之间的距离为 $\overline{\mathrm{PQ}}=\ell/2$。杆可绕 O 点、圆盘可绕 P 点分别在竖直平面内转动。令 $\overline{\mathrm{OP}}$、$\overline{\mathrm{PQ}}$ 相对于竖直向下方向的夹角分别为 $\theta$、$\phi$，均以逆时针为正。P 点还装有扭簧，其平衡位置为 $\phi-\theta=0$，扭转弹簧常数为 $K=mg\ell k$（$k>0$），杆与圆盘之间产生大小为 $K(\phi-\theta)$ 的恢复力矩。针对 $\theta=0$、$\phi=0$ 状态附近的微小运动回答下列问题。忽略 O、P 点的摩擦、空气阻力、杆的粗细、圆盘厚度和弹簧重量，重力加速度大小为 $g$。

(1) 求整个系统的动能 $T$ 和势能 $U$。

(2) 求微小运动的运动方程。

(3) 用 $k$、$\ell$、$g$ 表示微小运动的固有角频率 $\omega_1$、$\omega_2$（$\omega_1>\omega_2$）。

(4) 用 $\ell$、$g$ 表示 $k$ 无限增大时 $\omega_2$ 的极限。

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
