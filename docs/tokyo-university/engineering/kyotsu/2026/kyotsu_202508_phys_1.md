---
sidebar_label: '2025年8月実施 物理学 第1問'
tags:
  - Tokyo-University
  - Physics.Mechanics.Connected-Particles-and-Tension
  - Physics.Mechanics.Center-of-Mass-and-Angular-Momentum
---

# 東京大学 工学系研究科 2025年8月実施 物理学 第1問

## **Author**

GPT-5.6 Sol

## **Description**

質量が $m$ の質点 A と、質量が $2m$ の質点 B が、長さ $l$ の糸で連結されている。質点 A を傾斜角 $30^\circ$ の滑らかな台の上に置き、質点 B を台の端部から鉛直方向につり下げる。台の上の糸の長さを $a\ (0<a<l)$ とする。台の端部を原点 O とし、水平方向右向きを $x$ 軸、鉛直方向上向きを $y$ 軸とする。

両質点を静止状態から運動させる。摩擦および糸の質量、太さ、伸びを無視し、糸はたるまないものとする。重力加速度を $g$ として、次の問いに答えよ。

<figure style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu_202508_phys_1_p1.png" width="300" alt=""/>
</figure>

### I

質点 A が台を滑り落ちる間の糸の張力 $T$ を求めよ。

### II

質点 A が台の端部に達したときの質点 A、B の速度ベクトルを求めよ。

### III

質点 A が台の端部から飛び出した瞬間を $t=0$ とする。$t>0$ では、A と B は重心の周りを回転しながら落下する。

1. 回転運動の角速度 $\omega$ を求めよ。
2. 時刻 $t$ における質点 A の座標を求めよ。
3. $t=0$ の状態から重心の周りに $90^\circ$ 回転したときの質点 A の $x$ 座標を $b$ とする。$b$ を $l$ で表せ。

## **Kai**

台上で A が斜面に沿って O へ向かう向きと、B が鉛直下向きに動く向きを正とする。両質点の加速度の大きさを $\alpha$ とおく。

### I

A、B の運動方程式はそれぞれ

$$
\begin{aligned}
m\alpha &= T+mg\sin 30^\circ,\\
2m\alpha &= 2mg-T
\end{aligned}
$$

である。両式を加えると

$$
3m\alpha=\frac{5}{2}mg
$$

なので、

$$
\alpha=\frac{5}{6}g.
$$

したがって、

$$
\boxed{T=\frac{1}{3}mg}
$$

を得る。

### II

A が O に達するまでに斜面上を進む距離は $a$ である。静止状態から等加速度運動するので、速さを $v$ とおくと

$$
v^2=2\alpha a=\frac{5}{3}ga,
\qquad
v=\sqrt{\frac{5ga}{3}}.
$$

A は $x$ 軸から下向きに $30^\circ$ の方向へ進み、B は鉛直下向きに進む。したがって、A が台端に達した直前の速度は

$$
\boxed{
\boldsymbol{v}_{A}^{-}
=
\left(
\frac{\sqrt{3}}{2}v,\,
-\frac{1}{2}v
\right)
},
\qquad
\boxed{
\boldsymbol{v}_{B}^{-}
=
(0,-v)
},
\qquad
v=\sqrt{\frac{5ga}{3}}.
$$

### III

$t=0$ では A は O にあり、糸全体が鉛直になるから、

$$
\boldsymbol{r}_A(0)=(0,0),
\qquad
\boldsymbol{r}_B(0)=(0,-l).
$$

台端を離れる瞬間、糸の向きが鉛直方向に切り替わるため、糸の張力による瞬間的な拘束力積が働く。A が受ける下向きの力積の大きさを $J$ とすると、力積直後の速度は

$$
\boldsymbol{v}_A^+
=
\left(
\frac{\sqrt{3}}{2}v,\,
-\frac{1}{2}v-\frac{J}{m}
\right),
$$

$$
\boldsymbol{v}_B^+
=
\left(
0,\,
-v+\frac{J}{2m}
\right).
$$

