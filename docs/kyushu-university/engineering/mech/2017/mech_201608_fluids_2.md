---
sidebar_label: "2017年度 問2（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
  - Engineering.Fluid-Mechanics.Pipe-Friction
  - Engineering.Fluid-Mechanics.Pipe-Networks
---

# 九州大学 工学府 機械系専攻 2017年度 流体工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

十分大きな水槽に、内径 $D$ の主管を取り付ける。入口から長さ $2L$ は水平で、その先の長さ $L/2$ は鉛直上向き。入口から $L$ の位置に、長さ $L$、内径 $D/3$ の枝管が鉛直上向きに伸びている。主管入口近くの長さを無視できる弁を調節し、その損失係数を $\zeta_v$ としたところ、主管と枝管から噴き出す水の最高点が同じ高さになった。

管摩擦係数は全管で $\lambda$、重力加速度は $g$ とする。$D\ll L$ であり、入口、曲がり、分岐の損失、水と大気の摩擦は無視できる。管出口に縮流はない。（50点）

1. 水平管軸の高さを基準に、噴流の最高高さ $h$ を求めよ。
2. 同じ基準で、水槽の水位 $H$ を求めよ。

![原題の図（九州大学 2017年度 流体工学 問2）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2017/fluids-2-original.png)

#### 题目描述

大水槽连接内径 $D$ 的主管，先水平长 $2L$，再向上长 $L/2$。距入口 $L$ 处分出竖直向上、长 $L$、内径 $D/3$ 的支管。调节主管入口附近的阀，使损失系数为 $\zeta_v$，两股喷流达到相同最高高度。各管摩擦系数相同为 $\lambda$，$D\ll L$，忽略入口、弯头、分支及空气摩擦损失，出口无缩流。以水平管轴为基准，求喷流高度 $h$ 和槽水位 $H$。

## **Kai**

### (1)

枝管の流速を $v_b$、分岐後の主管の流速を $v_m$ とする。噴流の放物運動から

$$
\frac{v_b^2}{2g}=h-L,\qquad
\frac{v_m^2}{2g}=h-\frac L2.
$$

分岐点から各噴流最高点までの水頭差は、それぞれの管摩擦損失に等しいので

$$
\lambda\frac{3L}{D}(h-L)
=\lambda\frac{3L}{2D}\left(h-\frac L2\right).
$$

よって

$$
\boxed{h=\frac32L},\qquad
v_b=\sqrt{gL},\quad v_m=\sqrt{2gL}.
$$

### (2)

分岐前の主管流速を $V$ とすると、連続の式から

$$
V=v_m+\frac{v_b}{9}
=\left(\sqrt2+\frac19\right)\sqrt{gL}.
$$

水槽から枝管の噴流最高点までの水頭収支を取る。

$$
H=h+\left(\zeta_v+\lambda\frac LD\right)\frac{V^2}{2g}
+\lambda\frac{3L}{D}\frac{v_b^2}{2g}.
$$

したがって

$$
\boxed{H=L\left[
\frac32+\frac12\left(\sqrt2+\frac19\right)^2
\left(\zeta_v+\lambda\frac LD\right)
+\frac32\lambda\frac LD
\right]}.
$$
