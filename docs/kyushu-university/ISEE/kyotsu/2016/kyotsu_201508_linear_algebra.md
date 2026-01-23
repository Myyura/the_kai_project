---
sidebar_label: "2015年8月実施 線形代数"
tags:
  - Kyushu-University
  - Linear-Algebra
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2015年8月実施 線形代数

## **Author**
Zero

## **Description**
任意の行列 $A$ を引数に取り行列を返す関数 $f(A) = \frac{1}{\sqrt{2}}\begin{pmatrix}A & A \\ A & -A\end{pmatrix}$ について　以下の各問に答えよ。

(1) $A$ が直交行列のとき、$f(A)$ も直交行列となることを示せ。

(2) $A_0$ を $1 \times 1$ 行列 $A_0 = (1)$ とし,任意の整数 $n \ge 1$ に対し, 行列 $A_n$ を $A_n = f(A_{n-1})$ と定義する。このとき, 各成分が $1$ の $2^n$ 次元行ベクトル $\boldsymbol{1} = \{1,1,\dots,1\}$ と行列 $A_n$ の積 $\boldsymbol{1}A_n$ を求めよ。

(3) $\{\boldsymbol{v}_1,\boldsymbol{v}_2,\dots,\boldsymbol{v}_d\}$を $A$ の列空間 ( $A$ の列ベクトルが張る部分空間 ) の基底とする。このとき,

$$
\bigg\{\begin{pmatrix}\boldsymbol{v}_1\\\boldsymbol{v}_1\end{pmatrix},\dots,\begin{pmatrix}\boldsymbol{v}_d\\\boldsymbol{v}_d\end{pmatrix},\begin{pmatrix}\boldsymbol{v}_1\\-\boldsymbol{v}_1\end{pmatrix},\dots,\begin{pmatrix}\boldsymbol{v}_d\\-\boldsymbol{v}_d\end{pmatrix}\bigg\}
$$

が $f(A)$ の列空間の基底となることを示せ。

## **Kai** 
### (1)
$f(A)$ が直交行列 $\Leftrightarrow$ $(f(A))^{-1} = (f(A))^{-1}$ を示す

$$
(f(A))^{-1} = \frac{1}{\sqrt{2}}\begin{pmatrix}
A^{\top} & A^{\top} \\
A^{\top} & (-A)^{\top} \\
\end{pmatrix}
$$

$A$ が直交行列ので, $A^{\top} = A^{-1}$

$$
\begin{align}
(f(A))^{\top} = \frac{1}{\sqrt{2}}
\begin{pmatrix}
A^{-1} & A^{-1} \\
A^{-1} & -A^{-1} \\
\end{pmatrix}
\end{align}
$$

$f(A)^{-1}$ を求める

$$
\begin{aligned}
\left (
\begin{array}{cc|cc}
\frac{A}{\sqrt{2}} & \frac{A}{\sqrt{2}} & 1 & 0 \\
\frac{A}{\sqrt{2}} & -\frac{A}{\sqrt{2}} & 0 & 1 \\
\end{array}
\right) &= 
\left (
\begin{array}{cc|cc}
A & A & \sqrt{2} & 0 \\
A & -A & 0 & \sqrt{2} \\
\end{array}
\right) \\ &=
\left (
\begin{array}{cc|cc}
1 & 1 & \frac{\sqrt{2}}{A} & 0 \\
1 & -1 & 0 & \frac{\sqrt{2}}{A}
\end{array}
\right) \\ &=
\left (
\begin{array}{cc|cc}
1 & 1 & \frac{\sqrt{2}}{A} & 0 \\
0 & -2 & -\frac{\sqrt{2}}{A} & \frac{\sqrt{2}}{A} \\
\end{array}
\right) \\ &=
\left (
\begin{array}{cc|cc}
1 & 1 & \frac{\sqrt{2}}{A} & 0 \\
0 & 1 & \frac{1}{\sqrt{2}A} & -\frac{1}{\sqrt{2}A} \\
\end{array}
\right) \\ &=
\left (
\begin{array}{cc|cc}
1 & 0 & \frac{1}{\sqrt{2}A} & \frac{1}{\sqrt{2}A} \\
0 & 1 & \frac{1}{\sqrt{2}A} & -\frac{1}{\sqrt{2}A}
\end{array}
\right) 
\end{aligned}
$$

