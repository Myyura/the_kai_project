---
sidebar_label: "2012年8月実施 問2（数学）"
tags:
  - Kyushu-University
  - Mathematics.Vector-Calculus.Plane-and-Distance-in-Three-Dimensional-Euclidean-Space
---

# 九州大学 工学府 機械系専攻 2012年8月実施 数学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$\dfrac{x-1}{3}=\dfrac y2=z+1$ を直線 $l$、$\dfrac x2=y-1=z+1$ を直線 $m$ とするとき、次の各問いに答えよ。（50点）

(1) 直線 $l$ と直線 $m$ の両直線に垂直なベクトルで、$x$ 成分が $1$ となるものを求めよ。

(2) (1)で求めたベクトルを $\boldsymbol n$ とする。直線 $l$ を含み、$\boldsymbol n$ に平行な平面の式を求めよ。

(3) (2)で求めた平面と直線 $m$ との交点を求めよ。

(4) 直線 $l$ と直線 $m$ の最短距離（2直線の間の共通垂線の長さ）を求めよ。

#### 题目描述

设直线 $l$ 为 $\dfrac{x-1}{3}=\dfrac y2=z+1$，直线 $m$ 为 $\dfrac x2=y-1=z+1$，回答以下各问。（50分）

(1) 求同时垂直于直线 $l$ 和 $m$、且 $x$ 分量为 $1$ 的向量。

(2) 记(1)所得向量为 $\boldsymbol n$。求包含直线 $l$ 且平行于 $\boldsymbol n$ 的平面方程。

(3) 求(2)所得平面与直线 $m$ 的交点。

(4) 求直线 $l$ 与 $m$ 的最短距离，即两直线的公垂线段长度。

## **Kai**

直線の表示を

$$
\begin{gathered}
l:\ (x,y,z)=(1,0,-1)+t(3,2,1),\\
m:\ (x,y,z)=(0,1,-1)+s(2,1,1)
\end{gathered}
$$

とする。

### (1)

方向ベクトルの外積から

$$
\boxed{\boldsymbol n=(3,2,1)\times(2,1,1)=(1,-1,-1)}.
$$

### (2)

平面の法線は $(3,2,1)\times\boldsymbol n=(-1,4,-5)$ であり、$(1,0,-1)$ を通るので

$$
\begin{gathered}
-(x-1)+4y-5(z+1)=0,\\
\boxed{x-4y+5z+4=0}.
\end{gathered}
$$

### (3)

直線 $m$ を代入すると $2s-4(1+s)+5(-1+s)+4=3s-5=0$。よって

$$
\boxed{(x,y,z)=\left(\frac{10}3,\frac83,\frac23\right)}.
$$

### (4)

$(1,0,-1)$ と $(0,1,-1)$ を結ぶベクトルの公垂線方向成分を取れば

$$
\boxed{d=\frac{|(-1,1,0)\cdot(1,-1,-1)|}{\sqrt3}=\frac2{\sqrt3}}.
$$

実際、$l$ 上の $(4,2,0)$ と (3) の点との差は $\frac23(1,-1,-1)$ であり、両直線に垂直である。
