---
sidebar_label: "2018年8月実施 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Forced-Vibration
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2018年8月実施 機械力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

ばね定数 $12k$ のばねで基礎に支持された質量 $12m$ の振動体があり、$f_0\cos\Omega t$（$f_0$ は一定値）の調和外力で加振され、非常に大きな振動を生じている。この振動体を主系と呼ぶ。主系の変位を $x_0$ とする。（50点）

**(1)** 図 (a) に示すように、主系に質量 $m$ の質点とばねからなる振動体（従系 A）を取り付けて主系の振動を抑えたい。従系 A のばね定数はどのように設定すべきか。また、従系 A の変位を $x_A$ としてそのときの運動方程式を示し、主系および従系 A の振幅を求めよ。

**(2)** 主系に従系 A を取り付けたときの固有角振動数と固有モードを求めよ。

**(3)** 従系 A のばね定数が経年変化により当初の値から $\alpha$ 倍（$0<\alpha<1$）となった。このときの主系および従系 A の振幅を求めよ。

**(4)** (3) の状態において、さらに図 (b) に示すように質量 $m$ の従系 B を取り付けて主系の振動を抑えたい。従系 B のばね定数はどのように設定すべきか。従系 B の変位を $x_B$ として運動方程式を示し、主系、従系 A および従系 B の振幅をそれぞれ求めよ。

![従系 A、B の取り付けの原図 (a), (b)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_dynamics-2-original.png)

### 题目描述

一个质量为 $12m$ 的振动体通过弹簧常数为 $12k$ 的弹簧支承于基础，受到简谐外力 $f_0\cos\Omega t$ 的激励而发生非常大的振动，其中 $f_0$ 为常数。将此振动体称为主系统，位移记为 $x_0$。（50分）

**(1)** 如图 (a)，在主系统上安装由质量为 $m$ 的质点和弹簧组成的振动体（从系统 A），希望抑制主系统的振动。应如何设置 A 的弹簧常数？以 $x_A$ 表示 A 的位移，写出此时的运动方程，并求主系统和 A 的振幅。

**(2)** 求安装从系统 A 后系统的固有角频率和固有振型。

**(3)** 由于老化，A 的弹簧常数变为初始值的 $\alpha$ 倍，其中 $0<\alpha<1$。求此时主系统和 A 的振幅。

**(4)** 在 (3) 的状态下，再如图 (b) 安装质量为 $m$ 的从系统 B，希望抑制主系统的振动。应如何设置 B 的弹簧常数？以 $x_B$ 表示 B 的位移，写出运动方程，并分别求主系统、A、B 的振幅。

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
\boxed{\begin{gathered}
\omega_\pm^2=
\frac{12k+13s\pm\sqrt{(12k+13s)^2-576ks}}{24m},\\
\boldsymbol\phi_\pm\propto
\begin{pmatrix}1\\s/(s-m\omega_\pm^2)\end{pmatrix}.
\end{gathered}}
$$

特に $s=k$ では

$$
\boxed{\begin{gathered}
\omega_- =\sqrt{\frac{3k}{4m}},\\
\boldsymbol\phi_-\propto\begin{pmatrix}1\\4\end{pmatrix},\\
\omega_+=\sqrt{\frac{4k}{3m}},\\
\boldsymbol\phi_+\propto\begin{pmatrix}1\\-3\end{pmatrix}.
\end{gathered}}
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
\begin{gathered}
\begin{pmatrix}12m&0&0\\0&m&0\\0&0&m\end{pmatrix}
\begin{pmatrix}\ddot x_0\\\ddot x_A\\\ddot x_B\end{pmatrix}\\
+\begin{pmatrix}
12k+(\alpha+1)s&-\alpha s&-s\\
-\alpha s&\alpha s&0\\-s&0&s
\end{pmatrix}
\begin{pmatrix}x_0\\x_A\\x_B\end{pmatrix}\\
=\begin{pmatrix}f_0\cos\Omega t\\0\\0\end{pmatrix}.
\end{gathered}
$$

第 3 行から $X_0=0$、第 2 行と $\alpha\ne1$ から $X_A=0$、第 1 行から $X_B=-f_0/s$。したがって振幅は

$$
\boxed{0,\quad0,\quad\frac{|f_0|}{m\Omega^2}.}
$$

$\Omega^2=k/m$ なら B のばね定数は $k$、振幅は $|f_0|/k$ となる。
