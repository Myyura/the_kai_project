---
sidebar_label: "2018年1月実施 専門科目 第2問"
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Basics.Joint-Density-on-Triangular-Support
  - Probability-Statistics.Probability-Basics.Conditional-Density
  - Probability-Statistics.Probability-Basics.Marginal-Densities-and-Independence-Test
  - Probability-Statistics.Probability-Basics.Covariance-under-Affine-Transformation
---
# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2018年1月実施 専門科目 第2問

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)


## **Description**

### 題意の要約

[公式問題 PDF](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2018/03/2018Wtokei.pdf)

同時密度は $f_{X,Y}(x,y)=cxy$（$0<x<y<2$）、領域外では0。

1. 正規化定数 $c$。
2. $P(0<X<1/4\mid Y=1/2)$。
3. $X,Y$ の独立性を理由とともに判定する。
4. 相関係数 $r_{XY}$。
5. $U=aX+b,\ V=cY+d$ により相関の符号が反転する実数 $a,b,c,d$ の条件。

### 题目描述

随机变量 $X,Y$ 的联合密度为

$$
f_{X,Y}(x,y)=
\begin{cases}
cxy,&0<x<y<2,\\
0,&\text{其他},
\end{cases}
$$

其中 $c$ 为常数。

1. 求 $c$。
2. 求条件概率 $P(0<X<1/4\mid Y=1/2)$。
3. 判断 $X,Y$ 是否独立，并说明理由。
4. 求相关系数 $r_{XY}$。
5. 令 $U=aX+b,\ V=cY+d$。求 $r_{UV}$ 与 $r_{XY}$ 符号相反时，实数 $a,b,c,d$ 应满足的条件。

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
条件付き密度を用いると，

$$
\begin{aligned}
f_Y\left(\frac12\right)
&=\int_0^{1/2} f_{X,Y} \left(x, \frac{1}{2} \right) dx
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
\operatorname{Cov}(X,Y)
&= E(XY) - E(X) E(Y)
= \frac{16}{9} - \frac{16}{15} \cdot \frac{8}{5}
= \frac{16}{225}
\\
E(X^2)
&=\int_0^2x^2f_X(x)\,dx=\frac43,
\qquad
E(Y^2)=\int_0^2y^2f_Y(y)\,dy=\frac83
\\
V(X)&=\frac{44}{225},
\qquad
V(Y)=\frac{8}{75}
\\
\therefore\quad
r_{XY}
&=\frac{\operatorname{Cov}(X,Y)}{\sqrt{V(X)V(Y)}}
=\frac{4}{\sqrt{66}}
\end{aligned}
$$

### (2-5)
$a,c\neq0$ のとき，

$$
r_{UV}=\frac{ac}{|a||c|}r_{XY}=\operatorname{sgn}(ac)r_{XY}.
$$

したがって，正負が逆になる条件は $ac<0$ である。
