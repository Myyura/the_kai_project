---
sidebar_label: "2018年7月実施 数理基礎 A"
tags:
  - Waseda-University
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Implicit-Differentiation
  - Mathematics.Calculus.Constrained-Optimization
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2018年7月実施 数理基礎 A

## **Author**
祭音Myyura

## **Description**

1. $0<x<\pi$ に対して $f(x)=(\sin x)^{\cos2x}$ を微分せよ。
2. $x,y$ が

   $$
   y^5-2xy^2+3x^2y+4=0
   $$

   を満たすとき、$dy/dx$ を求めよ。
3. $a,b,c\geq1$ とする。$x+y+z=1$ のもとで $x^ay^bz^c$ を最大にする $x,y,z$ を、ラグランジュの未定乗数法により求めよ。

## **Kai**

### [小問 1]

$0<x<\pi$ では $\sin x>0$ なので、対数微分が使える。

$$
\log f(x)=\cos2x\log(\sin x)
$$

を微分すると

$$
\frac{f'(x)}{f(x)}
=-2\sin2x\log(\sin x)+\cos2x\cot x.
$$

したがって

$$
\boxed{
f'(x)=(\sin x)^{\cos2x}
\left\{\cos2x\cot x-2\sin2x\log(\sin x)\right\}
}.
$$

### [小問 2]

両辺を $x$ で微分すると

$$
5y^4y'-2y^2-4xyy'+6xy+3x^2y'=0.
$$

$y'$ をまとめれば

$$
\boxed{
\frac{dy}{dx}
=\frac{2y^2-6xy}{5y^4-4xy+3x^2}
}
$$

となる。ただし分母が0でない点を考えている。

### [小問 3]

最大点は内部にあるので、対数を取った目的関数

$$
g=a\log x+b\log y+c\log z
$$

を最大化する。ラグランジュ関数を

$$
L=g-\lambda(x+y+z-1)
$$

とすれば、停留条件は

$$
\frac ax=\frac by=\frac cz=\lambda.
$$

よって $x=a/\lambda$、$y=b/\lambda$、$z=c/\lambda$ であり、制約条件から $\lambda=a+b+c$ を得る。したがって

$$
\boxed{
x=\frac{a}{a+b+c},\qquad
y=\frac{b}{a+b+c},\qquad
z=\frac{c}{a+b+c}
}.
$$

$g$ は正の単体内部で狭義凹関数であり、境界では積が0になるため、これは大域的最大点である。最大値は

$$
\left(\frac a{a+b+c}\right)^a
\left(\frac b{a+b+c}\right)^b
\left(\frac c{a+b+c}\right)^c
$$

である。
