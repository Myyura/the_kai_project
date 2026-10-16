---
sidebar_label: "2015年8月実施 問1（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Turbomachinery
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
---

# 九州大学 工学府 機械系専攻 2015年8月実施 流体工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

水平に設置された内径 $D$、外径 $2D$ の環状流路内に軸流タービンの羽根車があり、密度 $\rho$ の非圧縮性流体が体積流量 $Q$ で流れる。上流断面1では軸方向速度 $V_{z1}$ と圧力 $p_1$ は一様で、周方向速度はゼロである。下流断面2では軸方向速度 $V_{z2}$ は一様、周方向速度は $V_{\theta2}(r)=k/r$（$D/2\le r\le D$、$k$ は定数）である。断面2の圧力は半径方向に分布し、外壁で $p_2(D)=p_{2w}$、かつ $p_{2w}<p_1-\rho k^2/(2D^2)$ である。

両断面で半径方向速度はゼロ、流れは定常・軸対称、一切の損失は無視できる。（50点）

1. $V_{z1},V_{z2}$ を求めよ。
2. 微小流体の半径方向の力の釣り合いから $p_2(r)$ を求めよ。
3. 羽根車が受ける軸方向の力 $F_z$ を求めよ。
4. 羽根車が受けるトルク $T$ を求めよ。
5. 羽根車が得る単位時間当たりのエネルギー $E$ を求めよ。

![原題の図（九州大学 2016年度 流体工学 問1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_fluids-1-original.png)

#### 题目描述

内径 $D$、外径 $2D$ 的水平环形流道内装有轴流涡轮，密度 $\rho$ 的不可压缩流体以体积流量 $Q$ 定常流动。上游轴向速度与压力 $p_1$ 均匀，无旋流；下游轴向速度均匀，旋流为 $V_{\theta2}=k/r$，外壁压力为 $p_{2w}<p_1-\rho k^2/(2D^2)$。两截面无径向速度，流动轴对称且无损失。求两截面轴向速度、下游径向压力分布、叶轮所受轴向力和转矩，以及叶轮取得的功率。

## **Kai**

### (1)

流路面積を $A$ とすると、連続の式より

$$
A=\frac{3\pi D^2}{4},\qquad
\boxed{V_{z1}=V_{z2}=V=\frac{4Q}{3\pi D^2}}.
$$

### (2)

半径方向の圧力勾配は向心加速度に対応するため

$$
\frac{dp_2}{dr}=\rho\frac{V_{\theta2}^2}{r}=\frac{\rho k^2}{r^3}.
$$

外壁の条件で積分定数を定めると

$$
\boxed{p_2(r)=p_{2w}+\frac{\rho k^2}{2}\left(\frac1{D^2}-\frac1{r^2}\right)}.
$$

### (3)

両断面の軸方向運動量流束は等しい。したがって、流れが羽根車に及ぼす $+z$ 方向の力は圧力合力に等しい。

$$
\begin{aligned}
F_z&=\int_{D/2}^{D}[p_1-p_2(r)]\,2\pi r\,dr\\
&=\boxed{\frac{3\pi D^2}{4}(p_1-p_{2w})
+\pi\rho k^2\left(\log2-\frac38\right)}.
\end{aligned}
$$

### (4)

半径 $r$ の微小環状部分を通る流量は $dQ=V\,2\pi r\,dr$ である。流体の軸まわりの角運動量増加率は

$$
\int\rho rV_{\theta2}\,dQ=\rho k\int dQ=\rho Qk.
$$

よって羽根車に働く反作用のトルクは、下流旋回方向を正とすれば

$$
\boxed{T_z=-\rho Qk},\qquad |T|=\rho Q|k|.
$$

### (5)

損失がないので、羽根車の取得動力は流体の機械的エネルギー流束の減少である。高さと軸方向速度の項は相殺され、

$$
\begin{aligned}
E&=\int\left[p_1-p_2(r)-\frac{\rho V_{\theta2}^2(r)}2\right]dQ\\
&=\boxed{Q\left(p_1-p_{2w}-\frac{\rho k^2}{2D^2}\right)}.
\end{aligned}
$$

括弧内は半径によらず一定であり、題設の不等式から $E>0$ である。
