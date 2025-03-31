---
sidebar_label: "2020年度 数学 (1)"
sidebar_position: 1
tags:
  - Osaka-University
---
# 大阪大学 工学研究科 環境・エネルギー工学科 2020年度 数学 (1)

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (a)
$k=1,2,\cdots$ について、 $k$ 階導関数は

$$
\begin{aligned}
f^{(k)}(x) &= e^x
\end{aligned}
$$

であり、 $x=a$ における $k$ 階微分係数は

$$
\begin{aligned}
f^{(k)}(a) &= e^a
\end{aligned}
$$

なので、

$$
\begin{aligned}
f(x) = \sum_{k=0}^\infty \frac{e^a}{k!} (x-a)^k
\end{aligned}
$$

である。

### (b)

$$
\begin{aligned}
f(x)
&= a^x
\\
&= e^{x \log a}
\\
\therefore \ \ 
f'(x)
&= e^{x \log a} \cdot \log a
\\
&= a^x \log a
\end{aligned}
$$

### (\(c\))
#### (i)

$$
\begin{aligned}
\mathrm{grad} \ h(x,y)
= \frac{\partial h(x,y)}{\partial x} \boldsymbol{i}
+ \frac{\partial h(x,y)}{\partial y} \boldsymbol{j}
\end{aligned}
$$

#### (ii)
等高線 $h(x,y)=c$ 上の点 $(X,Y)$ における接線の方程式は、

$$
\begin{aligned}
\frac{\partial h(X,Y)}{\partial x} (x-X)
+ \frac{\partial h(X,Y)}{\partial y} (y-Y)
= 0
\end{aligned}
$$

であるが、これは $\mathrm{grad} \ h(X,Y)$ とベクトル
$(x-X) \boldsymbol{i} + (y-Y) \boldsymbol{j}$
が直交していることを意味し、
つまり、 $\mathrm{grad} \ h(X,Y)$ と等位線が $(X,Y)$ において直交していることを意味する。

### (d)
#### (i)
特性方程式は、

$$
\begin{aligned}
\lambda^2 - 5 \lambda + 4 = 0
\end{aligned}
$$

であり、特性根は、

$$
\begin{aligned}
\lambda = 1, 4
\end{aligned}
$$

である。

#### (ii)
特殊解として、定数解

$$
\begin{aligned}
y = \frac{k}{4}
\end{aligned}
$$

があるのは明らかなので、
(i) を考慮し、任意定数を $A, B$ として、

$$
\begin{aligned}
y = A e^x + B e^{4x} + \frac{k}{4}
\end{aligned}
$$

が一般解である。

実際、これは、

$$
\begin{aligned}
y'  &= A e^x + 4B e^{4x}
\\
y'' &= A e^x + 16B e^{4x}
\end{aligned}
$$

となり、

$$
\begin{aligned}
y'' - 5 y' + 4 y = k
\end{aligned}
$$

を満たす。