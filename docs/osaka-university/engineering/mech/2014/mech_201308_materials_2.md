---
sidebar_label: "2014年度 材料力学 問題2"
tags:
  - Osaka-University
  - Engineering.Mechanics-of-Materials.Bending-Stress
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Stress-Transformation
---

# 大阪大学 工学研究科 機械工学専攻 2014年度 材料力学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1のように、外径 $d$、厚さ $t$ の薄肉円形断面をもつ支柱 AB を鉛直に立て、端面 A を床に固定する。長方形の平板は、B では支柱に固定され、C では摩擦なく相対回転・相対すべりを許すリング状の治具により取り付けられている。平板の重心 G に鉛直下向きの自重 $W$ と、平板の面法線方向（紙面奥行き方向）の力 $H$ が作用する。$AC=2L$、$CB=L$ で、G と支柱中心軸の距離は $a$ である。G は平板の高さの中央にある。図2は端面 A を P 方向から見た図で、外周上の左・上・右・下の点をそれぞれ $A_1,A_2,A_3,A_4$ とする。支柱の自重を無視し、座屈は生じないとする。

1. 薄肉条件 $t\ll d$ を用いて、支柱の断面積、断面二次モーメント、断面二次極モーメントを求めよ。
2. 端面 A に生じる軸方向力、曲げモーメント、ねじりモーメントを求めよ。
3. $H=W/3$、$a=L/2$、$d=L/3$ のとき、端面 A に生じる主応力の絶対値の最大値とその発生位置を求めよ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka-university/engineering/mech/2014/mech_201308_materials_2-question-fig1.png)

#### 题目描述

图1中，外径 $d$、壁厚 $t$ 的薄壁圆管支柱 AB 竖直放置，A 端固定于地面。矩形板在 B 处与支柱固接，在 C 处通过无摩擦、允许相对转动及滑动的环形夹具连接。板的重心 G 受到竖直向下的重力 $W$ 和垂直板面、指向纸面内的力 $H$。$AC=2L$、$CB=L$，G 到支柱轴线的水平距离为 $a$，且 G 位于板高的中点。图2为沿 P 方向观察 A 截面的图，左、上、右、下四个外缘点依次为 $A_1,A_2,A_3,A_4$。忽略支柱自重，不发生屈曲。

1. 用 $t\ll d$ 求截面积、截面二次矩、截面极二次矩。
2. 求 A 截面的轴力、弯矩、扭矩。
3. 当 $H=W/3$、$a=L/2$、$d=L/3$ 时，求 A 截面主应力绝对值的最大值及其位置。

## **Kai**

### (1)

半径を $r=d/2$ とし、厚さに関して一次まで残すと

$$
\boxed{S=\pi dt},\qquad
\boxed{I_x=I_z=I=\frac{\pi d^3t}{8}},\qquad
\boxed{J=I_x+I_z=\frac{\pi d^3t}{4}}.
$$

以下では、この薄肉近似によるはりの応力を求める。

### (2)

図1の座標で、G の位置と作用力は

$$
\boldsymbol r_G=(a,5L/2,0),\qquad
\boldsymbol F=(0,-W,-H).
$$

したがって A に伝達される荷重のモーメントは

$$
\boldsymbol r_G\times\boldsymbol F
=\left(-\frac{5HL}{2},\ aH,\ -aW\right).
$$

軸力は圧縮で大きさ $W$、曲げモーメントとねじりモーメントの大きさは

$$
\boxed{N=-W},\qquad
\boxed{M_b=\sqrt{(aW)^2+\left(\frac{5HL}{2}\right)^2}},\qquad
\boxed{T=aH}.
$$

支持部の反力・反モーメントは上記荷重と逆向きである。また、$z$ 方向の横せん断力 $V_z=-H$ も存在する。

### (3)

図2で、$+x$ 方向（$A_3$）から $+z$ 方向（$A_2$）へ測る角を $\theta$ とし

$$
x=r\cos\theta,\qquad z=r\sin\theta
$$

とおく。棒軸方向の垂直応力は、圧縮軸力と二方向の曲げを重ね合わせて

$$
\sigma_y(\theta)=-\frac{W}{S}-\frac{aW}{I}x
+\frac{5HL}{2I}z.
$$

薄肉円管では、ねじりによる一定せん断流と横せん断力によるせん断流を重ね合わせる。$\theta$ 増加方向の接線を $\boldsymbol e_\theta=(-\sin\theta,0,\cos\theta)$ とすると

$$
\tau_{y\theta}(\theta)
=-\frac{Tr}{J}-\frac{H}{\pi rt}\cos\theta
=-\frac{2aH}{\pi d^2t}-\frac{2H}{\pi dt}\cos\theta.
$$

第2項は $\int\tau_{y\theta}\cos\theta\,rt\,d\theta=-H$ を満たす横せん断応力である。原題では横せん断を無視する指定がないので、この項も含める。

$H=W/3$、$a=L/2$、$d=L/3$ を代入し、$\sigma_0=W/(\pi dt)$ とおけば

$$
s(\theta)=\frac{\sigma_y}{\sigma_0}=-1-6\cos\theta+10\sin\theta,
\qquad
q(\theta)=\frac{\tau_{y\theta}}{\sigma_0}=-1-\frac23\cos\theta.
$$

半径方向応力を無視した局所平面応力状態の主応力は

$$
\sigma_\pm=\frac{\sigma_0}{2}\left[s\pm\sqrt{s^2+4q^2}\right],
\qquad \sigma_3=0.
$$

したがって求める値は次の一変数関数の最大値である。

$$
\frac{\max|\sigma_i|}{\sigma_0}
=\max_{-\pi\le\theta\le\pi}
F(\theta),\qquad
F(\theta)=\frac{|s(\theta)|+\sqrt{s(\theta)^2+4q(\theta)^2}}{2}.
$$

最大点は圧縮側にある。そこで

$$
a(\theta)=1+6\cos\theta-10\sin\theta,
\qquad b(\theta)=1+\frac23\cos\theta
$$

とおくと、圧縮側では $F^2-aF-b^2=0$ であり、停留条件は

$$
\boxed{a'(\theta)F(\theta)+2b(\theta)b'(\theta)=0}.
$$

この条件の根、引張り側の停留点、および $s=0$ の境界を比較すると

$$
\theta_*=-1.020112295\ \mathrm{rad}=-58.44812914^\circ,
\qquad F(\theta_*)=12.80339146.
$$

ゆえに

$$
\boxed{\max|\sigma_i|\simeq12.80339146\,\frac{W}{\pi dt}}.
$$

発生位置は、図2の $A_3$ から $A_4$ に向かって約 $58.4481^\circ$ 回った外周上である。そこでの最大絶対値は圧縮主応力の絶対値となる。薄肉近似では同じ角度の板厚内の応力差は高次として扱っている。
