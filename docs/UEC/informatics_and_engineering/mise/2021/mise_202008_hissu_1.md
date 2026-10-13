---
sidebar_label: "2020年8月実施 必須問題（数学基礎）問1"
tags:
  - University-of-Electro-Communications
  - Mathematics.Calculus.Hessian-Test-for-Multivariable-Extrema
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 必須問題（数学基礎）問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

次の設問に答えよ。

1. $f(x,y)=x^3-2y^2+3xy-y$ の極大値と極小値の存在を調べ、存在するならばその値を求めよ。
2. $D=\{(x,y):x^2+y^2\le2x\}$ における $\iint_D\sqrt{2-x}\,dx\,dy$ を求めよ。
3. $f''(x)-5f'(x)+4f(x)=e^{3x}+\sin x\cos x$ の一般解を求めよ。$e$ は自然対数の底である。

#### 题目描述

判断二元函数 $x^3-2y^2+3xy-y$ 是否存在局部极大、极小值并求值；计算圆盘 $x^2+y^2\le2x$ 上 $\sqrt{2-x}$ 的二重积分；求方程 $f''-5f'+4f=e^{3x}+\sin x\cos x$ 的通解。

## **Kai**

### (1)

停留条件 $3x^2+3y=0,-4y+3x-1=0$ より $y=-x^2$、$(4x-1)(x+1)=0$。停留点は $(-1,-1),(1/4,-1/16)$ である。

ヘッセ行列の行列式は $D=(6x)(-4)-3^2=-24x-9$。前者では $D=15>0,f_{xx}=-6<0$ なので極大、後者では $D=-15<0$ なので鞍点である。したがって

$$
\boxed{f(-1,-1)=1\text{ が極大値、極小値は存在しない。}}
$$

### (2)

円板の中心は $(1,0)$、半径は1。$0\le x\le2$ を固定すると $|y|\le\sqrt{2x-x^2}$ であるから

$$
\begin{aligned}
\iint_D\sqrt{2-x}\,dx\,dy
&=2\int_0^2\sqrt{2-x}\sqrt{x(2-x)}\,dx\\
&=2\int_0^2(2-x)\sqrt{x}\,dx
=\boxed{\frac{32\sqrt2}{15}}.
\end{aligned}
$$

### (3)

特性方程式 $(\lambda-1)(\lambda-4)=0$ より同次解は $C_1e^x+C_2e^{4x}$。右辺を $e^{3x}+\tfrac12\sin2x$ とし、特解を $Ae^{3x}+B\cos2x+C\sin2x$ とおくと、係数比較から $A=-1/2,B=1/20,C=0$。したがって

$$
\boxed{f(x)=C_1e^x+C_2e^{4x}-\frac12e^{3x}+\frac1{20}\cos2x}.
$$

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 3ページ](https://web.archive.org/web/20241224120234id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_mandatory202008.pdf)
