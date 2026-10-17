---
sidebar_label: "2017年8月実施 専門部門 問題2（流体力学）"
tags:
  - Nagoya-University
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
  - Engineering.Fluid-Mechanics.Falling-Film
---

# 名古屋大学 工学研究科 機械航空系 2017年8月実施 専門部門 問題2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

**問題2.**

**(1)** 図1に示すように，上部が大気に開放された断面積 $S_A$ の容器 A と断面積 $S_B$ の容器 B が断面積 $\sigma\ (\sigma\ll S_A,S_B)$ の小さな孔のあいた仕切板で隔てられている。容器 A，B には孔中心から測ってそれぞれ高さ $z_A,z_B$ まで液体が入っている。液体は非圧縮かつ非粘性で密度を $\rho$ とする。重力加速度を鉛直下向きに $g$ とする。液面は孔から十分に離れており，液面は水平を保ったまま上下するとみなせる。また，孔断面では流れは一様とみなせるとする。水平方向右向きに正方向をとる。このとき以下の問いに答えよ。

![図1 小孔でつながった二つの容器](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/mae_201708_senmon_2_original_figure_1.png)

**1)** 容器 A の液面高さが $\Delta z_A$ 変化するとき，容器 B の液面高さの変化 $\Delta z_B$ を求めよ。

**2)** $z_A>z_B$ のとき，孔を通過する液体の速度を求めよ。

**3)** 時刻 $t\ (>0)$ での容器 A，B の液面高さの差 $z_A(t)-z_B(t)$ を求めよ。ただし，$t=0$ での容器 A，B の液面高さをそれぞれ $z_A(0)=h_A,\ z_B(0)=h_B\ (h_A>h_B)$ とする。

**(2)** 図2に示すように，水平方向から角度 $\theta$ 傾いた斜面を考える。斜面に沿って下向きに $x$ 軸，斜面に対して垂直上向きに $y$ 軸をとり，重力加速度 $g$ が鉛直下向きに働くとする。液体が一定の厚さ $h$ および体積流量 $Q$ で層流状態を保ち，$x$ 軸に平行な速度成分のみをもって流れ落ちている。液体は密度 $\rho$，粘度 $\mu$ の非圧縮粘性流体（ニュートン流体）とする。図に示す2次元平面での運動のみを扱うこととし，$y=h$ の面は自由表面であるとする。このとき以下の問いに答えよ。

![図2 斜面を流れ落ちる液膜](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/mae_201708_senmon_2_original_figure_2.png)

**1)** 液体に作用する重力と液体中の摩擦応力 $\tau$ のつり合いを考え，$d\tau/dy$ を求めよ。

**2)** 図2のように自由表面での液体の流速を $v(h)=V$ とする。流速分布 $v(y)$ が，

$$
\frac{d\tau}{dy}=\mu\frac{d^2v}{dy^2}
$$

の微分方程式に従うとき，

$$
v(y)=V\frac yh\left(2-\frac yh\right)
$$

と表されることを示せ。

**3)** 速度分布を $y$ 方向に関して積分することで紙面垂直方向単位長さあたりの体積流量 $Q$ を求めよ。また液体層の厚さ $h$ は体積流量 $Q$ の何乗に比例するか答えよ。

#### 题目描述

**问题2.**

**(1)** 如图1，上方与大气相通的容器 A、B 的截面积分别为 $S_A,S_B$，两容器之间由开有小孔的隔板隔开，孔面积为 $\sigma$，且 $\sigma\ll S_A,S_B$。从孔中心计，容器 A、B 中液体高度分别为 $z_A,z_B$。液体不可压缩、无黏，密度为 $\rho$；重力加速度 $g$ 竖直向下。液面距孔足够远，可视为始终保持水平地上下移动；孔截面内的流动可视为均匀。取水平向右为正方向。回答下列问题。

**1)** 当容器 A 的液面高度变化 $\Delta z_A$ 时，求容器 B 液面高度的变化 $\Delta z_B$。

