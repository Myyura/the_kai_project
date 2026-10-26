---
sidebar_label: "2013年8月実施 材料力学 問題2"
tags:
  - Osaka-University
  - Engineering.Mechanics-of-Materials.Bending-Stress
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Stress-Transformation
---

# 大阪大学 工学研究科 機械工学専攻 2013年8月実施 材料力学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題2（解答用紙：白）

図1のように、端面 A が床に固定された外径 $d$、厚さ $t$ の薄肉の円形断面を有する支柱 AB が、鉛直方向に立てられている。その支柱に、端面 B では固定され、点 C では摩擦なく相対回転・相対すべりを許すリング状の治具により、長方形の平板が取り付けられている。平板の重心 G には、鉛直下向きに自重による力 $W$ が作用し、平板の面法線方向（紙面奥行き方向）に力 $H$ が作用している。AC 間と CB 間の距離はそれぞれ $2L$ と $L$ であり、重心 G と支柱の中心軸との距離は $a$ である。また、図2のように、端面 A を P 方向から見た際の支柱の外周上の点を $A_1$ から $A_4$ とする。なお、支柱 AB の自重は考慮せず、座屈は生じないものとして以下の問いに答えなさい。

(1) 薄肉の条件（$t\ll d$）を用いて、支柱の断面積、断面二次モーメント、断面二次極モーメントを求めなさい。

(2) 端面 A に生じる軸方向力、曲げモーメント、ねじりモーメントを求めなさい。

(3) $H=W/3$、$a=L/2$、$d=L/3$ のとき、端面 A に生じる主応力の絶対値の最大値とその発生位置を示しなさい。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2014/mech_201308_materials_2_original_figure_1.png)

![原題の図2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2014/mech_201308_materials_2_original_figure_2.png)

### 题目描述

问题2（使用白色答题纸）

如图1，端面 A 固定于地面的支柱 AB 竖直放置，其截面为外径 $d$、壁厚 $t$ 的薄壁圆形截面。矩形平板在端面 B 处固定于支柱，在 C 点通过无摩擦、允许相对转动和相对滑动的环形夹具安装于支柱。平板质心 G 受到竖直向下的自重作用力 $W$，以及沿平板法线方向（指向纸面内部）的力 $H$。AC、CB 的距离分别为 $2L$、$L$，质心 G 与支柱中心轴的距离为 $a$。如图2所示，将沿 P 方向观察端面 A 时支柱外周上的四个点记为 $A_1$ 至 $A_4$。不考虑支柱 AB 的自重，并假设不发生屈曲。回答下列问题。

(1) 利用薄壁条件 $t\ll d$，求支柱的截面积、截面二次矩和截面极二次矩。

(2) 求端面 A 上产生的轴向力、弯矩和扭矩。

(3) 当 $H=W/3$、$a=L/2$、$d=L/3$ 时，给出端面 A 上主应力绝对值的最大值及其发生位置。

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
\begin{gathered}
s(\theta)=\frac{\sigma_y}{\sigma_0}=-1-6\cos\theta+10\sin\theta,\\
q(\theta)=\frac{\tau_{y\theta}}{\sigma_0}=-1-\frac23\cos\theta.
\end{gathered}
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
\begin{gathered}
\theta_*=-1.020112295\ \mathrm{rad}=-58.44812914^\circ,\\
F(\theta_*)=12.80339146.
\end{gathered}
$$

ゆえに

$$
\boxed{\max|\sigma_i|\simeq12.80339146\,\frac{W}{\pi dt}}.
$$

発生位置は、図2の $A_3$ から $A_4$ に向かって約 $58.4481^\circ$ 回った外周上である。そこでの最大絶対値は圧縮主応力の絶対値となる。薄肉近似では同じ角度の板厚内の応力差は高次として扱っている。
