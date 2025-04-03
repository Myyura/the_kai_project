---
sidebar_label: '数学 第2問'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2023年度 数学 第2問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

[2023年度大学院入学試験問題 数学](https://github.com/Myyura/the_kai_project_assets/blob/2672b44819e556e6b7835902e6d69059ff935039/kakomonn/tokyo_university/engineering/Description/M_J_E_2023.pdf)

## **Kai**
### I.
$a=1$ のとき

$$
\begin{aligned}
A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{pmatrix}
\end{aligned}
$$

であり、$A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
&= \det \begin{pmatrix}
2 - \lambda & 1 & 0 \\ 1 & 3 - \lambda & 1 \\ 0 & 1 & 2 - \lambda
\end{pmatrix}
\\
&= - (\lambda - 1)(\lambda - 2)(\lambda - 4)
\\
\therefore \ \ \lambda &= 1, 2, 4
\end{aligned}
$$

である。よって、

$$
\begin{aligned}
D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 4 \end{pmatrix}
\end{aligned}
$$

である（固有値の並べ方の不定性はある）。

### II.
$A$ は実対称行列なので、実直交行列 $P$ があって、

$$
\begin{aligned}
A = P D P^{-1} , \ \ P^{-1} = P^T
\end{aligned}
$$

が成り立つ。そこで、非零三次元実ベクトル $\boldsymbol{x}$ に対して

$$
\begin{aligned}
\begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix}
= P^{-1} \boldsymbol{x}
\end{aligned}
$$

とおくと、 $y_1, y_2, y_3$ は実数であり、

$$
\begin{aligned}
y_1^2 + y_2^2 + y_3^2
&= \left( P^{-1} \boldsymbol{x} \right)^T
\left( P^{-1} \boldsymbol{x} \right)
\\
&= \boldsymbol{x}^T P P^{-1} \boldsymbol{x}
\\
&= \boldsymbol{x}^T \boldsymbol{x}
\\
&\gt 0
\end{aligned}
$$

なので $y_1, y_2, y_3$ の少なくとも1つは $0$ ではなく、したがって、

$$
\begin{aligned}
\boldsymbol{x}^T A \boldsymbol{x}
&= \boldsymbol{x}^T P D P^{-1} \boldsymbol{x}
\\
&= \left( P^{-1} \boldsymbol{x} \right)^T D
\left( P^{-1} \boldsymbol{x} \right)
\\
&= y_1^2 + 2 y_2^2 + 4 y_3^2
\\
&\gt 0
\end{aligned}
$$

が言える。

### III.

$$
\begin{aligned}
A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & a \\ 0 & a & 2 \end{pmatrix}
\end{aligned}
$$

の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
&= \det \begin{pmatrix}
2 - \lambda & 1 & 0 \\ 1 & 3 - \lambda & a \\ 0 & a & 2 - \lambda
\end{pmatrix}
\\
&= - (\lambda - 2)(\lambda^2 - 5 \lambda - a^2 + 5)
\\
\therefore \ \ \lambda &= 2, \frac{5 \pm \sqrt{4a^2+5}}{2}
\end{aligned}
$$

である。求める条件は、これらがすべて正であることであり、

$$
\begin{aligned}
\frac{5 - \sqrt{4a^2+5}}{2} \gt 0
\\
\therefore \ \ 
- \sqrt{5} \lt a \lt \sqrt{5}
\end{aligned}
$$

である。

### IV.

$$
\begin{aligned}
\boldsymbol{x} = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}
\end{aligned}
$$

とすると、

$$
\begin{aligned}
\frac{\partial f(\boldsymbol{x})}{\partial x_1}
&= 
\begin{pmatrix} 1 & 0 & 0 \end{pmatrix}
\begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & a \\ 0 & a & 2 \end{pmatrix}
\begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}
+
\begin{pmatrix} x_1 & x_2 & x_3 \end{pmatrix}
\begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & a \\ 0 & a & 2 \end{pmatrix}
\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}
-
\begin{pmatrix} a & 0 & -1 \end{pmatrix}
\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}
\\
&= 4x_1 + 2x_2 - a
, \\
\frac{\partial f(\boldsymbol{x})}{\partial x_2}
&= 2x_1 + 6x_2 + 2ax_3
, \\
\frac{\partial f(\boldsymbol{x})}{\partial x_3}
&= 2ax_2 + 4x_3 + 1
\end{aligned}
$$

である。よって、 $f(\boldsymbol{x})$ が最小になるのは、$x_1, x_2, x_3$ が

$$
\begin{aligned}
4x_1 + 2x_2 - a &= 0
, \ \ 
2x_1 + 6x_2 + 2ax_3 = 0
, \ \ 
2ax_2 + 4x_3 + 1 = 0
\\
\therefore \ \ 
x_1 &= \frac{a}{4}, \ \ x_2 = 0, \ \ x_3 = - \frac{1}{4}
\end{aligned}
$$

のときであり、したがって、 $f(\boldsymbol{x})$ の最小値は

$$
\begin{aligned}
f \left( \begin{pmatrix}
\frac{a}{4} \\ 0 \\ - \frac{1}{4} \end{pmatrix} \right)
= - \frac{a^2 + 1}{8}
\end{aligned}
$$

である。