糸が伸びないため、両質点の糸方向の速度は等しい。よって

$$
-\frac{1}{2}v-\frac{J}{m}
=
-v+\frac{J}{2m},
$$

したがって

$$
J=\frac{1}{3}mv.
$$

ゆえに、

$$
\boldsymbol{v}_A^+
=
\left(
\frac{\sqrt{3}}{2}v,\,
-\frac{5}{6}v
\right),
\qquad
\boldsymbol{v}_B^+
=
\left(
0,\,
-\frac{5}{6}v
\right).
$$

#### III.1

重心 G の位置を基準にすると、$t=0$ における相対位置は

$$
\boldsymbol{r}_{A/G}
=
\left(0,\frac{2l}{3}\right),
\qquad
\boldsymbol{r}_{B/G}
=
\left(0,-\frac{l}{3}\right).
$$

したがって、重心周りの慣性モーメントは

$$
I_G
=
m\left(\frac{2l}{3}\right)^2
+2m\left(\frac{l}{3}\right)^2
=
\frac{2}{3}ml^2.
$$

力積は糸の方向に働くので、重心周りの角運動量を変えない。力積直前の角運動量の $z$ 成分は

$$
L_{G,z}
=
-m\frac{2l}{3}\frac{\sqrt{3}}{2}v
=
-\frac{\sqrt{3}}{3}mlv.
$$

負号は時計回りを表す。角速度の大きさは

$$
\omega
=
\frac{|L_{G,z}|}{I_G}
=
\frac{\sqrt{3}v}{2l}
=
\boxed{\frac{\sqrt{5ga}}{2l}}.
$$

#### III.2

重心の初期位置と初速度は

$$
\boldsymbol{R}_G(0)
=
\left(0,-\frac{2l}{3}\right),
$$

$$
\boldsymbol{V}_G(0)
=
\frac{m\boldsymbol{v}_A^++2m\boldsymbol{v}_B^+}{3m}
=
\left(
\frac{\sqrt{3}}{6}v,\,
-\frac{5}{6}v
\right).
$$

したがって、重心は

$$
\boldsymbol{R}_G(t)
=
\left(
\frac{\sqrt{3}}{6}vt,\,
-\frac{2l}{3}-\frac{5}{6}vt-\frac{1}{2}gt^2
\right)
$$

と運動する。

A は重心から距離 $2l/3$ の位置を時計回りに角速度 $\omega$ で回転するので、

$$
\boldsymbol{r}_{A/G}(t)
=
\left(
\frac{2l}{3}\sin\omega t,\,
\frac{2l}{3}\cos\omega t
\right).
$$

以上より、A の座標は

$$
\boxed{
\begin{aligned}
x_A(t)
&=
\frac{\sqrt{3}}{6}vt
+\frac{2l}{3}\sin\omega t,\\
y_A(t)
&=
-\frac{2l}{3}
-\frac{5}{6}vt
-\frac{1}{2}gt^2
+\frac{2l}{3}\cos\omega t
\end{aligned}
}
$$

ただし

$$
v=\sqrt{\frac{5ga}{3}},
\qquad
\omega=\frac{\sqrt{5ga}}{2l}
$$

である。

#### III.3

$90^\circ$ 回転する時刻は

$$
t_{90}
=
\frac{\pi}{2\omega}
=
\frac{\pi l}{\sqrt{3}v}
$$

である。このとき $\sin(\omega t_{90})=1$ なので、

$$
\begin{aligned}
b
&=
\frac{\sqrt{3}}{6}v t_{90}
+\frac{2l}{3}\\
&=
\frac{\pi l}{6}
+\frac{2l}{3}.
\end{aligned}
$$

したがって、

$$
\boxed{b=\frac{4+\pi}{6}l}
$$

となる。

## **Reference**

- [東京大学大学院工学系研究科 2026年度大学院入学試験問題 物理学](https://www.t.u-tokyo.ac.jp/hubfs/admission/2026/P_J_E_2026.pdf)