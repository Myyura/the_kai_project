---
comments: false
title: 京都大学 理学研究科 数学・数理解析専攻 2024年度 専門科目 [13]
tags:
  - Kyoto-University
---
# 京都大学 理学研究科 数学・数理解析専攻 2024年度 専門科目 \[13\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
以下の問に答えよ．

(i) 時間 $t \in \mathbb{R}$に依存する角振動数$\omega(t)>0$ を持つ単位質量の一次元調和振動子を考える．
古典論におけるハミルトニアンは $\mathcal{H}(t) = \frac{1}{2} (p^2 + \omega(t)^2 q^2)$, $(p, q) \in \mathbb{R}$ である．
ただし，$p$ は運動量，$q$ は位置を表す．ハミルトン正準方程式の古典解 $(p(t), q(t))$ および補助微分方程式

$$
\ddot{\xi}(t) + \omega(t)^2 \xi(t) = \frac{1}{\xi(t)^3}
$$

の実解 $\xi(t)$ が与えられたとき，

$$
\mathcal{I}(t) = \frac{1}{2} \bigg \{\Big(\xi(t) p(t) - \dot{\xi}(t) q(t) \Big)^2 + \bigg(\frac{q(t)}{\xi(t)} \bigg)^2 \bigg \} 
$$

は保存量，即ち $\dot{\mathcal{I}}(t) = 0$  であることを示せ．

(ii) これより前問の量子力学版を考えることにする．
$h=1, i=\sqrt{-1}$ とすれば，運動量演算子 $P$ および位置演算子 $Q$ は正準交換関係 $|Q, P|=i$ を満たす．ハミルトニアンは $H(t) = \frac{1}{2} (P^2 + \omega(t)^2 Q^2)$ と表せる．時間発展を記述するユニタリー演算子 $U(t)$ は

$$
\dot{U}(t) = -i H(t) U(t), \ \ U(0) = 1
$$

を満たす．そこでで $P(t) = U(t)^{\dagger}P(0)U(t), Q(t) = U(t)^{\dagger}Q(0)U(t), P(0) =P, Q(0) = Q$ とし，
前問の $\mathcal{I}(t)$ において $p(t)$ および $q(t)$ を各々 $P(t)$ および $Q(t)$ で置き換えて得られる演算子を $I(t)$ とする．今

$$
A_{\pm}(t) = \frac{1}{\sqrt{2}} \bigg\{\frac{Q(t)}{\xi(t)} \mp i \Big(\xi(t)P(t) - \dot{\xi}(t) Q(t) \Big) \bigg\}
$$

とすれば，交換関係 $[A_{-}(t), A_{+}(t)] = 1$ が成り立ち，$I(t) = A_{+}(t) A_{-}(t) + \frac{1}{2}$ と表せることを示せ．

(iii) $A_{\pm}(t)$ が

$$
\dot{A}_{\pm} (t) = \frac{\pm i}{\xi(t)^2} A_{\pm}(t)
$$

を満たすことを示すことにより，$\dot{I}(t) = 0$ を確かめよ．

## **Kai**
$\pm, \mp$ はすべて複合同順とする。

### (i)
ハミルトン正準方程式は

$$
\begin{aligned}
\dot{q}
&= \frac{\partial \mathcal{H}}{\partial p}
= p
,\\
\dot{p}
&= - \frac{\partial \mathcal{H}}{\partial q}
= - \omega^2 q
\end{aligned}
$$

である。
これと与えられた補助微分方程式とを使って、

$$
\begin{aligned}
\dot{\mathcal{I}}(t)
&= \left( \xi(t) p(t) - \dot{\xi}(t) q(t) \right)
\left( \dot{\xi}(t) p(t) + \xi(t) \dot{p}(t)
- \ddot{\xi}(t) q(t) - \dot{\xi}(t) \dot{q}(t) \right)
\\
& \ \ \ \ + \frac{q(t)}{\xi(t)}
\frac{\dot{q}(t) \xi(t) - q(t) \dot{\xi}(t)}{\xi(t)^2}
\\
&= \left( \xi(t) p(t) - \dot{\xi}(t) q(t) \right)
\left( \dot{\xi}(t) p(t) - \omega(t)^2 \xi(t) q(t)
- \left( \frac{1}{\xi(t)^3} - \omega(t)^2 \xi(t) \right) q(t)
- \dot{\xi}(t) p(t) \right)
\\
& \ \ \ \ + \frac{q(t)}{\xi(t)^3}
\left( p(t) \xi(t) - q(t) \dot{\xi}(t) \right)
\\
&= \left( \xi(t) p(t) - \dot{\xi}(t) q(t) \right) \frac{-q(t)}{\xi(t)^3}
+ \frac{q(t)}{\xi(t)^3}
\left( p(t) \xi(t) - q(t) \dot{\xi}(t) \right)
\\
&= 0
\end{aligned}
$$