$$
\begin{align}
f(A)^{-1} &= \frac{1}{\sqrt{2}}\begin{pmatrix}
\frac{1}{A} & \frac{1}{A} \\
\frac{1}{A} & -\frac{1}{A} \\
\end{pmatrix} \notag \\
&= \frac{1}{\sqrt{2}}
\begin{pmatrix}
A^{-1} & A^{-1} \\
A^{-1} & -A^{-1} \\
\end{pmatrix}
\end{align}
$$

式(1)(2)より、

$(f(A))^{\top} = (f(A))^{-1}$ も直交行列

### (2)
$$A_n = f(A_{n-1})$$

$$A_0 = (1)$$

$$A_1 = f(A_0) = \frac{1}{\sqrt{2}}\begin{pmatrix}1 & 1 \\1 & -1 \\\end{pmatrix}$$

$$
A_2 = f(A_1) = \frac{1}{(\sqrt{2})^2}
\left(
\begin{array}{cc:cc}
1 & 1 & 1 & 1 \\
1 & -1 & 1 & -1 \\
\hdashline 
1 & 1 & 1 & 1 \\
1 & -1 & 1 & -1 \\
\end{array}
\right)
$$

$$
A_n = f(A_{n-1}) = \frac{1}{(\sqrt{2}^n)}
\begin{pmatrix}
A_{n-1} & A_{n-1} \\
A_{n-1} & -A_{n-1} \\
\end{pmatrix}
$$

$$
\boldsymbol{1} A_n = \overbrace{(1,1,\dots,1)}^{2^n}\frac{1}{(\sqrt{2})^n}
\begin{pmatrix}
A_{n-1} & A_{n-1} \\
A_{n-1} & -A_{n-1} \\
\end{pmatrix}
$$

$\begin{pmatrix}A_{n-1} & A_{n-1} \\ A_{n-1} & A_{n-1}\\\end{pmatrix}$ の奇数列目は全て $\frac{1}{\sqrt{2}}$,偶数列目は $\frac{1}{\sqrt{2}},-\frac{1}{\sqrt{2}}$ の交互

$$
\begin{aligned}
\boldsymbol{1}A_n &= \frac{1}{\sqrt{2}^n}(1 \times 2^n,0,1 \times 2^n,0,1 \times 2^n,0,\dots,1 \times 2^n,0) \\
&= ((\sqrt{2})^n,0,(\sqrt{2})^n,0(\sqrt{2})^n,0,\dots,(\sqrt{2})^n,0)
\end{aligned}
$$

### (3)
$A = (c_1v_1,c_2v_2,\dots,c_dv_d)$ と表せる

$$
\begin{aligned}
f(A) &= \frac{1}{\sqrt{2}}
\begin{pmatrix}
c_1v_1,c_2v_2,\dots,c_dv_d,c_1v_1,c_2v_2,\dots,c_dv_d \\
c_1v_1,c_2v_2,\dots,c_dv_d,-c_1v_1,-c_2v_2,-c_dv_d
\end{pmatrix} \\
&= \frac{1}{\sqrt{2}}
\bigg(c_1\begin{pmatrix}
v_1 \\v_1
\end{pmatrix},\dots,
c_d\begin{pmatrix}
v_d \\v_d
\end{pmatrix},
c_1\begin{pmatrix}
v_1 \\-v_1
\end{pmatrix},\dots
c_d\begin{pmatrix}
v_d \\-v_d
\end{pmatrix}
\bigg)
\end{aligned}
$$

となるので、

$$
\bigg\{
\begin{pmatrix}
v_1 \\v_1
\end{pmatrix},\dots
\begin{pmatrix}
v_d \\v_d
\end{pmatrix},
\begin{pmatrix}
v_1 \\-v_1
\end{pmatrix},\dots,
\begin{pmatrix}
v_d \\-v_d
\end{pmatrix}
\bigg\}
$$

は $f(A)$ の列空間の基底となる