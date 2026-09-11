---
sidebar_label: '2011年8月実施 物理学 第1問'
tags:
  - Tokyo-University
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
  - Physics.Mechanics.Center-of-Mass-and-Angular-Momentum
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
---

# 東京大学 工学系研究科 2011年8月実施 物理学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I

図 1.1 のように、一様な棒 OA、AB、BC を摩擦のないピン A、B で連結し、摩擦のない固定ピン O、C で支える。A は質量を無視できるロープ AD で天井から吊られている。OA、AB は水平、BC は鉛直である。OA、BC は長さ $r$、質量 $m$、AB は長さ $2r$、質量 $2m$ とする。ピン A、B の質量を無視し、重力加速度を $g$ とする。

水平右向き、鉛直上向き、紙面手前向きを $x,y,z$ とし、単位ベクトルを $\boldsymbol i,\boldsymbol j,\boldsymbol k$ とする。必要なら、長さ $r$、質量 $m$ の一様棒の重心まわりの慣性モーメント $mr^2/12$ を用いてよい。静止状態からロープを切った瞬間について答えよ。

![三つの棒と支点、ロープおよび駆動回転](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2012/kyotsu_201108_phys_1_linkage_audited.svg)

1. OA の反時計回りの角加速度を $\alpha_A$ として、地面から見た A の加速度をベクトルで表せ。
2. AB の反時計回りの角加速度を $\alpha_B$ として、A から見た B の加速度、および地面から見た B の加速度をベクトルで表せ。
3. $\alpha_B$ を $\alpha_A$ で表せ。
4. OA の動的つり合いから、A において OA が AB に及ぼす力を $\alpha_A,r,m,g$ で表せ。
5. AB の動的つり合いから、B において AB が BC に及ぼす力、および $\alpha_A$ を求めよ。

### II

同じ部材について、図 1.2 の姿勢で OA が時計回りに一定の角速度 $\omega_0$ で回転している場合を考える。

1. 地面から見た B の加速度と、BC の角加速度をベクトルで表せ。
2. BC の回転の動的つり合いから、AB が BC に及ぼす力の $x$ 成分を求めよ。
3. AB の動的つり合いから、OA が AB に及ぼす力のベクトルと、AB が BC に及ぼす力の $y$ 成分を求めよ。必要に応じて $\omega_0,r,m,g$ を用いよ。

#### 题目描述

I. 三根均匀杆 OA、AB、BC 用无摩擦铰链 A、B 相连，并由固定无摩擦铰支座 O、C 支撑。A 另由无质量绳 AD 悬挂。初始 OA、AB 水平，BC 竖直；OA、BC 长 $r$、质量 $m$，AB 长 $2r$、质量 $2m$。忽略铰链质量，重力加速度为 $g$。向右、向上、朝纸外分别为 $x,y,z$ 方向，单位矢量为 $\boldsymbol i,\boldsymbol j,\boldsymbol k$。可以使用均匀细杆重心转动惯量 $mr^2/12$。系统从静止剪断绳的瞬间：

1. 设 OA 逆时针角加速度为 $\alpha_A$，求 A 相对地面的加速度矢量。
2. 设 AB 逆时针角加速度为 $\alpha_B$，求 B 相对 A 及相对地面的加速度矢量。
3. 用 $\alpha_A$ 表示 $\alpha_B$。
4. 利用 OA 的动力学方程，求 OA 在 A 处对 AB 施力的矢量，以 $\alpha_A,r,m,g$ 表示。
5. 利用 AB 的动力学方程，求 AB 在 B 处对 BC 的力以及 $\alpha_A$。

II. 相同机构在图示姿态下，OA 以恒定角速度 $\omega_0$ 顺时针转动。

1. 求 B 的加速度矢量和 BC 的角加速度矢量。
2. 利用 BC 的转动方程，求 AB 对 BC 施力的 $x$ 分量。
3. 利用 AB 的动力学方程，求 OA 对 AB 的力矢量及 AB 对 BC 的力的 $y$ 分量。必要时使用 $\omega_0,r,m,g$。

