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

図に示すように、滑らかな水平面上を運動する質量 $m_1$ の物体が、ばね定数 $k_1$ のばねを介して基礎に接続され、物体には、鉛直からの回転角度 $\theta$ に比例したトルクを発生する回転ばね（ばね定数 $k_2$）を介して、質量 $m_2$ の質点が長さ $l$ の質量の無視できる剛体棒で接続されている。回転ばねによるトルクは $\theta=0$ のときに0であるとする。ばね定数 $k_1$ のばねが自然長であるときの棒の支持点を原点 O とする静止座標系で考える。水平右向きを $x$ 軸の正方向、鉛直上向きを $y$ 軸の正方向とする。一般化座標を $\boldsymbol{x}=[x\ \theta]^{\mathsf T}$ として以下の問いに答えよ。重力加速度を $g$ とする。（50点）

**(1)** 運動エネルギー $T$ とポテンシャルエネルギー $U$ を求めよ。

**(2)** ラグランジュの運動方程式を求めよ。さらに、$\theta,\dot\theta$ を微小として運動方程式を線形化し、行列表示せよ。

**(3)** $k_2=\alpha k_1l^2$、$m_1=m_2=m$、$k_1/m=g/l=\beta$ として、系の特性方程式を示し、この系のすべてのモードが振動的になる条件を導け。ただし、$\alpha,\beta$ はいずれも正の実数とする。

![原題の回転ばね付き倒立振り子と移動物体](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_dynamics-2-original.png)

#### 题目描述

如图，质量为 $m_1$ 的物体在光滑水平面上运动，通过弹簧常数为 $k_1$ 的弹簧连接至基础。物体上通过一转动弹簧连接长度为 $l$、质量可忽略的刚杆，杆端有质量为 $m_2$ 的质点。转动弹簧的弹簧常数为 $k_2$，产生与杆相对竖直方向转角 $\theta$ 成正比的扭矩，在 $\theta=0$ 时扭矩为零。使用静止坐标系，以 $k_1$ 弹簧处于原长时杆的支点为原点 O；$x$ 轴正向水平向右，$y$ 轴正向竖直向上。广义坐标为 $\boldsymbol{x}=[x\ \theta]^{\mathsf T}$，重力加速度为 $g$。回答下列问题。（50分）

**(1)** 求动能 $T$ 和势能 $U$。

**(2)** 求拉格朗日运动方程。进一步将 $\theta,\dot\theta$ 视为微小量，对运动方程线性化并用矩阵表示。

**(3)** 令 $k_2=\alpha k_1l^2$、$m_1=m_2=m$、$k_1/m=g/l=\beta$，写出系统特征方程，推导所有模态均呈振动状态的条件。其中 $\alpha,\beta$ 均为正实数。

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
\begin{gathered}
\boldsymbol M=m\begin{pmatrix}2&l\\l&l^2\end{pmatrix},\\
\boldsymbol K=m\beta\begin{pmatrix}1&0\\0&(\alpha-1)l^2\end{pmatrix}.
\end{gathered}
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
