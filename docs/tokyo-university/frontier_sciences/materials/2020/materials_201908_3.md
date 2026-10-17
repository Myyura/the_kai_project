---
sidebar_label: "2019年8月実施 第3問"
tags:
  - Tokyo-University
  - Physics.Quantum-Mechanics.Creation-and-Annihilation-Operators
  - Physics.Quantum-Mechanics.Harmonic-Oscillator-Ground-State
  - Physics.Quantum-Mechanics.Harmonic-Oscillator-First-Excited-State
  - Physics.Quantum-Mechanics.First-Order-Time-Dependent-Perturbation-Transition-Probability
  - Physics.Quantum-Mechanics.Quantum-Observable-Expectation-and-Variance
---
# 東京大学 新領域創成科学研究科 物質系専攻 2019年8月実施 第3問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

1 次元調和振動子型のポテンシャル中にある質量 $m$ の粒子を考える。このとき、ハミルトニアン $H$ は、次のように書ける。

$$
H=\frac{p^2}{2m}+\frac12m\omega^2x^2
$$

ここで、$x$、$p$、$\omega$ は、それぞれ、位置演算子、運動量演算子、角振動数である。規格化された波動関数 $\varphi_n(x)$、固有エネルギー $E_n$ は、次のシュレーディンガー方程式を満たす。

$$
H\varphi_n(x)=E_n\varphi_n(x)
$$

ここで、$n$ は負でない整数（$n=0,1,2,\ldots$）であり、$n=0$ は基底状態に対応する。次の演算子 $A$、$A^\dagger$ を定義する。

$$
\begin{aligned}
A&=\sqrt{\frac{m\omega}{2\hbar}}\left(x+\frac{ip}{m\omega}\right),\\
A^\dagger&=\sqrt{\frac{m\omega}{2\hbar}}\left(x-\frac{ip}{m\omega}\right).
\end{aligned}
$$

ここで、$\hbar$ はプランク定数を $2\pi$ で割った値である。このとき、次のような関係式が成り立つ。

$$
\begin{aligned}
\varphi_{n+1}(x)&=\frac1{\sqrt{n+1}}A^\dagger\varphi_n(x),\\
\varphi_n(x)&=\frac1{\sqrt{n+1}}A\varphi_{n+1}(x).
\end{aligned}
$$

以下の問いに答えよ。

**（1）** $A^\dagger A$ を計算することによって、$H$ を $A^\dagger$ と $A$ を用いて表せ。ただし、交換関係 $[x,p]=i\hbar$ が成り立つことに注意せよ。

**（2）** $E_0$ を求めよ。ただし、$A\varphi_0=0$ であることに注意せよ。

**（3）** 交換関係 $[A,A^\dagger]$ を計算することによって、$E_1$ を求めよ。

**（4）** 状態 $\varphi_n$ における $x$ の期待値 $\langle\varphi_n|x|\varphi_n\rangle$ を求めよ。

時刻 $t<0$ で、状態 $\varphi_0$ であるとする。$t\ge0$ で、$V(x)=Fx$ の摂動ポテンシャルが加わっている状況を考える。ここで、$F$ は力を表す正の定数である。$F$ が十分小さいとし、1 次摂動の範囲で考えることができるものとする。このとき、時刻 $t$ における波動関数は、

$$
\psi(x,t)=e^{-iE_0t/\hbar}\varphi_0(x)
+c_1(t)e^{-iE_1t/\hbar}\varphi_1(x)
$$

と書ける。ここで、係数 $c_1(t)$ は、

