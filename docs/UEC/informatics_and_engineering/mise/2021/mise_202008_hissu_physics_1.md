---
sidebar_label: "2020年8月実施 必須問題（物理学基礎）問1"
tags:
  - University-of-Electro-Communications
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Angular-Momentum-Conservation-and-Areal-Velocity
  - Physics.Mechanics.Collision-and-Coefficient-of-Restitution
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 必須問題（物理学基礎）問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

床から高さ $h$ の点 $P$ を持つ台車が、左向きに一定の速さ $v$ で走る。台車から右向きに水平に張り出した棒が $P$ で折れ、長さ $l>h$ の部分 $AB$ が $P$ まわりに回転して落下する。右端 $A$ の質量は $m_a$、左端 $B$ の質量は $m_b$、両端間の棒の質量は無視する。重力加速度は $g$、空気抵抗は無視する。

1. $B$ が $P$ に留まり、$A$ が床に衝突するまでを考える。鉛直方向の初速度は0である。
   - (1a) $P$ まわりの慣性モーメントを求めよ。
   - (1b) 折れ始めた瞬間の $P$ を原点、鉛直上向きを $y$ 軸正方向とする右手座標系を用い、両端の位置 $r_A,r_B$、速度 $v_A,v_B$、運動エネルギー $T$、ポテンシャルエネルギー $U$ を表せ。棒が鉛直線となす角を $\theta$、時刻を $t$ とし、$U$ の基準は $P$ とする。
   - (1c) ラグランジアンを $\Lambda$ と表し、運動方程式を求めよ。
2. $A$ が床上の点 $Q$ に完全非弾性衝突して固定され、同時に $B$ は $P$ を離れる。衝突直後の $B$ のまわりに外力はないものとし、その後は $Q$ を支点として棒が回転する。
   - (2a) 衝突直前の $Q$ まわりの角運動量 $L^-$ を、衝突時の角度 $\theta_0$ を使わずに表せ。
   - (2b) 衝突後、$Q$ から上向きの鉛直線に対して左向きに測った棒の角度を $\phi$、直後の角度を $\phi_0$、角速度を $\omega_0$ とする。直後の角運動量 $L^+$ を $\omega_0$ で表し、角運動量保存から $\omega_0$ を $l,v,h$ で表せ。
   - (2c) $B$ が $P$ を離れた時刻を0とし、初めて床に達するまでの時間を求めよ。$\phi_0$ は $\pi/2$ 付近とし、$\sin\phi\simeq1$ と近似してよい。

#### 题目描述

小车以速度 $v$ 向左匀速运动，其高 $h$ 的支点 $P$ 右侧伸出长 $l>h$ 的无质量杆，两端 $A,B$ 分别有质点 $m_a,m_b$。杆从水平静止转动状态开始绕随车运动的 $B=P$ 落下。先求惯性矩、两端位置速度、动能势能及拉格朗日方程。随后 $A$ 在地面 $Q$ 点完全非弹性碰撞并固定，$B$ 同时脱离小车。求碰撞前后关于 $Q$ 的角动量和碰后角速度；碰后角度 $\phi$ 从向上竖直线朝左计量，在 $\phi_0\approx\pi/2,\sin\phi\approx1$ 近似下求 $B$ 首次落地所需时间。重力加速度为 $g$，忽略空气阻力。

## **Kai**

### (1a), (1b)

$x$ 軸を右向きとし、$\theta$ は鉛直下向きから右側へ測る。初期値は $\theta=\pi/2$ で、落下中は $\dot\theta<0$。したがって

$$
\boxed{I_P=m_al^2},\qquad
r_B=\begin{pmatrix}-vt\\0\end{pmatrix},\quad
r_A=\begin{pmatrix}-vt+l\sin\theta\\-l\cos\theta\end{pmatrix},
$$

$$
v_B=\begin{pmatrix}-v\\0\end{pmatrix},\qquad
v_A=\begin{pmatrix}-v+l\dot\theta\cos\theta\\l\dot\theta\sin\theta\end{pmatrix}.
$$

$$
\boxed{T=\frac12(m_a+m_b)v^2+\frac12m_a(l^2\dot\theta^2-2vl\dot\theta\cos\theta)},\qquad
\boxed{U=-m_agl\cos\theta}.
$$

### (1c)

$\Lambda=T-U$ とすると

$$
\frac d{dt}\frac{\partial\Lambda}{\partial\dot\theta}
=m_a(l^2\ddot\theta+vl\dot\theta\sin\theta),\qquad
\frac{\partial\Lambda}{\partial\theta}
=m_avl\dot\theta\sin\theta-m_agl\sin\theta.
$$

よって $\boxed{\ddot\theta+(g/l)\sin\theta=0}$。等速度で移動する支点なので $v$ は運動方程式から消える。

### (2a), (2b)

反時計回りの角運動量を正に取る。衝突直前、$A$ は $Q$ 上にあり寄与は0。$B$ の位置は $Q$ に対して $(-l\sin\theta_0,l\cos\theta_0)$、速度は $(-v,0)$。$l\cos\theta_0=h$ より

$$
\boxed{L^-=m_bvh},\qquad
\boxed{L^+=m_bl^2\omega_0}.
$$

衝突の撃力は $Q$ を通るため、この点まわりの角運動量を変えない。したがって

$$
\boxed{\omega_0=\frac{vh}{l^2}}.
$$

### (2c)

衝突後の重力によるモーメントから $m_bl^2\ddot\phi=m_bgl\sin\phi\simeq m_bgl$。したがって

$$
\phi(t)=\phi_0+\omega_0t+\frac{g}{2l}t^2.
$$

$B$ が床に達するとき $\phi=\pi/2$ なので、正の解は

$$
\boxed{t_*\simeq\frac lg\left[-\omega_0+
\sqrt{\omega_0^2+\frac{2g}{l}\left(\frac\pi2-\phi_0\right)}\right]}.
$$

ここで $\omega_0=vh/l^2,\ \pi/2-\phi_0=\arcsin(h/l)$ を代入できる。さらに $h/l\ll1$ の一次近似まで行えば

$$
\boxed{t_*\simeq\frac1g\left[-\frac{vh}{l}+\sqrt{\left(\frac{vh}{l}\right)^2+2gh}\right]}.
$$

最後の式には、設問の角加速度近似に加えて $\arcsin(h/l)\simeq h/l$ を用いている。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 5–6ページ](https://web.archive.org/web/20241224120234id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_mandatory202008.pdf)
