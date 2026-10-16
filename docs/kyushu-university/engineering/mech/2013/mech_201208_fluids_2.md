---
sidebar_label: "2012年8月実施 問2（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
  - Engineering.Fluid-Mechanics.Jet-Propulsion
---

# 九州大学 工学府 機械系専攻 2012年8月実施 流体工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

幅 $A$、一様速度 $V$ の二次元噴流が、噴流と同方向へ一定速度 $v$（$V>v$）で動く平板に衝突し、反対向きの二つの流れに分かれて平板に沿って一様速度で流出する。噴流と平板表面の法線との角度を $\theta$ とする。流体密度は $\rho$、流れは水平面内で、粘性を無視できる。（50点）

1. 平板とともに動く相対座標系での衝突後の速さ $V_{r1},V_{r2}$ を求めよ。
2. 相対座標系での流れの幅 $A_1,A_2$ を求めよ。
3. 噴流が単位奥行き当たり平板に及ぼす力による仕事率を求めよ。

![原題の図（九州大学 2013年度 流体工学 問2）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_fluids-2-original.png)

#### 题目描述

宽度 $A$、速度 $V$ 的二维射流撞击以速度 $v<V$ 沿射流方向移动的斜板，随后沿板分成相反方向的两股流。射流与板法线夹角为 $\theta$，忽略黏性，流动位于水平面内。求随板坐标系下两股相对速度和宽度，以及射流对板的单位进深功率。

## **Kai**

### (1)

平板とともに等速並進する座標系も慣性系である。噴流の入射相対速度は $w=V-v$、各自由噴流の圧力は大気圧なので、ベルヌーイの式から

$$
\boxed{V_{r1}=V_{r2}=w=V-v}.
$$

### (2)

連続の式と平板接線方向の運動量保存から

$$
A_1+A_2=A,\qquad
\rho w^2(A_1-A_2)=\rho Aw^2\sin\theta.
$$

したがって

$$
\boxed{A_1=\frac A2(1+\sin\theta),\qquad
A_2=\frac A2(1-\sin\theta)}.
$$

### (3)

平板に相対的な流入質量流量は $\rho A(V-v)$ である。法線方向の速度は衝突後ゼロになるため、平板への法線力は

$$
F_n=\rho A(V-v)^2\cos\theta.
$$

平板の移動方向への力の成分は $F_n\cos\theta$ だから、仕事率は

$$
\boxed{P=F_n v\cos\theta=\rho A v(V-v)^2\cos^2\theta}.
$$
