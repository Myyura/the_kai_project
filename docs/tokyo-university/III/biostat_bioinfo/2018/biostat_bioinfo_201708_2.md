---
sidebar_label: "2017年8月実施 専門科目 第2問"
tags:
  - Tokyo-University
---
# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2017年8月実施 専門科目 第2問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (2-1)

$$
\begin{aligned}
\iint_{0 \lt x \lt y \lt 2} xy dx dy
&= \int_0^2 \left( \int_0^y x dx \right) y dy
\\
&= \int_0^2 \left[ \frac{x^2}{2} \right]_0^y y dy
\\
&= \frac{1}{2} \int_0^2 y^3 dy
\\
&= \frac{1}{2} \left[ \frac{y^4}{4} \right]_0^2
\\
&= 2
\\
\therefore \ \ \ \ 
c &= \frac{1}{2}
\end{aligned}
$$

### (2-2)

$$
\begin{aligned}
\int_0^{1/2} f_{X,Y} \left(x, \frac{1}{2} \right) dx
&= \frac{1}{4} \int_0^{1/2} x dx
= \frac{1}{4} \left[ \frac{x^2}{2} \right]_0^{1/2}
= \frac{1}{2^5}
\\
\int_0^{1/4} f_{X,Y} \left(x, \frac{1}{2} \right) dx
&= \frac{1}{4} \int_0^{1/4} x dx
= \frac{1}{4} \left[ \frac{x^2}{2} \right]_0^{1/4}
= \frac{1}{2^7}
\end{aligned}
$$

であるから、

$$
\begin{aligned}
P(0 \lt X \lt 1/4 | Y=1/2)
= \frac{\frac{1}{2^7}}{\frac{1}{2^5}}
= \frac{1}{4}
\end{aligned}
$$

### (2-3)
$X,Y$ の周辺密度関数をそれぞれ $f_X(x), f_Y(y)$ とすると、

$$
\begin{aligned}
f_X(x)
&= \int_x^2 f_{X,Y}(x,y) dy
= \frac{x}{2} \int_x^2 y dy
= \frac{x}{2} \left[ \frac{y^2}{2} \right]_x^2
= \frac{x}{4} \left( 4 - x^2 \right)
= x - \frac{x^3}{4}
\\
f_Y(y)
&= \int_0^y f_{X,Y}(x,y) dx
= \frac{y}{2} \int_0^y x dx
= \frac{y}{2} \left[ \frac{x^2}{2} \right]_0^y
= \frac{y^3}{4}
\end{aligned}
$$

であるから、
$f_{X,Y}(x,y) \neq f_X(x) f_Y(y)$
であり、
$X$ と $Y$ は独立ではない。

### (2-4)
期待値を $E$ で表すと、

$$
\begin{aligned}
E(X)
&= \int_0^2 x f_X(x) dx
= \int_0^2 \left( x^2 - \frac{x^4}{4} \right) dx
= \left[ \frac{x^3}{3} - \frac{x^5}{4 \cdot 5} \right]_0^2 
= \frac{8}{3} - \frac{8}{5}
= \frac{16}{15}
\\
E(Y)
&= \int_0^2 y f_Y(y) dy
= \int_0^2 \frac{y^4}{4} dy
= \left[ \frac{y^5}{4 \cdot 5} \right]_0^2 
= \frac{2^5}{4 \cdot 5}
= \frac{8}{5}
\\
E(XY)
&= \iint_{0 \lt x \lt y \lt 2} xy f_{X,Y}(x,y) dx dy
= \frac{1}{2} \int_0^2 \left( \int_0^y x^2 dx \right) y^2 dy
\\
&= \frac{1}{2} \int_0^2 \left[ \frac{x^3}{3} \right]_0^y y^2 dy
= \frac{1}{6} \int_0^2 y^5 dy
= \frac{1}{6} \left[ \frac{y^6}{6} \right]_0^2
= \frac{16}{9}
\\
\therefore \ \ \ \ 
r_{XY}
&= E(XY) - E(X) E(Y)
= \frac{16}{9} - \frac{16}{15} \cdot \frac{8}{5}
= \frac{16}{225}
\end{aligned}
$$

### (2-5)
$r_{UV} = ac r_{XY}$ であるから、$ac \lt 0$ のとき正負が逆になる。