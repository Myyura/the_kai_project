---
sidebar_label: "2018年8月実施 解析学・微積分"
tags:
  - Kyushu-University
  - Differential-Equation
  - Complex-Analysis
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2018年8月実施 解析学・微積分

## **Author**
Yu, Miyake

## **Description**
### 微分方程式
$2$ つの関数 $x(t),y(t)$ について, 次の連立微分方程式を解け。

$$
\left\{
\begin{aligned}
&\frac{\text{d}x}{\text{d}t} = x - 5y\\
&\frac{\text{d}y}{\text{d}t} = x - 3y\\
&x(0) = 3,y(0) = 1 
\end{aligned}
\right.
$$

### 複素関数論
解析関数 $f(z) = u + iv$ を考える。ただし, $z = x + iy$ は複素数, $x$ と $y$ は実数, $u$ と $v$ は実数値関数, $i = \sqrt{-1}$ である。 $x$ と $y$ が極形式 $x = r\cos \theta$ と $y = r\sin \theta$ で表されるとき, 極形式のコーシー $\cdot$ リーマンの方程式は以下の式で書けることを示せ。

$$
\frac{\partial u}{\partial r} = \frac{1}{r} \frac{\partial v}{\partial \theta} , \frac{\partial v}{\partial r} = -\frac{1}{r}\frac{\partial u}{\partial \theta}
$$

## **Kai** 
### 微分方程式

$$
\frac{\text{d}x}{\text{d}t} = x - 5y \Rightarrow y = \frac{1}{5}\big(x - \frac{\text{d}x}{\text{d}t}\big)
$$

$$
\frac{\text{d}y}{\text{d}t} = x - 3y \text{ に代入して,}
$$

$$
\frac{\text{d}^2x}{\text{d}t^2} + 2\frac{\text{d}x}{\text{d}t} + 2x = 0 
$$

$$
\lambda^2 + 2\lambda + 2 = 0 \Rightarrow \lambda = -1 \pm i
$$

$$
x = e^{-t}(c_1\cos t + c_2\sin t)
$$

$$
\frac{\text{d}x}{\text{d}t} = -e^{-t}[(c_1 -c_2)\cos t + (c_1 + c_2)\sin t]
$$

$$
y = \frac{1}{5}e^{-t}[(2c_1 - c_2)\cos t + (c_1 + 2c_2)\sin t]
$$

$$
\left\{
\begin{aligned}
&x(0) = c_1 = 3 \\
&y(0) = \frac{1}{5}(2c_1 - c_2) = 1
\end{aligned}
\right.
\Rightarrow
\left\{
\begin{aligned}
c_1 = 3\\
c_2 = 1
\end{aligned}
\right.
$$

$$
\left\{
\begin{aligned}
x &= e^{-t}(3\cos t + \sin t) \\
y &= e^{-t}(\cos t + \sin t)
\end{aligned}
\right.
$$

### 複素関数論

$x = r \cos \theta, y = r \sin \theta$ より、

$$
  \begin{aligned}
  \frac{\partial x}{\partial r} = \cos \theta
  , \ \ 
  \frac{\partial x}{\partial \theta} = -r \sin \theta
  , \ \ 
  \frac{\partial y}{\partial r} = \sin \theta
  , \ \ 
  \frac{\partial y}{\partial \theta} = r \cos \theta
  \end{aligned}
$$

なので、

$$
  \begin{aligned}
  \frac{\partial u}{\partial r}
  &= \frac{\partial x}{\partial r} \frac{\partial u}{\partial x}
  + \frac{\partial y}{\partial r} \frac{\partial u}{\partial y}
  \\
  &= \cos \theta \frac{\partial u}{\partial x}
  + \sin \theta \frac{\partial u}{\partial y}
  , \\
  \frac{\partial u}{\partial \theta}
  &= \frac{\partial x}{\partial \theta} \frac{\partial u}{\partial x}
  + \frac{\partial y}{\partial \theta} \frac{\partial u}{\partial y}
  \\
  &= -r \sin \theta \frac{\partial u}{\partial x}
  + r \cos \theta \frac{\partial u}{\partial y}
  , \\
  \frac{\partial v}{\partial r}
  &= \frac{\partial x}{\partial r} \frac{\partial u}{\partial x}
  + \frac{\partial y}{\partial r} \frac{\partial u}{\partial y}
  \\
  &= \cos \theta \frac{\partial v}{\partial x}
  + \sin \theta \frac{\partial v}{\partial y}
  , \\
  \frac{\partial v}{\partial \theta}
  &= \frac{\partial x}{\partial \theta} \frac{\partial u}{\partial x}
  + \frac{\partial y}{\partial \theta} \frac{\partial u}{\partial y}
  \\
  &= -r \sin \theta \frac{\partial v}{\partial x}
  + r \cos \theta \frac{\partial v}{\partial y}
  \end{aligned}
$$

である。

さらに、コーシー・リーマンの方程式

$$
  \begin{aligned}
  \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}
  , \ \ 
  \frac{\partial u}{\partial y} = - \frac{\partial v}{\partial x}
  \end{aligned}
$$

を使うと、

$$
  \begin{aligned}
  \frac{\partial u}{\partial r}
  &= \cos \theta \frac{\partial u}{\partial x}
  + \sin \theta \frac{\partial u}{\partial y}
  \\
  &= \cos \theta \frac{\partial v}{\partial y}
  - \sin \theta \frac{\partial v}{\partial x}
  \\
  &= \frac{1}{r} \frac{\partial v}{\partial \theta}
  , \\
  \frac{\partial v}{\partial r}
  &= \cos \theta \frac{\partial v}{\partial x}
  + \sin \theta \frac{\partial v}{\partial y}
  \\
  &= - \cos \theta \frac{\partial u}{\partial y}
  + \sin \theta \frac{\partial u}{\partial x}
  \\
  &= - \frac{1}{r} \frac{\partial u}{\partial \theta}
  \end{aligned}
$$

を得る。