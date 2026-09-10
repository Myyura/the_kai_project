---
sidebar_label: '2015年8月実施 数学 第3問'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Conformal-Mapping
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Harmonic-Functions-and-Harmonic-Conjugates
---

# 東京大学 工学系研究科 2015年8月実施 数学 第3問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$z=x+iy,w=u+iv$ とする。

I. 写像 $w=\sin z$ について、以下に答えよ。

1. $u,v$ をそれぞれ $x,y$ の関数で表せ。
2. 半無限帯状領域 $D_1=\{0\le x\le\pi/2,\ y\ge0\}$ の像を求めよ。$y\ge0$ における半直線 $x=0,x=\pi/2,x=c$（$0<c<\pi/2$）の像を図示せよ。

II. 実関数 $g$ が連続な1階・2階偏微分を持ち、$g_{xx}+g_{yy}=0$ を満たすとき調和関数と呼ぶ。$f(z)=u(x,y)+iv(x,y)$ が $D$ で正則であるとする。

1. $u,v$ がともに調和関数であることを示せ。
2. $h(u,v)$ が像領域 $\Delta$ で調和であるとき、$H(x,y)=h(u(x,y),v(x,y))$ は $D$ で調和であることを示せ。

III. $h$ は第1象限 $\Delta_1=\{u\ge0,v\ge0\}$ で調和であり、次の境界条件を満たすとする。

$$
h(0,v)=0\ (v\ge0),\qquad
h(u,0)=1\ (u\ge1),\qquad
h_v(u,0)=0\ (0\le u\le1).
$$

1. $z=\arcsin w$（主値）とおき、対応する $H(x,y)$ の境界条件を求めよ。
2. これらの境界条件を満たす $H(x,y)$ を求めよ。
3. $0\le u\le1$ における $h(u,0)$ を求めよ。

#### 题目描述

设 $z=x+iy,w=u+iv$。

I. 对映射 $w=\sin z$：

1. 用 $x,y$ 分别表示 $u,v$。
2. 求半无限条带 $D_1=\{0\le x\le\pi/2,\ y\ge0\}$ 的像域；画出 $y\ge0$ 上三条射线 $x=0,x=\pi/2,x=c$（$0<c<\pi/2$）的像。

II. 若实函数 $g$ 有连续的一阶、二阶偏导数且满足 $g_{xx}+g_{yy}=0$，则称其为调和函数。设 $f(z)=u(x,y)+iv(x,y)$ 在 $D$ 内全纯：

1. 证明 $u,v$ 均为调和函数。
2. 若 $h(u,v)$ 在像域 $\Delta$ 内调和，证明 $H(x,y)=h(u(x,y),v(x,y))$ 在 $D$ 内调和。

III. 设 $h$ 在第一象限 $\Delta_1=\{u\ge0,v\ge0\}$ 内调和，边界条件为

$$
h(0,v)=0\ (v\ge0),\qquad
h(u,0)=1\ (u\ge1),\qquad
h_v(u,0)=0\ (0\le u\le1).
$$

1. 令 $z=\arcsin w$（取主值），求对应的 $H(x,y)$ 的边界条件。
2. 求满足这些边界条件的 $H(x,y)$。
3. 求 $0\le u\le1$ 时的 $h(u,0)$。

## **Kai**

### I.1

$$
\sin(x+iy)=\sin x\cosh y+i\cos x\sinh y,
$$

したがって $\boxed{u=\sin x\cosh y,\quad v=\cos x\sinh y}$。

### I.2

境界および半直線の対応は次のとおりである。

$$
\begin{array}{c|c}
z\text{ 平面}&w\text{ 平面}\\\hline
x=0,\ y\ge0&u=0,\ v\ge0\\
x=\pi/2,\ y\ge0&v=0,\ u\ge1\\
y=0,\ 0\le x\le\pi/2&v=0,\ 0\le u\le1\\
x=c,\ y\ge0&u^2/\sin^2c-v^2/\cos^2c=1,\quad u\ge\sin c,\ v\ge0
\end{array}
$$

よって像領域は $\boxed{\Delta_1=\{u\ge0,v\ge0\}}$。

![正弦写像による帯状領域と第1象限の対応](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2016/tokyo-kyotsu-201508-sine-map.svg)

### II.1

コーシー–リーマンの関係式 $u_x=v_y,u_y=-v_x$ より、

$$
\Delta u=v_{yx}-v_{xy}=0,\qquad
\Delta v=-u_{yx}+u_{xy}=0.
$$

したがって $u,v$ はともに調和である。

### II.2

連鎖律から、

$$
\Delta H=h_{uu}|\nabla u|^2+2h_{uv}\nabla u\cdot\nabla v
+h_{vv}|\nabla v|^2+h_u\Delta u+h_v\Delta v.
$$

コーシー–リーマンの関係式より $\nabla u\cdot\nabla v=0$、$|\nabla u|^2=|\nabla v|^2=|f'(z)|^2$。したがって

$$
\boxed{\Delta H=|f'(z)|^2(h_{uu}+h_{vv})=0.}
$$

### III.1

I の境界対応と $u_y(x,0)=0,v_y(x,0)=\cos x$ より、

$$
\boxed{H(0,y)=0,\quad H(\pi/2,y)=1,\quad H_y(x,0)=0.}
$$

### III.2–3

$H$ が $y$ によらない解を取ると $H_{xx}=0$。両側の境界値より、

$$
\boxed{H_0(x,y)=\frac{2x}{\pi},\qquad
h_0(u,0)=\frac2\pi\arcsin u\quad(0\le u\le1).}
$$

これは条件を満たす有界解である。無限遠での有界性を課さなければ解は一意ではない。例えば任意の実数 $C$ に対して、

$$
H_C=\frac{2x}{\pi}+C\sin(2x)\cosh(2y),\qquad
h_C(u,0)=\frac2\pi\arcsin u+2Cu\sqrt{1-u^2}.
$$

