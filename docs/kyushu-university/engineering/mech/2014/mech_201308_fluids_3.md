---
sidebar_label: "2013年8月実施 問3（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Hydrostatics
---

# 九州大学 工学府 機械系専攻 2013年8月実施 流体工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

水平面とのなす角が $\theta$ の非常に長い斜面上に，底面が水平な状態で水が水位 $h$ まで入れられた容器を載せた台車が，上方よりロープで固定された状態で静止している（図a）。ある時刻においてロープを切断すると，台車は斜面下方に向かって加速し（図b），やがて台車および容器に作用する空気抵抗の増加により一定速度 $V$ で移動するようになる（図c）。重力加速度を $g$ として，以下の問いに答えよ。（50点）

**(1)** 台車の静止状態（図a）において，容器内の水面が水平面となす角 $\beta_a$ を求めよ。また，そのときの水面を図a中に示せ。

**(2)** 台車の加速期（図b）において，台車の加速度 $\alpha$ がほぼ一定であるとして，容器内の水面が水平面となす角 $\beta_b$ を求めよ。必要なら台車の移動速度を $v$ とせよ。また，そのときの水面を図b中に示せ。

**(3)** 台車の等速運動時（図c）において，容器内の水面が水平面となす角 $\beta_c$ を求めよ。また，そのときの水面を図c中に示せ。

![原題の図a–c：静止・加速・等速運動する台車上の容器](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_fluids-3-original.png)

### 题目描述

在与水平面夹角为 $\theta$ 的很长斜面上，一辆载有容器的小车由上方绳索固定而静止，见图a。容器内的水量为：当容器底面水平时，水位达到 $h$。在某时刻切断绳索后，小车沿斜面向下加速，见图b；随后，作用在小车和容器上的空气阻力增大，小车最终以恒定速度 $V$ 运动，见图c。设重力加速度为 $g$，回答下列问题。（50分）

**(1)** 小车静止时（图a），求容器内水面与水平面的夹角 $\beta_a$，并在图a中画出此时的水面。

**(2)** 小车加速阶段（图b），设其加速度 $\alpha$ 近似恒定，求容器内水面与水平面的夹角 $\beta_b$。必要时，可将小车速度记作 $v$。同时在图b中画出此时的水面。

**(3)** 小车匀速运动时（图c），求容器内水面与水平面的夹角 $\beta_c$，并在图c中画出此时的水面。

## **Kai**

### (1)

静止状態では有効重力は鉛直下向きで、自由表面は水平である。

$$
\boxed{\beta_a=0}.
$$

### (2)

斜面が右上がりとして、右向きに $x$、上向きに $y$ をとる。台車の加速度は $(-\alpha\cos\theta,-\alpha\sin\theta)$ である。台車とともに動く座標系では慣性力を加えて

$$
\frac1\rho\nabla p=(\alpha\cos\theta,-g+\alpha\sin\theta).
$$

自由面では $dp=0$ なので

$$
\begin{gathered}
\frac{dy}{dx}=\frac{\alpha\cos\theta}{g-\alpha\sin\theta},\\
\boxed{\beta_b=\arctan\left(\frac{\alpha\cos\theta}{g-\alpha\sin\theta}\right)}.
\end{gathered}
$$

水面は斜面上方へ向かって高くなる。角度は速度 $v$ 自体に依存しない。斜面下向きの自由加速度 $\alpha=g\sin\theta$ の場合は $\beta_b=\theta$ となり、水面は斜面に平行になる。上式は液面が有効重力に対して釣り合った状態を表し、ロープ切断直後の過渡的な液面振動は含めない。

### (3)

等速では加速度がゼロで、再び水面は水平となる。

$$
\boxed{\beta_c=0}.
$$

下図は同じ水量に対する各状態の模式図で、中央は $0<\alpha<g\sin\theta$ の例である。

![解答図 1（既存図の局部表示）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_fluids_3_answer_layout_1.svg)

![解答図 2（既存図の局部表示）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_fluids_3_answer_layout_2.svg)

![解答図 3（既存図の局部表示）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_fluids_3_answer_layout_3.svg)
