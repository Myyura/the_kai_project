---
sidebar_label: "2021年8月実施 専門基礎A [A-1]"
tags:
  - Kyoto-University
  - Calculus
  - Linear-Algebra
---
# 京都大学 情報学研究科 通信情報システム専攻 2021年8月実施 専門基礎A \[A-1\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
(1) 次の関数 $f(x)$ について以下の問に答えよ。

$$
f(x) = \sqrt{1 - x^2} + \arcsin x \ \ \ (-1 \le x \le 1)
$$

- ( a ) 導関数 $f'(x)$ を求めよ。
- ( b ) $f'(1)$ の値を求めよ。 
- ( c ) $f(x)$ の概形を図示せよ。

(2) $y=x$ と $y=x^2$ の２つの曲線で囲まれる領域 $D$ として、次の積分 $I$ を求めよ。

$$
I = \iint_D x^2 + y^2\ dxdy
$$

(3) 次の行列 $A$ の固有値および固有ベクトルを求めよ。ただし $x$ 実数とする。

$$
A = \begin{pmatrix}
e^x & e^{-x} \\
e^{-x} & e^x
\end{pmatrix}
$$

## **Kai**
### (1)
#### ( a )

$$
\begin{aligned}
f'(x)
&= - \frac{x}{\sqrt{1-x^2}} + \frac{1}{\sqrt{1-x^2}}
\\
&= \frac{1-x}{\sqrt{1-x^2}}
\\
&= \sqrt{\frac{1-x}{1+x}}
\end{aligned}
$$

#### ( b )

$$
\begin{aligned}
f'(1) = 0
\end{aligned}
$$

#### ( c )

[図](https://www.wolframalpha.com/input?i=sqrt%281-x%5E2%29+%2B+arcsin%28x%29&lang=ja)

### (2)

$$
\begin{aligned}
I
&= \int_0^1 dx \int_{x^2}^x dy \left( x^2 + y^2 \right)
\\
&= \int_0^1 dx \left[ x^2 y + \frac{y^3}{3} \right]_{y=x^2}^x
\\
&= \int_0^1 dx \left( - \frac{1}{3} x^6 - x^4 + \frac{4}{3} x^3 \right)
\\
&= \left[ - \frac{1}{21} x^7 - \frac{1}{5} x^5 + \frac{1}{3} x^4 \right]_0^1
\\
&= \frac{3}{35}
\end{aligned}
$$

### (3)
固有値

$$
\begin{aligned}
\lambda_1 &= e^{-x} (e^{2x} - 1) \\
\lambda_2 &= e^{-x} (e^{2x} + 1)
\end{aligned}
$$

固有ベクトル

$$
\begin{aligned}
v_1 &= (-1, 1) \\
v_2 &= (1, 1)
\end{aligned}
$$