---
sidebar_label: "2019年8月実施 問2（数学）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Homogeneous-First-Order-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---

# 九州大学 工学府 機械系専攻 2019年8月実施 数学 問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

以下に示す微分方程式の一般解をそれぞれ求めよ。（50点）

(1)

$$
\frac{dy(x)}{dx}
=\frac{y(x)^3-3y(x)^2+2y(x)}{x\bigl(3y(x)^2-6y(x)+2\bigr)}.
$$

(2)

$$
\frac{dy(x)}{dx}
=\frac{y(x)^2+2xy(x)}{x^2+xy(x)}.
$$

(3)

$$
\frac{d^2y(x)}{dx^2}+y(x)=\cos x+\sin x.
$$

#### 题目描述

分别求下列微分方程的通解。（50分）

(1)

$$
\frac{dy(x)}{dx}
=\frac{y(x)^3-3y(x)^2+2y(x)}{x\bigl(3y(x)^2-6y(x)+2\bigr)}.
$$

(2)

$$
\frac{dy(x)}{dx}
=\frac{y(x)^2+2xy(x)}{x^2+xy(x)}.
$$

(3)

$$
\frac{d^2y(x)}{dx^2}+y(x)=\cos x+\sin x.
$$

## **Kai**

### (1)

$N(y)=y(y-1)(y-2)$ とおくと、$N'(y)=3y^2-6y+2$ である。$N(y)\ne0$ の区間では

$$
\begin{gathered}
\frac{N'(y)}{N(y)}\,dy=\frac{dx}{x},\\
\log|N(y)|=\log|x|+C_0.
\end{gathered}
$$

したがって

$$
\boxed{y(y-1)(y-2)=Cx}.
$$

$C=0$ は定数解 $y=0,1,2$ を含む。元の式が定義される $x\ne0$、$3y^2-6y+2\ne0$ の区間で解を取る。

### (2)

$y=vx$ とおくと

$$
v+xv'=\frac{v^2+2v}{1+v},\qquad
xv'=\frac{v}{1+v}.
$$

$v\ne0$ として積分すると $\log|v|+v=\log|x|+C_0$。よって

$$
\boxed{y\exp(y/x)=Cx^2}.
$$

$C=0$ は $y=0$ を含む。$x\ne0$、$x+y\ne0$ の区間に限る。

### (3)

同次解は $C_1\cos x+C_2\sin x$。共振を考慮して特解を $x(A\cos x+B\sin x)$ とおけば

$$
y_p''+y_p=-2A\sin x+2B\cos x.
$$

したがって $A=-1/2,B=1/2$ であり、

$$
\boxed{y=\left(C_1-\frac x2\right)\cos x+\left(C_2+\frac x2\right)\sin x}.
$$

## **Reference**

- [九州大学 2020年度 数学 公式問題（PDF 1ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-math.pdf)
