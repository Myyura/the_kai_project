---
sidebar_label: "2013年度 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2013年度 材料力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図2の棒 BD、BF はヤング率 $E$、断面積 $A$ の弾性棒である。B は固定位置のピン、CF は C でピン支持された一本の剛体で、D では折れ曲がらない。BD は D で CF の中心線上にピン接合される。CD $=a$、DF $=b$、BD は水平、BF は水平から角度 $\theta$ だけ下がる。F に右向き荷重 $P$ を加える。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2013/material-2-original.png)

1. BD、BF の軸力 $Q_{BD},Q_{BF}$ を求めよ。
2. F の水平変位 $\delta_{FH}$ を求めよ。

#### 题目描述

图示弹性杆 BD、BF 的轴向刚度均为 $EA$，B 为固定铰点。竖直刚杆 CF 在 C 铰支，D 处连续，BD 在其中心线上铰接。CD 长 $a$，DF 长 $b$，BF 与水平夹角为 $\theta$。F 受水平向右力 $P$。求两弹性杆轴力和 F 的水平位移。

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
\delta_{DH}=\frac{L_{BD}}{EA}Q_{BD},\qquad
\delta_{FH}\cos\theta=\frac{L_{BF}}{EA}Q_{BF}.
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
\boxed{\delta_{FH}=
\frac{Pb(a+b)^2\cos\theta}
{EA\sin\theta\{a^2+(a+b)^2\cos^3\theta\}}
\quad\text{（右向き）}}.
$$
