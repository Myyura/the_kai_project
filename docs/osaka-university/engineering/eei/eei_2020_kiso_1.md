---
sidebar_label: "2020年度 基礎科目 【数学1】"
sidebar_position: 2
tags:
  - Osaka-University
---
# 大阪大学 工学研究科 電気電子情報工学専攻 2020年度 基礎科目 【数学1】

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (a)
$A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
= \det \begin{pmatrix} - \lambda & 1 \\ 1 & - \lambda \end{pmatrix}
= \lambda^2 - 1
= (\lambda + 1)(\lambda - 1)
\end{aligned}
\begin{aligned}
\therefore
\lambda = \pm 1
\end{aligned}
$$

固有値 $\lambda = 1$ に属する固有ベクトルは、例えば、

$$
\begin{aligned}
\frac{1}{\sqrt{2}}
\begin{pmatrix} 1 \\ 1 \end{pmatrix}
\end{aligned}
$$

固有値 $\lambda = -1$ に属する固有ベクトルは、例えば、

$$
\begin{aligned}
\frac{1}{\sqrt{2}}
\begin{pmatrix} 1 \\ -1 \end{pmatrix}
\end{aligned}
$$

### (b)
(a)で求めた固有ベクトルを使って、次のように定義する：

$$
\begin{aligned}
P = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}
\end{aligned}
$$

このとき、次が成り立つ：

$$
\begin{aligned}
PP &= E
\\
PAP &= \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
\end{aligned}
$$

よって、

$$
\begin{aligned}
P \left( E + \frac{t}{n} A \right) P
&= E + \frac{t}{n} \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
\\
&= \begin{pmatrix} 1 + \frac{t}{n} & 0 \\ 0 & 1 - \frac{t}{n} \end{pmatrix}
\end{aligned}
$$

なので、

$$
\begin{aligned}
\exp (tA)
&= \lim_{n \to \infty} \left( E + \frac{t}{n} A \right)^n
\\
&= \lim_{n \to \infty} P \begin{pmatrix} 1 + \frac{t}{n} & 0 \\ 0 & 1 - \frac{t}{n} \end{pmatrix}^n P
\\
&= \lim_{n \to \infty} P \begin{pmatrix} \left( 1 + \frac{t}{n} \right)^n & 0 \\ 0 & \left( 1 - \frac{t}{n} \right)^n \end{pmatrix} P
\\
&= P \begin{pmatrix} e^t & 0 \\ 0 & e^{-t} \end{pmatrix} P
\\
&= \frac{1}{2} \begin{pmatrix} e^t + e^{-t} & e^t - e^{-t} \\ e^t - e^{-t} & e^t + e^{-t} \end{pmatrix}
\\
&= \begin{pmatrix} \cosh t & \sinh t \\ \sinh t & \cosh t \end{pmatrix}
\end{aligned}
$$