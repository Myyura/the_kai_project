---
sidebar_label: "2019年8月実施 問1（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
---

# 九州大学 工学府 機械系専攻 2019年8月実施 流体工学 問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

幅 $L$ の二次元ダクトを鉛直面内に置き、密度 $\rho$ の水を流す。上流の断面 1 は鉛直で、流れは水平右向きである。断面 1 の下壁を $z=0$、上壁を $z=L$ とする。速度分布は上下壁で $0$、中央で $V_{\max}$ となる三角形である。

断面 1 から長さ $L$ の水平直線部に続き、内側半径 $L$、外側半径 $2L$ の四分円の曲がり部を通って流れは上向きになる。その後の鉛直直線部の長さは $L$。下流の断面 2 は高さ $z=3L$ の水平断面で、内部の整流格子により上向き速度が一様になっている。

断面 1 の下壁と断面 2 の壁に、密度 $\rho_m>\rho$ の液体を入れたマノメータをそれぞれ接続する。大気開放側の液面から見て、接続側の液体界面はそれぞれ $2h$、$h$ 低く、後者の界面は $z=0$ にある。界面より上の接続管は水で満たされる。重力加速度を $g$ とする。

1. 断面 2 の流速 $V_2$ を求めよ。
2. 断面 1、2 間のダクト（整流格子を含む）の単位奥行き当たりの質量を $M$ とする。この部分を支持するのに必要な力の水平成分 $F_x$ と鉛直成分 $F_z$ を、$\rho,\rho_m,L,h,V_{\max},M,g$ で表せ。各断面の流れの方向を正とする。
3. 同部分で生じる単位奥行き、単位時間当たりのエネルギー損失 $E_{\mathrm{loss}}$ を、$\rho,\rho_m,L,h,V_{\max},g$ で表せ。

#### 题目描述

宽度为 $L$ 的二维弯管中流过密度 $\rho$ 的水。入口为竖直断面 $0\le z\le L$，流速向右，在上下壁为零、中心为 $V_{\max}$，呈三角形分布。入口后为长 $L$ 的水平直管、内外半径分别为 $L,2L$ 的四分之一圆弯管、长 $L$ 的竖直直管；出口位于 $z=3L$，整流后速度向上且均匀。两测压管使用密度 $\rho_m>\rho$ 的液体，其与水的界面分别比大气开口液面低 $2h,h$，第二界面位于 $z=0$，界面以上接管中为水。① 求出口速度。② 管与整流格子每单位进深质量为 $M$，求所需水平、竖直支承力，分别向右、向上为正。③ 求每单位进深和时间的能量损失。

## **Kai**

### (1)

入口速度を $u(z)$ とすると、三角形分布から

$$
\int_0^L u(z)^n\,dz=\frac{LV_{\max}^n}{n+1}\qquad(n=1,2,3).
$$

連続の式 $LV_2=\int_0^Lu\,dz$ より $\boxed{V_2=V_{\max}/2}$。

### (2)

以下、圧力は大気圧を基準とする。マノメータの静水圧関係より

$$
p_1(0)=(2\rho_m-\rho)gh,\qquad
p_1(z)=(2\rho_m-\rho)gh-\rho gz,\qquad
p_2=\rho_mgh-3\rho gL.
$$

ダクト内の水の単位奥行き当たり体積は

$$
\mathcal V=L^2+\frac\pi4\{(2L)^2-L^2\}+L^2
=\left(2+\frac{3\pi}4\right)L^2.
$$

ダクトと内部の水を一体として運動量収支を取ると

$$
F_x+\int_0^Lp_1(z)\,dz=-\rho\int_0^Lu^2\,dz,
$$

$$
F_z-p_2L-(M+\rho\mathcal V)g=\rho LV_2^2.
$$

よって

$$
\boxed{F_x=\frac{\rho gL^2}{2}-\frac{\rho LV_{\max}^2}{3}
+(\rho-2\rho_m)gLh},
$$

$$
\boxed{F_z=\left(\frac{3\pi}4-1\right)\rho gL^2
+\frac{\rho LV_{\max}^2}{4}+\rho_mgLh+Mg}.
$$

### (3)

$Q=LV_{\max}/2$ とする。入口では $p_1+\rho gz=p_1(0)$ が一定なので、機械的エネルギー収支は

$$
E_{\mathrm{loss}}=p_1(0)Q+\frac\rho2\int_0^Lu^3\,dz
-\left(p_2+3\rho gL+\frac\rho2V_2^2\right)Q.
$$

代入して

$$
\boxed{E_{\mathrm{loss}}=\frac12(\rho_m-\rho)ghLV_{\max}
+\frac1{16}\rho LV_{\max}^3}.
$$

## **Reference**

- [九州大学 2020年度 流体工学 公式問題（PDF 1ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-fluids.pdf)