**2)** 当 $z_A>z_B$ 时，求流过孔的液体速度。

**3)** 求 $t>0$ 时两容器液面高度差 $z_A(t)-z_B(t)$。初始 $t=0$ 时，液面高度分别为 $z_A(0)=h_A,\ z_B(0)=h_B$，且 $h_A>h_B$。

**(2)** 如图2，考虑与水平方向夹角为 $\theta$ 的斜面。沿斜面向下取 $x$ 轴，垂直斜面向上取 $y$ 轴，重力加速度 $g$ 竖直向下。液体保持恒定厚度 $h$、体积流量 $Q$ 及层流状态，仅具有平行于 $x$ 轴的速度分量并沿斜面流下。液体为密度 $\rho$、黏度 $\mu$ 的不可压缩黏性牛顿流体。只讨论图示二维平面内的运动，$y=h$ 为自由表面。回答下列问题。

**1)** 考虑液体所受重力与液体内剪应力 $\tau$ 的平衡，求 $d\tau/dy$。

**2)** 如图2，设自由表面液体流速为 $v(h)=V$。当速度分布 $v(y)$ 满足微分方程

$$
\frac{d\tau}{dy}=\mu\frac{d^2v}{dy^2},
$$

证明其可表示为

$$
v(y)=V\frac yh\left(2-\frac yh\right).
$$

**3)** 沿 $y$ 方向积分速度分布，求垂直纸面方向单位长度上的体积流量 $Q$，并回答液层厚度 $h$ 与体积流量 $Q$ 的多少次方成正比。

## **Kai**

### (1)

#### 1), 2)

質量保存から

$$
\boxed{S_A\Delta z_A+S_B\Delta z_B=0}.
$$

自由表面の速度を小孔速度に比べて無視し、圧力差 $\rho g(z_A-z_B)$ を動圧に等置すると

$$
\boxed{v=\sqrt{2g(z_A-z_B)}}.
$$

#### 3)

$S_A\dot z_A=-\sigma v$、$S_B\dot z_B=\sigma v$ より

$$
\dot h=-\sigma\left(\frac1{S_A}+\frac1{S_B}\right)\sqrt{2gh}.
$$

$h>0$ の間、変数分離して

$$
\boxed{h(t)=\left[\sqrt{h_A-h_B}-\frac{\sigma(S_A+S_B)}{S_AS_B}\sqrt{\frac g2}\,t\right]^2},
\quad0\le t\le t_*.
$$

ここで

$$
t_* =\frac{S_AS_B}{\sigma(S_A+S_B)}\sqrt{\frac{2(h_A-h_B)}g}.
$$

この準定常モデルでは $t\ge t_*$ で $h=0$ である。二乗式を $t_*$ より先まで延長してはならない。

### (2)

#### 1)

微小要素の $x$ 方向の力のつり合いより

$$
\boxed{\frac{d\tau}{dy}+\rho g\sin\theta=0}.
$$

#### 2)

$\tau=\mu v'$、$\tau(h)=0$、$v(0)=0$ を用いて二回積分する。

$$
\tau=\rho g\sin\theta(h-y),\qquad
v=\frac{\rho g\sin\theta}{\mu}\left(hy-\frac{y^2}{2}\right).
$$

従って

$$
V=\frac{\rho g\sin\theta}{2\mu}h^2,\qquad
\boxed{v=V\frac yh\left(2-\frac yh\right)}.
$$

#### 3)

$$
\boxed{Q=\int_0^h v\,dy=\frac23Vh=\frac{\rho g\sin\theta}{3\mu}h^3},
$$

$$
\boxed{h=\left(\frac{3\mu Q}{\rho g\sin\theta}\right)^{1/3}\propto Q^{1/3}}.
$$

## **Reference**

- [名古屋大学公式問題：2017年8月23日実施・専門部門、PDF 3ページ](https://www.mae.nagoya-u.ac.jp/application/files/1515/2475/5975/H29_.pdf)
