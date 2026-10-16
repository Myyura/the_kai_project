---
sidebar_label: "2013年8月実施 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2013年8月実施 機械力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

滑らかな水平面を動く質量 $m_1$ の物体を、ばね定数 $k_1$ のばねで基礎につなぐ。物体の支持点から、長さ $l$ の質量を無視できる剛体棒で質点 $m_2$ を支持する。棒は鉛直上向きから右へ角度 $\theta$ だけ傾き、支持点の回転ばね（ばね定数 $k_2$）のトルクは $\theta$ に比例し、$\theta=0$ でゼロである。水平ばねが自然長のときの支持点を原点 O とし、右向きを $x$、上向きを $y$ の正方向とする。一般化座標は $\boldsymbol x=(x,\theta)^T$、重力加速度は $g$。（50 点）

![問題の装置（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_dynamics-2-original.png)

1. 運動エネルギー $T$ とポテンシャルエネルギー $U$ を求めよ。
2. ラグランジュの運動方程式を求め、さらに $\theta,\dot\theta$ が微小として線形化し、行列表示せよ。
3. $k_2=\alpha k_1l^2$、$m_1=m_2=m$、$k_1/m=g/l=\beta$ とする。特性方程式を示し、全モードが振動的になる条件を導け。ただし $\alpha,\beta>0$。

#### 题目描述

水平无摩擦滑块质量为 $m_1$，用刚度 $k_1$ 的弹簧接到固定基座。滑块上的无质量刚杆长 $l$，顶端有质量 $m_2$，杆与滑块之间有扭转刚度 $k_2$ 的转动弹簧；杆竖直向上时转矩为零，向右偏转为正角 $\theta$。水平弹簧原长时支点为原点，水平右移为 $x$。求动能、势能、非线性拉格朗日方程及小振动矩阵；在 $k_2=\alpha k_1l^2$、$m_1=m_2=m$、$k_1/m=g/l=\beta$ 且 $\alpha,\beta>0$ 时求特征方程和全部模态均为振动的条件。

## **Kai**

### (1)

質点 $m_2$ の座標は $(x+l\sin\theta,l\cos\theta)$。したがって、ポテンシャルの任意定数を省略して

$$
\boxed{T=\frac12(m_1+m_2)\dot x^2+m_2l\dot x\dot\theta\cos\theta
+\frac12m_2l^2\dot\theta^2,}
$$

$$
\boxed{U=\frac12k_1x^2+\frac12k_2\theta^2+m_2gl\cos\theta.}
$$

### (2)

$L=T-U$ に対し $\mathrm d(\partial L/\partial\dot q)/\mathrm dt-\partial L/\partial q=0$ を用いる。

$$
\boxed{(m_1+m_2)\ddot x+m_2l(\ddot\theta\cos\theta-\dot\theta^2\sin\theta)+k_1x=0,}
$$

$$
\boxed{m_2l\ddot x\cos\theta+m_2l^2\ddot\theta+k_2\theta-m_2gl\sin\theta=0.}
$$

第2式では、$\mathrm d(\partial L/\partial\dot\theta)/\mathrm dt$ と $\partial L/\partial\theta$ の双方に現れる $-m_2l\dot x\dot\theta\sin\theta$ が相殺される。

一次の項だけを残すと

$$
\boxed{
\begin{pmatrix}m_1+m_2&m_2l\\m_2l&m_2l^2\end{pmatrix}
\begin{pmatrix}\ddot x\\\ddot\theta\end{pmatrix}
+\begin{pmatrix}k_1&0\\0&k_2-m_2gl\end{pmatrix}
\begin{pmatrix}x\\\theta\end{pmatrix}=\boldsymbol0.}
$$

### (3)

与えられた関係を代入すると、質量行列と剛性行列は

$$
\boldsymbol M=m\begin{pmatrix}2&l\\l&l^2\end{pmatrix},\qquad
\boldsymbol K=m\beta\begin{pmatrix}1&0\\0&(\alpha-1)l^2\end{pmatrix}.
$$

特性方程式は

$$
\boxed{\omega^4-(2\alpha-1)\beta\omega^2+(\alpha-1)\beta^2=0.}
$$

その2根は

$$
\omega_\pm^2=\frac\beta2\left[2\alpha-1\pm\sqrt{4(\alpha-1)^2+1}\right].
$$

両根は常に実数である。両方を正にするには、和が正、積が正であればよい。$\beta>0$ より $2\alpha-1>0$ と $\alpha-1>0$ を合わせて

$$
\boxed{\alpha>1.}
$$

$\alpha=1$ では零振動数のモードが残り、$0<\alpha<1$ では一方の $\omega^2$ が負となる。これは回転ばねの復元剛性 $k_2$ が倒立位置の重力による負の剛性 $mgl$ を上回る条件と一致する。
