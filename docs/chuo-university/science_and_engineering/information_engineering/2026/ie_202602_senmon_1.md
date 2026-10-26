---
sidebar_label: "2026年2月実施 問題I（数学）"
tags:
  - Chuo-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Calculus.Hessian-Test-for-Multivariable-Extrema
---

# 中央大学 理工学研究科 情報工学専攻 2026年2月実施 一般入試（春季）問題I

## **Author**

祭音Myyura (Based on [中央大学の公式解答例](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf) refined with GPT 6 Astra)

## **Description**

問題 I は必答。問題 II～V のうち、2 問を選んで解答すること。

**問題 I.（全員解答すること）**

**1.** 次の行列 $A_n$ $(n\geq 3)$ を考える。

$$
A_n=\begin{pmatrix}
a&0&\cdots&0&-x_1\\
0&a&\ddots&\vdots&-x_2\\
\vdots&\ddots&\ddots&0&\vdots\\
0&\cdots&0&a&-x_{n-1}\\
x_1&x_2&\cdots&x_{n-1}&a
\end{pmatrix}.
$$

例えば、$n=3$ の場合は次のようになる。

$$
A_3=\begin{pmatrix}a&0&-x_1\\0&a&-x_2\\x_1&x_2&a\end{pmatrix}.
$$

(1) $n=3$ のときの行列式 $|A_3|$ を求めよ。

(2) $n=4$ のときの行列式 $|A_4|$ を求めよ。

(3) $n\geq 4$ のときの行列式 $|A_n|$ を求めよ。

**2.** $f(x,y)=3x^2+6xy+3y^2+x^3+y^3$ の極値を求めたい。

(1) $f(x,y)$ が点 $(a,b)$ で極値をとるならば、$f_x(a,b)=f_y(a,b)=0$ であることを用いて、$f(x,y)$ が極値をとる候補点を全て求めよ。

(2) 点 $(a,b)$ を $f(x,y)$ の極値の候補点とし、$D=f_{xx}(a,b)f_{yy}(a,b)-f_{xy}(a,b)^2$ とおくと、次の (i)、(ii)、(iii) が成り立つ。このことを用いて、(1) で求めた各点で極大値をとる、極小値をとる、極値をとらないのどれになるかを判定せよ。

(i) $D>0$ のとき、$f_{xx}(a,b)>0$ ならば $f(x,y)$ は $(a,b)$ で極小値、$f_{xx}(a,b)<0$ ならば $f(x,y)$ は $(a,b)$ で極大値をとる。

(ii) $D<0$ のとき、$f(x,y)$ は $(a,b)$ で極値をとらない。

(iii) $D=0$ のとき、$f(x,y)$ が $(a,b)$ で極値をとるかどうかは $D$ の値だけでは判定できない。

### 题目描述

问题 I 为必答题；从问题 II～V 中选择 2 题作答。

**问题 I（全员必答）**

**1.** 考虑下列 $n$ 阶矩阵（$n\geq3$）：

$$
A_n=\begin{pmatrix}
a&0&\cdots&0&-x_1\\
0&a&\ddots&\vdots&-x_2\\
\vdots&\ddots&\ddots&0&\vdots\\
0&\cdots&0&a&-x_{n-1}\\
x_1&x_2&\cdots&x_{n-1}&a
\end{pmatrix}.
$$

例如，当 $n=3$ 时，

$$
A_3=\begin{pmatrix}a&0&-x_1\\0&a&-x_2\\x_1&x_2&a\end{pmatrix}.
$$

(1) 求 $n=3$ 时的行列式 $|A_3|$。

(2) 求 $n=4$ 时的行列式 $|A_4|$。

(3) 求 $n\geq4$ 时的行列式 $|A_n|$。

**2.** 求函数 $f(x,y)=3x^2+6xy+3y^2+x^3+y^3$ 的极值。

(1) 若 $f$ 在 $(a,b)$ 处取得极值，则 $f_x(a,b)=f_y(a,b)=0$。利用这一必要条件，求出全部极值候选点。

