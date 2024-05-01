---
comments: false
description: 東京大学 大学院 理学系研究科 物理学専攻 2020年度 物理学 第2問
keywords: Tokyo-University, 2020-8
---

## Source
東京大学 大学院 理学系研究科 物理学専攻 2020年度 物理学 第2問

## Description

## Kai
### 1.

$$
\begin{align}
\int_{- \infty}^\infty dp e^{- \frac{\beta}{2m} p^2}
= \sqrt{\frac{2 \pi m}{\beta}}
= \sqrt{2 \pi m k_B T}
\end{align}
$$

であるから、

$$
\begin{align}
Z(T,V,N) = \frac{1}{h^{3N} N!} V^N \left(2 \pi m k_B T \right)^{3N/2}
\end{align}
$$

を得る。

よって、ヘルムホルツの自由エネルギー $F(T,V,N)$ は次のように求められる：

$$
\begin{align}
F(T,V,N)
&= - k_B T \ln Z(T,V,N)
\\
&= - k_B T \left( N \ln V - \ln N!
+ N \ln \frac{(2 \pi m k_B T)^{3/2}}{h^3} \right)
\\
&\approx - k_B T \left( N \ln V - N - N \ln N
+ N \ln \frac{(2 \pi m k_B T)^{3/2}}{h^3} \right)
\\
&= - k_B T N \left( \frac{3}{2} \ln T +  \ln \frac{V}{N}
+ \ln \frac{(2 \pi m k_B)^{3/2} e}{h^3} \right)
\end{align}
$$

そこで、 $dF = -S dT - P dV + \mu N$ を考慮して、
圧力 $P(T,V,N)$ は次のように求められる：

$$
\begin{align}
P(T,V,N)
&= - \frac{\partial F(T,V,N)}{\partial V}
\\
&= \frac{k_B T N}{V}
\end{align}
$$

### 2.
因子 $N!$ がないと、ヘルムホルツの自由エネルギーが示量性を満たさなくなる。
すなわち、

$$
\begin{align}
F(T, \lambda V, \lambda N) = \lambda F(T,V,N)
\end{align}
$$

が成り立たなくなる。

### 3.

$$
\begin{align}
S(T,V,N)
&= - \frac{\partial F(T,V,N)}{\partial T}
\\
&= k_B N \left( \frac{3}{2} \ln T +  \ln \frac{V}{N}
+ \ln \frac{(2 \pi m k_B)^{3/2} e}{h^3} \right)
+ k_B T N \cdot \frac{3}{2} \frac{1}{T}
\\
&= k_B N \left( \frac{3}{2} \ln T +  \ln \frac{V}{N}
+ \ln \frac{(2 \pi m k_B)^{3/2} e^{5/2}}{h^3} \right)
\end{align}
$$

$T \to 0$ のとき $S \to - \infty$ となる。

### 4.

$$
\begin{align}
C_V(T,V,N)
&= T \frac{\partial S(T,V,N)}{\partial T}
\\
&= T \cdot k_B N \cdot \frac{3}{2} \frac{1}{T}
\\
&= \frac{3}{2} k_B N
\end{align}
$$

### 5.

周期的境界条件から、 $e^{i k_x L} = 1$ なので、整数 $n_x$ を使って、

$$
\begin{align}
k_x L = 2 \pi n_x
\ \ \ \ 
\therefore \ \ 
k_x = \frac{2 \pi n_x}{L}
\end{align}
$$

同様に、整数 $n_y, n_z$ を使って、

$$
\begin{align}
k_y = \frac{2 \pi n_y}{L}
, \ \ \ \ 
k_z = \frac{2 \pi n_z}{L}
\end{align}
$$

### 6.
グランドポテンシャル $\Omega (T, V, \mu)$ は、次のようになる：

$$
\begin{align}
\Omega(T,V, \mu)
&= - k_B T \ln \Xi (T, V, \mu)
\\
&= - k_B T \sum_k \ln
\left( 1 + e^{ - \beta (\varepsilon_k - \mu)} \right)
\end{align}
$$

よって、

$$
\begin{align}
\bar{N}
&= - \frac{\partial \Omega (T, V, \mu)}{\partial \mu}
\\
&= k_B T \sum_k 
\frac{ e^{ - \beta (\varepsilon_k - \mu)} \cdot \beta }
{ 1 + e^{ - \beta (\varepsilon_k - \mu)} }
\\
&= \sum_k
\frac{1}{ e^{ \beta (\varepsilon_k - \mu)} + 1 }
\\
&= \sum_k f(\varepsilon_k)
\end{align}
$$

### 7.
与えられた近似の下で積分を実行すると、次のようになる：

$$
\begin{align}
N
&\approx \iiint e^{ - \beta (\varepsilon_k - \mu) }
\left( \frac{L}{2 \pi} \right)^3 dk_x dk_y dk_z
\\
&= \frac{V}{(2 \pi)^3} e^{\beta \mu}
\int_{- \infty}^\infty e^{- \frac{\beta \hbar^2}{2m} k_x^2} dk_x
\int_{- \infty}^\infty e^{- \frac{\beta \hbar^2}{2m} k_y^2} dk_y
\int_{- \infty}^\infty e^{- \frac{\beta \hbar^2}{2m} k_z^2} dk_z
\\
&= \frac{V}{(2 \pi)^3} e^{\beta \mu}
\left( \frac{2 \pi m }{\beta \hbar^2} \right)^{3/2}
\\
&= V e^{\beta \mu}
\left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3/2}
\end{align}
$$

これを $\mu$ について解く：

$$
\begin{align}
e^{\beta \mu}
&= \frac{N}{V}
\left( \frac{2 \pi \hbar^2 \beta}{m} \right)^{3/2}
\\
\therefore \ \ 
\mu
&= \frac{1}{\beta} \ln \left[ \frac{N}{V}
\left( \frac{2 \pi \hbar^2 \beta}{m} \right)^{3/2} \right]
\\
&= k_B T \ln \left[ \frac{N}{V}
\left( \frac{2 \pi \hbar^2}{m k_B T} \right)^{3/2} \right]
\end{align}
$$

### 8.

### 9.