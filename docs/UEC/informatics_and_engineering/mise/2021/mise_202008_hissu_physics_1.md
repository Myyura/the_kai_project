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

図1のように，一定の速さ $v$ で走る台車の上に地面からの高さ $h$ の位置で棒が水平に固定されている。棒は右端及び右端からの長さ $l$ の位置 $P$ に集中質量を持つ棒とする（$l>h$）。棒が点 $P$ において折れ，点 $P$ のまわりに回転して床に落ちるとき，折れた棒 $AB$ の運動を考える。棒 $AB$ は右端点 $A$，左端点 $B$ にそれぞれ質量 $m_a,m_b$ の質点を持ち，質点間の質量は無視できるとする。また，重力加速度は $g$ とする。空気抵抗は考えなくてよい。

![図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_hissu_physics_1_fig1.png)

1：棒 $AB$ は点 $P$ を支点にして回転しながら落ちていく（図2，鉛直方向の初期速度 $0$）。このとき，右端点 $A$ が地面と衝突するまでの棒 $AB$ の運動を考える。以下の問いに答えよ。

![図2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_hissu_physics_1_fig2.png)

(1a) 棒 $AB$ の点 $P$ 周りの慣性モーメントを求めよ。

(1b) 棒 $AB$ が折れ始めた瞬間の点 $P$ の絶対座標系での位置を原点とする座標系（鉛直上向きを $y$ 軸の正方向とする右手系）において棒 $AB$ の両端点 $A,B$ の位置 $\boldsymbol r_A,\boldsymbol r_B$ と速度 $\boldsymbol v_A,\boldsymbol v_B$ を示し，棒 $AB$ の運動エネルギー $T$，ポテンシャルエネルギー $U$ を求めよ。ただし，棒 $AB$ が鉛直線となす角度 $\theta$，及び時間 $t$ を変数とする。また，ポテンシャルエネルギーは点 $P$ を基準点とする。

(1c) 棒 $AB$ の運動方程式を求めよ。ただし，ラグランジアンは $\Lambda$ を用いて表せ。

2：右端点 $A$ が点 $Q$ において地面に衝突し（図3），左端点 $B$ が点 $P$ から外れ，棒 $AB$ が衝突点 $Q$ を支点にして回転を始めた（図4）。地面との衝突は完全非弾性衝突であり，衝突の直後から左端点 $B$ のまわりに外力は働かないものとする。このとき以下の問いに答えよ。

![図3](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_hissu_physics_1_fig3.png)

![図4](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_hissu_physics_1_fig4.png)

(2a) 衝突する直前の棒 $AB$ の点 $Q$ まわりの角運動量を $L^-$ とする。衝突直前の棒 $AB$ の角度を $\theta_0$ としたとき，$L^-$ を求めよ。なお，$L^-$ は $\theta_0$ を用いない形で表せ。

(2b) 衝突後の棒 $AB$ の鉛直線からの角度を $\phi$ とし，衝突直後の角度を $\phi=\phi_0$ とする。また，衝突直後の棒 $AB$ の角速度を $\omega_0$ とする。衝突直後の棒 $AB$ の点 $Q$ 周りの角運動量を $L^+$ としたとき，$L^+$ を $\omega_0$ を用いて表せ。さらに，角運動量保存則を用いて $\omega_0$ を求め，$l,v,h$ を用いて表せ。

(2c) 床との衝突後，少しして左端点 $B$ が地面に衝突した。左端点 $B$ が点 $P$ から外れた時刻を $t=0$ としたとき，左端点 $B$ が初めて床と衝突するまでの時間を求めよ。ただし，$\phi_0$ は $\pi/2$ 付近とし，$\sin\phi\cong1$ と近似してよい。

### 题目描述

如图1，在以恒定速度 $v$ 行驶的小车上，距地面高度 $h$ 处水平固定一根杆。杆的右端及距右端长度 $l$ 的位置 $P$ 处具有集中质量（$l>h$）。当杆在 $P$ 点折断、绕 $P$ 点旋转并落向地面时，考虑折断部分 $AB$ 的运动。杆 $AB$ 的右端点 $A$、左端点 $B$ 分别具有质量为 $m_a,m_b$ 的质点，质点之间的杆质量可忽略。重力加速度为 $g$，不考虑空气阻力。

