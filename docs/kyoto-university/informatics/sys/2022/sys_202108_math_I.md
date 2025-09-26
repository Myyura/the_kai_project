---
sidebar_label: "2021年8月実施 数学【I】"
tags:
  - Kyoto-University
  - Linear-Algebra
---
# 京都大学 情報学研究科 システム科学専攻 2021年8月実施 数学【I】

## **Author**
[AKIRA](https://www.xiaohongshu.com/explore/688045b4000000002203eeee?xsec_token=ABD2nmTyzV9BsHCYcB91Nc8s2vuU_pZXeBKIkJXwTSCp4=), 祭音Myyura

## **Description**
### 問1
次の漸化式を満たす実数の数列 $\{x_n\} \ (n = 0, 1, 2, ...)$ について、以下の設問に答え
よ.なお, $a\ (\neq0)$ は実数である。

$$
x_{n+3} = 2ax_{n+2} + a^2x_{n+1}-2a^3x_n
$$

(i) この数列について、次式が成り立つ行列 $A$ を求めよ。

$$
\begin{bmatrix}
  x_{n+1} \\ x_{n+2} \\ x_{n+3}
\end{bmatrix}
=A
\begin{bmatrix}
  x_{n} \\ x_{n+1} \\ x_{n+2}
\end{bmatrix}
$$

(ii) 行列 $A$ の固有値と固有ペクトルをすべて求めよ。

(iii) 任意の $x_0, x_1, x_2$ に対して数列 $\{x_n\}$ が収束するとき、実数 $a$ が満たすべき必要十分条件を求めよ。

(iv) $a = \frac{1}{2}$ のとき、次式で与えられる $A^{\infty}$ を求めよ。

$$
A^{\infty} = \lim_{n \to \infty} A^n
$$

### 問2
$\mathbb{R}$ は実数全体からなる集合, $e$ はネイピア数(自然対数の底)とする.
$a \in \mathbb{R}$ についての高々2次の実係数多項式の集合 $V$ は $\mathbb{R}$ 上のベクトル空間とみなせる。
$x \in \mathbb{R}$ についての二つの連続関数 $f(x), g(x)$ に対する内積を

$$
\langle f,g \rangle = \int_0^1 f(x)g(x)\ dx
$$

で定めると、$V$ は上記の内積について内積空間となる。以下の設問に答えよ。

(i) 任意の $f(x) \in V$ と $g(x) \in V$ について、コーシー・シュワルツの不等式

$$
\langle f,g \rangle^2 \leq \langle f,f \rangle \langle g,g \rangle
$$

が成り立つことを示せ。

(ii) $V$ の基底 $\{1, \sqrt{3}x, \sqrt{5}x^2\}$ が正規直交基底をなすか否かを、理由とともに示せ。

(iii) Vの基底 $\{1, x,x^2\}$ は正規直交基底をなさない、グラム・シュミットの直交化法により、正規直交基底を構成せよ。

(iv) $e^x \ (x \in \mathbb{R})$ を多項式 $h(x) \in V$ を用いて、

$$
\int_0^1 (e^x - h(x))^2 dx
$$

が最小となるように近似したい。(iii) で求めた正規直交基底を用いて、$h(x)$ を求めよ。


## **Kai**
### 問1
#### (i)

$$
A = \begin{bmatrix}
  0 & 1 & 0 \\ 0 & 0 & 1 \\ -2a^3 & a^2 &2a
\end{bmatrix}
$$

#### (ii)

$$
|A - \lambda I| = (a - \lambda)(a + \lambda)(\lambda - 2a)
$$

$$
\lambda_1 = a, p_1 = \begin{bmatrix} 1 \\ a \\ a^2 \end{bmatrix}
$$

$$
\lambda_2 = -a, p_2 = \begin{bmatrix} 1 \\ -a \\ a^2 \end{bmatrix}
$$

$$
\lambda_3 = 2a, p_3 = \begin{bmatrix} 1 \\ 2a \\ 4a^2 \end{bmatrix}
$$

#### (iii)

$$
P = \begin{bmatrix}
  1 & 1 & 1 \\
  a & -a & 2a \\
  a^2 & a^2 & 4a^2
\end{bmatrix},
\ 
A = P\begin{bmatrix}
  a & 0 & 0 \\
  0 & -a & 0 \\
  0 & 0 & 2a
\end{bmatrix} P^{-1},
\ 
A^n = P\begin{bmatrix}
  a^n & 0 & 0 \\
  0 & (-a)^n & 0 \\
  0 & 0 & (2a)^n
\end{bmatrix} P^{-1}
$$

(i) より、$A = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ -2a^3 & a^2 &2a \end{bmatrix}$ が成り立つから、任意の $x_0, x_1, x_2$ に対して数列 $\{x_n\}$ が収束するとき、実数 $a$ が満たすべき必要十分条件は

$$
\begin{cases}
  |a| \leq 1 \\
  |2a| \leq 1 \\
  a \neq \pm 1 \\
  2a \neq -1
\end{cases}
$$

即ち、$-1/2 < a \leq 1/2$。

#### (iv)
$a = \frac{1}{2}$ のとき、

$$
A^{\infty} = P
\begin{bmatrix}
  0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1
\end{bmatrix}
P^{-1},\ 
P^{-1} = \begin{bmatrix}
  1 & \frac{1}{2a} & -\frac{1}{2a^2} \\
  \frac{1}{3} & -\frac{1}{2a} & \frac{1}{6a^2} \\
  -\frac{1}{3} & 0 & \frac{1}{3a^2}
\end{bmatrix}
$$

従って、

$$
\begin{aligned}
A^{\infty} &= \begin{bmatrix}
  0 & 0 & 1 \\ 0 & 0 & 2a \\ 0 & 0 & 4a^2
\end{bmatrix}
\begin{bmatrix}
  1 & \frac{1}{2a} & -\frac{1}{2a^2} \\
  \frac{1}{3} & -\frac{1}{2a} & \frac{1}{6a^2} \\
  -\frac{1}{3} & 0 & \frac{1}{3a^2}
\end{bmatrix}
=
\begin{bmatrix}
  -\frac{1}{3} & 0 & \frac{1}{3a^2} \\
  -\frac{2a}{3} & 0 & \frac{2}{3a} \\
  -\frac{4a^2}{3} & 0 & \frac{4}{3}
\end{bmatrix} \\
&= \begin{bmatrix}
  -\frac{1}{3} & 0 & \frac{4}{3} \\
  -\frac{1}{3} & 0 & \frac{4}{3} \\
  -\frac{1}{3} & 0 & \frac{4}{3}
\end{bmatrix}
\end{aligned}
$$

### 問2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_math_I_p2.jpg" width="700" alt=""/>
</figure>
