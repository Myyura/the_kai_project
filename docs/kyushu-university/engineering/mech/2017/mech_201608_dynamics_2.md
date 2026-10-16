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

図の二つの円板は中心 O₁、O₂ まわりに回転でき、軸まわりの極慣性モーメントを $I_1,I_2$、半径を $R_1,R_2$ とする。円板に巻かれたひもは、上下二つのばね定数 $k$ のばねを介してつながる。平衡状態でひもとばねはたわまずに張られており、そこからの微小回転角を $\theta_1,\theta_2$ とする。ひもは伸びず、質量は無視でき、円板との間に滑りはない。（50 点）

![二円板と二つのばね（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_dynamics-2-original.png)

1. 両円板の回転の運動方程式を行列表示せよ。
2. 固有角振動数 $\omega_1<\omega_2$ と固有モード $\boldsymbol X_1,\boldsymbol X_2$ を求めよ。
3. モード座標 $\xi_1,\xi_2$ を定義し、非連成の運動方程式を導出せよ。
4. $\xi_1,\xi_2$ の一般解を求めよ。

#### 题目描述

两圆盘的转动惯量为 $I_1,I_2$、半径为 $R_1,R_2$，绕固定中心转动。上下两条不可伸长的轻绳各串联一根刚度 $k$ 的弹簧，平衡时绳与弹簧张紧，绳盘无滑动。以图示同向角度求线性运动方程、两个固有频率和模态、模态解耦方程及通解。

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
\boldsymbol\phi_1=\frac{(R_2,R_1)^T}{\sqrt{I_1R_2^2+I_2R_1^2}},\qquad
\boldsymbol\phi_2=\frac{(R_1/I_1,-R_2/I_2)^T}{\sqrt D}
$$

とし、$\Phi=(\boldsymbol\phi_1\ \boldsymbol\phi_2)$、$\boldsymbol\theta=\Phi\boldsymbol\xi$ と定義する。$\Phi^TM\Phi=I$、$\Phi^TK\Phi=\operatorname{diag}(0,2kD)$ だから

$$
\boxed{\ddot\xi_1=0,\qquad\ddot\xi_2+\omega_2^2\xi_2=0.}
$$

### (4)

$$
\boxed{\xi_1=A+Bt,\qquad
\xi_2=C\cos\omega_2t+D_0\sin\omega_2t.}
$$

なお、平衡張力が厳密にゼロで、ひもが圧縮力を伝えず片側がたるむ別の条件では、張力を $k\max(\delta,0)$ と $k\max(-\delta,0)$ とする。この場合の張力差は $k\delta$ となり、上式の $2k$ を $k$ に置き換える。固有モードは変わらず、非零固有角振動数は $\sqrt{kD}$ となる。
