---
sidebar_label: "2010年度 問1（流れ学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
---

# 九州大学 工学府 機械系専攻 2010年度 流れ学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

水平な二次元の上流ダクト（幅 $B_1$）と下流ダクト（幅 $B_2>B_1$）が滑らかに広がるディフューザで接続され、密度 $\rho$ の水が流れる。十分上流の断面I、下流ダクト内の断面II、十分下流の断面IIIに大気開放の液柱計がある。断面I、IIIでは流れは一様で、壁面摩擦を無視する。重力加速度を $g$ とする。（50点）

1. 図aのように物体がなく、断面I–III間の圧力損失を無視できる場合、液柱高さの差が $h_1$ であった。体積流量 $Q$ を求めよ。
2. 図bのようにディフューザ中に円柱を置き、(1)と同量を流す。断面IIで後流幅が最大 $2b<B_2$ となり、主流と後流は各々一様速度 $U,cU$（$0<c<1$）を持つ。断面I、IIの液柱高さが等しいとき、$U,c$ を求めよ。
3. (2)の場合の断面I、IIIの液柱高さの差 $h_2$ を求めよ。

![原題の図（九州大学 2010年度 流れ学 問1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2010/fluids-1-original.png)

#### 题目描述

二维扩散管连接宽 $B_1$、$B_2>B_1$ 的上下游通道，I、II、III截面装有通大气测压管，远上游和远下游流速均匀。无物体且无损失时两端测压高度差为 $h_1$，求单位进深流量。再放入圆柱，保持相同流量，近尾流截面II由宽 $2b$、速度 $cU$ 的均匀尾流及速度 $U$ 的外流组成，I与II压力相等，求 $U,c$ 和两端新的测压高度差。

## **Kai**

### (1)

単位奥行き当たりの連続の式とベルヌーイの式から

$$
v_1=\frac{Q}{B_1},\quad v_3=\frac{Q}{B_2},\qquad
\rho gh_1=\frac\rho2(v_1^2-v_3^2).
$$

よって

$$
\boxed{Q=B_1B_2\sqrt{\frac{2gh_1}{B_2^2-B_1^2}}}.
$$

### (2)

後流外側の流線に沿って損失を無視してベルヌーイの式を用いる。$p_1=p_2$ なので

$$
\boxed{U=\frac Q{B_1}=B_2\sqrt{\frac{2gh_1}{B_2^2-B_1^2}}}.
$$

断面IIの連続の式から

$$
Q=(B_2-2b)U+2bcU,
\qquad \boxed{c=1-\frac{B_2-B_1}{2b}}.
$$

$0<c<1$ と整合するには $B_2-B_1<2b<B_2$ である。

### (3)

物体より下流の断面II–IIIを囲む検査体積では、壁面摩擦がなく、圧力による力が運動量流束の変化に等しい。

$$
(p_2-p_3)B_2=\rho\frac{Q^2}{B_2}
-\rho U^2(B_2-2b+2bc^2).
$$

$p_1=p_2$ と $p_3-p_1=\rho gh_2$ を使い、(2)を代入して整理すると

$$
\boxed{h_2=\frac{(B_2-B_1)(B_2-2b)}{b(B_1+B_2)}h_1}.
$$

速度分布の混合によって圧力は回復するが、全圧は失われる。上の成立範囲では $0<h_2<h_1$ となる。
