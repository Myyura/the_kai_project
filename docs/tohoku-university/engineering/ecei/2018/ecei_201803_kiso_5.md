---
sidebar_label: 2018年3月実施 基礎科目 問題5 物理基礎
tags:
  - Tohoku-University
  - Physics.Mechanics.Two-Body-Central-Force-and-Effective-Potential
  - Mathematics.Calculus.Limit
---

# 東北大学 工学研究科 電気・情報系 2018年3月実施 基礎科目 問題5 物理基礎

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

質量 $m$ の質点が、時間に依存しない中心対称ポテンシャル $U$ のもとで運動している系を考察する。質点の位置ベクトルは $\boldsymbol r$ で表し、その原点はポテンシャルの中心に置く。つまり質点の運動方程式は $m\frac{d^2\boldsymbol r}{dt^2}=-\nabla U(r)$ とかけ、ここで $r=|\boldsymbol r|$ である。

(1) エネルギー $E=\frac12m|\frac{d\boldsymbol r}{dt}|^2+U(r)$ と角運動量 $\boldsymbol L=\boldsymbol r\times m\frac{d\boldsymbol r}{dt}$ が保存されること、即ち、$\frac{dE}{dt}=0$ 及び $\frac{d\boldsymbol L}{dt}=0$ を示せ。ここで記号 $\times$ は外積を表す。

(2) $\boldsymbol L$ の保存は、質点の運動が、ある（原点を含む）平面内に限られることを意味する。今この平面を $x$-$y$ 面にとり、質点の位置を $\boldsymbol r=(r\cos\theta,r\sin\theta,0)$ と表す。ここで $\theta$ は、$\boldsymbol r$ と $x$ 軸の間の角度である。以下の関係を示せ。

$$
L=mr^2\left|\frac{d\theta}{dt}\right|,
$$

$$
E=\frac12m\left(\frac{dr}{dt}\right)^2+\frac{L^2}{2mr^2}+U(r).\tag{5A}
$$

ここで $L=|\boldsymbol L|$ である。

(3) Eq. (5A) は、$(\frac{dr}{dt})^2$ を $r$ の関数として表している。質点がポテンシャルの中心に到達できるためには、以下の不等式が必要条件として成立しなければならない。

$$
\lim_{r\to0}\left(\frac{dr}{dt}\right)^2>0.
$$

今、ポテンシャルが $U(r)=-\frac{A}{r^\alpha}$ の型をもち、$\alpha$ と $A$ は正の実数であるとする。上記不等式が $\alpha$ と $A$ に課す制限を求めよ。ここで、この不等式は結果的に、

$$
\lim_{r\to0}\left(\frac{dr}{dt}\right)^2=\infty
$$

を意味すると仮定する。

### 题目描述

质量 $m$ 的质点在与时间无关的中心势 $U(r)$ 中运动，其中 $r=|\boldsymbol r|$，满足 $m\ddot{\boldsymbol r}=-\nabla U(r)$。

1. 证明能量 $E=m|\dot{\boldsymbol r}|^2/2+U(r)$ 与角动量 $\boldsymbol L=\boldsymbol r\times m\dot{\boldsymbol r}$ 守恒。
2. 运动限制于过原点的平面。取其为 $xy$ 平面，用 $\boldsymbol r=(r\cos\theta,r\sin\theta,0)$ 表示，证明
   

$$
L=mr^2|\dot\theta|,\qquad E=\frac m2\dot r^2+\frac{L^2}{2mr^2}+U(r),\quad L=|\boldsymbol L|.
$$

3. 到达中心必须满足 $\lim_{r\to0}\dot r^2>0$。若 $U(r)=-A/r^\alpha$，其中 $A,\alpha>0$，求由此对 $A,\alpha$ 的限制。本问进一步假设该极限为 $+\infty$。

## **Kai**

### (1)

$$
\frac{dE}{dt}=\dot{\boldsymbol r}\cdot(m\ddot{\boldsymbol r}+\nabla U)=0.
$$

由于 $\nabla U=U'(r)\boldsymbol r/r$，

$$
\frac{d\boldsymbol L}{dt}=\boldsymbol r\times m\ddot{\boldsymbol r}
=-\boldsymbol r\times U'(r)\frac{\boldsymbol r}{r}=0.
$$

### (2)

$\boldsymbol r\perp\boldsymbol L$，故非零角动量时轨迹位于固定平面；零角动量时为径向运动，也可选一平面包含它。

$$
\dot{\boldsymbol r}=\dot r\boldsymbol e_r+r\dot\theta\boldsymbol e_\theta,
\qquad\boldsymbol L=mr^2\dot\theta\boldsymbol e_z.
$$

取模并代入动能即得

$$
\boxed{L=mr^2|\dot\theta|},\qquad
\boxed{E=\frac m2\dot r^2+\frac{L^2}{2mr^2}+U(r)}.
$$

### (3)

$$
\dot r^2=\frac{2E}{m}+\frac{2A}{mr^\alpha}-\frac{L^2}{m^2r^2}.
$$

当 $L\ne0$，比较两个发散项：

- $\alpha>2$ 时吸引势项占优，对任意 $A>0$ 极限为 $+\infty$。
- $\alpha=2$ 时要求 $2A/m-L^2/m^2>0$，即 $A>L^2/(2m)$。
- $0<\alpha<2$ 时离心项占优，不能到达中心。

所以题设发散条件等价于

$$
\boxed{\alpha>2\quad\text{或}\quad\alpha=2,\ A>\frac{L^2}{2m}\qquad(L\ne0)}.
$$

若 $L=0$，则所有 $A>0,\alpha>0$ 都满足题设发散条件。
