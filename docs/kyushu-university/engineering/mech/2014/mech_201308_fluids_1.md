---
sidebar_label: "2014年度 問1（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
  - Engineering.Fluid-Mechanics.Minor-Losses
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
---

# 九州大学 工学府 機械系専攻 2014年度 流体工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

速度 $V_\infty$、圧力 $p_\infty$ の一様な大気流中に、一定断面積 $A$ のダクトが流れと平行に置かれ、その内部に出口面積 $A_N$ のノズルがある。入口端面は鋭いエッジを持ち、壁面近くに逆流が生じるため入口の流れは非一様であるが、下流の断面①では再び一様速度 $V_1$ となる。

ノズル出口（断面②）の速度は一様に $V_2$、その周囲の速度はゼロである。十分下流のダクト出口（断面③）では一様速度 $V_3$ で大気中へ流出する。密度 $\rho$ は一定、速度は軸方向成分のみ、壁面摩擦は無視できるとする。また①からノズル出口までは無損失、②ではノズル出口の周囲も含めて圧力は一様、ダクト壁は十分薄い。（50点）

1. $V_1,V_2$ を $V_3,A,A_N$ で表せ。
2. $V_3<V_\infty$ により上流からダクト周囲に排除される体積流量 $\Delta Q$ を $V_3,V_\infty,A$ で表せ。
3. $p_1-p_\infty$ を $V_3,V_\infty,\rho$ で表せ。
4. $p_2-p_1$ を $V_3,A,A_N,\rho$ で表せ。
5. $p_3-p_2$ を $V_3,A,A_N,\rho$ で表せ。
6. $V_3/V_\infty$ を $A,A_N$ で表せ。

![原題の図（九州大学 2014年度 流体工学 問1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2014/fluids-1-original.png)

#### 题目描述

均匀大气流中放置截面 $A$ 的平行风道，内部喷嘴出口面积为 $A_N$。锐边入口产生逆流和非均匀速度，下游①恢复均匀速度 $V_1$；喷嘴出口②速度为 $V_2$，周围为静止流体；远下游出口③又恢复均匀速度 $V_3$。密度恒定、只有轴向速度、忽略壁面摩擦，①到喷嘴出口无损失，②整个截面压力均匀，管壁很薄。依次求连续性关系、被排除的流量、三段压差及出口与外流速度比。

## **Kai**

### (1)

連続の式 $AV_1=A_NV_2=AV_3$ より

$$
\boxed{V_1=V_3,\qquad V_2=\frac A{A_N}V_3}.
$$

### (2)

$$
\boxed{\Delta Q=A(V_\infty-V_3)}.
$$

### (3)

入口前後の運動量を考える。入射流量 $AV_\infty$ のうち $AV_3$ がダクトへ入り、残り $\Delta Q$ は速度 $V_\infty$ の周囲流へ排除される。薄い壁の軸方向力を無視すると

$$
(p_\infty-p_1)A
=\rho AV_3^2+\rho\Delta Q V_\infty-\rho AV_\infty^2.
$$

したがって

$$
\boxed{p_1-p_\infty=\rho V_3(V_\infty-V_3)}.
$$

### (4)

①からノズル出口までは損失がないため

$$
\boxed{p_2-p_1=\frac\rho2(V_1^2-V_2^2)
=\frac{\rho V_3^2}{2}\left[1-\left(\frac A{A_N}\right)^2\right]}.
$$

### (5)

②–③は噴流が周囲の静止流体と混合する領域である。圧力は②の全面で同じなので、運動量式は

$$
(p_2-p_3)A=\rho AV_3^2-\rho A_NV_2^2.
$$

よって

$$
\boxed{p_3-p_2=\rho V_3^2\left(\frac A{A_N}-1\right)}.
$$

ここには混合損失があるため、無損失のベルヌーイ式で置き換えない。

### (6)

出口圧力 $p_3=p_\infty$ より、(3)–(5)の圧力差の和はゼロである。$r=A/A_N$ とおくと

$$
\frac{V_\infty}{V_3}-1+\frac{1-r^2}{2}+r-1=0.
$$

したがって

$$
\boxed{\frac{V_3}{V_\infty}=\frac{2}{r^2-2r+3}
=\frac{2A_N^2}{A^2-2AA_N+3A_N^2}}.
$$
