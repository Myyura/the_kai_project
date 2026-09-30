---
sidebar_label: '機械工学第1部 2017年8月実施 問題 2 III'
tags:
  - Tokyo-University
  - Engineering.Fluid-Mechanics.Cylindrical-Couette-Flow
  - Engineering.Fluid-Mechanics.Navier-Stokes-Equations
---

# 東京大学 工学系研究科 機械工学専攻 機械工学第1部 2017年8月実施 問題 2 設問 III

## **Author**
祭音Myyura (Based on [SN's answer](https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000) refined with GPT 6 Astra)

## **Description**
内半径 $R_1$、外半径 $R_2$ の十分長い同心二重円筒の間を、密度 $\rho$、粘性係数 $\mu$ の非圧縮流体が満たしている。内筒は静止、外筒は角速度 $\Omega$ で回転する。定常層流で周方向に一様、軸方向流れと端面の影響はない。軸・周・半径方向を $(x,\theta,r)$、速度を $(u_x,u_\theta,u_r)$ とする。

(1) 円筒座標の連続の式を簡単化せよ。(2) $u_\theta,u_r$ の壁面条件を書け。(3) $u_r$ を求めよ。

(4) 円筒座標の Navier–Stokes 方程式を簡単化せよ。(5) $u_\theta(r)$ を求めよ。

(6) 内筒が軸方向の単位長さ当たりに受けるトルクを求めよ。

(7) $R_2/R_1=\sqrt2$ の場合、外筒面と内筒面の圧力差 $\Delta p=p(R_2)-p(R_1)$ を求めよ。

![流れと座標の模式図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/sn-mechanics/fluid/2018-couette.svg)

#### 题目描述

内筒静止、外筒以角速度 $\Omega$ 转动的同心圆筒间，存在无轴向流动的定常轴对称黏性流。简化连续及动量方程，给出边界条件，求径向速度、周向速度、内筒单位长度所受转矩，以及 $R_2/R_1=\sqrt2$ 时的内外壁压差。

## **Kai**

### (1)–(3)

$u_x=0$、$\partial_\theta=0$ なので、連続の式は

$$
\frac1r\frac{d(ru_r)}{dr}=0.
$$

境界条件は

$$
u_r(R_1)=u_r(R_2)=0,\qquad u_\theta(R_1)=0,\quad u_\theta(R_2)=R_2\Omega.
$$

$ru_r$ は一定であり、壁面条件から $\boxed{u_r=0}$。

### (4)

端面の影響がない軸方向に一様な流れでは、

$$
\boxed{\frac{dp}{dr}=\rho\frac{u_\theta^2}{r},\qquad
\frac d{dr}\left[\frac1r\frac d{dr}(ru_\theta)\right]=0,\qquad p_x=0}.
$$

### (5)

周方向方程式の一般解は $u_\theta=Ar+B/r$。境界条件を適用して、

$$
\boxed{u_\theta(r)=\frac{R_2^2\Omega}{R_2^2-R_1^2}\left(r-\frac{R_1^2}{r}\right)}.
$$

### (6)

円筒座標のせん断応力は $\tau_{r\theta}=\mu(du_\theta/dr-u_\theta/r)$。内筒面では $u_\theta=0$ なので、

$$
\boxed{T'=2\pi R_1^2\tau_{r\theta}(R_1)
=\frac{4\pi\mu R_1^2R_2^2\Omega}{R_2^2-R_1^2}}.
$$

向きは外筒の回転方向である。

### (7)

$R_1=R_2/\sqrt2$ では $u_\theta=\Omega(2r-R_2^2/r)$。よって

$$
\Delta p=\rho\Omega^2\int_{R_2/\sqrt2}^{R_2}
\left(4r-\frac{4R_2^2}{r}+\frac{R_2^4}{r^3}\right)dr
=\boxed{\frac{\rho R_2^2\Omega^2}{2}(3-4\ln2)}.
$$

## **Reference**

- [東京大学 公式過去問（2018年度）](https://www2.mech.t.u-tokyo.ac.jp/wp-content/uploads/2022/04/H30%E7%AC%AC1%E9%83%A8-2.pdf)
- [SN の解答・解説](https://bloodystream.hatenadiary.jp/entry/2020/12/13/181137)
