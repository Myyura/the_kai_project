---
sidebar_label: "2019年度 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Forced-Vibration
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2019年度 機械力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

ばね定数 $12k$ のばねで基礎に支持された質量 $12m$ の振動体（主系）が、調和外力 $f_0\cos\Omega t$ により非常に大きな振動を生じている。$f_0$ は一定値、主系の変位を $x_0$ とする。（50 点）

![従系 A、B の取り付け（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2019/dynamics-2-original.png)

1. 図 (a) のように質量 $m$ とばねからなる従系 A を取り付け、主系の振動を抑えたい。ばね定数の設定、従系の変位を $x_A$ とした運動方程式、および両系の振幅を求めよ。
2. 従系 A を取り付けた系の固有角振動数と固有モードを求めよ。
3. A のばね定数が当初の $\alpha$ 倍（$0<\alpha<1$）に変化したとき、両系の振幅を求めよ。
4. (3) の状態からさらに図 (b) の質量 $m$ の従系 B を取り付けたい。B のばね定数の設定、$x_B$ を用いた運動方程式、および三系の振幅を求めよ。

#### 题目描述

质量 $12m$、刚度 $12k$ 的主振子受 $f_0\cos\Omega t$ 激励，振动很大。先加装质量 $m$ 的吸振器 A，求消振所需刚度、运动方程、稳态振幅、固有频率及模态。A 的刚度退化为原来的 $\alpha$ 倍后求振幅，再加装质量 $m$ 的 B 恢复主系消振，求 B 的刚度、三自由度方程和各振幅。

## **Kai**

以下では $s=m\Omega^2$ とおく。原系が厳密に共振している場合は $\Omega^2=k/m$、すなわち $s=k$ となる。まず一般の加振振動数について求め、共振時の値も示す。変位は静的平衡位置から測る。

### (1)

A のばね定数を $k_A$ とすると

$$
\begin{pmatrix}12m&0\\0&m\end{pmatrix}
\begin{pmatrix}\ddot x_0\\\ddot x_A\end{pmatrix}
+\begin{pmatrix}12k+k_A&-k_A\\-k_A&k_A\end{pmatrix}
\begin{pmatrix}x_0\\x_A\end{pmatrix}
=\begin{pmatrix}f_0\cos\Omega t\\0\end{pmatrix}.
$$

$x_j=X_j\cos\Omega t$ として $X_0=0$ を代入すると、$(k_A-m\Omega^2)X_A=0$。よって

$$
\boxed{k_A=s=m\Omega^2,\quad X_0=0,\quad X_A=-\frac{f_0}{s}.}
$$

振幅は $0,|f_0|/s$ である。原系共振時には $k_A=k$ となる。

### (2)

$\lambda=\omega^2$ とおいた固有方程式は

$$
(12k+s-12m\lambda)(s-m\lambda)-s^2=0.
$$

したがって

$$
\boxed{\omega_\pm^2=
\frac{12k+13s\pm\sqrt{(12k+13s)^2-576ks}}{24m},\qquad
\boldsymbol\phi_\pm\propto
\begin{pmatrix}1\\s/(s-m\omega_\pm^2)\end{pmatrix}.}
$$

特に $s=k$ では

$$
\boxed{\omega_- =\sqrt{\frac{3k}{4m}},\quad
\boldsymbol\phi_-\propto\begin{pmatrix}1\\4\end{pmatrix},\qquad
\omega_+=\sqrt{\frac{4k}{3m}},\quad
\boldsymbol\phi_+\propto\begin{pmatrix}1\\-3\end{pmatrix}.}
$$

### (3)

$k_A=\alpha s$ を代入し、動剛性行列の行列式を

$$
D=(12k+\alpha s-12s)(\alpha s-s)-\alpha^2s^2
$$

とおくと

$$
\boxed{X_0=\frac{f_0(\alpha-1)s}{D},\qquad
X_A=\frac{f_0\alpha s}{D}.}
$$

振幅はこれらの絶対値である。$D=0$ の場合には共振し、有界な調和定常解は存在しない。特に原系共振時 $s=k$ では $D=-\alpha k^2$ より

$$
\boxed{|X_0|=\frac{(1-\alpha)|f_0|}{\alpha k},\qquad
|X_A|=\frac{|f_0|}{k}.}
$$

### (4)

B を $\boxed{k_B=s=m\Omega^2}$ に設定する。運動方程式は

$$
\begin{pmatrix}12m&0&0\\0&m&0\\0&0&m\end{pmatrix}
\begin{pmatrix}\ddot x_0\\\ddot x_A\\\ddot x_B\end{pmatrix}
+\begin{pmatrix}
12k+(\alpha+1)s&-\alpha s&-s\\
-\alpha s&\alpha s&0\\-s&0&s
\end{pmatrix}
\begin{pmatrix}x_0\\x_A\\x_B\end{pmatrix}
=\begin{pmatrix}f_0\cos\Omega t\\0\\0\end{pmatrix}.
$$

第 3 行から $X_0=0$、第 2 行と $\alpha\ne1$ から $X_A=0$、第 1 行から $X_B=-f_0/s$。したがって振幅は

$$
\boxed{0,\quad0,\quad\frac{|f_0|}{m\Omega^2}.}
$$

$\Omega^2=k/m$ なら B のばね定数は $k$、振幅は $|f_0|/k$ となる。
