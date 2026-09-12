---
sidebar_label: 2011年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Sequence-Convergence
  - Mathematics.Calculus.Higher-Order-Derivative
---
# 京都大学 情報学研究科 システム科学専攻 2011年8月実施 数学【II】

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
正整数 $m$ に対し

$$
f(x)=\begin{cases}\exp(-1/x^{2m}),&x\ne0,\\0,&x=0\end{cases}
$$

とする。$\exp(y)=e^y$ である。

(i) $m=1$ の場合の $f$ の概形を描け。

(ii) 非負整数 $\gamma$ に対し $\lim_{x\to0}x^{-\gamma}\exp(-1/x^{2m})=0$ を示せ。

(iii) 原点での定義に注意して $f'(0)$ を求めよ。

(iv) $n$ 次導関数について $f^{(n)}(0)$ を求めよ。

### 問2
$n=1,2,\ldots$ に対し

$$
f_n(x)=\frac{e^{-x}-e^{-(n+1)x}}{1-e^{-x}},\qquad
 g_n(x)=\frac{e^{-x}-e^{-nx}}x
$$

とする。

(i) $F_n=\int_0^\infty f_n(x)dx$ を求めよ。

(ii) $G_n=\int_0^\infty g_n(x)dx$ を、$\int_1^ne^{-xy}dy$ を考えることにより求めよ。

(iii) すべての $n$ に対して $F_n-G_n>0$ を示せ。

(iv) $n\to\infty$ で $F_n-G_n$ の極限が存在することを示せ。

#### 题目描述

**问1** 对正整数 $m$，定义 $f(x)=e^{-1/x^{2m}}$（$x\ne0$）、$f(0)=0$。(i) 画出 $m=1$ 时的函数概形。(ii) 对任意非负整数 $\gamma$，证明 $x\to0$ 时 $x^{-\gamma}e^{-1/x^{2m}}\to0$。(iii) 注意原点处定义，求 $f'(0)$。(iv) 求所有阶数的 $f^{(n)}(0)$。

**问2** 对 $n=1,2,\ldots$ 定义 $f_n=(e^{-x}-e^{-(n+1)x})/(1-e^{-x})$、$g_n=(e^{-x}-e^{-nx})/x$。(i) 求 $F_n=\int_0^\infty f_n(x)dx$。(ii) 通过积分 $\int_1^ne^{-xy}dy$ 求 $G_n=\int_0^\infty g_n(x)dx$。(iii) 证明 $F_n-G_n>0$。(iv) 证明 $F_n-G_n$ 在 $n\to\infty$ 时存在极限。

## **Kai**

### 問1
(i) 偶関数で、原点で零、$x\ne0$ で $0<f(x)<1$。$x>0$ で単調増加、$x<0$ で単調減少し、$x\to\pm\infty$ で $f(x)\to1$。原点の接線は $y=0$。

![m=1 の f(x)=exp(-1/x²) の概形](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2012/sys_201108_math_II_flat_function.svg)

(ii) $t=|x|^{-2m}$ とおくと

$$
|x^{-\gamma}e^{-1/x^{2m}}|=t^{\gamma/(2m)}e^{-t}\longrightarrow0\qquad(t\to\infty).
$$

(iii) 定義と (ii) より $\boxed{f'(0)=\lim_{h\to0}h^{-1}e^{-1/h^{2m}}=0}$。

(iv) $x\ne0$ で各導関数は $f^{(n)}(x)=P_n(x^{-1})e^{-1/x^{2m}}$（$P_n$ は多項式）の形をもつ。$f^{(n)}(0)=0$ と仮定すれば、差商は (ii) によって零に収束する。帰納法により $\boxed{f^{(n)}(0)=0\quad(n\ge0)}$。

### 問2
(i) $f_n(x)=\sum_{k=1}^ne^{-kx}$ より $\boxed{F_n=\sum_{k=1}^n1/k}$。

(ii) $g_n(x)=\int_1^ne^{-xy}dy$ であり、非負性により積分順序を交換すると

$$
G_n=\int_1^n\!\int_0^\infty e^{-xy}dx\,dy=\int_1^n\frac{dy}y=\boxed{\log n}.
$$

(iii) $1/x$ は単調減少だから $\log n=\sum_{k=1}^{n-1}\int_k^{k+1}dx/x<\sum_{k=1}^{n-1}1/k<F_n$（$n=1$ も明らか）。

(iv) $E_n=F_n-G_n$ とすると

$$
E_{n+1}-E_n=\frac1{n+1}-\int_n^{n+1}\frac{dx}x<0.
$$

正で単調減少するので、有限の極限が存在する。

