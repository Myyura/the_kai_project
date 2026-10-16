---
sidebar_label: "2022年8月実施 第1期 機械力学と制御"
tags:
  - Utsunomiya-University
  - Physics.Mechanics.Hamilton-Principle-and-Euler-Lagrange-Equation
---

# 宇都宮大学 地域創生科学研究科 工農総合科学専攻 機械知能工学プログラム 2022年8月実施 第1期 機械力学と制御

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%AE%87%E9%83%BD%E5%AE%AE%E5%A4%A7%E5%AD%A6/%E5%9C%B0%E5%9F%9F%E5%89%B5%E7%94%9F%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%B7%A5%E8%BE%B2%E7%B7%8F%E5%90%88%E7%A7%91%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%A9%9F%E6%A2%B0%E7%9F%A5%E8%83%BD%E5%B7%A5%E5%AD%A6/2022%E5%B9%B48%E6%9C%88%E5%AE%9F%E6%96%BD_%E6%A9%9F%E6%A2%B0%E5%8A%9B%E5%AD%A6%E3%81%A8%E5%88%B6%E5%BE%A1.html) refined with GPT 6 Astra)

## **Description**

長さ $l_1$ の質量を無視できる棒の上端を固定し、下端に質量 $m_1$ の重りを付ける。そこに長さ $l_2$ の軽い棒を連結し、その下端に質量 $m_2$ の重りを付けた2自由度系を考える。重力加速度を $g$、一般化座標を図の $\theta_1,\theta_2$ とする。$x$ 軸は右向き、$y$ 軸は上向きで、角度は鉛直下向きから測る。

![二重振り子と座標](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/utsunomiya-university/regional_development/mechanical_intelligence/2023/mech_202208_double_pendulum.png)

(1) 重りの位置 $\boldsymbol p_1=(x_1,y_1),\boldsymbol p_2=(x_2,y_2)$ を一般化座標で表せ。

(2) 運動エネルギー $T_1,T_2$ を一般化座標で表せ。

(3) $x$ 軸を基準とした重力による位置エネルギー $U_1,U_2$ を一般化座標で表せ。

(4) ラグランジアン $L$ を $T_1,T_2,U_1,U_2$ で表せ。

(5) $\displaystyle\frac{d}{dt}\frac{\partial L}{\partial\dot\theta_1}-\frac{\partial L}{\partial\theta_1}=0$ を、$\theta_1,\theta_2$ に関する2階微分方程式で表せ。

(6) $\displaystyle\frac{d}{dt}\frac{\partial L}{\partial\dot\theta_2}-\frac{\partial L}{\partial\theta_2}=0$ を同様に表せ。ただし $\dot\theta_i=d\theta_i/dt$ とする。

#### 题目描述

固定长 $l_1$ 的轻杆上端，下端装有质量 $m_1$ 的重物；再连接一根长 $l_2$ 的轻杆，末端装有质量 $m_2$ 的重物，构成图示双摆。重力加速度为 $g$，$x$ 向右、$y$ 向上，两广义坐标 $\theta_1,\theta_2$ 均从竖直向下方向量起。

(1) 用广义坐标表示两个重物的位置；(2) 求各自动能 $T_1,T_2$；(3) 以 $x$ 轴为零势能面，求各自重力势能 $U_1,U_2$；(4) 用这些能量表示拉格朗日量 $L$；(5)(6) 分别将对应 $\theta_1,\theta_2$ 的欧拉—拉格朗日方程写成二阶微分方程。

## **Kai**

以下、$\delta=\theta_1-\theta_2$ とおく。

### (1)

$y$ 軸が上向きであることに注意すると

$$
\boxed{\boldsymbol p_1=(l_1\sin\theta_1,-l_1\cos\theta_1)},
$$

$$
\boxed{\boldsymbol p_2=(l_1\sin\theta_1+l_2\sin\theta_2,
-l_1\cos\theta_1-l_2\cos\theta_2)}.
$$

### (2)

