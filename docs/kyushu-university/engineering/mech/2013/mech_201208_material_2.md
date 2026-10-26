---
sidebar_label: "2012年8月実施 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2012年8月実施 材料力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図2の構造において，次の問に答えよ。（40点）

**1)** 棒BD，BFに作用する力 $Q_{BD},Q_{BF}$ を求めよ。

**2)** 着力点Fの水平方向変位 $\delta_{FH}$ を求めよ。

ただし，棒BD，BFのヤング率を $E$，断面積を $A$ とする。また，棒CFは点Dで折れ曲がらない。棒BDは点Dで棒CFの中心線上にピンで接合している。

![原題の図2：棒BD・BFと剛体CF](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_material-2-original.png)

図中，$CD=a$，$DF=b$，棒BDとBFのなす角は $\theta$，点Fには右向き荷重 $P$ が作用する。

### 题目描述

对于图2的结构，回答下列问题。（40分）

**1)** 求杆BD、BF所受的力 $Q_{BD},Q_{BF}$。

**2)** 求载荷作用点F的水平位移 $\delta_{FH}$。

杆BD、BF的杨氏模量均为 $E$，截面积均为 $A$。杆CF在点D处不会折弯，杆BD在D点通过铰接连接于杆CF的中心线上。

图中CF为刚体，$CD=a$、$DF=b$，杆BD与BF的夹角为 $\theta$，F点承受向右的载荷 $P$；支承和铰接位置如图。

## **Kai**

### (1)

部材の長さは

$$
L_{BD}=\frac{b}{\tan\theta},\qquad
L_{BF}=\frac{b}{\sin\theta}.
$$

剛体 CF が C を中心に微小回転すると、D、F の一次変位は水平だけであり

$$
\delta_{DH}=\frac{a}{a+b}\delta_{FH}.
$$

引張りを正とすると

$$
\begin{gathered}
\delta_{DH}=\frac{L_{BD}}{EA}Q_{BD},\\
\delta_{FH}\cos\theta=\frac{L_{BF}}{EA}Q_{BF}.
\end{gathered}
$$

したがって

$$
Q_{BF}=\frac{a+b}{a}\cos^2\theta\,Q_{BD}.
$$

C まわりのモーメントのつり合いは

$$
aQ_{BD}+(a+b)Q_{BF}\cos\theta=(a+b)P.
$$

以上より

$$
\boxed{Q_{BD}=\frac{a(a+b)}{a^2+(a+b)^2\cos^3\theta}P},
$$

$$
\boxed{Q_{BF}=\frac{(a+b)^2\cos^2\theta}
{a^2+(a+b)^2\cos^3\theta}P}.
$$

どちらも引張力である。

### (2)

$$
\delta_{FH}=\frac{L_{BF}Q_{BF}}{EA\cos\theta}
$$

より

$$
\boxed{\begin{gathered}
\delta_{FH}=
\frac{Pb(a+b)^2\cos\theta}
{EA\sin\theta\{a^2+(a+b)^2\cos^3\theta\}}\\
\text{（右向き）}
\end{gathered}}.
$$
