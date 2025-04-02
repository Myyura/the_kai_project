---
sidebar_label: "2017年8月実施 ベクトル解析"
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2017年8月実施 ベクトル解析

## **Author**
Zero

## **Description**
直交座標系において，$x, y, z$ 軸方向の単位ベクトルをそれぞれ $\boldsymbol{i, j, k}$ とする．$S$ を以下の面とし，$C$ をその外周とするとき，ベクトル場 $\boldsymbol{A} = y\boldsymbol{i} − 2x\boldsymbol{j} + xz\boldsymbol{k}$ に対し，線積分 $\oint_C \boldsymbol{A} \cdot d\boldsymbol{r}$，および面積分 $\int_S(\Delta \times \boldsymbol{A}) \cdot d\boldsymbol{S}$ をそれぞれ計算せよ. なお，線積分は $z$ 軸正方向からみて反時計回りに沿って行うものとし，$S$ の法線ベクトルの $z$ 成分は非負とする．

$$
S : x^2 + y^2 + z^2 = 1(z \ge 0)
$$

## **Kai** 
線路 $C$ はパラメータ $\theta$ を用して、$C:\boldsymbol{r} = \cos\theta i + \sin\theta j$ と表せる

$$
\frac{d\boldsymbol{r}}{d\theta} = -\sin\theta i + \cos\theta j = (-\sin\theta.\cos\theta,0)
$$

$$
\begin{aligned}
\oint_C \boldsymbol{A} \cdot d \boldsymbol{r} &= \int_0^{2\pi}\boldsymbol{A} \cdot \frac{d\boldsymbol{r}}{d\theta}d\theta \\
&= \int_0^{2\pi}\bigg[\sin\theta \cdot (-\sin\theta) - 2\cos\theta \cdot \cos\theta\bigg]d\theta \\
&= \int_0^{2\pi}(-\sin^2\theta - 2\cos^2\theta)d\theta \\
&= \int_0^{2\pi}(-1 - \cos^2\theta)d\theta \\
&= \int_0^{2\pi}(-1 - \frac{1}{2}\cos2\theta)d\theta \\
&= \int_0^{2\pi}(-\frac{3}{2} - \frac{1}{2}\cos2\theta)d\theta \\
&= \bigg[-\frac{3}{2}\theta - \frac{1}{4}\sin2\theta\bigg]_0^{2\pi} \\
&= -3\pi
\end{aligned}
$$

面積分を求める、$S : x^2 + y^2 + z^2 = 1(z \ge 0)$ より、球座標表示でパラメータ表示する、

$$
\left \{
\begin{aligned}
&x = r\sin\theta\cos\phi \\
&y = r\sin\theta\sin\phi (0 \le \theta \le \frac{\pi}{2}),(0 \le \phi \le 2\pi) \\
&z = r\cos\theta
\end{aligned}
\right.
$$

面 $S$ をパラメータ表示したベクトルを $\boldsymbol{r}$ とおく

$$
\begin{aligned}
&\boldsymbol{r} = (\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta) \\
&\boldsymbol{r}_{\theta} = (\cos\theta\cos\phi,\cos\theta\sin\phi,-\sin\theta) \\
&\boldsymbol{r}_{\phi} = (-\sin\theta\sin\phi,\sin\theta\cos\phi,0)
\end{aligned}
$$

$$
\boldsymbol{r}_{\theta} \times \boldsymbol{r}_{\phi} = \begin{vmatrix}
i & j & k \\
\cos\theta\cos\phi & \cos\theta\sin\phi & -\sin\theta \\
-\sin\theta\sin\phi & \sin\theta\cos\phi & 0
\end{vmatrix} 
= (\sin^2\theta\cos\phi,\sin^2\theta\sin\phi,\cos\theta\sin\theta)
$$

$$
\begin{aligned}
\Delta \times \boldsymbol{A} &= \begin{vmatrix}
i & j & k \\
\frac{\partial}{\partial x} &\frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
y & -2x & xz
\end{vmatrix} \\
&= (0, -z,-3) \\
&= (0,-\cos\theta,-3)
\end{aligned}
$$

$$
\begin{aligned}
&\int_0^{\theta = \frac{\pi}{2}}\int_0^{\phi = 2\pi}(0,-\cos\theta,-3) \cdot (\sin^2\theta\cos\phi,\sin^2\theta\sin\phi,\cos\theta\sin\theta)d\theta d\phi \\
&= \int_0^{2\pi}\int_0^{\frac{\pi}{2}}(-\cos\theta\sin^2\theta\sin\phi - 3\cos\theta\sin\theta)d\theta d\phi \\
&= \bigg[\cos\theta\sin^2\theta\cos\phi - 3\cos\theta\sin\theta \cdot  \phi \bigg]_0^{2\pi} \\
&= \int_0^{\frac{\pi}{2}} - 3\pi \sin\theta d\theta \\
&= \bigg[\frac{3}{2}\cos2\theta\bigg]_0^{2\pi} \\
&= -3\pi
\end{aligned}
$$
