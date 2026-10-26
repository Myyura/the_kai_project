---
sidebar_label: "2021年8月実施 固体力学（午前）"
tags:
  - Tokyo-University
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Yielding
---

# 東京大学 工学系研究科 航空宇宙工学専攻 2021年8月実施 固体力学（午前）

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

[原題：2022年度専門科目（午前）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022am.pdf)

固体力学（午前）

当問題では微小変形の球対称問題を考える。平衡方程式は体積力を無視できる場合、

$$
\frac{d\sigma_r}{dr}+\frac{2(\sigma_r-\sigma_\theta)}{r}=0\tag{1}
$$

ひずみと変位の関係は、

$$
\varepsilon_r=\frac{du}{dr},\qquad \varepsilon_\theta=\frac ur\tag{2}
$$

と表すことができる。ここに、$r$ は中心からの距離、$\sigma_r,\sigma_\theta$ はそれぞれ半径方向、周方向の応力、$\varepsilon_r,\varepsilon_\theta$ はそれぞれ半径方向、周方向のひずみ、$u$ は半径方向の変位である。

**第1問** $\varepsilon_r,\varepsilon_\theta$ が満足すべき適合条件式を求めよ。

**第2問** フックの法則が成り立つ弾性体では、$A,B$ を任意の定数として、応力の一般解が次式で表されることが知られている。

$$
\sigma_r=A+\frac{2B}{r^3},\qquad \sigma_\theta=A-\frac B{r^3}\tag{3}
$$

この式が (1) 式の平衡方程式を満足することは明らかである。いま、ヤング率を $E$、ポアソン比を $\nu$ として、球対称問題におけるフックの法則を書き下し、(3) 式が第1問で求めた適合条件式を満足することを示せ。

以下では半径 $a$ の球形の空孔を有する物体を考える。この物体はミーゼスの降伏条件に従う弾完全塑性体で、弾性変形時のヤング率を $E$、ポアソン比を $\nu$、単軸引張時の降伏応力を $Y$ とする。また、$a$ は物体の大きさと比べて十分に小さいとする。ここに、「ミーゼスの降伏条件に従う弾完全塑性体」とは、相当応力 $\sigma_{\mathrm{eq}}$ が $Y$ になると降伏し、塑性変形域内では $\sigma_{\mathrm{eq}}=Y$（一定値）となることを意味する。なお、相当応力 $\sigma_{\mathrm{eq}}$ は、3つの主応力を $\sigma_1,\sigma_2,\sigma_3$ として、次式で定義される。

$$
\sigma_{\mathrm{eq}}=\frac1{\sqrt2}
\sqrt{(\sigma_1-\sigma_2)^2+(\sigma_2-\sigma_3)^2+(\sigma_3-\sigma_1)^2}\tag{4}
$$

**第3問** 空孔内で $p$ なる内圧が作用するとき、弾性変形時における応力分布を求めよ。また、$p$ を徐々に大きくする場合、降伏が始まるときの $p$ の値（$p_Y$ とおく）を求めよ。

**第4問** $p>p_Y$ のとき、弾塑性境界を $r=c$ とすると、$a\le r\le c$ の領域は塑性変形域、$r\ge c$ の領域は弾性変形域となる。$r=c$ における $\sigma_r$ の値を求めよ。

**第5問** 第4問で $p=Y$ のとき、$c$ の値、および、$a\le r\le c$ と $r\ge c$ の各領域における応力分布を求めよ。

**第6問** $p=Y$ の状態から $p$ を零にしたときの残留応力分布を求めよ。ただし、バウシンガー効果は考慮しなくてよい。

**第7問** この物体がトレスカの降伏条件に従う弾完全塑性体の場合、第3問～第6問の結果はどうなるかを理由とともに簡単に述べよ。

### 题目描述

固体力学（上午）

考虑微小变形的球对称问题。忽略体积力时，平衡方程为

$$
\frac{d\sigma_r}{dr}+\frac{2(\sigma_r-\sigma_\theta)}{r}=0.\qquad(1)
$$

应变与位移的关系为

$$
\varepsilon_r=\frac{du}{dr},\qquad \varepsilon_\theta=\frac ur.\qquad(2)
$$

其中 $r$ 为到中心的距离；$\sigma_r,\sigma_\theta$ 分别为径向、周向应力；$\varepsilon_r,\varepsilon_\theta$ 分别为径向、周向应变；$u$ 为径向位移。

**第1问** 求 $\varepsilon_r,\varepsilon_\theta$ 应满足的相容条件。

**第2问** 对满足胡克定律的弹性体，已知应力通解为

$$
\sigma_r=A+\frac{2B}{r^3},\qquad \sigma_\theta=A-\frac B{r^3},\qquad(3)
$$

其中 $A,B$ 是任意常数。显然它满足平衡方程 (1)。设杨氏模量为 $E$，泊松比为 $\nu$，写出球对称问题的胡克定律，并证明式 (3) 满足第1问的相容条件。

以下考虑含半径 $a$ 的球形空孔的物体。材料是遵从 Mises 屈服准则的弹性理想塑性体，弹性阶段杨氏模量为 $E$，泊松比为 $\nu$，单轴拉伸屈服应力为 $Y$。$a$ 远小于物体尺寸。“遵从 Mises 屈服准则的弹性理想塑性体”指等效应力 $\sigma_{\mathrm{eq}}$ 达到 $Y$ 时屈服，且在塑性区内恒有 $\sigma_{\mathrm{eq}}=Y$。三个主应力为 $\sigma_1,\sigma_2,\sigma_3$，等效应力定义为

$$
\sigma_{\mathrm{eq}}=\frac1{\sqrt2}
\sqrt{(\sigma_1-\sigma_2)^2+(\sigma_2-\sigma_3)^2+(\sigma_3-\sigma_1)^2}.\qquad(4)
$$

**第3问** 空孔内承受压力 $p$ 时，求弹性变形阶段的应力分布。若逐渐增大 $p$，求开始屈服时的压力 $p_Y$。

**第4问** 当 $p>p_Y$ 时，设弹塑性分界为 $r=c$，则 $a\le r\le c$ 是塑性区，$r\ge c$ 是弹性区。求 $r=c$ 处的 $\sigma_r$。

**第5问** 第4问中，取 $p=Y$，求 $c$ 及 $a\le r\le c$、$r\ge c$ 两区域的应力分布。

**第6问** 从 $p=Y$ 卸载到 $p=0$，求残余应力分布。不必考虑包辛格效应。

**第7问** 若材料改为遵从 Tresca 屈服准则的弹性理想塑性体，第3～6问的结果会如何变化？简述结果及理由。

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
\begin{gathered}
\varepsilon_r=\frac{(1-2\nu)A+2(1+\nu)B/r^3}{E},\\
\varepsilon_\theta=\frac{(1-2\nu)A-(1+\nu)B/r^3}{E}.
\end{gathered}
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
