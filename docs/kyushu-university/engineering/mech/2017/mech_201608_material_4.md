---
sidebar_label: "2016年8月実施 問4（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Thin-Walled-Pressure-Vessels
---

# 九州大学 工学府 機械系専攻 2016年8月実施 材料力学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のような、長さ $L$ で内径 $d_0$、肉厚 $w$ の薄肉円筒があり、両端が剛体円板で閉じられている。円筒に内圧 $p$ が負荷された時に、次の問いに答えよ。（35点）

**1)** 円筒の長手方向中央に生じる軸方向の垂直応力 $\sigma_a$ と円周方向の垂直応力 $\sigma_t$ を求めよ。

**2)** 円筒の長手方向中央に生じる円周方向の垂直ひずみ $\varepsilon_t$ を求めよ。

**3)** 円筒の長手方向の中央部において、内圧 $p$ が負荷された後の内径 $d$ を求めよ。

**4)** 内圧 $p$ に加えて、剛体円板に引張荷重 $F$ を負荷する。円筒の長手方向の中央部における内径 $d$ が、内圧を負荷する前の内径 $d_0$ となる $F$ を求めよ。

図中、$E$ はヤング率、$\nu$ はポアソン比であり、$L\gg d\gg w$ とする。

![原題の薄肉円筒と両端の剛体円板](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_material-4-original.png)

#### 题目描述

如图，有一长度为 $L$、内径为 $d_0$、壁厚为 $w$ 的薄壁圆筒，两端由刚性圆板封闭。当圆筒承受内压 $p$ 时，回答下列问题。（35分）

**1)** 求圆筒轴向中部的轴向正应力 $\sigma_a$ 和环向正应力 $\sigma_t$。

**2)** 求圆筒轴向中部的环向正应变 $\varepsilon_t$。

**3)** 求施加内压 $p$ 后，圆筒轴向中部的内径 $d$。

**4)** 除内压 $p$ 外，再向刚性圆板施加拉伸载荷 $F$。求使圆筒轴向中部内径 $d$ 恢复为加压前内径 $d_0$ 的 $F$。

图中 $E$ 为杨氏模量，$\nu$ 为泊松比，且 $L\gg d\gg w$。

## **Kai**

### (1)

薄肉近似で断面の軸方向つり合いを取ると

$$
\sigma_a\pi d_0w=p\frac{\pi d_0^2}{4},
\qquad\boxed{\sigma_a=\frac{pd_0}{4w}}.
$$

円筒を軸に沿って二分した自由物体のつり合いから

$$
2\sigma_twL=pd_0L,
\qquad\boxed{\sigma_t=\frac{pd_0}{2w}}.
$$

### (2)

半径方向応力を省略する平面応力近似より

$$
\boxed{\varepsilon_t=\frac{\sigma_t-\nu\sigma_a}{E}
=\frac{pd_0(2-\nu)}{4Ew}}.
$$

### (3)

円周のひずみは内径の変化率に等しいので

$$
\begin{gathered}
\varepsilon_t=\frac{\pi d-\pi d_0}{\pi d_0},\\
\boxed{d=d_0\left[1+\frac{pd_0(2-\nu)}{4Ew}\right]}.
\end{gathered}
$$

### (4)

引張力を加えたとき

$$
\sigma_a=\frac{pd_0}{4w}+\frac{F}{\pi d_0w},\qquad
\sigma_t=\frac{pd_0}{2w}.
$$

内径が元に戻る条件は $\varepsilon_t=0$、すなわち $\sigma_t=\nu\sigma_a$ である。よって

$$
\boxed{F=\frac{(2-\nu)\pi pd_0^2}{4\nu}}.
$$

通常の $0<\nu<1/2$ の材料では正の引張力となる。
