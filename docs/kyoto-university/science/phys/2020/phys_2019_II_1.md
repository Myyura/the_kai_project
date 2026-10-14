---
sidebar_label: "2020年度 II-1（力学）"
tags:
  - Kyoto-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
  - Physics.Mechanics.Collision-and-Coefficient-of-Restitution
  - Physics.Mechanics.Friction
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2020年度 問題II-1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量 $M$、半径 $R$ の一様な剛体球 A を考える。重力加速度は $g$、床との動摩擦係数は速度によらず $\mu'$。空気抵抗と転がり摩擦を無視する。

1. 重心を通る軸まわりの慣性モーメントが $2MR^2/5$ であることを示せ。
2. 床から高さ $R$ の位置を水平に突き、球が図1のように初速度 $v_0$、無回転で動き始めた（左向きを正とする）。動摩擦により回転し、やがて滑らず転がる。その速さ $v_1$ と、それまでの移動距離 $x_1$ を求めよ。

![原題 図1：球の滑りから転がりへの移行](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2020-II-1-fig1.png)

球が角速度 $\omega_1=v_1/R$ で転がり、図2の高さ $h<2R$ の段差の頂点 P に正面から衝突する。P では衝突の瞬間に滑らず、段差の断面は球と P 以外で接触しない形とする。段差は変形しない。

![原題 図2：球と段差の衝突、側面図と平面図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2020-II-1-fig2.png)

3. 衝突直前の P に関する全角運動量を求めよ。
4. 衝突直後の P まわりの角速度 $\omega$ を考え、床から球への垂直抗力が衝突の瞬間に変化しない高さ $h$ を求めよ。

次に図3のように球 A と同じ球 B を進行方向に距離 $L$ だけ離して静止させ、A を (2) と同様に突く。球同士の衝突には摩擦がなく、反発係数は1とする。

![原題 図3：2個の球の衝突](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2020-II-1-fig3.png)

5. A が滑らず転がる状態になって速さ $v_1$ で B に衝突した場合、衝突後十分時間が経って両球が滑らず転がるときの速度比を求めよ。
6. 初速度 $v_0$ を変えて A の最終速度をどう制御できるか述べよ。滑ったまま衝突する場合も含め、最終速度を最大にする条件を求めよ。

最後に球 A を中心を通る平面で二分し、図4のように半球を球面側が下になるように床へ置く。

![原題 図4：床上の半球の微小振動](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2020-II-1-fig4.png)

7. 静止状態の床との接触点まわりの慣性モーメントが $13MR^2/40$ となることを示せ。$M$ は切断前の球の質量である。
8. 釣り合いの近くの微小振動の周期を求めよ。

#### 题目描述

均匀刚性球 A 的质量半径为 $M,R$，床面动摩擦系数 $\mu'$，忽略空气和滚动阻力。

1. 求中心轴惯性矩。
2. 如上方图1，球被水平击中后以 $v_0$ 平动且不转动（向左为正），求最终纯滚速度及开始纯滚前的距离。
3. 如上方图2，纯滚球正碰高度 $h<2R$ 的台阶顶点 P，求碰撞前关于 P 的总角动量；台阶只在 P 接触球。
4. 碰撞瞬时在 P 无滑动，求使床面对球的法向力瞬间不变的高度。
5. 如上方图3，同样的静止球 B 在前方距离 $L$ 处；A 在纯滚后与 B 无摩擦、完全弹性碰撞，求最终都纯滚时的速度比。
6. 若改变初始击球速度，含尚在滑动时相撞的情况，求 A 最终速度的变化及最大条件。
7. 如上方图4，把球切成半球，曲面向下，求接触点惯性矩；(8) 求小振动周期。这里 $M$ 仍是整球质量。

## **Kai**

### (1)・(2)

(1) 対称性より $3I=\int2r^2dm$。一様密度 $\rho=3M/(4\pi R^3)$ を使うと

$$
I=\frac23\rho\,4\pi\int_0^Rr^4dr=\boxed{\frac25MR^2}.
$$

