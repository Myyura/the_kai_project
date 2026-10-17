---
sidebar_label: "2015年8月実施 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2015年8月実施 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図の構造において、以下の各問いに答えよ。ただし、各棒の伸びはその長さに比べて充分に小さいものとする。（40点）

**(1)** 棒 AD、棒 BD に作用する力をそれぞれ $Q,R$ とするとき、$Q$ および $R$ を求めよ。

**(2)** 着力点 D における水平方向変位 $\delta_{DH}$ および垂直方向変位 $\delta_{DV}$ を求めよ。

図中、$E$ はヤング率、$A$ は断面積、丸印はピン結合を表す。AD の長さは $b$、CD は半径 $a$ の四分円形の剛体、棒 BD と AD のなす角は $\theta$ である。D に下向きの荷重 $P$ が作用する。

![原題の棒と四分円剛体の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_material-1-original.png)

#### 题目描述

对于图示结构，回答下列问题。各杆的伸长与其自身长度相比充分小。（40分）

**(1)** 设杆 AD、BD 中的力分别为 $Q,R$，求 $Q,R$。

**(2)** 求载荷作用点 D 的水平位移 $\delta_{DH}$ 和竖直位移 $\delta_{DV}$。

图中 $E$ 为杨氏模量，$A$ 为截面积，圆圈表示铰接。AD 长 $b$，CD 为半径 $a$ 的四分之一圆刚体，BD 与 AD 之间的夹角为 $\theta$。D 点承受向下的载荷 $P$，各支承和连接位置如图。

## **Kai**

### (1)

$Q,R$ 以引張りを正とする。C まわりの力のモーメントのつり合いから

$$
Q+R(\cos\theta+\sin\theta)=P.
$$

剛体 CD は C まわりに微小回転する。CD を結ぶ直線の水平・鉛直成分はともに $a$ なので、D の右向き変位と下向き変位は等しく、これを $v$ とする。棒の伸びは

$$
\lambda_{AD}=v,\qquad
\lambda_{BD}=v(\cos\theta+\sin\theta).
$$

$L_{BD}=b/\cos\theta$ より

$$
R=Q\cos\theta(\cos\theta+\sin\theta).
$$

したがって、

$$
\begin{gathered}
K=1+\cos\theta(\cos\theta+\sin\theta)^2\\
=1+\cos\theta+2\sin\theta\cos^2\theta
\end{gathered}
$$

とおけば

$$
\boxed{\begin{gathered}
Q=\frac{P}{K},\\
R=\frac{P\cos\theta(\cos\theta+\sin\theta)}{K}
\end{gathered}}.
$$

いずれも引張力である。

### (2)

AD の伸びが D の右向き変位に等しいため

$$
\boxed{\begin{gathered}
\delta_{DH}=\delta_{DV}\\
=\frac{Qb}{EA}\\
=\frac{Pb}{EA\{1+\cos\theta+2\sin\theta\cos^2\theta\}}
\end{gathered}}.
$$

$\delta_{DH}$ は右向き、$\delta_{DV}$ は下向きの大きさである。
