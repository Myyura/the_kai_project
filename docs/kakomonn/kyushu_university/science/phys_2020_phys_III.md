---
comments: false
title: 九州大学 理学府 物理学専攻 2020年度 物理学 [III]
tags:
  - Kyushu-University
---
# 九州大学 理学府 物理学専攻 2020年度 物理学 \[III\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### \[A\]
#### (1)
$\hat{x}, \hat{p}$ の交換関係を使って、次のように計算できる：

$$
  \begin{aligned}
  \left[ \hat{a}, \hat{a}^\dagger \right]
  &= \frac{m \omega}{2 \hbar} \cdot \frac{-2i}{m \omega}
  \left[ \hat{x}, \hat{p} \right]
  \\
  &= 1
  \\
  \left[ \hat{N}, \hat{a} \right]
  &= \left[ \hat{a}^\dagger \hat{a}, \hat{a} \right]
  \\
  &= \hat{a}^\dagger \left[ \hat{a}, \hat{a} \right]
  + \left[ \hat{a}^\dagger, \hat{a} \right] \hat{a}
  \\
  &= - \hat{a}
  \\
  \left[ \hat{N}, \hat{a}^\dagger \right]
  &= \left[ \hat{a}^\dagger \hat{a}, \hat{a}^\dagger \right]
  \\
  &= \hat{a}^\dagger \left[ \hat{a}, \hat{a}^\dagger \right]
  + \left[ \hat{a}^\dagger, \hat{a}^\dagger \right] \hat{a}
  \\
  &= \hat{a}^\dagger
  \end{aligned}
$$

#### (2)
(1) で得た交換関係を使って、次のように計算できる：

$$
  \begin{aligned}
  \hat{N} \hat{a}^\dagger | n \rangle
  &= \left( \hat{a}^\dagger \hat{N} + \hat{a}^\dagger \right) | n \rangle
  \\
  &= \left( n + 1 \right) \hat{a}^\dagger | n \rangle
  \\
  \hat{N} \hat{a} | n \rangle
  &= \left( \hat{a} \hat{N} - \hat{a} \right) | n \rangle
  \\
  &= \left( n - 1 \right) \hat{a} | n \rangle
  \end{aligned}
$$

#### (3)
まず、

$$
\begin{aligned}
n
&= \langle n | \hat{N} | n \rangle
\\
&= \langle n | \hat{a}^\dagger \hat{a} | n \rangle
\end{aligned}
$$

であるが、
最後の式はベクトル $\hat{a} | n \rangle$ のノルムの2乗であるから非負であり、
したがって、 $n$ も非負である。

次に、整数でない非負の値 $\nu$ について
$-1 \lt \nu - k \lt 0$ を満たす自然数 $k$ が存在するので、
この $\nu$ が $\hat{N}$ の固有値であるとすると、
(2) の2番目の式より、
$\hat{a}^k | \nu \rangle$ は $\hat{N}$ の負の固有値 $\nu - k$
であることがわかるが、
これは $\hat{N}$ の固有値が非負であることと矛盾する。
したがって、 $\hat{N}$ の固有値は非負の整数でなければならない。

最後に、非負の整数 $n_1$ が $\hat{N}$ の固有値だとすると、
(2) の1番目の式より、 $n_1+1$ も $\hat{N}$ の固有値であることがわかり、
$0$ でない非負の整数 $n_2$ が $\hat{N}$ の固有値だとすると、
(2) の2番目の式より、 $n_2-1$ も $\hat{N}$ の固有値であることがわかるので、
結局、非負の整数はすべて $\hat{N}$ の固有値であることがわかる。

<p>
 <ul>
   <li><a href="https://www.amazon.co.jp/dp/406153209X/ref=nosim?tag=msscee0a-22">
     猪木・川合「量子力学 I」 6.7
   </a>
   </li>
   <li><a href="https://www.amazon.co.jp/dp/4000061399/ref=nosim?tag=msscee0a-22">
     砂川重信「量子力学」 2.9
   </a>
   </li>
 </ul>
</p>

#### (4)

$$
\begin{aligned}
\hat{x}
&= \sqrt{\frac{\hbar}{2 m \omega}} \left( \hat{a}^\dagger + \hat{a} \right)
\\
\hat{p}
&= i \sqrt{\frac{m \hbar \omega}{2}} \left( \hat{a}^\dagger - \hat{a} \right)
\\
\hat{x}^2
&= \frac{\hbar}{2 m \omega} \left( \hat{a}^\dagger \hat{a}^\dagger
+ \hat{a}^\dagger \hat{a} + \hat{a} \hat{a}^\dagger + \hat{a} \hat{a}
\right)
\\
&= \frac{\hbar}{2 m \omega} \left( 2 \hat{N} + 1
+ \hat{a}^\dagger \hat{a}^\dagger + \hat{a} \hat{a} \right)
\\
\hat{p}^2
&= - \frac{m \hbar \omega}{2} \left( \hat{a}^\dagger \hat{a}^\dagger
- \hat{a}^\dagger \hat{a} - \hat{a} \hat{a}^\dagger + \hat{a} \hat{a}
\right)
\\
&= \frac{m \hbar \omega}{2} \left( 2 \hat{N} + 1
- \hat{a}^\dagger \hat{a}^\dagger - \hat{a} \hat{a} \right)
\\
\langle n | \hat{x}^2 | n \rangle
&= \frac{\hbar}{2 m \omega} (2n+1)
\\
\langle n | \hat{p}^2 | n \rangle
&= \frac{m \hbar \omega}{2} (2n+1)
\\
\langle n | \hat{x}^2 | n \rangle
\langle n | \hat{p}^2 | n \rangle
&= \frac{\hbar^2}{4} (2n+1)^2
\end{aligned}
$$

### \[B\]