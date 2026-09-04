---
sidebar_label: 2015年8月実施 基礎科目 問題5 物理基礎1
tags:
  - Tohoku-University
  - Physics.Mechanics.Two-Body-Central-Force-and-Effective-Potential
  - Physics.Mechanics.Angular-Momentum-Conservation-and-Areal-Velocity
---

# 東北大学 工学研究科 電気・情報系 2015年8月実施 基礎科目 問題5 物理基礎1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

中心力ポテンシャル $V(|\boldsymbol r|)$ 中の質点の運動においてエネルギー $E=\boldsymbol p^2/(2m)+V(|\boldsymbol r|)$ や角運動量 $\boldsymbol l=\boldsymbol r\times\boldsymbol p$ は運動の定数となる。すなわち，それらの値は運動の間一定である。ここで，$m$，$\boldsymbol r=(x,y,z)$，$\boldsymbol p=(p_x,p_y,p_z)$ は，それぞれ質点の質量，$x$–$y$–$z$ 直交座標系の原点から測った位置ベクトル，運動量である。$|\boldsymbol r|$ は $\boldsymbol r$ の長さである。以下の問に答えよ。

(1)
$$
V(|\boldsymbol r|)=\begin{cases}0&|\boldsymbol r|>a\\-U&|\boldsymbol r|\le a\end{cases}\quad(U>0,a>0)
$$
で定義されたポテンシャル中での初期条件 $\boldsymbol r=(0,-b,d)$，$\boldsymbol p=(0,p_0,0)$ に対する運動を考える。ここで，$b>a>d>0$ であり，$p_0>0$ である。Fig. 5(a) の点線はこの運動の軌道の概略図である。

- (a) 質点のエネルギー $E$ と角運動量 $\boldsymbol l$ を求めよ。
- (b) Fig. 5(a) 中の角度 $\alpha$ と $\beta$ を求めよ。

(2) $V(|\boldsymbol r|)=\delta/|\boldsymbol r|$（$\delta>0$）で定義されたポテンシャル中での初期条件 $\boldsymbol r=(0,-c,d)$，$\boldsymbol p=(0,p_0,0)$ に対する運動を考える。ここで，$p_0>0$ であり，$c$ は，$\boldsymbol r=(0,-c,d)$ で $V(|\boldsymbol r|)/(p_0^2/(2m))=0$ と仮定をすることができる程十分に大きい正の数である。

Fig. 5(b) の点線と一点鎖線は，それぞれこの運動の，軌道と軌道の漸近線の概略図である。

- (a) Fig. 5(b) 中の力の中心と軌道の間の最近接距離 $r_{\min}$ を求めよ。
- (b) $\frac{\boldsymbol p}{m}\times\boldsymbol l+\delta\frac{\boldsymbol r}{|\boldsymbol r|}$ が運動の定数であることを示せ。
- (c) Fig. 5(b) 中の散乱角 $\theta$ を求めよ。

### 题目描述

质量为 $m$ 的质点在中心势 $V(r)$ 中运动，能量 $E=p^2/(2m)+V(r)$ 和角动量 $\boldsymbol l=\boldsymbol r\times\boldsymbol p$ 守恒。

1. 势为 $V(r)=0\ (r>a)$、$V(r)=-U\ (r\le a)$，$U,a>0$。初态 $\boldsymbol r=(0,-b,d)$、$\boldsymbol p=(0,p_0,0)$，$b>a>d>0,p_0>0$。求 (a) $E,\boldsymbol l$；(b) 入射后在球内的直线与入射点指向球心的半径之间的夹角 $\alpha$，以及出射线与出射点向外半径的夹角 $\beta$。
2. 势为 $V(r)=\delta/r$，$\delta>0$。初态 $\boldsymbol r=(0,-c,d)$、$\boldsymbol p=(0,p_0,0)$；$c$ 足够大，可忽略初始势能。求 (a) 最近距离 $r_{\min}$；(b) 证明 $\boldsymbol A=(\boldsymbol p/m)\times\boldsymbol l+\delta\boldsymbol r/r$ 守恒；(c) 求入射、出射速度方向之间的散射角 $\theta$。

## **Kai**

### (1)

初态在势阱外，故

$$
\boxed{E=\frac{p_0^2}{2m},\qquad\boldsymbol l=(-dp_0,0,0).}
$$

球内动量大小为 $p_1=\sqrt{p_0^2+2mU}$。在边界上利用角动量守恒：

$$
ap_1\sin\alpha=dp_0,\qquad ap_0\sin\beta=dp_0.
$$

因此

$$
\boxed{\alpha=\arcsin\frac{dp_0}{a\sqrt{p_0^2+2mU}},\qquad\beta=\arcsin\frac da.}
$$

### (2)(a)

令 $L=dp_0$。最近点的径向动量为零，故

$$
\frac{p_0^2}{2m}=\frac{L^2}{2mr_{\min}^2}+\frac{\delta}{r_{\min}}.
$$

取正根得

$$
\boxed{r_{\min}=\frac{m\delta+\sqrt{m^2\delta^2+d^2p_0^4}}{p_0^2}.}
$$

### (2)(b)

$\dot{\boldsymbol p}=\delta\boldsymbol r/r^3$、$\dot{\boldsymbol l}=0$，并且

$$
\frac{d}{dt}\frac{\boldsymbol r}{r}=\frac{\boldsymbol p}{mr}-\frac{\boldsymbol r(\boldsymbol r\cdot\boldsymbol p)}{mr^3}.
$$

由 $\boldsymbol r\times(\boldsymbol r\times\boldsymbol p)=\boldsymbol r(\boldsymbol r\cdot\boldsymbol p)-r^2\boldsymbol p$，得

$$
\dot{\boldsymbol A}=\frac{\delta}{mr^3}\boldsymbol r\times(\boldsymbol r\times\boldsymbol p)+\delta\frac{d}{dt}\frac{\boldsymbol r}{r}=0.
$$

### (2)(c)

记 $q=dp_0^2/m$。入射无穷远处 $\boldsymbol A=(0,-\delta,q)$；出射方向为 $(0,\cos\theta,\sin\theta)$，故其 $y$ 分量给出

$$
-\delta=-q\sin\theta+\delta\cos\theta.
$$

于是 $q\sin\theta=\delta(1+\cos\theta)$，所以

$$
\boxed{\theta=2\arctan\frac{m\delta}{dp_0^2}.}
$$
