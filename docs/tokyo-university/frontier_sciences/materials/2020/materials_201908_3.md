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

### 题目描述

原 Description 为空。以下六项只能依据现有 Kai 的编号、公式与计算目标恢复；原题对算符的完整定义、态的递推归一化、扰动开启方式及近似阶数没有留存。

1. Kai 使用正则对易关系 $[x,p]=i\hbar$ 以及
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
3. 证明 $[A,A^\dagger]=1$，并对 Kai 定义的第一激发态
   $$
   \varphi_1=A^\dagger\varphi_0
   $$
   求能量 $E_1$。
4. Kai 以归纳法证明对 $n=0,1,2,\ldots$，
   $$
   \langle\varphi_n|A|\varphi_n\rangle
   =\langle\varphi_n|A^\dagger|\varphi_n\rangle=0,
   $$
   再由
   $$
   x=\sqrt{\frac{\hbar}{2m\omega}}(A+A^\dagger)
   $$
   求各能量本征态中的位置期望。Kai 计算中使用了
   $\varphi_{n+1}=(n+1)^{-1/2}A^\dagger\varphi_n$，但原题是否显式给出该定义无法确认。
5. Kai 对位置型扰动 $V=Fx$，从基态出发计算到第一激发态的一阶振幅
   $$
   c_1(t)=\frac{F}{\sqrt{2\hbar\omega^3m}}
   (1-e^{i\omega t}),
   $$
   并进一步计算时刻 $t$ 在 $\varphi_1$ 中被发现的归一化概率。原题中扰动的时间开关函数及近似态的完整定义未保留。
6. 对 Kai 使用的两态近似波函数 $\psi$，结合
   $$
   \langle\varphi_0|x|\varphi_1\rangle
   =\langle\varphi_1|x|\varphi_0\rangle
   =\sqrt{\frac{\hbar}{2m\omega}},
   $$
   计算位置期望 $\langle\psi|x|\psi\rangle$；Kai 得到与
   $F(\cos\omega t-1)/(m\omega^2)$ 相同的表达式。

无法仅由 Kai 判断第 5、6 问原题是否要求保留归一化分母、只取一阶项，或采用其他扰动论记号，故不补造这些条件。

#### 考点

- **产生与湮灭算符**：从 $[x,p]=i\hbar$ 推导 $[A,A^\dagger]=1$，并把谐振子 Hamilton 量写成数算符形式。
- **基态与第一激发态**：利用湮灭条件及升算符作用求最低两个能级，并计算能量本征态的位置期望。
- **一阶含时微扰跃迁**：由矩阵元 $\langle\varphi_1|Fx|\varphi_0\rangle$ 积分求跃迁振幅和随时间振荡的概率。
- **量子可观测量期望**：在基态与第一激发态的叠加中保留交叉矩阵元，计算位置平均值的时间演化。

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

であるから、時刻 $t$ において状態 $\varphi_1$ に見いだされる確率は、

$$
\begin{aligned}
\frac{\frac{F^2}{\hbar \omega^3 m} \left( 1 - \cos \omega t \right)}
{ 1 + \frac{F^2}{\hbar \omega^3 m} \left( 1 - \cos \omega t \right)}
\end{aligned}
$$

である。

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
