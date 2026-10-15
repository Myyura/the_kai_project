---
sidebar_label: "2014年度 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2014年度 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

半径 $r$、回転中心まわりの慣性モーメント $I=mr^2$ の円板状滑車に、軽く伸び縮みしないロープを巻く。一端にはばね定数 $k$ の軽いばねを介して質量 $2m$ の物体 A、他端には直接質量 $m$ の物体 B を取り付ける。滑車とロープの間に滑りはない。ロープがたるまず、ばねが自然長になる位置で A、B を支持し、$t=0$ に静かに支持を外す。初期位置からの A の下向き変位を $x_A$、B の上向き変位を $x_B$、重力加速度を $g$ とする。（50 点）

![問題の装置（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2014/dynamics-1-original.png)

1. ニュートンの運動法則から運動方程式を求めよ。
2. 固有角振動数と M-正規固有モードを求め、各モードの運動を物理的に説明せよ。
3. 正規モード行列によるモード解析から $x_A(t),x_B(t)$ を求めよ。
4. ロープの張力を時間の関数で表し、最大値を求めよ。

#### 题目描述

滑轮半径 $r$、惯量 $mr^2$，绕有不可伸长轻绳。绳一端经刚度 $k$ 的轻弹簧连接质量 $2m$ 的 A，另一端直接连接质量 $m$ 的 B，绳与轮无滑动。初始绳绷紧、弹簧为原长，A、B 静止；$t=0$ 解除支持。A 向下位移为 $x_A$、B 向上为 $x_B$。用牛顿定律求方程，再求固有频率、质量归一化模态及其物理意义，通过正则模态求完整响应，并求两侧绳张力和最大值。

## **Kai**

### (1)

ばね側と B 側の張力をそれぞれ $T_A,T_B$ とする。ばねの伸びは $x_A-x_B$、滑車の回転角は $x_B/r$ なので

$$
2m\ddot x_A=2mg-T_A,\qquad m\ddot x_B=T_B-mg,
$$

$$
I\frac{\ddot x_B}{r}=(T_A-T_B)r,\qquad T_A=k(x_A-x_B).
$$

$I=mr^2$ を代入して張力を消去すると

$$
\boxed{\underbrace{\begin{pmatrix}2m&0\\0&2m\end{pmatrix}}_{\boldsymbol M}
\ddot{\boldsymbol x}+
\underbrace{k\begin{pmatrix}1&-1\\-1&1\end{pmatrix}}_{\boldsymbol K}
\boldsymbol x=\begin{pmatrix}2mg\\-mg\end{pmatrix},\quad
\boldsymbol x=\begin{pmatrix}x_A\\x_B\end{pmatrix}.}
$$

### (2)

$\det(\boldsymbol K-\omega^2\boldsymbol M)=0$ から

$$
\boxed{\omega_0=0,\quad\boldsymbol\phi_0=\frac1{2\sqrt m}\begin{pmatrix}1\\1\end{pmatrix},\qquad
\omega_1=\sqrt{\frac km},\quad\boldsymbol\phi_1=\frac1{2\sqrt m}\begin{pmatrix}1\\-1\end{pmatrix}.}
$$

これらは $\boldsymbol\phi_i^T\boldsymbol M\boldsymbol\phi_j=\delta_{ij}$ を満たす。第0モードは $x_A=x_B$ でばねが伸縮せず、A と B は実空間では逆向きに動く。第1モードでは $x_A=-x_B$ でばねが伸縮し、A と B は実空間では同じ向きに動く。座標の正方向が互いに逆であることに注意する。

### (3)

$\boldsymbol\Phi=(\boldsymbol\phi_0,\boldsymbol\phi_1)$、$\boldsymbol x=\boldsymbol\Phi\boldsymbol\eta$ とおく。左から $\boldsymbol\Phi^T$ をかけると

$$
\ddot\eta_0=\frac{\sqrt m g}{2},\qquad
\ddot\eta_1+\omega_1^2\eta_1=\frac{3\sqrt m g}{2}.
$$

初期変位・初速度はともにゼロだから

$$
\eta_0=\frac{\sqrt m g}{4}t^2,\qquad
\eta_1=\frac{3m^{3/2}g}{2k}(1-\cos\omega_1t).
$$

したがって

$$
\boxed{x_A(t)=\frac{gt^2}{8}+\frac{3mg}{4k}(1-\cos\omega_1t),\qquad
x_B(t)=\frac{gt^2}{8}-\frac{3mg}{4k}(1-\cos\omega_1t).}
$$

### (4)

滑車に回転慣性があるため、左右の張力は等しくない。

$$
\boxed{T_A(t)=k(x_A-x_B)=\frac{3mg}{2}(1-\cos\omega_1t),}
$$

$$
\boxed{T_B(t)=m(g+\ddot x_B)=\frac{mg}{4}(5-3\cos\omega_1t).}
$$

最大値は $\omega_1t=(2j+1)\pi$（$j=0,1,\ldots$）で生じ、

$$
\boxed{T_{A,\max}=3mg,\qquad T_{B,\max}=2mg.}
$$

ロープ全体での最大張力は $3mg$ である。
