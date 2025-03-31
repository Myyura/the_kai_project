---
sidebar_label: "2022年実施 【数学-1,2】"
sidebar_position: 1
tags:
  - Tohoku-University
---
# 東北大学 工学研究科 マテリアル・開発系 2022年実施 【数学-1,2】

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### 【数学-1】
#### 問 1

$$
\begin{aligned}
\left| A \right| &= 1
\\
A^{-1} &= \begin{pmatrix} 21 & -8 & -11 \\ -2 & 1 & 1 \\ -11 & 4 & 6 \end{pmatrix}
\end{aligned}
$$

#### 問 2

$$
\begin{aligned}
\mathrm{div} \boldsymbol{f} = 2x+2z
\end{aligned}
$$

なので、

$$
\begin{aligned}
\iiint_V \mathrm{div} \boldsymbol{f} \ dV
&= 2 \iiint_V (x+z) \ dV
\\
&= 2 \int_0^1 dy \int_0^3 dz \int_0^{3-z} dx \ (x+z)
\\
&= 2 \int_0^3 dz \left[ \frac{x^2}{2} + xz \right]_{x=0}^{x=3-z}
\\
&= \int_0^3 dz \ \left( -z^2 + 9 \right)
\\
&= 18
\end{aligned}
$$

を得る。

### 【数学-2】
#### 問 1

$$
\begin{aligned}
\frac{\sqrt{3}}{4} - \frac{1}{4} i
&= \frac{1}{2} e^{\frac{11}{6} \pi i}
\end{aligned}
$$

より、

$$
\begin{aligned}
\left( \frac{\sqrt{3}}{4} - \frac{1}{4} i \right)^\frac{1}{4}
&= \frac{1}{2^\frac{1}{4}} e^{\frac{11}{24} \pi i}
, \frac{1}{2^\frac{1}{4}} e^{\frac{23}{24} \pi i}
, \frac{1}{2^\frac{1}{4}} e^{\frac{35}{24} \pi i}
, \frac{1}{2^\frac{1}{4}} e^{\frac{47}{24} \pi i}
\end{aligned}
$$

がわかる。

#### 問 2

$$
\begin{aligned}
f(z)
&= \frac{1}{z+1}
\\
&= \frac{1}{(z-1)+2}
\\
&= \frac{1}{2} \frac{1}{1 - \left( - \frac{z-1}{2} \right)}
\end{aligned}
$$

と変形できるので、 $z=1$ を中心とするテイラー展開は

$$
\begin{aligned}
f(z)
&= \frac{1}{2} \sum_{n=0}^\infty \left( - \frac{z-1}{2} \right)^n
\\
&= \sum_{n=0}^\infty \frac{(-1)^n}{2^{n+1}} (z-1)^n
\end{aligned}
$$

であり、収束半径は $2$ である。