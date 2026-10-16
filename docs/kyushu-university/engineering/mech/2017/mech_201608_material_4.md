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

長さ $L$、内径 $d_0$、肉厚 $w$ の薄肉円筒の両端が剛体円板で閉じられている。材料のヤング率を $E$、ポアソン比を $\nu$ とし、$L\gg d_0\gg w$ とする。円筒に内圧 $p$ を負荷する。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_material-4-original.png)

1. 円筒中央に生じる軸方向応力 $\sigma_a$ と円周方向応力 $\sigma_t$ を求めよ。
2. 中央の円周方向ひずみ $\varepsilon_t$ を求めよ。
3. 内圧負荷後の中央の内径 $d$ を求めよ。
4. 内圧に加え両端円板に引張荷重 $F$ を負荷し、中央の内径が負荷前の $d_0$ に戻るようにする。$F$ を求めよ。

#### 题目描述

长 $L$、初始内径 $d_0$、壁厚 $w$ 的薄壁圆筒两端由刚性圆板封闭，材料参数为 $E,\nu$，且 $L\gg d_0\gg w$。施加内压 $p$ 后，求中部的轴向应力、环向应力、环向应变及内径。再求应施加于两端的轴向拉力 $F$，使中部内径恢复为 $d_0$。

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
\varepsilon_t=\frac{\pi d-\pi d_0}{\pi d_0},\qquad
\boxed{d=d_0\left[1+\frac{pd_0(2-\nu)}{4Ew}\right]}.
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
