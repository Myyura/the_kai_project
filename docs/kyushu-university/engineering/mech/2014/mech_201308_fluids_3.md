---
sidebar_label: "2014年度 問3（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Hydrostatics
---

# 九州大学 工学府 機械系専攻 2014年度 流体工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

水平面と角度 $\theta$ をなす非常に長い斜面上に、水を入れた容器を載せた台車がロープで固定され、静止している（図a）。容器には底面を水平にした状態で水位 $h$ まで水が入れられている。ロープを切ると台車は斜面下向きに加速し（図b）、やがて台車・容器への空気抵抗により一定速度 $V$ で移動する（図c）。重力加速度を $g$ とする。（50点）

1. 静止時の水面と水平面の角 $\beta_a$ を求め、水面を図aに示せ。
2. 加速期に加速度 $\alpha$ がほぼ一定として、水面と水平面の角 $\beta_b$ を求め、水面を図bに示せ。必要なら移動速度を $v$ とせよ。
3. 等速時の水面と水平面の角 $\beta_c$ を求め、水面を図cに示せ。

![原題の図（九州大学 2014年度 流体工学 問3）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2014/fluids-3-original.png)

#### 题目描述

装水容器随小车放在倾角 $\theta$ 的长斜面上，起初被绳索固定；切断绳索后向下加速，最终因空气阻力达到恒速。求静止、近似恒加速度 $\alpha$ 和恒速三阶段的液面相对水平的角度，并画出液面。水量以容器底水平时水深 $h$ 确定。

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
\frac{dy}{dx}=\frac{\alpha\cos\theta}{g-\alpha\sin\theta},\qquad
\boxed{\beta_b=\arctan\left(\frac{\alpha\cos\theta}{g-\alpha\sin\theta}\right)}.
$$

水面は斜面上方へ向かって高くなる。角度は速度 $v$ 自体に依存しない。斜面下向きの自由加速度 $\alpha=g\sin\theta$ の場合は $\beta_b=\theta$ となり、水面は斜面に平行になる。上式は液面が有効重力に対して釣り合った状態を表し、ロープ切断直後の過渡的な液面振動は含めない。

### (3)

等速では加速度がゼロで、再び水面は水平となる。

$$
\boxed{\beta_c=0}.
$$

下図は同じ水量に対する各状態の模式図で、中央は $0<\alpha<g\sin\theta$ の例である。

![静止・加速・等速の水面](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2014/fluids-3-surfaces.svg)
