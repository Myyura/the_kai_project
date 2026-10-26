---
sidebar_label: "2010年8月実施 問1（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Pipe-Networks
  - Engineering.Fluid-Mechanics.Pipe-Friction
---

# 九州大学 工学府 機械系専攻 2010年8月実施 流体工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

上部が大気に開放された十分大きな容器（水の流出に伴う水位の変化はないとする）に水が満たされており，水面からの深さがそれぞれ $h$ および $H\ (h<H)$ の側壁に，細い円管が図のように取り付けられている。下側の管は水平に配置され，上側の管は途中で弁を介して下側の管と合流する構造となっている。上側および下側の管の，入口から合流点までの長さはそれぞれ $L_1$ および $L_2$ であり，合流点から管出口までの長さは $L_2$ である。管の内径 $D$ および管摩擦係数 $\lambda$ は全ての管で等しく，入口損失や曲がり損失，合流損失はいずれも無視できるものとするとき，次の問に答えよ。ただし重力加速度を $g$ とする。（50点）

**(1)** 弁を完全に閉じているとき，管出口より流出する水の体積流量を求めよ。

**(2)** 弁を開いたとき，管出口より流出する水の体積流量を求めよ。ただし，弁の損失係数を $\zeta_v$ とする。

![原題の図：二つの流入管と合流部・弁](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2011/mech_201008_fluids-1-original.png)

### 题目描述

一个上部与大气相通、足够大的容器中装满水，设水流出时水位不变。在距水面深度分别为 $h$ 和 $H\ (h<H)$ 的侧壁处，按图安装细圆管。下方圆管水平放置，上方圆管中途设有阀门，并与下方圆管汇合。上、下两管从入口至汇合点的长度分别为 $L_1$ 和 $L_2$，从汇合点至管出口的长度为 $L_2$。各管的内径 $D$ 和管摩擦系数 $\lambda$ 均相同，入口损失、弯管损失和汇合损失均可忽略。设重力加速度为 $g$，回答下列问题。（50分）

**(1)** 阀门完全关闭时，求从管出口流出的水的体积流量。

**(2)** 打开阀门时，求从管出口流出的水的体积流量。阀门的损失系数为 $\zeta_v$。

## **Kai**

断面積を $A=\pi D^2/4$ とする。

### (1)

自由表面から大気開放出口まで、速度水頭と全長 $2L_2$ の摩擦損失を計上すると

$$
\begin{gathered}
H=\left(1+\frac{2\lambda L_2}{D}\right)\frac{(Q/A)^2}{2g},\\
\boxed{Q=A\sqrt{\frac{2gH}{1+2\lambda L_2/D}}}.
\end{gathered}
$$

### (2)

上側、下側、共通出口の流量を $Q_u,Q_d,Q=Q_u+Q_d$ とおく。また

$$
k_u=\frac{\lambda L_1}{D}+\zeta_v,\qquad
k_d=\frac{\lambda L_2}{D}
$$

とすれば、二つの経路のエネルギー式は

$$
\begin{gathered}
H=(1+k_d)\frac{(Q/A)^2}{2g}
+k_u\frac{(Q_u/A)^2}{2g}\\
=(1+k_d)\frac{(Q/A)^2}{2g}
+k_d\frac{(Q_d/A)^2}{2g}.
\end{gathered}
$$

したがって

$$
\frac{Q_u}{Q_d}=\sqrt{\frac{k_d}{k_u}},\qquad
Q_u=\frac{\sqrt{k_d}}{\sqrt{k_u}+\sqrt{k_d}}Q.
$$

これを代入すると

$$
\boxed{Q=A\sqrt{\frac{2gH}
{1+k_d+\dfrac{k_uk_d}{(\sqrt{k_u}+\sqrt{k_d})^2}}}}.
$$

両経路は同じ自由表面から同じ出口に至るので、駆動水頭はともに $H$ である。入口の深さ $h$ は最終式に現れない。$\zeta_v\to\infty$ の極限では (1) に戻る。
