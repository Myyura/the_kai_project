---
sidebar_label: "固体力学（午前）"
tags:
  - Tokyo-University
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Yielding
---

# 東京大学 工学系研究科 航空宇宙工学専攻 2022年度 固体力学（午前）

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

[原題：2022年度専門科目（午前）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022am.pdf)。図の条件は以下に文章で明記する。

微小変形の球対称問題を考える。中心からの距離を $r$、半径方向・周方向の応力を $\sigma_r,\sigma_\theta$、ひずみを $\varepsilon_r,\varepsilon_\theta$、半径方向の変位を $u$ とする。体積力を無視すると

$$
\frac{d\sigma_r}{dr}+\frac{2(\sigma_r-\sigma_\theta)}r=0,\qquad
\varepsilon_r=\frac{du}{dr},\quad\varepsilon_\theta=\frac ur.
$$

**第1問** $\varepsilon_r,\varepsilon_\theta$ の適合条件式を求めよ。

**第2問** ヤング率 $E$、ポアソン比 $\nu$ の弾性体について球対称のフックの法則を書き、任意定数 $A,B$ を用いた一般解

$$
\sigma_r=A+\frac{2B}{r^3},\qquad\sigma_\theta=A-\frac B{r^3}
$$

が第1問の適合条件を満たすことを示せ。

以下では半径 $a$ の球形空孔を有する物体を考える。$a$ は物体の大きさに比べ十分小さい。材料はミーゼスの降伏条件に従う弾完全塑性体で、弾性定数を $E,\nu$、単軸引張時の降伏応力を $Y$ とする。主応力 $\sigma_1,\sigma_2,\sigma_3$ に対し

$$
\sigma_{\rm eq}=\frac1{\sqrt2}\sqrt{(\sigma_1-\sigma_2)^2+(\sigma_2-\sigma_3)^2+(\sigma_3-\sigma_1)^2}
$$

が $Y$ に達すると降伏し、塑性域で $\sigma_{\rm eq}=Y$ となる。

**第3問** 空孔内に内圧 $p$ が働くときの弾性応力分布と、圧力を徐々に増加させた際の降伏開始圧力 $p_Y$ を求めよ。

**第4問** $p>p_Y$ で弾塑性境界を $r=c$ とする。$a\le r\le c$ は塑性域、$r\ge c$ は弾性域である。$\sigma_r(c)$ を求めよ。

**第5問** $p=Y$ のときの $c$ と両領域の応力分布を求めよ。

**第6問** $p=Y$ から $p=0$ にしたときの残留応力を求めよ。バウシンガー効果は考慮しなくてよい。

**第7問** 材料がトレスカの降伏条件に従う場合、第3～6問の結果はどうなるか。理由とともに簡潔に述べよ。

#### 题目描述

考虑无体积力、微小变形的球对称问题。半径方向位移为 $u$，应力和应变分别为 $\sigma_r,\sigma_\theta$ 与 $\varepsilon_r=u',\varepsilon_\theta=u/r$，平衡式为 $\sigma_r'+2(\sigma_r-\sigma_\theta)/r=0$。

1. 求应变相容条件。
2. 写出弹性常数为 $E,\nu$ 时的胡克定律，证明 $\sigma_r=A+2B/r^3,\sigma_\theta=A-B/r^3$ 满足相容条件。

以下考虑含半径 $a$ 球形空孔的大物体，$a$ 远小于物体尺度。材料为服从 Mises 条件的理想弹塑性体，单轴屈服应力为 $Y$；等效应力按日文题面公式定义，塑性区满足 $\sigma_{\rm eq}=Y$。

3. 求内压 $p$ 下的弹性应力分布和首次屈服压力 $p_Y$。
4. 设 $p>p_Y$，塑性区为 $a\le r\le c$，弹性区为 $r\ge c$，求界面上的 $\sigma_r$。
5. 当 $p=Y$ 时，求 $c$ 及两区域的应力分布。
6. 从 $p=Y$ 卸载到零，求残余应力，忽略包辛格效应。
7. 若改用 Tresca 屈服条件，第3～6问的结果如何变化？说明理由。

## **Kai**

### 第1・2問

$u=r\varepsilon_\theta$ を微分して