位置を時間微分し、$T_i=m_i|\dot{\boldsymbol p}_i|^2/2$ を用いる。

$$
\boxed{T_1=\frac12m_1l_1^2\dot\theta_1^2},
$$

$$
\boxed{T_2=\frac12m_2\left(l_1^2\dot\theta_1^2+l_2^2\dot\theta_2^2
+2l_1l_2\dot\theta_1\dot\theta_2\cos\delta\right)}.
$$

交差項には $\cos\theta_1\cos\theta_2+\sin\theta_1\sin\theta_2
=\cos(\theta_1-\theta_2)$ を用いた。

### (3)

$U_i=m_igy_i$ なので

$$
\boxed{U_1=-m_1gl_1\cos\theta_1},\qquad
\boxed{U_2=-m_2g(l_1\cos\theta_1+l_2\cos\theta_2)}.
$$

### (4)

$$
\boxed{L=T_1+T_2-U_1-U_2}.
$$

すなわち

$$
\begin{aligned}
L={}&\frac12(m_1+m_2)l_1^2\dot\theta_1^2
+\frac12m_2l_2^2\dot\theta_2^2
+m_2l_1l_2\dot\theta_1\dot\theta_2\cos\delta\\
&+(m_1+m_2)gl_1\cos\theta_1+m_2gl_2\cos\theta_2.
\end{aligned}
$$

### (5)

$$
\begin{aligned}
\frac d{dt}\frac{\partial L}{\partial\dot\theta_1}
={}&(m_1+m_2)l_1^2\ddot\theta_1
+m_2l_1l_2\ddot\theta_2\cos\delta\\
&-m_2l_1l_2\dot\theta_2(\dot\theta_1-\dot\theta_2)\sin\delta,\\
\frac{\partial L}{\partial\theta_1}
={}&-m_2l_1l_2\dot\theta_1\dot\theta_2\sin\delta
-(m_1+m_2)gl_1\sin\theta_1.
\end{aligned}
$$

差を取ると

$$
\boxed{(m_1+m_2)l_1^2\ddot\theta_1
+m_2l_1l_2\ddot\theta_2\cos\delta
+m_2l_1l_2\dot\theta_2^2\sin\delta
+(m_1+m_2)gl_1\sin\theta_1=0}.
$$

### (6)

$$
\begin{aligned}
\frac d{dt}\frac{\partial L}{\partial\dot\theta_2}
={}&m_2l_2^2\ddot\theta_2+m_2l_1l_2\ddot\theta_1\cos\delta\\
&-m_2l_1l_2\dot\theta_1(\dot\theta_1-\dot\theta_2)\sin\delta,\\
\frac{\partial L}{\partial\theta_2}
={}&m_2l_1l_2\dot\theta_1\dot\theta_2\sin\delta-m_2gl_2\sin\theta_2.
\end{aligned}
$$

したがって

$$
\boxed{m_2l_2^2\ddot\theta_2+m_2l_1l_2\ddot\theta_1\cos\delta
-m_2l_1l_2\dot\theta_1^2\sin\delta+m_2gl_2\sin\theta_2=0}.
$$

## **Reference**

- [宇都宮大学公式問題（PDF 4頁）](https://admission.utsunomiya-u.ac.jp/docs/2023kikaichinou.pdf)
- [Miyake：参考解答](https://miyake.github.io/exams/%E5%AE%87%E9%83%BD%E5%AE%AE%E5%A4%A7%E5%AD%A6/%E5%9C%B0%E5%9F%9F%E5%89%B5%E7%94%9F%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%B7%A5%E8%BE%B2%E7%B7%8F%E5%90%88%E7%A7%91%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%A9%9F%E6%A2%B0%E7%9F%A5%E8%83%BD%E5%B7%A5%E5%AD%A6/2022%E5%B9%B48%E6%9C%88%E5%AE%9F%E6%96%BD_%E6%A9%9F%E6%A2%B0%E5%8A%9B%E5%AD%A6%E3%81%A8%E5%88%B6%E5%BE%A1.html)
