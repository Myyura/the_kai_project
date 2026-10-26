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

図 2-3 のように，細長い二重円筒間（内筒半径 $R_1$，外筒半径 $R_2$）の非圧縮性流れを考える。内筒は静止し，外筒が角速度 $\Omega$ で回転している。軸方向の流れは存在しない。軸方向を $x$，周方向を $\theta$，半径方向を $r$ とし，それぞれの方向の速度を $u_x,u_\theta,u_r$，圧力を $p$，密度を $\rho$，粘性係数を $\mu$ とする。流れは周方向に一様である。定常な層流を仮定し，以下の設問に答えよ。

![図 2-3 外筒が回転する二重円筒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/mech/2018/mech_201708_I_2_III_figure_1.png)

**(1)** 一般に非圧縮性流れにおいて，円筒座標系の連続の式は下記で与えられる。この問題設定に関してゼロとなる項を消去し，最も簡単な形を求めよ。

$$
\frac1r\frac{\partial}{\partial r}(ru_r)
+\frac1r\frac{\partial u_\theta}{\partial\theta}
+\frac{\partial u_x}{\partial x}=0
$$

**(2)** $u_\theta,u_r$ の境界条件を書け。

**(3)** 設問 (1)，(2) から $u_r$ を求めよ。

**(4)** 一般に定常非圧縮性流れにおいて，円筒座標系のナビエ・ストークス方程式は以下で与えられる。この問題設定に関してゼロとなる項を消去し，最も簡単な形を求めよ。

$$
\begin{aligned}
&\rho\left(u_r\frac{\partial u_r}{\partial r}
+\frac{u_\theta}{r}\frac{\partial u_r}{\partial\theta}
-\frac{u_\theta^2}{r}+u_x\frac{\partial u_r}{\partial x}\right)\\
&=-\frac{\partial p}{\partial r}
+\mu\left[\frac{\partial}{\partial r}\left\{\frac1r\frac{\partial}{\partial r}(ru_r)\right\}
+\frac1{r^2}\frac{\partial^2u_r}{\partial\theta^2}
-\frac2{r^2}\frac{\partial u_\theta}{\partial\theta}
+\frac{\partial^2u_r}{\partial x^2}\right]
\end{aligned}
$$

$$
\begin{aligned}
&\rho\left(u_r\frac{\partial u_\theta}{\partial r}
+\frac{u_\theta}{r}\frac{\partial u_\theta}{\partial\theta}
+\frac{u_ru_\theta}{r}+u_x\frac{\partial u_\theta}{\partial x}\right)\\
&=-\frac1r\frac{\partial p}{\partial\theta}
+\mu\left[\frac{\partial}{\partial r}\left\{\frac1r\frac{\partial}{\partial r}(ru_\theta)\right\}
+\frac1{r^2}\frac{\partial^2u_\theta}{\partial\theta^2}
+\frac2{r^2}\frac{\partial u_r}{\partial\theta}
+\frac{\partial^2u_\theta}{\partial x^2}\right]
\end{aligned}
$$

$$
\begin{aligned}
&\rho\left(u_r\frac{\partial u_x}{\partial r}
+\frac{u_\theta}{r}\frac{\partial u_x}{\partial\theta}
+u_x\frac{\partial u_x}{\partial x}\right)\\
&=-\frac{\partial p}{\partial x}
+\mu\left[\frac1r\frac{\partial}{\partial r}\left(r\frac{\partial u_x}{\partial r}\right)
+\frac1{r^2}\frac{\partial^2u_x}{\partial\theta^2}
+\frac{\partial^2u_x}{\partial x^2}\right]
\end{aligned}
$$

**(5)** 設問 (4) で求めた $u_\theta$ に関する微分方程式を解いて，$u_\theta$ の分布を求めよ。

**(6)** 内筒が軸方向単位長さあたりに受ける軸まわりのトルク $\tau$ を求めよ。

**(7)** $R_2/R_1=\sqrt2$ のとき，内筒面と外筒面の圧力差 $\Delta p$ を，$\rho,R_2,\Omega$ を用いて表せ。

### 题目描述

图 2-3 中，考虑细长同心双圆筒之间的不可压缩流动，内筒半径为 $R_1$，外筒半径为 $R_2$。内筒静止，外筒以角速度 $\Omega$ 旋转，无轴向流动。轴向、周向、径向坐标分别为 $x,\theta,r$，相应速度为 $u_x,u_\theta,u_r$；压力、密度、黏度分别为 $p,\rho,\mu$。流动沿周向均匀，假设为定常层流。

**(1)** 一般不可压缩流动的柱坐标连续方程为

$$
\frac1r\frac{\partial}{\partial r}(ru_r)
+\frac1r\frac{\partial u_\theta}{\partial\theta}
+\frac{\partial u_x}{\partial x}=0.
$$

按本题条件删去为零的项，化为最简单形式。

**(2)** 写出 $u_\theta,u_r$ 的边界条件。

**(3)** 由 (1)、(2) 求 $u_r$。

**(4)** 一般定常不可压缩流动的柱坐标纳维—斯托克斯方程由上文的径向、周向、轴向三式给出。按本题条件删去各式中为零的项，化为最简单形式。

**(5)** 解 (4) 得到的 $u_\theta$ 微分方程，求周向速度分布。

**(6)** 求内筒单位轴向长度所受绕轴扭矩 $\tau$。

**(7)** $R_2/R_1=\sqrt2$ 时，用 $\rho,R_2,\Omega$ 表示内、外筒表面的压力差 $\Delta p$。

## **Kai**

### (1)

$u_x=0$、$\partial_\theta=0$ なので、連続の式は

$$
\frac1r\frac{d(ru_r)}{dr}=0.
$$

### (2)

境界条件は

$$
\begin{gathered}
u_r(R_1)=u_r(R_2)=0,\\
u_\theta(R_1)=0,\\
u_\theta(R_2)=R_2\Omega.
\end{gathered}
$$

### (3)

$ru_r$ は一定であり、壁面条件から $\boxed{u_r=0}$。

### (4)

端面の影響がない軸方向に一様な流れでは、

$$
\boxed{\begin{gathered}
\frac{dp}{dr}=\rho\frac{u_\theta^2}{r},\\
\frac d{dr}\left[\frac1r\frac d{dr}(ru_\theta)\right]=0,\\
p_x=0
\end{gathered}}.
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
\begin{gathered}
\Delta p=\rho\Omega^2\int_{R_2/\sqrt2}^{R_2}
\left(4r-\frac{4R_2^2}{r}+\frac{R_2^4}{r^3}\right)dr\\
=\boxed{\frac{\rho R_2^2\Omega^2}{2}(3-4\ln2)}.
\end{gathered}
$$

## **Reference**

- [東京大学 公式過去問（2018年度）](https://www2.mech.t.u-tokyo.ac.jp/wp-content/uploads/2022/04/H30%E7%AC%AC1%E9%83%A8-2.pdf)
- [SN の解答・解説](https://bloodystream.hatenadiary.jp/entry/2020/12/13/181137)
