---
sidebar_label: "2015年度 問題4（数学）"
tags:
  - Osaka-University
  - Mathematics.Complex-Analysis.Contour-Integration
  - Mathematics.Complex-Analysis.Laurent-Series
  - Mathematics.Complex-Analysis.Residue-Theorem
---

# 大阪大学 工学研究科 機械工学専攻 2015年度 数学 問題4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

複素関数 $f(z)$ の閉曲線 $C$ に沿う積分

$$
J=\int_C f(z)\,dz
$$

について、以下の問いに答えなさい。

1. $f(z)=(z-a)^m$ とする。閉曲線 $C$ が点 $a$ を囲むとき、$J$ を求めなさい。ただし、$m$ は整数とする。
2. $f(z)=(z-a)^{-5}\exp[(z-a)^m]$ とする。閉曲線 $C$ が点 $a$ を囲むとき、$J=0$ となる整数 $m$ をすべて求めなさい。
3. 次の命題が正しいか否かを述べ、その理由を説明しなさい。「$J=0$ ならば、閉曲線 $C$ で囲まれた領域で $f(z)$ は正則である。」

#### 题目描述

对复函数 $f(z)$ 沿闭曲线 $C$ 的积分 $J=\int_C f(z)\,dz$，回答下列问题。

1. 设 $f(z)=(z-a)^m$，其中 $m$ 为整数，$C$ 包围点 $a$，求 $J$。
2. 设 $f(z)=(z-a)^{-5}\exp[(z-a)^m]$，$C$ 包围点 $a$，求所有使 $J=0$ 的整数 $m$。
3. 判断命题“若 $J=0$，则 $f(z)$ 在 $C$ 围成的区域内全纯”是否正确，并说明理由。

## **Kai**

以下、$C$ の向きは正向き（反時計回りに1周）とする。逆向きでは積分の符号が逆になる。

### (1)

$m\ne-1$ のとき、$(z-a)^m$ は $z\ne a$ において一価の原始関数 $(z-a)^{m+1}/(m+1)$ を持つので、閉曲線積分は $0$ である。$m=-1$ のときは $a$ における留数が $1$ なので

$$
\boxed{J=\begin{cases}2\pi i,&m=-1,\\0,&m\ne-1.\end{cases}}
$$

一般の回転数 $\operatorname{Ind}(C,a)$ に対しては、$m=-1$ の値を $2\pi i\operatorname{Ind}(C,a)$ とする。

### (2)

$z\ne a$ における Laurent 展開は

$$
f(z)=\frac1{(z-a)^5}\sum_{k=0}^{\infty}\frac{(z-a)^{mk}}{k!}
=\sum_{k=0}^{\infty}\frac{(z-a)^{mk-5}}{k!}.
$$

$J$ が $0$ でないためには、$(z-a)^{-1}$ の項が必要であり、その条件は

$$
mk-5=-1,\qquad\text{すなわち }mk=4\quad(k\in\mathbb Z_{\ge0}).
$$

したがって $J\ne0$ となるのは $m$ が $4$ の正の約数であるときに限る。求める $J=0$ の条件は、その補集合であるから

$$
\boxed{m\in\mathbb Z\setminus\{1,2,4\}}.
$$

実際、$m=1,2,4$ の各留数は順に $1/4!$、$1/2!$、$1$ となり、すべて $0$ ではない。$m=0$ の場合は $f=e(z-a)^{-5}$、$m<0$ の場合は展開の指数がすべて $-5$ 以下なので、いずれも留数は $0$ である。

### (3)

命題は正しくない。反例として

$$
f(z)=\frac1{(z-a)^2}
$$

を取り、$C$ を $a$ を囲む円とする。(1) より $J=0$ であるが、$f$ は内部の点 $a$ に2位の極を持つので正則ではない。

一つの閉曲線に沿う積分が $0$ であるという条件だけから、内部での正則性は結論できない。
