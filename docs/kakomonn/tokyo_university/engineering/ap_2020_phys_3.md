---
comments: false
description: 東京大学 大学院 工学系研究科 物理工学専攻 2020年度 物理学 第3問
keywords: Tokyo-University, 2020
---

## **Source**
東京大学 大学院 工学系研究科 物理工学専攻 2020年度 物理学 第3問

By: Miyake

## **Description**

## **Kai**
### \[1\]
まず、1粒子について考えると、空間積分は体積 $V$ となる。
また、運動量に関する積分は、1成分について、次のように計算できる：

$$
\begin{aligned}
\int_{-\infty}^\infty e^{- \beta \frac{p^2}{2m}} dp
= \sqrt{\frac{2 \pi m}{\beta}}
\end{aligned}
$$

よって、全体の分配関数は、

$$
\begin{aligned}
Z^{(g)}(V, \beta, N)
&= \frac{1}{N!} \frac{V^N}{(2 \pi \hbar)^{3N}}
\left( \frac{2 \pi m}{\beta} \right)^{3N/2}
\\
&= \frac{V^N}{N!}
\left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3N/2}
\end{aligned}
$$

となる。

### \[2\]

$$
\begin{aligned}
Z_G^{(g)}(V, \beta, \mu)
&=
\sum_{N=0}^\infty Z^{(g)}(V, \beta, N) e^{\beta \mu N}
\\
&=
\sum_{N=0}^\infty
\frac{V^N}{N!} \left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3N/2}
e^{\beta \mu N}
\\
&=
\sum_{N=0}^\infty \frac{1}{N!} \left[
V \left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3/2} e^{\beta \mu}
\right]^N
\\
&=
\exp \left[
V \left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3/2} e^{\beta \mu}
\right]
\end{aligned}
$$

### \[3\]

$$
\begin{aligned}
P(\beta, \mu)
&=
\frac{1}{\beta} \frac{\partial}{\partial V} \log Z_G^{(g)}(V, \beta, \mu)
\\
&=
\frac{1}{\beta} \frac{\partial}{\partial V}
\left[
V \left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3/2} e^{\beta \mu}
\right]
\\
&=
\frac{1}{\beta}
\left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3/2} e^{\beta \mu}
\\
&=
\left( \frac{m}{2 \pi \hbar^2} \right)^{3/2}
\frac{e^{\beta \mu}}{\beta^{5/2}}
\end{aligned}
$$

### \[4\]

$$
\begin{aligned}
\xi_G^{(a)} (\beta, \mu)
&=
e^{-\beta \cdot 0} \cdot e^{\beta \mu \cdot 0}
+ e^{-\beta \cdot (-\varepsilon)} \cdot e^{\beta \mu \cdot 1}
\\
&=
1 + e^{\beta (\mu + \varepsilon)}
\end{aligned}
$$

### \[5\]
吸着格子全体の大分配関数は、

$$
\begin{aligned}
\Xi_G^{(a)} (\beta, \mu, N_a)
&=
\left( \xi_G^{(a)} (\beta, \mu) \right)^{N_a}
\\
&=
\left( 1 + e^{\beta (\mu + \varepsilon)} \right)^{N_a}
\end{aligned}
$$

であり、グランドポテンシャルは、

$$
\begin{aligned}
\Omega (\beta, \mu, N_a)
&= - \frac{1}{\beta} \log \Xi_G^{(a)} (\beta, \mu, N_a)
\\
&=
- \frac{N_a}{\beta}
\log \left( 1 + e^{\beta (\mu + \varepsilon)} \right)
\end{aligned}
$$

であり、よって、

$$
\begin{aligned}
N_a n_a
&= - \frac{\partial \Omega (\beta, \mu, N_a)}{\partial \mu}
\\
&=
\frac{N_a}{\beta}
\frac{e^{\beta (\mu + \varepsilon)} \cdot \beta}
{1 + e^{\beta (\mu + \varepsilon)} }
\\
&=
N_a \frac{1}{1 + e^{- \beta (\mu + \varepsilon)} }
\\
\therefore \ \ \ \ 
n_a
&=
\frac{1}{1 + e^{- \beta (\mu + \varepsilon)} }
\end{aligned}
$$

である。

### \[6\]
\[3\] より、

$$
\begin{aligned}
e^{- \beta \mu}
=
\left( \frac{m}{2 \pi \hbar^2} \right)^{3/2}
\frac{1}{\beta^{5/2} P}
\end{aligned}
$$

であるから、これを \[5\] に代入して、

$$
\begin{aligned}
n_a
&=
\frac{1}{1 + 
\left( \frac{m}{2 \pi \hbar^2} \right)^{3/2}
\frac{e^{- \beta \varepsilon}}{\beta^{5/2} P}
}
\end{aligned}
$$

を得る。

### \[7\]