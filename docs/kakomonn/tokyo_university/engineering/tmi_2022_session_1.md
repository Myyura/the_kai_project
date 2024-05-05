---
comments: false
description: 東京大学 大学院 工学系研究科 技術経営戦略学専攻 2022年度 セッション 1
keywords: Tokyo-University, 2022
---

## **Source**
東京大学 大学院 工学系研究科 技術経営戦略学専攻 2022年度 セッション 1

## **Description**

## **Kai**
### I.
#### 1.
$u=y^{-3}$ とおくと、

$$
\begin{aligned}
\frac{du}{dx}
&= -3 y^{-4} \frac{dy}{dx}
\\
&= -3 y^{-4} \left( x^2 y - e^{-x^3} y^4 \right)
\ \ \ \ \ \ \ \ (\because \text{(1)})
\\
&= - 3x^2u + 3e^{-x^3}
\end{aligned}
$$

なので、 $u$ に関する微分方程式

$$
\begin{aligned}
\frac{du}{dx} &= - 3x^2u + 3e^{-x^3}
\tag{2}
\end{aligned}
$$

を得る。

#### 2.
まず、微分方程式

$$
\begin{aligned}
\frac{du}{dx} &= - 3x^2u
\end{aligned}
$$

は、

$$
\begin{aligned}
\frac{du}{u} &= - 3x^2 dx
\\
\therefore \ \ 
u &= A e^{-x^3}
\ \ \ \ \ \ \ \ \text{( $A$ は積分定数 )}
\end{aligned}
$$

と一般解が求まる。
そこで、 $A(x)$ を $x$ の適当な関数として、 (2) に $u=A(x)e^{-x^3}$ を代入して整理すると、

$$
\begin{aligned}
\frac{dA(x)}{dx} &= 3
\\
\therefore \ \ 
A(x) &= 3x + C
\ \ \ \ \ \ \ \ \text{( $C$ は積分定数 )}
\end{aligned}
$$

と求まるので、 (2) の一般解は

$$
\begin{aligned}
u &= (3x + C) e^{-x^3}
\ \ \ \ \ \ \ \ \text{( $C$ は積分定数 )}
\end{aligned}
$$

とわかる。
よって、(1) の一般解は

$$
\begin{aligned}
y &= (3x + C)^{- \frac{1}{3}} e^x
\ \ \ \ \ \ \ \ \text{( $C$ は積分定数 )}
\end{aligned}
$$

とわかる。

### II.

### III.