---
comments: false
description: 東京大学 大学院 工学系研究科 2021年度 数学2
keywords: Tokyo-University, 2021
---

## **Source**
[東京大学 大学院 工学系研究科 2021年度 数学2 (主に線形代数)](https://www.t.u-tokyo.ac.jp/soe/admission/general-past)

## **Description**

## **Kai**
### I.
#### 1.
$A$ の固有値を $\lambda$ とすると、

$$
\begin{align}
0
&= \det \begin{pmatrix} - \lambda & 3 & 0 \\ -3 & -\lambda & 4 \\ 0 & -4 & -\lambda \end{pmatrix}
\\
&= - \lambda ( \lambda^2 + 25)
\\
\therefore \ \ 
\lambda &= 0, 5i, -5i
\end{align}
$$

を得る。

#### 2.
ケーリー-ハミルトンの定理より、$A^3 + 25A = 0$ が成り立つ。

つまり、 $a=0,b=25,c=0$ である。

#### 3.

$$
\begin{align}
A^3 &= -25A
, \\
A^5 &= -25 A^3 = (-25)^2 A
, \\
&\cdots
\end{align}
$$

から、

$$
\begin{align}
A^{2n+1} = (-25)^n A = (-1)^n 5^{2n} A
\end{align}
$$

がわかる。

#### 4.
上の 3. から、$A^{2n+2} = (-1)^n 5^{2n} A^2$もわかる。

そこで、

$$
\begin{align}
\exp (tA)
&= \sum_{k=0}^\infty \frac{t^k}{k!} A^k
\\
&= I + \sum_{n=0}^\infty \frac{t^{2n+1}}{(2n+1)!} A^{2n+1} + \sum_{n=0}^\infty \frac{t^{2n+2}}{(2n+2)!} A^{2+2}
\\
&= I + A \sum_{n=0}^\infty \frac{(-1)^n 5^{2n} t^{2n+1}}{(2n+1)!} + A^2 \sum_{n=0}^\infty \frac{(-1)^n 5^{2n}t^{2n+2}}{(2n+2)!}
\\
&= I + A \frac{1}{5} \sum_{n=0}^\infty \frac{(-1)^n (5t)^{2n+1}}{(2n+1)!}
- A^2 \frac{1}{25} \sum_{n=1}^\infty \frac{(-1)^n (5t)^{2n}}{(2n)!}
\\
&= I + \frac{\sin (5t)}{5} A - \frac{\cos (5t) - 1}{25} A^2
\end{align}
$$

と計算できるので、

$$
\begin{align}
p = \frac{1 - \cos (5t)}{25}
, \ \ 
q = \frac{\sin (5t)}{5}
, \ \ 
r = 1
\end{align}
$$

がわかる。

### II.
#### 1.

$$
\begin{align}
P_A(n+1) &= P_A(n) (1-\alpha) + P_B(n) \beta
\\
P_B(n+1) &= P_A(n) \alpha + P_B(n) (1-\beta)
\end{align}
$$

なので、

$$
\begin{align}
M = \begin{pmatrix} 1-\alpha & \beta \\ \alpha & 1-\beta \end{pmatrix}
\end{align}
$$

である。

#### 2.
$M$ の固有値は $1, 1-\alpha-\beta$ であり、それぞれに対応する固有ベクトルは、例えば、

$$
\begin{align}
\begin{pmatrix} \beta \\ \alpha \end{pmatrix}
, \ \ 
\begin{pmatrix} 1 \\ -1 \end{pmatrix}
\end{align}
$$

である。

#### 3.
A,Bである確率が一定値に収束するとすると、それは $M$ の固有ベクトルであり、確率は負にならないことを考慮して、

$$
\begin{align}
\lim_{k \to \infty} P_A(k) = \frac{\beta}{\alpha+\beta}
, \ \ 
\lim_{k \to \infty} P_B(k) = \frac{\alpha}{\alpha+\beta}
\end{align}
$$

であることがわかる。

#### 4.

$$
\begin{align}
P_A(\infty) = \lim_{k \to \infty} P_A(k) = \frac{\beta}{\alpha+\beta}
\end{align}
$$

と書くことにする。

$$
\begin{align}
R_A(n+1)
&= P_A(n+1) - P_A(\infty)
\\
&= P_A(n) (1-\alpha) + P_B(n) \beta - P_A(\infty)
\\
&= P_A(n) (1-\alpha) + \left(1 - P_A(n) \right) \beta - P_A(\infty)
\\
&= (1-\alpha-\beta) P_A(n) + \beta - P_A(\infty)
\\
R_A(n) &= P_A(n) - P_A(\infty)
\end{align}
$$

であるから、 $P_A(n)$ を消去して、

$$
\begin{align}
R_A(n+1)
&= (1-\alpha-\beta) \left( R_A(n) + P_A(\infty) \right) + \beta - P_A(\infty)
\\
&= (1-\alpha-\beta) R_A(n)
\end{align}
$$

を得る。

### III.

$$
\begin{align}
c_1 (\boldsymbol{a}_1 + \boldsymbol{a}_2) +
c_2 (\boldsymbol{a}_2 + \boldsymbol{a}_3) + \cdots +
c_m (\boldsymbol{a}_m + \boldsymbol{a}_1)
= \boldsymbol{0}
\end{align}
$$

が成り立つとしたとき $c_1 = c_2 = \cdots = c_m = 0$
が導かれるかを検討する。

上の式を整理すると、

$$
\begin{align}
(c_1+c_m) \boldsymbol{a}_1 +
(c_1+c_2) \boldsymbol{a}_2 +
(c_2+c_3) \boldsymbol{a}_3 + \cdots +
(c_{m-1}+c_m) \boldsymbol{a}_m
= \boldsymbol{0}
\end{align}
$$

となり、
$\boldsymbol{a}_1, \boldsymbol{a}_2, \cdots, \boldsymbol{a}_m$
が1次独立であることから、

$$
\begin{align}
c_1+c_m = c_1+c_2 = c_2+c_3 = \cdots = c_{m-1}+c_m = 0
\end{align}
$$

よって、

$$
\begin{align}
c_2 &= c_4 = \cdots = -c_1
, \\
c_3 &= c_5 = \cdots =  c_1
, \\
c_m &= -c_1
\end{align}
$$

を得る。したがって、 $m$ が奇数のときは
$c_1 = c_2 = \cdots = c_m = 0$ が導かれるので

$$
\boldsymbol{a}_1 + \boldsymbol{a}_2,
\boldsymbol{a}_2 + \boldsymbol{a}_3, \cdots,
\boldsymbol{a}_m + \boldsymbol{a}_1
$$

は1次独立となる。
$m$ が偶数のときはそうは言えない。
