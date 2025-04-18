---
sidebar_label: "情報理工学位プログラム 問題例"
tags:
  - Tsukuba-University
---
# 筑波大学 理工情報生命学術院 システム情報工学研究群 情報理工学位プログラム 問題例

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### 解析学
#### 問 1

$$
  \begin{align}
  \lim_{x \to 0} \frac{x^3}{x - \sin x}
  &= \lim_{x \to 0} \frac{3x^2}{1 - \cos x}
  \\
  &= \lim_{x \to 0} \frac{6x}{\sin x}
  \\
  &= \lim_{x \to 0} \frac{6}{\cos x}
  \\
  &= 6
  \end{align}
$$

#### 問 2

$$
  \begin{align}
  \int_0^\infty \frac{dx}{1+x^2}
  &= \int_0^\frac{\pi}{2} \frac{1}{1 + \tan^2 \theta}
  \frac{d \theta}{\cos^2 \theta}
  \ \ \ \ \ \ \ \ ( x = \tan \theta )
  \\
  &= \int_0^\frac{\pi}{2} d \theta
  \\
  &= \frac{\pi}{2}
  \\
  \therefore \ \ 
  \int_0^\infty \int_0^\infty \frac{dx dy}{(1+x^2)(1+y^2)}
  &= \frac{\pi^2}{4}
  \end{align}
$$

### 線形代数
#### 問 1
$A$ の固有値を $\lambda$ とすると、

$$
  \begin{align}
  0
  &= \det \begin{pmatrix} 1 - \lambda & 2 \\ 2 & 1 - \lambda \end{pmatrix}
  \\
  &= (\lambda-3)(\lambda+1)
  \end{align}
$$

なので、

$$
  \begin{align}
  \lambda_1 = 3
  , \ \ 
  \lambda_2 = -1
  \end{align}
$$

である。

#### 問 2
固有値 $\lambda_1=3$ に属する固有ベクトルを求めるため

$$
  \begin{align}
  \begin{pmatrix} -2 & 2 \\ 2 & -2 \end{pmatrix}
  \begin{pmatrix} x \\ y \end{pmatrix}
  =
  \begin{pmatrix} 0 \\ 0 \end{pmatrix}
  \end{align}
$$

とおくと $x=y$ を得る。

固有値 $\lambda_2=-1$ に属する固有ベクトルを求めるため

$$
  \begin{align}
  \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}
  \begin{pmatrix} x \\ y \end{pmatrix}
  =
  \begin{pmatrix} 0 \\ 0 \end{pmatrix}
  \end{align}
$$

とおくと $x+y=0$ を得る。

よって、

$$
  \begin{align}
  X = \frac{1}{\sqrt{2}}
  \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}
  \end{align}
$$

である。

### 離散数学と論理

### プログラミング基礎