がわかる。

### (ii)
$[Q,P]=i, \ U^\dagger(t)U(t) = U(t)U^\dagger(t) = 1$ より、

$$
\begin{aligned}
\left[ Q(t), P(t) \right]
&= U^\dagger(t) Q U(t) U^\dagger(t) P U(t)
- U^\dagger(t) P U(t) U^\dagger(t) Q U(t)
\\
&= U^\dagger(t) Q P U(t)
- U^\dagger(t) P Q U(t)
\\
&= U^\dagger(t) [Q,P] P U(t)
\\
&= i
\end{aligned}
$$

であり、

$$
\begin{aligned}
A_\pm(t) A_\mp(t)
&= \frac{1}{2} \left\{
\frac{Q(t)}{\xi(t)} \mp i \left( \xi(t)P(t) - \dot{\xi}(t)Q(t) \right)
\right\} \left\{
\frac{Q(t)}{\xi(t)} \pm i \left( \xi(t)P(t) - \dot{\xi}(t)Q(t) \right)
\right\}
\\
&= \frac{1}{2} \left\{
\frac{Q(t)^2}{\xi(t)^2} + \left( \xi(t)P(t) - \dot{\xi}(t)Q(t) \right)^2
\pm i \left( \xi(t)Q(t)P(t) - \dot{\xi}(t)Q(t)^2 \right)
\mp i \left( \xi(t)P(t)Q(t) - \dot{\xi}(t)Q(t)^2 \right)
\right\}
\\
&= I(t) \mp \frac{1}{2}
\end{aligned}
$$

であるから、

$$
\begin{aligned}
\left[ A_-(t), A_+(t) \right]
&= \left( I(t) + \frac{1}{2} \right)
- \left( I(t) - \frac{1}{2} \right)
\\
&= 1
,\\
I(t)
&= A_+(t) A_-(t) + \frac{1}{2}
\end{aligned}
$$

がわかる。

### (iii)

$$
\begin{aligned}
\dot{U}^\dagger(t)
&= i U^\dagger(t) H^\dagger(t)
\\
&= i U^\dagger(t) H(t)
,\\
\left[ H(t), Q \right]
&= \frac{1}{2} \left[ P^2, Q \right]
\\
&= \frac{1}{2} \left( P \left[ P, Q \right] + \left[ P, Q \right] P \right)
\\
&= -iP
,\\
\left[ H(t), P \right]
&= \frac{\omega(t)^2}{2} \left[ Q^2, P \right]
\\
&= \frac{\omega(t)^2}{2}
\left( Q \left[ Q, P \right] + \left[ Q, P \right] Q \right)
\\
&= i \omega(t)^2 Q
,\\
\dot{Q}(t)
&= \dot{U}^\dagger(t) Q U(t) + U^\dagger(t) Q \dot{U}(t)
\\
&= i U^\dagger(t) H(t) Q U(t) - i U^\dagger(t) Q H(t) U(t)
\\
&= P(t)
,\\
\dot{P}(t)
&= \dot{U}^\dagger(t) P U(t) + U^\dagger(t) P \dot{U}(t)
\\
&= i U^\dagger(t) H(t) P U(t) - i U^\dagger(t) P H(t) U(t)
\\
&= - \omega(t)^2 Q(t)
,\\
A_\pm(t)
&= \frac{1}{\sqrt{2}} \left\{
\frac{\dot{Q}(t) \xi(t) - Q(t) \dot{\xi}(t)}{\xi(t)^2}
\mp i \left( \dot{\xi}(t) P(t) + \xi(t) \dot{P}(t)
- \ddot{\xi}(t) Q(t) - \dot{\xi}(t) \dot{Q}(t) \right)
\right\}
\\
&= \frac{1}{\sqrt{2}} \left\{
\frac{P(t) \xi(t) - Q(t) \dot{\xi}(t)}{\xi(t)^2}
\mp i \left( \dot{\xi}(t) P(t) - \omega(t)^2 \xi(t) Q(t)
+ \left( \omega(t)^2 \xi(t) - \frac{1}{\xi(t)^3} \right) Q(t)
- \dot{\xi}(t) P(t) \right)
\right\}
\\
&= \frac{\pm i}{\sqrt{2} \xi(t)^2}
\left( \frac{Q(t)}{\xi(t)}
\mp i \left( P(t) \xi(t) - Q(t) \dot{\xi}(t) \right) \right)
\\
&= \frac{\pm i}{\xi(t)^2} A_\pm(t)
,\\
\dot{I}(t)
&= \dot{A}_+(t) A_-(t) + A_+(t) \dot{A}_-(t)
\\
&= \frac{i}{\xi(t)^2} A_+(t) A_-(t) - \frac{i}{\xi(t)^2} A_+(t) A_-(t)
\\
&= 0
\end{aligned}
$$