(2) 進行方向を正、純転がりで $v=R\omega$ となる回転の向きを正とする。滑っている間は

$$
v=v_0-\mu'gt,\qquad R\omega=\frac52\mu'gt.
$$

従って $t_1=2v_0/(7\mu'g)$、

$$
\boxed{v_1=\frac57v_0,\qquad x_1=v_0t_1-\frac12\mu'gt_1^2=\frac{12v_0^2}{49\mu'g}.}
$$

### (3)・(4)

(3) 正の回転方向を (2) と合わせると、重心まわりの項と重心の並進による項の和は

$$
\boxed{L_P=I\omega_1+M(R-h)v_1=MR\left(\frac75R-h\right)\omega_1.}
$$

(4) 床の垂直抗力が有限の通常値のままであれば、床からの衝撃力積はなく、P まわりの角運動量が保存する。P における非滑り条件から、衝突直後は P を瞬間中心とする運動となり

$$
(I+MR^2)\omega=L_P,\qquad
\omega=\left(1-\frac{5h}{7R}\right)\omega_1.
$$

$0<h<2R$ のとき、重心の鉛直速度は $\omega\sqrt{2Rh-h^2}$ に比例する。床への通常の接触を保ち、垂直抗力を変化させないには、この鉛直速度がゼロでなければならない。従って $\omega=0$ であり

$$
\boxed{h=\frac75R.}
$$

この高さでは P からの水平方向の力積だけで並進・回転がともに停止でき、床から鉛直の衝撃力積を受ける必要がない。

### (5)

等質量、反発係数1の衝突により並進速度は交換され、回転は変わらない。従って直後の $(v,R\omega)$ は A が $(0,v_1)$、B が $(v_1,0)$。床の摩擦の作用中には $v+(2/5)R\omega$ が保存されるので、純転がりの最終速度は

$$
\boxed{v_A^{(\infty)}=\frac27v_1,\quad v_B^{(\infty)}=\frac57v_1,\quad
v_A^{(\infty)}:v_B^{(\infty)}=2:5.}
$$

### (6)

純転がりがちょうど衝突直前に始まる初速度を $v_*$ とすると、$x_1=L$ より

$$
v_*=\frac7{\sqrt{12}}\sqrt{\mu'gL}.
$$

$v_0\leq v_*$ では $v_A^{(\infty)}=10v_0/49$。$v_0>v_*$ では衝突まで滑り続け、衝突時間は

$$
t_c=\frac{v_0-\sqrt{v_0^2-2\mu'gL}}{\mu'g},\qquad
R\omega_c=\frac52\mu'gt_c.
$$

衝突直後に A の並進速度はゼロとなるため、

$$
\boxed{v_A^{(\infty)}=
\begin{cases}
10v_0/49 &(v_0\leq v_*),\\
\frac57\left(v_0-\sqrt{v_0^2-2\mu'gL}\right)&(v_0>v_*).
\end{cases}}
$$

後者は $v_0$ に関して単調減少する。したがって最大は $v_0=v_*$ で

$$
\boxed{\max v_A^{(\infty)}=\frac5{7\sqrt3}\sqrt{\mu'gL}.}
$$

### (7)・(8)

半球の質量は $M/2$。球の中心から重心までの距離は

$$
d=\frac{\rho\pi\int_0^Rz(R^2-z^2)dz}{M/2}=\frac38R.
$$

球の中心を通る水平軸の慣性モーメントは $MR^2/5$。平行軸の定理を二度使って

$$
I_G=\frac15MR^2-\frac M2d^2,\qquad
I_P=I_G+\frac M2(R-d)^2=\boxed{\frac{13}{40}MR^2}.
$$

小さな傾き $\theta$ に対して重心の高さの増加は $d\theta^2/2$。非滑りの微小振動では

$$
I_P\ddot\theta=-\frac M2gd\theta,
\qquad
\boxed{T=2\pi\sqrt{\frac{I_P}{(M/2)gd}}=2\pi\sqrt{\frac{26R}{15g}}.}
$$

## **Reference**

- [京都大学公式原題（2020年度、PDF 9–10ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/R2.pdf)
