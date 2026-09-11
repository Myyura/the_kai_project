---
sidebar_label: '2019年8月実施 物理学4'
tags:
  - Tokyo-University
  - Physics.Mechanics.Euler-Bernoulli-Beam
---

# 東京大学 工学系研究科 2019年8月実施 物理学4

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

長さ $L$ の棒が図のように A、B で支持され、両端に曲げモーメントは作用しない。棒に沿って $x$ 軸を、鉛直下向きに $y$ 軸をとる。

I. 単位長さあたりの荷重 $q(x)$ が $y$ 方向に作用する。変形は微小で、$y$ 方向の変位だけを考え、棒の質量は無視する。

1. 微小部分 $[x,x+dx]$ に作用するせん断力と曲げモーメントを図の符号で $F,M$ とする。つり合いから (i) $dF/dx=-q(x)$、(ii) $dM/dx=F$ を示せ。
2. 曲げによる変位とモーメントの関係を

$$
R\frac{d^2y}{dx^2}=-M
$$

とし、$R$ を定数とする。一様荷重 $q(x)=k$（$k$ は定数）が作用するとき、最大変位を求めよ。両端で $y=0$ とする。

II. 棒の自由曲げ振動を考える。一様な棒の密度を $\rho$、断面積を $S$ とする。変形は微小で、$y$ 方向の運動だけを考え、重力を無視する。

1. 微小部分の並進運動方程式と I の関係式から

$$
R\frac{\partial^4y}{\partial x^4}+\rho S\frac{\partial^2y}{\partial t^2}=0
$$

を示せ。$x$ 方向の力および微小部分の回転慣性は無視する。
2. $y(x,t)=X(x)e^{i\omega t}$ とおき、$\mu^4=\rho S\omega^2/R$ とする。一般解が

$$
X(x)=C_1\sin\mu x+C_2\cos\mu x+C_3\sinh\mu x+C_4\cosh\mu x
$$

であることを示せ。$C_1,\ldots,C_4$ は定数、$i$ は虚数単位である。また、

$$
e^{ix}=\cos x+i\sin x,\qquad
\sinh x=\frac{e^x-e^{-x}}2,\qquad
\cosh x=\frac{e^x+e^{-x}}2
$$

である。
3. 両端で $y=0$ とし、端部にモーメントは作用しない。(i) 許される $\mu$ を求めよ。(ii) この結果をもとに棒の曲げ振動の様子を説明せよ。
![単純支持梁、微小部分の力、および曲げ振動のモード](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2020/kyotsu_201908_phys_4_beam_audited.svg)

#### 题目描述

长为 $L$ 的杆由 A、B 两端支承，端部不承受弯矩。取沿杆向右为 $x$、竖直向下为 $y$。

I. 沿 $y$ 方向施加单位长度分布载荷 $q(x)$。变形微小，仅考虑横向位移，忽略杆的质量。

1. 按图中正方向定义截面剪力 $F$ 和弯矩 $M$。由微段 $[x,x+dx]$ 的静力平衡证明 (i) $F'=-q(x)$，(ii) $M'=F$。
2. 已知 $Ry''=-M$，$R$ 为常数。均布载荷 $q(x)=k$ 下，利用两端位移为零求最大挠度。

II. 考虑均匀杆的自由弯曲振动。密度为 $\rho$，截面积为 $S$，位移微小且仅沿 $y$ 方向，忽略重力。

1. 从微段运动方程及 I 的关系证明 $Ry_{xxxx}+\rho S y_{tt}=0$。忽略纵向力和微段的转动惯量。
2. 令 $y=X(x)e^{i\omega t}$、$\mu^4=\rho S\omega^2/R$，证明 $X$ 的通解是 $\sin\mu x,\cos\mu x,\sinh\mu x,\cosh\mu x$ 的线性组合，其中各系数为常数，$i$ 为虚数单位。已知

$$
e^{ix}=\cos x+i\sin x,\qquad
\sinh x=\frac{e^x-e^{-x}}2,\qquad
\cosh x=\frac{e^x+e^{-x}}2.
$$

3. 两端位移为零且不承受弯矩。(i) 求允许的 $\mu$；(ii) 据此描述弯曲振动的形态。

## **Kai**

### I.1

(i) $y$ 方向の力のつり合いから

$$
-F+(F+dF)+q(x)\,dx=0
\quad\Longrightarrow\quad
\boxed{\frac{dF}{dx}=-q(x)}.
$$

(ii) 左断面まわりのモーメントのつり合いで $dx$ の二次以上を除くと

$$
(M+dM)-M-F\,dx=0
\quad\Longrightarrow\quad
\boxed{\frac{dM}{dx}=F}.
$$

### I.2

$M''=-k$ と $M(0)=M(L)=0$ より

$$
M(x)=\frac{k}{2}x(L-x).
$$

$Ry''=-M$ を積分し、$y(0)=y(L)=0$ を用いると

$$
y(x)=\frac{k}{24R}(x^4-2Lx^3+L^3x).
$$

$y'(L/2)=0$ であり、$k>0$ では内部で $y''<0$ だから最大変位は

$$
\boxed{y_{\max}=y(L/2)=\frac{5kL^4}{384R}}.
$$

### II.1

荷重がない場合、微小部分の運動方程式は

$$
\rho S\,dx\,y_{tt}=(F+dF)-F.
$$

$F=M_x=-Ry_{xxx}$ を代入して

$$
\boxed{Ry_{xxxx}+\rho S y_{tt}=0}.
$$

### II.2

$y=Xe^{i\omega t}$ を代入すると $X^{(4)}-\mu^4X=0$。特性根は $\pm\mu,\pm i\mu$ なので

$$
\boxed{X=C_1\sin\mu x+C_2\cos\mu x+C_3\sinh\mu x+C_4\cosh\mu x}.
$$

### II.3

(i) 単純支持の境界条件は $X(0)=X(L)=X''(0)=X''(L)=0$。原点での二条件より $C_2=C_4=0$、残る二条件から

$$
C_1\sin\mu L+C_3\sinh\mu L=0,\qquad
-C_1\sin\mu L+C_3\sinh\mu L=0.
$$

非自明な解では $C_3=0$、$\sin\mu L=0$。したがって

$$
\boxed{\mu_n=\frac{n\pi}{L},\qquad
\omega_n=\left(\frac{n\pi}{L}\right)^2\sqrt{\frac{R}{\rho S}},\quad n=1,2,\ldots}.
$$

(ii) 第 $n$ モードは

$$
y_n(x,t)=A_n\sin\frac{n\pi x}{L}\cos(\omega_nt+\phi_n).
$$

両端と内部の $x=jL/n$（$j=1,\ldots,n-1$）が節となり、$n$ 個の腹を持つ。一般の自由振動はこれらの重ね合わせで、固有角振動数は $\omega_n=n^2\omega_1$ である。
