---
sidebar_label: "2016年度 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2016年度 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量 $2m$ の物体 A と質量 $m$ の物体 B が、ばね定数 $6k,4k$ の軽いばねで鉛直方向に支持されている。B の上に質量 $m$ の物体 C を固定し、B と一体として動かす。静的平衡から A を下向きに $d$、B を $2d$ 押して静止させ、時刻 $t=0$ に静かに放す。平衡からの下向き変位を $x_1,x_2$、重力加速度を $g$ とし、鉛直運動のみを考える。（50 点）

![三物体と二つのばね（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2016/dynamics-1-original.png)

1. 自由振動の運動方程式を求めよ。
2. 固有角振動数と固有モードを求めよ。
3. $t>0$ の $x_1(t),x_2(t)$ を求めよ。
4. C を固定せず B の上に置く。両者が一体で動く間の C の運動方程式と、圧縮を正とする接触力 $F(t)$ を求め、C が離れない $d$ の範囲を求めよ。

#### 题目描述

质量 $2m$ 的 A 用 $6k$ 弹簧接地，A 与 B 之间有 $4k$ 弹簧，B 和其上 C 各为 $m$。先固定 B、C，分别把 A、B 从静平衡向下移 $d,2d$ 后静止释放。求方程、频率、模态和自由响应。再让 C 仅靠接触放在 B 上，求接触力及保持接触的位移范围。

## **Kai**

### (1)

静的平衡を原点とすると、重力とばねの静的な力が相殺される。

$$
\boxed{2m\ddot x_1+10kx_1-4kx_2=0,\qquad
2m\ddot x_2-4kx_1+4kx_2=0.}
$$

### (2)

$$
\det\begin{pmatrix}10k-2m\omega^2&-4k\\-4k&4k-2m\omega^2\end{pmatrix}
=4(m\omega^2-k)(m\omega^2-6k)=0.
$$

よって

$$
\boxed{\omega_1=\sqrt{k/m},\quad\boldsymbol\phi_1=(1,2)^T,\qquad
\omega_2=\sqrt{6k/m},\quad\boldsymbol\phi_2=(-2,1)^T.}
$$

### (3)

初期変位 $(d,2d)^T$ は第 1 モードに一致し、初速度はゼロなので

$$
\boxed{x_1=d\cos\omega_1t,\qquad x_2=2d\cos\omega_1t.}
$$

### (4)

下向きを正とする C の運動方程式は $m\ddot x_2=mg-F$。したがって

$$
\boxed{F(t)=mg-m\ddot x_2=mg+2kd\cos\omega_1t.}
$$

接触を保つ条件は全時刻で $F\ge0$。$d\ge0$ より

$$
\boxed{0\le d\le\frac{mg}{2k}.}
$$

等号では一瞬だけ接触力がゼロとなるが、必要接触力は負にならないため離脱しない。