1：杆 $AB$ 以 $P$ 点为支点，一边旋转一边落下（图2，竖直方向的初速度为 $0$）。考虑右端点 $A$ 与地面碰撞之前杆 $AB$ 的运动，回答下列问题。

(1a) 求杆 $AB$ 绕 $P$ 点的转动惯量。

(1b) 以杆 $AB$ 开始折断瞬间 $P$ 点在绝对坐标系中的位置为原点，建立竖直向上为 $y$ 轴正方向的右手坐标系。写出杆两端点 $A,B$ 的位置 $\boldsymbol r_A,\boldsymbol r_B$ 与速度 $\boldsymbol v_A,\boldsymbol v_B$，并求杆 $AB$ 的动能 $T$ 与势能 $U$。以杆与铅垂线的夹角 $\theta$ 及时间 $t$ 为变量，势能以 $P$ 点为基准。

(1c) 求杆 $AB$ 的运动方程。用 $\Lambda$ 表示拉格朗日量。

2：右端点 $A$ 在 $Q$ 点与地面碰撞（图3），左端点 $B$ 脱离 $P$ 点，杆 $AB$ 开始以碰撞点 $Q$ 为支点旋转（图4）。与地面的碰撞为完全非弹性碰撞，并假设自碰撞刚结束起，左端点 $B$ 周围没有外力作用。回答下列问题。

(2a) 设碰撞前一瞬杆 $AB$ 绕 $Q$ 点的角动量为 $L^-$。若碰撞前一瞬杆的角度为 $\theta_0$，求 $L^-$，并写成不含 $\theta_0$ 的形式。

(2b) 设碰撞后杆 $AB$ 与铅垂线的夹角为 $\phi$，碰撞刚结束时的角度为 $\phi=\phi_0$，角速度为 $\omega_0$。以 $L^+$ 表示碰撞刚结束时杆绕 $Q$ 点的角动量，用 $\omega_0$ 表示 $L^+$。进一步利用角动量守恒定律求 $\omega_0$，并用 $l,v,h$ 表示。

(2c) 与地面碰撞后不久，左端点 $B$ 也与地面碰撞。以 $B$ 点脱离 $P$ 点的时刻为 $t=0$，求 $B$ 点第一次与地面碰撞所需的时间。可假设 $\phi_0$ 接近 $\pi/2$，并采用近似 $\sin\phi\cong1$。

## **Kai**

### (1a), (1b)

$x$ 軸を右向きとし、$\theta$ は鉛直下向きから右側へ測る。初期値は $\theta=\pi/2$ で、落下中は $\dot\theta<0$。したがって

$$
\begin{gathered}
\boxed{I_P=m_al^2},\\
r_B=\begin{pmatrix}-vt\\0\end{pmatrix},\\
r_A=\begin{pmatrix}-vt+l\sin\theta\\-l\cos\theta\end{pmatrix},
\end{gathered}
$$

$$
v_B=\begin{pmatrix}-v\\0\end{pmatrix},\qquad
v_A=\begin{pmatrix}-v+l\dot\theta\cos\theta\\l\dot\theta\sin\theta\end{pmatrix}.
$$

$$
\begin{gathered}
\boxed{T=\frac12(m_a+m_b)v^2+\frac12m_a(l^2\dot\theta^2-2vl\dot\theta\cos\theta)},\\
\boxed{U=-m_agl\cos\theta}.
\end{gathered}
$$

### (1c)

$\Lambda=T-U$ とすると

$$
\begin{gathered}
\frac d{dt}\frac{\partial\Lambda}{\partial\dot\theta}
=m_a(l^2\ddot\theta+vl\dot\theta\sin\theta),\\
\frac{\partial\Lambda}{\partial\theta}
=m_avl\dot\theta\sin\theta-m_agl\sin\theta.
\end{gathered}
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