(2) 设 $(a,b)$ 为极值候选点，并令 $D=f_{xx}(a,b)f_{yy}(a,b)-f_{xy}(a,b)^2$。利用以下 (i)、(ii)、(iii)，判断 (1) 中各候选点是极大值点、极小值点，还是不取极值的点。

(i) 当 $D>0$ 时，若 $f_{xx}(a,b)>0$，则 $f$ 在 $(a,b)$ 处取极小值；若 $f_{xx}(a,b)<0$，则取极大值。

(ii) 当 $D<0$ 时，$f$ 在 $(a,b)$ 处不取极值。

(iii) 当 $D=0$ 时，仅凭 $D$ 的值无法判断 $f$ 是否在 $(a,b)$ 处取极值。

## **Kai**

### 1. 行列式

#### (1)

第 1 行で余因子展開すると、

$$
|A_3|=a(a^2+x_2^2)+ax_1^2
=\boxed{a^3+a(x_1^2+x_2^2)}.
$$

#### (2)

同様に第 1 行で展開して、

$$
\begin{aligned}
|A_4|
&=a\{a^3+a(x_2^2+x_3^2)\}+a^2x_1^2\\
&=\boxed{a^4+a^2(x_1^2+x_2^2+x_3^2)}.
\end{aligned}
$$

#### (3)

$\boldsymbol{x}=(x_1,\ldots,x_{n-1})^{\mathsf T}$ と書くと、

$$
A_n=\begin{pmatrix}aI_{n-1}&-\boldsymbol{x}\\
\boldsymbol{x}^{\mathsf T}&a\end{pmatrix}.
$$

$a\ne0$ のとき、最終行から第 $i$ 行の $x_i/a$ 倍を引く操作を $i=1,\ldots,n-1$ について行う。この操作で行列式は変わらず、最終行の最後の成分は $a+\sum_i x_i^2/a$ となる。よって、

$$
\boxed{|A_n|=a^n+a^{n-2}\sum_{i=1}^{n-1}x_i^2}.
$$

両辺は $a$ の多項式なので、この恒等式は $a=0$ にも成立する。実際、$a=0$ では行列の階数が高々 $2<n$ であり、行列式は $0$ である。

### 2. 極値

#### (1) 候補点

$$
f_x=6x+6y+3x^2,\qquad f_y=6x+6y+3y^2.
$$

両者を $0$ とおいて差を取ると、$(x-y)(x+y)=0$。

- $x=y$ の場合、$x^2+4x=0$ より $(x,y)=(0,0),(-4,-4)$。
- $x=-y$ の場合、$x^2=0$ より $(x,y)=(0,0)$。

したがって候補点は $\boxed{(0,0),(-4,-4)}$ である。

#### (2) 判定

$$
f_{xx}=6+6x,\qquad f_{yy}=6+6y,\qquad f_{xy}=6.
$$

$(-4,-4)$ では $D=(-18)^2-6^2=288>0$、$f_{xx}=-18<0$ だから極大点である。その値は

$$
\boxed{f(-4,-4)=64}.
$$

$(0,0)$ では $D=0$ なので、直接近傍の符号を調べる。$s=x+y$、$d=x-y$ とすると、

$$
f(x,y)=3s^2+\frac{s^3+3sd^2}{4}.
$$

$d=0$、$s=t>0$ に沿って原点に近づくと $f=3t^2+t^3/4>0$。一方、$d=t$、$s=-t^2/8$ に沿って近づくと、

$$
f=-\frac{3t^4}{64}-\frac{t^6}{2048}<0\qquad(t\ne0).
$$

原点の任意の近傍に正の値を取る点と負の値を取る点があるため、原点は鞍点であり、極値を取らない。従って、**極大値は $64$、極小値は存在しない**。

## **Reference**

- [中央大学公式問題（2026年度、冊子 p.15／PDF 第16頁；選答方法：冊子 p.14）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-01.pdf#page=16)
- [中央大学公式解答例・出題の意図（2026年度、冊子 p.19／PDF 第20頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf#page=20)