## **Kai**

A において OA が AB に及ぼす力を $\boldsymbol F_A$、B において AB が BC に及ぼす力を $\boldsymbol F_B$ とする。

### I

#### I.1・I.2

切断直後は角速度が零なので、

$$
\boxed{\boldsymbol a_A=r\alpha_A\boldsymbol j},
\qquad
\boxed{\boldsymbol a_{B/A}=2r\alpha_B\boldsymbol j},
\qquad
\boxed{\boldsymbol a_B=r(\alpha_A+2\alpha_B)\boldsymbol j}.
$$

#### I.3

B は C を中心とする円上を動き、この瞬間の加速度は水平方向である。前式との両立から

$$
\boxed{\alpha_B=-\frac12\alpha_A},
\qquad\boldsymbol a_B=\boldsymbol0,
\qquad\alpha_{BC}=0.
$$

#### I.4

BC の C まわりの運動方程式から $F_{Bx}=0$、AB の水平加速度も零なので $F_{Ax}=0$ である。OA の O まわりの式は

$$
-rF_{Ay}-\frac{mgr}{2}=\frac{mr^2}{3}\alpha_A.
$$

したがって

$$
\boxed{\boldsymbol F_A=-\left(\frac{mr\alpha_A}{3}+\frac{mg}{2}\right)\boldsymbol j}.
$$

#### I.5

AB の重心加速度は $r\alpha_A\boldsymbol j/2$、重心まわりの慣性モーメントは $2mr^2/3$ である。並進と回転について

$$
F_{Ay}-F_{By}-2mg=mr\alpha_A,
\qquad
-r(F_{Ay}+F_{By})=\frac{2mr^2}{3}\left(-\frac{\alpha_A}{2}\right).
$$

I.4 と連立すると

$$
\boxed{\alpha_A=-\frac{3g}{2r}},
\qquad
\boxed{\boldsymbol F_A=\boldsymbol0},
\qquad
\boxed{\boldsymbol F_B=-\frac{mg}{2}\boldsymbol j}.
$$

### II

#### II.1

$\boldsymbol v_A=-r\omega_0\boldsymbol j$ であり、B の速度は BC の拘束から水平、AB の拘束から鉛直なので零となる。よって

$$
\omega_{AB}=\frac{\omega_0}{2},\qquad\omega_{BC}=0.
$$

OA の角加速度は零だから

$$
\boldsymbol a_A=-r\omega_0^2\boldsymbol i,
\qquad
\boldsymbol a_B=-\frac32r\omega_0^2\boldsymbol i+2r\alpha_{AB}\boldsymbol j.
$$

BC の拘束から $\alpha_{AB}=0$ となり、

$$
\boxed{\boldsymbol a_B=-\frac32r\omega_0^2\boldsymbol i},
\qquad
\boxed{\boldsymbol\alpha_{BC}=\frac32\omega_0^2\boldsymbol k}.
$$

#### II.2

C まわりの回転方程式は

$$
-rF_{Bx}=\frac{mr^2}{3}\frac32\omega_0^2.
$$

したがって

$$
\boxed{F_{Bx}=-\frac12mr\omega_0^2}.
$$

#### II.3

AB の重心加速度は $(\boldsymbol a_A+\boldsymbol a_B)/2=-5r\omega_0^2\boldsymbol i/4$ である。したがって

$$
F_{Ax}-F_{Bx}=-\frac52mr\omega_0^2,
\qquad F_{Ay}-F_{By}=2mg,
\qquad F_{Ay}+F_{By}=0.
$$

ゆえに

$$
\boxed{\boldsymbol F_A=-3mr\omega_0^2\boldsymbol i+mg\boldsymbol j},
\qquad
\boxed{F_{By}=-mg}.
$$

