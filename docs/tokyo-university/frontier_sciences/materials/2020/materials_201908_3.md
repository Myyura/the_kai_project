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

### 問題の要約

[公式問題・第3問](https://www.k.u-tokyo.ac.jp/materials/wp-content/uploads/2024/10/R2-mondai.pdf)の独立した要約。

質量 $m$、角振動数 $\omega$ の一次元調和振動子について、

$$
H=\frac{p^2}{2m}+\frac12m\omega^2x^2,\qquad
[x,p]=i\hbar,\qquad H\varphi_n=E_n\varphi_n
$$

とする。$\varphi_n$ は規格化され、$n=0,1,\ldots$、$\varphi_0$ は基底状態である。演算子と状態の関係は

$$
A=\sqrt{\frac{m\omega}{2\hbar}}\left(x+\frac{ip}{m\omega}\right),\qquad
A^\dagger=\sqrt{\frac{m\omega}{2\hbar}}\left(x-\frac{ip}{m\omega}\right),
$$

$$
\varphi_{n+1}=\frac{A^\dagger\varphi_n}{\sqrt{n+1}},\qquad
\varphi_n=\frac{A\varphi_{n+1}}{\sqrt{n+1}},\qquad A\varphi_0=0
$$

で与えられる。

1. $A^\dagger A$ から $H$ を $A,A^\dagger$ で表す。
2. $E_0$ を求める。
3. $[A,A^\dagger]$ を計算し、$E_1$ を求める。
4. 各状態の位置期待値 $\langle\varphi_n|x|\varphi_n\rangle$ を求める。

$t<0$ では基底状態にあり、$t\ge0$ で $V(x)=Fx$（$F>0$）を加える。$F$ は十分小さく、一次摂動で

$$
\psi=e^{-iE_0t/\hbar}\varphi_0+c_1(t)e^{-iE_1t/\hbar}\varphi_1,\qquad
c_1(t)=\frac1{i\hbar}\int_0^t\langle\varphi_1|V|\varphi_0\rangle e^{i\omega t'}dt'
$$

とする。

5. $c_1(t)$ と、時刻 $t\ge0$ に状態 $\varphi_1$ を観測する確率を $m,\omega,\hbar,F$ で表す。
6. 位置期待値を $m,\omega,F$ で表し、$0\le t\le2\pi/\omega$ のグラフを描く。

### 题目描述

1. 使用正则对易关系 $[x,p]=i\hbar$ 以及
   $$
   A=\sqrt{\frac{m\omega}{2\hbar}}
   \left(x+\frac{ip}{m\omega}\right),\qquad
   A^\dagger=\sqrt{\frac{m\omega}{2\hbar}}
   \left(x-\frac{ip}{m\omega}\right),
   $$
   推导谐振子 Hamilton 算符
   $$
   H=\frac{p^2}{2m}+\frac12m\omega^2x^2
   =\hbar\omega\left(A^\dagger A+\frac12\right).
   $$
2. 对满足 $A\varphi_0=0$ 的基态，求其能量 $E_0$。
3. 证明 $[A,A^\dagger]=1$，并对 第一激发态
   $$
   \varphi_1=A^\dagger\varphi_0
   $$
   求能量 $E_1$。
4. 用归纳法证明对 $n=0,1,2,\ldots$，
   $$
   \langle\varphi_n|A|\varphi_n\rangle
   =\langle\varphi_n|A^\dagger|\varphi_n\rangle=0,
   $$
   再由
   $$
   x=\sqrt{\frac{\hbar}{2m\omega}}(A+A^\dagger)
   $$
   求各能量本征态中的位置期望。归一化态满足
   $\varphi_{n+1}=(n+1)^{-1/2}A^\dagger\varphi_n$。
5. 在 $t<0$ 时处于基态，$t\ge0$ 时加上位置型扰动 $V=Fx$（$F>0$ 且充分小），按一阶微扰计算到第一激发态的一阶振幅
   $$
   c_1(t)=\frac{F}{\sqrt{2\hbar\omega^3m}}
   (1-e^{i\omega t}),
   $$
   并进一步计算时刻 $t$ 在 $\varphi_1$ 中被发现的概率的最低非零阶。一阶近似态为 $\psi=e^{-iE_0t/\hbar}\varphi_0+c_1(t)e^{-iE_1t/\hbar}\varphi_1$。
6. 对 使用的两态近似波函数 $\psi$，结合
   $$
   \langle\varphi_0|x|\varphi_1\rangle
   =\langle\varphi_1|x|\varphi_0\rangle
   =\sqrt{\frac{\hbar}{2m\omega}},
   $$
   计算位置期望 $\langle\psi|x|\psi\rangle$；其结果为
   $F(\cos\omega t-1)/(m\omega^2)$ ，并画出 $0\le t\le2\pi/\omega$ 内的图像。

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
\left\langle \varphi_n \right| A A A^\dagger \left| \varphi_n \right\rangle
\\
&=
\frac{1}{n+1}
\left\langle \varphi_n \right|
A ( A^\dagger A + 1 ) \left| \varphi_n \right\rangle
\\
&=
\frac{1}{n+1}
\left\langle \varphi_n \right|
A \left( \frac{H}{\hbar \omega} - \frac{1}{2} + 1 \right)
\left| \varphi_n \right\rangle
\\
&=
\frac{1}{n+1}
\left( \frac{E_n}{\hbar \omega} + \frac{1}{2} \right)
\left\langle \varphi_n \right| A \left| \varphi_n \right\rangle
\end{aligned}
$$

であるから、数学的帰納法により、 $n=0,1,2, \cdots$ に対して、

$$
\begin{aligned}
\left\langle \varphi_n \right| A \left| \varphi_n \right\rangle = 0
\end{aligned}
$$

が成り立つ。

同様にして、

$$
\begin{aligned}
\left\langle \varphi_n \right| A^\dagger \left| \varphi_n \right\rangle = 0
\end{aligned}
$$

も成り立つ。

さらに、

$$
\begin{aligned}
x = \sqrt{\frac{\hbar}{2m \omega}} \left( A + A^\dagger \right)
\end{aligned}
$$

であるから、

$$
\begin{aligned}
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
F \left\langle \varphi_0 \right| A x \left| \varphi_0 \right\rangle
\\
&=
F \sqrt{\frac{\hbar}{2m \omega}}
\left\langle \varphi_0 \right| A \left( A + A^\dagger \right)
\left| \varphi_0 \right\rangle
\\
&=
F \sqrt{\frac{\hbar}{2m \omega}}
\left\langle \varphi_0 \right| A A^\dagger \left| \varphi_0 \right\rangle
\\
&=
F \sqrt{\frac{\hbar}{2m \omega}}
\left\langle \varphi_0 \right| \left(A^\dagger A + 1 \right)
\left| \varphi_0 \right\rangle
\\
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
&= 1
\\
\left| c_1(t) e^{-i \frac{E_1}{\hbar} t} \right|^2
&=
\frac{F^2}{2 \hbar \omega^3 m}
\left( 1 - e^{i \omega t} \right)
\left( 1 - e^{- i \omega t} \right)
\\
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
\left\langle \psi \right| x \left| \psi \right\rangle
&=
c_1^\ast (t) e^{-i \frac{E_0-E_1}{\hbar} t}
\left\langle \varphi_1 \right| x \left| \varphi_0 \right\rangle
+
c_1 (t) e^{-i \frac{E_1-E_0}{\hbar} t}
\left\langle \varphi_0 \right| x \left| \varphi_1 \right\rangle
\\
&=
\frac{F}{\sqrt{2 \hbar \omega^3 m}}
\left( 1 - e^{- i \omega t} \right)
e^{i \omega t} \sqrt{\frac{\hbar}{2m \omega}}
+
\frac{F}{\sqrt{2 \hbar \omega^3 m}} \left( 1 - e^{i \omega t} \right)
e^{- i \omega t} 
\sqrt{\frac{\hbar}{2m \omega}}
\\
&=
\frac{F}{2 m \omega^2} \left\{
\left( e^{i \omega t} - 1 \right) + \left( e^{- i \omega t} - 1 \right)
\right\}
\\
&=
\frac{F}{m \omega^2} \left( \cos \omega t - 1 \right)
\end{aligned}
$$

を得る。


$t=0,2\pi/\omega$ で期待値は $0$、$t=\pi/\omega$ で最小値 $-2F/(m\omega^2)$ をとる。

![Position expectation over one oscillation period](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/frontier_sciences/materials/2020/tokyo-materials-201908-position.svg)