$$
\boxed{\frac{d\varepsilon_\theta}{dr}+\frac{\varepsilon_\theta-\varepsilon_r}{r}=0}.
$$

周方向の主応力は二つとも $\sigma_\theta$ であるから

$$
\varepsilon_r=\frac{\sigma_r-2\nu\sigma_\theta}{E},\qquad
\varepsilon_\theta=\frac{(1-\nu)\sigma_\theta-\nu\sigma_r}{E}.
$$

一般解を代入すると

$$
\varepsilon_r=\frac{(1-2\nu)A+2(1+\nu)B/r^3}{E},\quad
\varepsilon_\theta=\frac{(1-2\nu)A-(1+\nu)B/r^3}{E}.
$$

したがって $\varepsilon_\theta'=3(1+\nu)B/(Er^4)$、$(\varepsilon_\theta-\varepsilon_r)/r=-3(1+\nu)B/(Er^4)$ であり、適合条件を満たす。対応する変位は

$$
\boxed{u=\frac{(1-2\nu)Ar-(1+\nu)B/r^2}{E}}.
$$

### 第3問

無限遠で応力が消失するので $A=0$。$\sigma_r(a)=-p$ より $B=-pa^3/2$。よって

$$
\boxed{\sigma_r=-p\frac{a^3}{r^3},\qquad\sigma_\theta=\frac p2\frac{a^3}{r^3}}.
$$

主応力が $(\sigma_r,\sigma_\theta,\sigma_\theta)$ なので $\sigma_{\rm eq}=|\sigma_\theta-\sigma_r|=3pa^3/(2r^3)$。$r=a$ で最初に降伏し、

$$
\boxed{p_Y=\frac{2Y}{3}}.
$$

### 第4・5問

弾性域では $\sigma_r=2B/r^3,\ \sigma_\theta=-B/r^3$。界面で $-3B/c^3=Y$ だから

$$
\boxed{\sigma_r(c)=-\frac{2Y}{3}}.
$$

塑性域では $\sigma_\theta-\sigma_r=Y$ なので、平衡式より $\sigma_r'=2Y/r$。内圧条件を用いると

$$
\sigma_r=-p+2Y\log\frac ra,\qquad \sigma_\theta=-p+Y+2Y\log\frac ra.
$$

界面の連続条件より $p=2Y/3+2Y\log(c/a)$。$p=Y$ なら

$$
\boxed{c=ae^{1/6}}.
$$

このとき

$$
\boxed{
\begin{array}{ll}
a\le r\le c:&\sigma_r=Y\left(2\log\frac ra-1\right),\quad\sigma_\theta=2Y\log\frac ra,\\[2pt]
r\ge c:&\sigma_r=-\dfrac{2Yc^3}{3r^3},\quad\sigma_\theta=\dfrac{Yc^3}{3r^3}.
\end{array}}
$$

### 第6問

内圧を $Y$ だけ減らす弾性応力増分は $\Delta\sigma_r=Ya^3/r^3,\ \Delta\sigma_\theta=-Ya^3/(2r^3)$。これを加えて

$$
\boxed{
\begin{array}{ll}
a\le r\le c:&\sigma_r^{\rm res}=Y\left(2\log\frac ra-1+\frac{a^3}{r^3}\right),\\
&\sigma_\theta^{\rm res}=Y\left(2\log\frac ra-\frac{a^3}{2r^3}\right),\\[3pt]
r\ge c:&\sigma_r^{\rm res}=-Y\left(\frac23e^{1/2}-1\right)\frac{a^3}{r^3},\\
&\sigma_\theta^{\rm res}=\frac Y2\left(\frac23e^{1/2}-1\right)\frac{a^3}{r^3}.
\end{array}}
$$

塑性域の残留応力差は $Y[1-3a^3/(2r^3)]$ で、絶対値は最大でも $Y/2$。外側弾性域でも $Y$ 未満であり、除荷中に逆方向の再降伏は生じない。

### 第7問

トレスカ条件も、この主応力状態では $\max|\sigma_i-\sigma_j|=|\sigma_\theta-\sigma_r|=Y$ となる。したがって第3～6問の結果はすべて同じである。
