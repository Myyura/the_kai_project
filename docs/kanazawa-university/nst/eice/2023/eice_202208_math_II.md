---
sidebar_label: "2022年8月実施 数学 II"
tags:
  - Kanazawa-University
  - Vector-Calculus
---
# 金沢大学 自然科学研究科 電子情報通信学専攻 2022年8月実施 数学 II

## **Author**
[金沢大学](https://www.kanazawa-u.ac.jp/)

## **Description**
$\mathbb{R}^3$ 上のベクトル場 $A=(3xy^2,xy,y+z)$ 閉領域 $D$ を

$$
D=\{(x,y,z)\in\mathbb{R}^3\mid x^2+y^2+1\le z\le 5\}
$$

とする。次の問いに答えよ。

**問1**　ベクトル場 $A$ の発散 $\nabla\cdot A$ と回転 $\nabla\times A$ を求めよ。

**問2**　向き付けられた $D$ の境界面を $\partial D$ とする。 $\partial D$ 上の面積分 $\iint_{\partial D} A\cdot n \ dS$
を求めよ。ただし $n$ は $D$ の外向きの単位法線ベクトルとする。

**問3**　曲面 $S=\{(x,y,z)\in\mathbb{R}^3\mid x^2+y^2+1=z\}$、平面 $T=\{(x,y,z)\in\mathbb{R}^3\mid x+y=0\}$ とする。曲線 $C$ を $S$ と $T$ の共通集合 $S\cap T$ に含まれ，始点 $P(0,0,1)$，終点 $Q(1,-1,3)$ を持つ曲線とする。このとき，曲線 $C$ に沿った線積分 $\int_C A\cdot\ dr$ を求めよ。ただし $r=r(t)$ を $C$ の適当なパラメータ表示とする。

## **Kai**
### 問1

$$
\nabla\cdot A=3y^2+x+1,\qquad \nabla\times A=(1,0,y-6xy)
$$

### 問2
円柱座標 $(x,y,z)=(r\cos\theta,r\sin\theta,z)$ により

$$
\nabla\cdot A=3r^2\sin^2\theta+r\cos\theta+1
$$

ガウスの発散定理より

$$
\iint_{\partial D}A\cdot n,dS=\iiint_D(\nabla\cdot A),dV=24\pi
$$

### 問3
曲線のパラメータ表示を $r(t)=(t,-t,2t^2+1)\ (0\le t\le 1)$ とすると、$C$ 上での

$$
A(t)=(3t^3,-t^2,2t^2-t+1),\quad r'(t)=(1,-1,4t)
$$

よって

$$
\int_C A\cdot dr=\int_0^1 A(t)\cdot r'(t),dt=\frac{15}{4}
$$
