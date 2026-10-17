---
sidebar_label: "2016年8月実施 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2016年8月実施 機械力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように中心 $\mathrm{O}_1,\mathrm{O}_2$ まわりに回転でき、回転軸まわりの極慣性モーメントがそれぞれ $I_1,I_2$、半径が $R_1,R_2$ の円板がある。両円板にはひもが巻かれており、ばね定数 $k$ のばねを介してつながれている。平衡状態において、ひもとばねはたわまずに張られており、平衡状態からの各円板の回転角を $\theta_1,\theta_2$ とする。ひもは伸びずに質量を無視でき、ひもと円板は滑らないものとする。$\theta_1,\theta_2$ は微小として以下の問いに答えよ。（50点）

**(1)** $\mathrm{O}_1,\mathrm{O}_2$ まわりの回転の運動方程式を求め、行列表示せよ。

**(2)** 固有角振動数 $\omega_1,\omega_2\ (\omega_1<\omega_2)$ と固有モード $\boldsymbol{X}_1,\boldsymbol{X}_2$ を求めよ。

**(3)** モード座標 $\xi_1,\xi_2$ を定義し、各モード座標に関する非連成の方程式を導出せよ。

**(4)** $\xi_1,\xi_2$ の一般解を求めよ。

![二円板と二つのばねの原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_dynamics-2-original.png)

#### 题目描述

如图，两个圆盘分别可绕中心 $\mathrm{O}_1,\mathrm{O}_2$ 转动，绕转轴的极转动惯量分别为 $I_1,I_2$，半径分别为 $R_1,R_2$。两个圆盘上缠绕细绳，并通过弹簧常数为 $k$ 的弹簧相连。平衡时细绳和弹簧均绷紧、不松弛。两圆盘相对平衡状态的转角为 $\theta_1,\theta_2$。细绳不可伸长、质量可忽略，绳与圆盘之间不滑动。设 $\theta_1,\theta_2$ 微小，回答下列问题。（50分）

**(1)** 求绕 $\mathrm{O}_1,\mathrm{O}_2$ 转动的运动方程，并用矩阵表示。

**(2)** 求固有角频率 $\omega_1,\omega_2\ (\omega_1<\omega_2)$ 和固有振型 $\boldsymbol{X}_1,\boldsymbol{X}_2$。

**(3)** 定义模态坐标 $\xi_1,\xi_2$，推导各模态坐标的解耦方程。

**(4)** 求 $\xi_1,\xi_2$ 的通解。

## **Kai**

まず、微小運動中も上下両方のひもが張られている場合を考える。

### (1)

$\delta=R_1\theta_1-R_2\theta_2$ とおくと、上下のばねの伸びの変化は $\delta,-\delta$。平衡張力を $T_0$ とすれば張力差は $(T_0+k\delta)-(T_0-k\delta)=2k\delta$ となる。よって

$$
\boxed{
\underbrace{\begin{pmatrix}I_1&0\\0&I_2\end{pmatrix}}_M
\ddot{\boldsymbol\theta}
+\underbrace{2k\begin{pmatrix}R_1^2&-R_1R_2\\-R_1R_2&R_2^2\end{pmatrix}}_K
\boldsymbol\theta=\boldsymbol0.}
$$

### (2)

$D=R_1^2/I_1+R_2^2/I_2$ とおく。$\det(K-\omega^2M)=0$ より

$$
\boxed{\omega_1=0,\qquad\omega_2=\sqrt{2kD}.}
$$

対応するモードは

$$
\boxed{\boldsymbol X_1\propto\begin{pmatrix}R_2\\R_1\end{pmatrix},\qquad
\boldsymbol X_2\propto\begin{pmatrix}R_1/I_1\\-R_2/I_2\end{pmatrix}.}
$$

第 1 モードでは両円板の周速度が等しく、ばねの伸びは変化しない。

### (3)

質量正規化したベクトルを

$$
\begin{gathered}
\boldsymbol\phi_1=\frac{(R_2,R_1)^T}{\sqrt{I_1R_2^2+I_2R_1^2}},\\
\boldsymbol\phi_2=\frac{(R_1/I_1,-R_2/I_2)^T}{\sqrt D}
\end{gathered}
$$

とし、$\Phi=(\boldsymbol\phi_1\ \boldsymbol\phi_2)$、$\boldsymbol\theta=\Phi\boldsymbol\xi$ と定義する。$\Phi^TM\Phi=I$、$\Phi^TK\Phi=\operatorname{diag}(0,2kD)$ だから

$$
\boxed{\ddot\xi_1=0,\qquad\ddot\xi_2+\omega_2^2\xi_2=0.}
$$

### (4)

$$
\boxed{\begin{gathered}
\xi_1=A+Bt,\\
\xi_2=C\cos\omega_2t+D_0\sin\omega_2t.
\end{gathered}}
$$

なお、平衡張力が厳密にゼロで、ひもが圧縮力を伝えず片側がたるむ別の条件では、張力を $k\max(\delta,0)$ と $k\max(-\delta,0)$ とする。この場合の張力差は $k\delta$ となり、上式の $2k$ を $k$ に置き換える。固有モードは変わらず、非零固有角振動数は $\sqrt{kD}$ となる。