$$
c_1(t)=\frac1{i\hbar}\int_0^t
\langle\varphi_1|V|\varphi_0\rangle e^{i\omega t'}\,dt'
$$

と書ける。

**（5）** $c_1(t)$ を計算して、時刻 $t\ (\ge0)$ において粒子が状態 $\varphi_1$ に見いだされる確率を $m$、$\omega$、$\hbar$、$F$ を用いて表せ。

**（6）** 時刻 $t\ (\ge0)$ における $x$ の期待値 $\langle\psi|x|\psi\rangle$ を $m$、$\omega$、$F$ を用いて表せ。また、$\langle\psi|x|\psi\rangle$ を $0\le t\le2\pi/\omega$ の範囲で $t$ の関数として図示せよ。

#### 题目描述

考虑处于一维谐振子势中的质量为 $m$ 的粒子，其哈密顿算符为

$$
H=\frac{p^2}{2m}+\frac12m\omega^2x^2.
$$

这里 $x$、$p$、$\omega$ 分别为位置算符、动量算符和角频率。归一化波函数 $\varphi_n(x)$ 及能量本征值 $E_n$ 满足薛定谔方程

$$
H\varphi_n(x)=E_n\varphi_n(x).
$$

$n$ 为非负整数（$n=0,1,2,\ldots$），$n=0$ 对应基态。定义算符

$$
\begin{aligned}
A&=\sqrt{\frac{m\omega}{2\hbar}}\left(x+\frac{ip}{m\omega}\right),\\
A^\dagger&=\sqrt{\frac{m\omega}{2\hbar}}\left(x-\frac{ip}{m\omega}\right).
\end{aligned}
$$

其中 $\hbar$ 为普朗克常数除以 $2\pi$。有以下关系：

$$
\begin{aligned}
\varphi_{n+1}(x)&=\frac1{\sqrt{n+1}}A^\dagger\varphi_n(x),\\
\varphi_n(x)&=\frac1{\sqrt{n+1}}A\varphi_{n+1}(x).
\end{aligned}
$$

回答下列问题。

**（1）** 计算 $A^\dagger A$，将 $H$ 用 $A^\dagger$ 和 $A$ 表示。注意对易关系 $[x,p]=i\hbar$ 成立。

**（2）** 求 $E_0$。注意 $A\varphi_0=0$。

**（3）** 计算对易关系 $[A,A^\dagger]$，求 $E_1$。

**（4）** 求状态 $\varphi_n$ 中位置 $x$ 的期望值 $\langle\varphi_n|x|\varphi_n\rangle$。

设 $t<0$ 时处于状态 $\varphi_0$。考虑在 $t\ge0$ 时加入微扰势 $V(x)=Fx$ 的情形，其中 $F$ 为表示力的正数。假设 $F$ 足够小，可采用一阶微扰近似。此时时刻 $t$ 的波函数可写为

$$
\psi(x,t)=e^{-iE_0t/\hbar}\varphi_0(x)
+c_1(t)e^{-iE_1t/\hbar}\varphi_1(x),
$$

其中系数为

$$
c_1(t)=\frac1{i\hbar}\int_0^t
\langle\varphi_1|V|\varphi_0\rangle e^{i\omega t'}\,dt'.
$$

**（5）** 计算 $c_1(t)$，用 $m$、$\omega$、$\hbar$、$F$ 表示在时刻 $t\ (\ge0)$ 发现粒子处于状态 $\varphi_1$ 的概率。

**（6）** 用 $m$、$\omega$、$F$ 表示时刻 $t\ (\ge0)$ 的位置期望值 $\langle\psi|x|\psi\rangle$，并画出其在 $0\le t\le2\pi/\omega$ 范围内随 $t$ 变化的图像。

## **Kai**
### (1)

$$
\begin{aligned}
A^\dagger A
&= \frac{m \omega}{2 \hbar}
\left( x - \frac{ip}{m \omega} \right)
\left( x + \frac{ip}{m \omega} \right)
\\
&= \frac{m \omega}{2 \hbar}
\left( x^2 + \frac{p^2}{m^2 \omega^2} + \frac{i}{m \omega}[x,p] \right)
\\
&= \frac{m \omega}{2 \hbar}
\left( x^2 + \frac{p^2}{m^2 \omega^2} - \frac{\hbar}{m \omega} \right)
\\
&= \frac{1}{\hbar \omega}
\left( \frac{p^2}{2 m} + \frac{1}{2} m \omega^2 x^2 \right)
- \frac{1}{2}
\\
&= \frac{1}{\hbar \omega} H - \frac{1}{2}
\\
\therefore \ \ 
H &= \hbar \omega \left( A^\dagger A + \frac{1}{2} \right)
\end{aligned}
$$

### (2)

$$
\begin{aligned}
H \varphi_0
&=
\hbar \omega \left( A^\dagger A + \frac{1}{2} \right) \varphi_0
\\
&=
\frac{1}{2} \hbar \omega \varphi_0
\\
\therefore \ \ 
E_0 &= \frac{1}{2} \hbar \omega
\end{aligned}
$$

### (3)

$$
\begin{aligned}
\left[ A, A^\dagger \right]
&=
\frac{m \omega}{2 \hbar}
\left[ x + \frac{ip}{m \omega}, x - \frac{ip}{m \omega} \right]
\\
&=
\frac{m \omega}{2 \hbar} \frac{i}{m \omega}
\left\{ -[x,p] + [p,x] \right\}
\\
&=
\frac{i}{2 \hbar} \cdot (-2i \hbar)
\\
&= 1
\\
H \varphi_1
&=
\hbar \omega \left( A^\dagger A + \frac{1}{2} \right) A^\dagger \varphi_0
\\
&=
\hbar \omega
\left( A^\dagger (A^\dagger A + 1) + \frac{1}{2} A^\dagger \right)
\varphi_0
\\
&=
\frac{3}{2} \hbar \omega A^\dagger \varphi_0
\\
&=
\frac{3}{2} \hbar \omega \varphi_1
\\
\therefore \ \ 
E_1 &= \frac{3}{2} \hbar \omega
\end{aligned}
$$

### (4)
$\left\langle \varphi_0 \right| A \left| \varphi_0 \right\rangle = 0$ で、かつ、

$$
\begin{aligned}
\left\langle \varphi_{n+1} \right| A \left| \varphi_{n+1} \right\rangle
&=
\frac{1}{n+1}
\left\langle \varphi_n \right| A A A^\dagger \left| \varphi_n \right\rangle\\
&=
\frac{1}{n+1}
\left\langle \varphi_n \right|
A ( A^\dagger A + 1 ) \left| \varphi_n \right\rangle\\
&=
\frac{1}{n+1}
\left\langle \varphi_n \right|
A \left( \frac{H}{\hbar \omega} - \frac{1}{2} + 1 \right)
\left| \varphi_n \right\rangle\\
&=
\frac{1}{n+1}
\left( \frac{E_n}{\hbar \omega} + \frac{1}{2} \right)
\left\langle \varphi_n \right| A \left| \varphi_n \right\rangle
\end{aligned}
$$

であるから、数学的帰納法により、 $n=0,1,2, \cdots$ に対して、

$$
\begin{aligned}
&
\left\langle \varphi_n \right| A \left| \varphi_n \right\rangle = 0
\end{aligned}
$$

が成り立つ。

同様にして、

$$
\begin{aligned}
&
\left\langle \varphi_n \right| A^\dagger \left| \varphi_n \right\rangle = 0
\end{aligned}
$$

も成り立つ。

さらに、

$$
\begin{aligned}
&
x = \sqrt{\frac{\hbar}{2m \omega}} \left( A + A^\dagger \right)
\end{aligned}
$$

であるから、

$$
\begin{aligned}
&
\left\langle \varphi_n \right| x \left| \varphi_n \right\rangle = 0
\end{aligned}
$$

が $n=0,1,2, \cdots$ について成り立つ。

### (5)
まず、

$$
\begin{aligned}
\left\langle \varphi_1 \right| V \left| \varphi_0 \right\rangle
&=
F \left\langle \varphi_0 \right| A x \left| \varphi_0 \right\rangle\\
&=
F \sqrt{\frac{\hbar}{2m \omega}}
\left\langle \varphi_0 \right| A \left( A + A^\dagger \right)
\left| \varphi_0 \right\rangle\\
&=
F \sqrt{\frac{\hbar}{2m \omega}}
\left\langle \varphi_0 \right| A A^\dagger \left| \varphi_0 \right\rangle\\
&=
F \sqrt{\frac{\hbar}{2m \omega}}
\left\langle \varphi_0 \right| \left(A^\dagger A + 1 \right)
\left| \varphi_0 \right\rangle\\
&=
F \sqrt{\frac{\hbar}{2m \omega}}
\end{aligned}
$$

であるから、

$$
\begin{aligned}
c_1(t)
&=
\frac{F}{i \hbar} \sqrt{\frac{\hbar}{2m \omega}}
\int_0^t e^{i \omega t'} dt'
\\
&=
\frac{F}{i \hbar} \sqrt{\frac{\hbar}{2m \omega}}
\left[ \frac{e^{i \omega t'}}{i \omega} \right]_0^t
\\
&=
- \frac{F}{\hbar \omega} \sqrt{\frac{\hbar}{2m \omega}}
\left( e^{i \omega t} - 1 \right)
\\
&=
\frac{F}{\sqrt{2 \hbar \omega^3 m}}
\left( 1 - e^{i \omega t} \right)
\end{aligned}
$$

を得る。

さらに、

$$
\begin{aligned}
\left| e^{-i \frac{E_0}{\hbar} t} \right|^2
&= 1\\
\left| c_1(t) e^{-i \frac{E_1}{\hbar} t} \right|^2
&=
\frac{F^2}{2 \hbar \omega^3 m}
\left( 1 - e^{i \omega t} \right)
\left( 1 - e^{- i \omega t} \right)\\
&=
\frac{F^2}{\hbar \omega^3 m}
\left( 1 - \cos \omega t \right)
\end{aligned}
$$

であるから、一次摂動で求めた振幅に対応する遷移確率は

$$
P_{0\to1}(t)\simeq |c_1(t)|^2
=\frac{F^2}{\hbar\omega^3m}(1-\cos\omega t)
$$

である。ここでは確率について $F^2$ の項までを採用する。

### (6)
(3), (5) より

$$
\begin{aligned}
\left\langle \varphi_0 \right| x \left| \varphi_0 \right\rangle
&=
\left\langle \varphi_1 \right| x \left| \varphi_1 \right\rangle
= 0
\\
\left\langle \varphi_0 \right| x \left| \varphi_1 \right\rangle
&=
\left\langle \varphi_1 \right| x \left| \varphi_0 \right\rangle
=
\sqrt{\frac{\hbar}{2m \omega}}
\end{aligned}
$$

であるから、

$$
\begin{aligned}
&
\left\langle \psi \right| x \left| \psi \right\rangle\\
&=
c_1^\ast (t) e^{-i \frac{E_0-E_1}{\hbar} t}
\left\langle \varphi_1 \right| x \left| \varphi_0 \right\rangle\\
&\quad+
c_1 (t) e^{-i \frac{E_1-E_0}{\hbar} t}
\left\langle \varphi_0 \right| x \left| \varphi_1 \right\rangle\\
&=
\frac{F}{\sqrt{2 \hbar \omega^3 m}}
\left( 1 - e^{- i \omega t} \right)
e^{i \omega t} \sqrt{\frac{\hbar}{2m \omega}}\\
&\quad+
\frac{F}{\sqrt{2 \hbar \omega^3 m}} \left( 1 - e^{i \omega t} \right)
e^{- i \omega t} 
\sqrt{\frac{\hbar}{2m \omega}}\\
&=
\frac{F}{2 m \omega^2} \left\{
\left( e^{i \omega t} - 1 \right) + \left( e^{- i \omega t} - 1 \right)
\right\}\\
&=
\frac{F}{m \omega^2} \left( \cos \omega t - 1 \right)
\end{aligned}
$$

を得る。


$t=0,2\pi/\omega$ で期待値は $0$、$t=\pi/\omega$ で最小値 $-2F/(m\omega^2)$ をとる。

![Position expectation over one oscillation period](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/frontier_sciences/materials/2020/tokyo-materials-201908-position.svg)

## **Reference**

- [大学公表の原題](https://www.k.u-tokyo.ac.jp/materials/wp-content/uploads/2024/10/R2-mondai.pdf)
