---
sidebar_label: "2018年7月実施 計画数理学 問題10"
tags:
  - Waseda-University
  - Operations-Research.Decision-Analysis.Analytic-Hierarchy-Process
  - Operations-Research.Decision-Analysis.Pairwise-Comparison-Consistency
  - Operations-Research.Inventory-Management.Newsvendor-Problem
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2018年7月実施 計画数理学 問題10

## **Author**
祭音Myyura

## **Description**

1. AHP の一対比較行列を $A=(a_{ij})$、得られたウェイトを $w_1,w_2,w_3$、理想的一対比較行列を $D=(d_{ij})$、$d_{ij}=w_i/w_j$ とする。

   $$
   \beta=\frac19\sum_{i=1}^3\sum_{j=1}^3\frac{a_{ij}}{d_{ij}}
   $$

   と定義する。
   1. 一対比較が理想的なときの $\beta$ を求めよ。
   2. $a_{11}=a_{22}=a_{33}=1$、$a_{12}=3$、$a_{13}=9$ とする。$a_{23}\in\{1/3,1,3,5,7,9\}$ のどれで $\beta$ が最大になるか答えよ。ただし $\beta(a_{23}=1)>\beta(a_{23}=9)$ を用いてよい。
2. 前日在庫を $W$、発注量を $z$、当日需要を連続確率変数 $D$ とする。$D$ の分布関数を $F$、密度を $f$、単位品切れ費用を $s$、単位保管費用を $h$ とする。
   1. 総品切れ費用を max 関数で表せ。
   2. 総保管費用を max 関数で表せ。
   3. 当日損失の期待値を積分で表せ。
   4. $t=W+z$ とおき、最適解 $t^*$ が満たす $F(t^*)$ を求めよ。

## **Kai**

### [小問 1-1]

一対比較が理想的なら

$$
a_{ij}=d_{ij}=\frac{w_i}{w_j}
$$

なので、9個の比はすべて1である。したがって

$$
\boxed{\beta=1}.
$$

### [小問 1-2]

完全整合条件は

$$
a_{13}=a_{12}a_{23}
$$

なので、整合する値は $9=3a_{23}$、すなわち $a_{23}=3$ である。このとき $\beta=1$ となり、循環的な不整合 $a_{12}a_{23}/a_{13}=a_{23}/3$ が1から離れるほど $\beta$ は大きくなる。

下側の候補では $1/3$ が1よりも整合値3から遠いため

$$
\beta(1/3)>\beta(1).
$$

上側では9が最大の候補であるが、問題文から $\beta(1)>\beta(9)$ が与えられている。したがって

$$
\beta(1/3)>\beta(1)>\beta(9)
$$

となり、他の候補 $3,5,7$ も最大にはならない。よって

$$
\boxed{a_{23}=\frac13}
$$

で $\beta$ が最大となる。

### [小問 2-1]

利用可能量は $W+z$ なので、不足量は $\max\{D-W-z,0\}$ である。したがって総品切れ費用は

$$
\boxed{s\max\{D-W-z,0\}}.
$$

空欄 ① は $D-W-z$ である。

### [小問 2-2]

売れ残り量は $\max\{W+z-D,0\}$ なので、総保管費用は

$$
\boxed{h\max\{W+z-D,0\}}.
$$

### [小問 2-3]

$t=W+z$ とおく。$D\leq t$ では保管費用、$D>t$ では品切れ費用が生じるため

$$
\boxed{
L(t)=\int_0^t h(t-x)f(x)\,dx
+\int_t^\infty s(x-t)f(x)\,dx
}.
$$

したがって空欄は

$$
\boxed{②=t=W+z,\qquad③=h(t-x),\qquad④=s(x-t)}.
$$

### [小問 2-4]

Leibniz の公式で微分すると、積分端点の被積分関数は0なので

$$
\begin{aligned}
L'(t)
&=h\int_0^tf(x)\,dx-s\int_t^\infty f(x)\,dx\\
&=hF(t)-s\{1-F(t)\}.
\end{aligned}
$$

最適点 $t^*$ で $L'(t^*)=0$ とおけば

$$
(h+s)F(t^*)=s.
$$

よって

$$
\boxed{F(t^*)=\frac{s}{h+s}}.
$$

空欄 ⑤ は $s/(h+s)$ である。
