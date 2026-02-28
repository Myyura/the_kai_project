---
sidebar_label: "2021年8月実施 専門基礎A [A-2]"
tags:
  - Kyoto-University
  - Differential-Equation
  - Complex-Analysis
  - Fourier-Analysis
---
# 京都大学 情報学研究科 通信情報システム専攻 2021年8月実施 専門基礎A \[A-2\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
(1) 関数 $f(t)$ のフーリエ余弦変換は次式で定義される。 

$$
F(\omega) = \int_0^{\infty} f(t) \cos \omega t \text{ d}t
$$

また、その逆変換は次式で与えられる。

$$
f(t) = \frac{2}{\pi} \int_0^{\infty} F(\omega) \cos \omega t \text{ d}\omega
$$

- (a) 次の関数 $f(t)$ のフーリエ余弦変換を求めよ。 

$$
f(t) = e^{-mt}\ \ \ \ \ (m > 0)
$$

- (b) 問(a)の結果を用いて次の等式が成り立つことを示せ。

$$
\int_0^{\infty} \frac{\cos pv}{v^2 + \beta^2} \text{d}v = \frac{\pi}{2\beta} e^{-p\beta} \ \ \ \ \ \ (p>0, \beta>0)
$$

(2) 次の微分方程式の一般解を求めよ。

$$
\frac{\text{d}^2 y}{\text{d} x^2} - 2x \frac{dy}{dx} + (x^2 - 5)y = xe^{\frac{x^2}{2}}
$$

(3) 留数定理を用いて次の積分 $I$ を求めよ。

$$
I = \int_0^{2 \pi} \frac{1}{a + \sin \theta} \text{d}\theta \ \ \ \ \ (a > 1)
$$

## **Kai**
### (1)
#### (a)
与えられた関数 $f(t) = e^{-mt} \ (m \gt 0)$ の余弦フーリエ変換を $F(\omega)$ とすると、

$$
\begin{aligned}
F(\omega)
&= \int_0^\infty e^{-mt} \cos \omega t \ dt
\\
&= - \frac{1}{m} \left[ e^{-mt} \cos \omega t \right]_0^\infty - \frac{\omega}{m} \int_0^\infty e^{-mt} \sin \omega t \ dt
\\
&= \frac{1}{m} + \frac{\omega}{m^2} \left[ e^{-mt} \sin \omega t \right]_0^\infty
- \frac{\omega^2}{m^2} \int_0^\infty e^{-mt} \cos \omega t \ dt
\\
&= \frac{1}{m} - \frac{\omega^2}{m^2} F(\omega)
\\
\therefore \ \ 
F(\omega) &= \frac{m}{\omega^2 + m^2}
\end{aligned}
$$

を得る。

#### (b)
(a) の結果を与えられた逆変換の式に代入すると、

$$
\begin{aligned}
e^{-mt} = \frac{2}{\pi} \int_0^\infty \frac{m}{\omega^2 + m^2} \cos \omega t \ d \omega
\end{aligned}
$$

であり、 $t, \omega, m$ をそれぞれ $p, v, \beta$ と書けば、示すべき等式が得られる。

### (2)
$y(x)=u(x) e^{x^2/2}$ として、与えられた微分方程式に代入して整理すると、

$$
\begin{aligned}
\frac{d^2u}{dx^2} - 4u = x
\end{aligned}
$$

となり、さらに、 $v(x)=4u(x)+x$ として上の微分方程式に代入して整理すると、

$$
\begin{aligned}
\frac{d^2 v}{dx^2} = 4v
\end{aligned}
$$

となるので、一般解として、

$$
\begin{aligned}
v(x) &= C_1 e^{2x} + C_2 e^{-2x}
\\
\therefore \ \ 
u(x) &= c_1 e^{2x} + c_2 e^{-2x} - \frac{1}{4} x
\\
\therefore \ \ 
y(x) &= \left( c_1 e^{2x} + c_2 e^{-2x} - \frac{1}{4} x \right) e^{x^2/2}
\end{aligned}
$$

を得る。
ここで、 $C_1, C_2, c_1, c_2$ は任意定数である。

### (3)
虚数単位を $i$ として、 $z=e^{i \theta}$ とすると、

$$
\begin{aligned}
dz &= i e^{i \theta} d \theta = iz d \theta
\\
\sin \theta &= \frac{1}{2i} \left( z + \frac{1}{z} \right)
\end{aligned}
$$

である。

複素平面上で、原点を中心とする半径 $1$ の円を反時計回りに回る経路を $C$ とすると、

$$
\begin{aligned}
I
&= \int_0^{2 \pi} \frac{1}{a + \sin \theta} d \theta
\\
&= \oint_C \frac{1}{a + \frac{1}{2i} \left( z + \frac{1}{z} \right)} \frac{dz}{iz}
\\
&= \oint_C \frac{2}{z^2 + 2iaz - 1} dz
\end{aligned}
$$

となる。

被積分関数は $z = \left( \pm \sqrt{a^2 - 1} - a \right) i$ に1位の極をもつが、
$C$ の内部にあるのは、 $z = \left( \sqrt{a^2 - 1} - a \right) i$ のみである。
このときの留数は、

$$
\begin{aligned}
&\lim_{z \to \left( \sqrt{a^2 - 1} - a \right) i}
\left( z - \left( \sqrt{a^2 - 1} - a \right) i \right) \cdot \frac{2}{z^2 + 2iaz - 1}
\\
= &\lim_{z \to \left( \sqrt{a^2 - 1} - a \right) i}
\frac{2}{z + \left( \sqrt{a^2 - 1} + a \right) i}
\\
= &\frac{1}{i \sqrt{a^2 - 1}}
\end{aligned}
$$

なので、留数定理により、

$$
\begin{aligned}
I
&= 2 \pi i \cdot \frac{1}{i \sqrt{a^2 - 1}}
\\
&= \frac{2 \pi}{\sqrt{a^2 - 1}}
\end{aligned}
$$

を得る。