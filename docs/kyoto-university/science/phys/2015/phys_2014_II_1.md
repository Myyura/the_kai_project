---
sidebar_label: "2015年度 II-1（力学）"
tags:
  - Kyoto-University
  - Physics.Mechanics.Hamilton-Principle-and-Euler-Lagrange-Equation
  - Physics.Mechanics.Work-and-Mechanical-Energy
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2015年度 II-1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$y'=dy/dx$ とする。

1. $T=\int_a^b L(y,y')\,dx$ に対し、$\delta y(a)=\delta y(b)=0$ のもとで $\delta T=0$ を与える微分方程式を書け。
2. その解 $y(x)$ に対し $\frac d{dx}(y'\partial L/\partial y'-L)$ を求めよ。

図1のように、地表を $y=0$ の平面とみなし、$P=(0,0)$ と $Q=(a,0)$（$a>0$）を結ぶ地下トンネルを考える。質量 $m$ の列車は $P$ で静止状態から出発し、抵抗を受けず重力のみで運動する。重力ポテンシャルは一定の $g>0$ を用いて $mgy$ とする。最短時間で $Q$ に達する経路を求めたい。

![図1：地表の2点を結ぶ地下トンネル（原題）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2015-II-1-fig1.png)

3. 点 $(x,y)$ での速さ $V$ を求めよ。
4. $ds=\sqrt{1+(y')^2}\,dx$ を用い、所要時間を $\int_0^aL(y,y')dx$ と書くときの $L$ を求めよ。
5. (2) を積分して $y'$ を $y$ で表せ。
6. $y'=-1/\tan\theta$ と定義して $y(\theta)$ を求めよ。
7. $dx/d\theta=(dy/d\theta)/y'$ を解き、両端で $y=0$ となる $x(\theta)$ を求めよ。
8. 最深点の座標を求めよ。
9. 最短時間 $T$ を求めよ。
10. $g=9.8\,\mathrm{m\,s^{-2}}$、$a=1.0\times10^6\,\mathrm m$ のとき $T$ を有効数字 2 桁で求めよ。

#### 题目描述

令 $y'=dy/dx$。

1. 对 $T=\int_a^bL(y,y')dx$，写出固定端点变分 $\delta y(a)=\delta y(b)=0$ 时 $\delta T=0$ 的方程。
2. 对该方程的解求 $d(y'L_{y'}-L)/dx$。

如上图1，将地表视为 $y=0$，挖连接 $P=(0,0)$、$Q=(a,0)$ 的地下隧道。质量 $m$ 的列车从 $P$ 静止出发，仅受重力且无阻力；重力势能为 $mgy$，$g>0$ 为常数。求用时最短的路径。

3. 求 $(x,y)$ 处速率。
4. 由 $ds=\sqrt{1+y'^2}dx$ 求时间泛函 $\int_0^aLdx$ 的 $L$。
5. 积分第 2 问结果，表示 $y'(y)$。
6. 令 $y'=-\cot\theta$，求 $y(\theta)$。
7. 解 $dx/d\theta=(dy/d\theta)/y'$，使用两端 $y=0$ 求 $x(\theta)$。
8. 求最深点坐标。
9. 求最短时间。
10. 取 $g=9.8\,\mathrm{m\,s^{-2}}$、$a=1.0\times10^6\,\mathrm m$，计算时间，保留两位有效数字。

## **Kai**

### (1)
部分積分して端点項を消すと

$$
\delta T=\int_a^b\left(\frac{\partial L}{\partial y}-\frac d{dx}\frac{\partial L}{\partial y'}\right)\delta y\,dx.
$$

任意の $\delta y$ に対しゼロなので

$$
\boxed{\frac d{dx}\frac{\partial L}{\partial y'}-\frac{\partial L}{\partial y}=0}.
$$

### (2)
$L$ は $x$ を陽に含まないため

$$
\boxed{\frac d{dx}(y'L_{y'}-L)=y'\left(\frac d{dx}L_{y'}-L_y\right)=0}.
$$

### (3)
エネルギー保存 $mV^2/2+mgy=0$ より

$$
\boxed{V=\sqrt{-2gy}}\qquad(y\le0).
$$

### (4)

$$
\boxed{L(y,y')=\sqrt{\frac{1+y'^2}{-2gy}}}.
$$

### (5)

$$
y'L_{y'}-L=-\frac1{\sqrt{-2gy(1+y'^2)}}=\text{一定}.
$$

正定数 $C$ を導入すれば $-y(1+y'^2)=C$、すなわち

$$
\boxed{y'=\pm\sqrt{-\frac Cy-1}}.
$$

### (6)
$1+\cot^2\theta=\csc^2\theta$ より

$$
\boxed{y(\theta)=-C\sin^2\theta}\qquad(0\le\theta\le\pi).
$$

### (7)

$$
\frac{dx}{d\theta}=2C\sin^2\theta,
\qquad x=C\left(\theta-\frac12\sin2\theta\right)+D.
$$

$x(0)=0,x(\pi)=a$ より $D=0,C=a/\pi$。したがって最速降下曲線はサイクロイドの一弧

$$
\boxed{x=\frac a\pi\left(\theta-\frac12\sin2\theta\right),\qquad
y=-\frac a\pi\sin^2\theta}.
$$

途中で地表に再び接する多重の弧は所要時間を増加させるので、一弧を選ぶ。
### (8)
$\theta=\pi/2$ で最も深く、

$$
\boxed{(x,y)=\left(\frac a2,-\frac a\pi\right)}.
$$

### (9)
$ds/d\theta=2C\sin\theta$、$V=\sqrt{2gC}\sin\theta$ より

$$
\boxed{T=\int_0^\pi\sqrt{\frac{2C}g}\,d\theta=\sqrt{\frac{2\pi a}g}}.
$$

### (10)

$$
T=\sqrt{\frac{2\pi\times10^6}{9.8}}\,\mathrm s\simeq800.7\,\mathrm s,
\qquad\boxed{T=8.0\times10^2\,\mathrm s}.
$$

## **Reference**

- [京都大学公式問題（2015年度、PDF 9–10ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H27.pdf)
