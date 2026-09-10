---
sidebar_label: '数学 第4問'
tags:
  - Tokyo-University
  - Mathematics.Calculus.Arc-Length
  - Mathematics.Geometry.Arc-Length-Parameter-and-Curvature
---

# 東京大学 工学系研究科 2020年度 数学 第4問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### 問題

3次元直交座標系において、媒介変数 $\theta\in[0,\pi]$ により次の二つの曲線を定める。

$$
\boldsymbol P(\theta)=(x(\theta),y(\theta),0),\qquad
\boldsymbol Q(\theta)=(x(\theta),y(\theta),z(\theta)),
$$

$$
x(\theta)=\frac32\cos\theta-\frac12\cos3\theta,\qquad
y(\theta)=\frac32\sin\theta-\frac12\sin3\theta.
$$

$z$ は連続であり、$z(0)>0$、$z(\pi)<0$ を満たす。また $\boldsymbol Q$ は原点を中心とする半径 $2$ の球面上にある。曲線の正方向は $\theta$ が増加する向きとし、曲率は曲率半径の逆数とする。

I. $\boldsymbol P$ の $\theta=0$ から $\pi$ までの弧長を求めよ。

II. $z(\theta)$ を求めよ。

III. $\boldsymbol Q$ の正方向の接ベクトルと $z$ 軸正方向の単位ベクトルとの角を $\alpha$ とする。$\cos\alpha$ を求めよ。

IV. $\boldsymbol P$ の曲率 $\kappa_P(\theta)$ を求めよ。ただし $0<\theta<\pi$ とする。

V. $\boldsymbol Q$ の曲率 $\kappa_Q$ を $\kappa_P$ と $\alpha$ で表せ。ただし $0<\theta<\pi$ とする。

#### 题目描述

在三维直角坐标系中，以 $\theta\in[0,\pi]$ 为参数定义

$$
\boldsymbol P(\theta)=(x(\theta),y(\theta),0),\qquad
\boldsymbol Q(\theta)=(x(\theta),y(\theta),z(\theta)),
$$

$$
x(\theta)=\frac32\cos\theta-\frac12\cos3\theta,\qquad
y(\theta)=\frac32\sin\theta-\frac12\sin3\theta.
$$

$z$ 连续，$z(0)>0$、$z(\pi)<0$，且 $\boldsymbol Q$ 位于以原点为中心、半径为 $2$ 的球面上。曲线正向为 $\theta$ 增大的方向，曲率定义为曲率半径的倒数。

I. 求 $\boldsymbol P$ 从 $\theta=0$ 到 $\pi$ 的弧长。

II. 求 $z(\theta)$。

III. $\alpha$ 为 $\boldsymbol Q$ 的正向切向量与 $z$ 轴正向单位向量的夹角，求 $\cos\alpha$。

IV. 求 $\boldsymbol P$ 的曲率 $\kappa_P(\theta)$（$0<\theta<\pi$）。

V. 用 $\kappa_P$ 和 $\alpha$ 表示 $\boldsymbol Q$ 的曲率 $\kappa_Q$（$0<\theta<\pi$）。

## **Kai**

### I.

微分して和積公式を用いると

$$
\boldsymbol P'=3\sin\theta(\cos2\theta,\sin2\theta,0),\qquad
|\boldsymbol P'|=3\sin\theta.
$$

したがって $\boxed{L=\int_0^\pi3\sin\theta\,d\theta=6}$ である。

### II.

$$
x^2+y^2=\frac52-\frac32\cos2\theta=1+3\sin^2\theta.
$$

球面の条件から $z^2=3\cos^2\theta$ を得る。連続性と両端での符号より

$$
\boxed{z(\theta)=\sqrt3\cos\theta}.
$$

### III.

$z'=-\sqrt3\sin\theta$、$|\boldsymbol Q'|=2\sqrt3\sin\theta$ なので、

$$
\boxed{\cos\alpha=\frac{z'}{|\boldsymbol Q'|}=-\frac12}.
$$

端点でも片側接線の連続な極限をとれば同じ値となる。

### IV–V.

二つの曲線の単位接ベクトルは

$$
T_P=(\cos2\theta,\sin2\theta,0),\qquad
T_Q=(\sin\alpha\cos2\theta,\sin\alpha\sin2\theta,\cos\alpha).
$$

よって $|T_P'|=2$、$|T_Q'|=2\sin\alpha$ であり、
$ds_P/d\theta=\sin\alpha\,ds_Q/d\theta$ が成り立つ。したがって

$$
\boxed{\kappa_P=\frac{|T_P'|}{|\boldsymbol P'|}=\frac2{3\sin\theta}},\qquad
\boxed{\kappa_Q=\kappa_P\sin^2\alpha=\frac1{2\sin\theta}}.
$$

![平面曲線と球面上の空間曲線](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2020/math_4_curves.svg)
