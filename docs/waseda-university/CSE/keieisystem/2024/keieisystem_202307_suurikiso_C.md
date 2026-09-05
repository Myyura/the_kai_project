---
sidebar_label: "2023年7月実施 数理基礎 問題C"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Analysis-of-Variance
  - Probability-Statistics.Probability-Basics.Covariance
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2023年7月実施 数理基礎 問題C

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語

#### 小問C1

A君は1回目の校内模擬テストの成績が60点、2回目の校内模擬テストの成績が65点だった。1回目の全体の平均(average)は55.0点, 標準偏差(standard deviation)が5.0点, 2回目の全体の平均は60.0点, 標準偏差が4.0点だった。また、いずれの得点の確率分布(probability distribution)は正規分布(normal distribution)に従っているとみなすことができる。このとき、A君の得点よりも上位にいる人数は、1回目と2回目でどちらが多いか。また、その理由を述べよ。

#### 小問C2

確率変数(random variable) $x$ と $y$ の同時確率密度関数 (joint probability density function)が次式であるとき、 $x$ と $y$ が独立(independent)になるように定数 $a$ と $b$ の値を定めよ。ただし, $0<x<1$ , $0 <y<1$ とする。

$$
f(x, y) = a(2xy + x + by + 3)
$$

#### 小問C3

2つの因子(factor) AとBを取り上げ、因子Aについては3水準,因子 B については4
水準を設定し、繰り返し(the number of replications) が 2 回の二元配置法実験(two-way layout
experiment with replications)をランダムな順序で行った。そのデータに基づき分散分析表(analysis
of variance table)を作成した結果、表1を得た。表1の①②③に入る数値を求めよ。

表1 分散分析表

| 変動因 | $S$：平方和 | $f$：自由度 | $V$：平均平方 | $F$：分散比 |
|:--|--:|--:|--:|--:|
| A | 10 | | | |
| B | 30 | | | ③ |
| $A\times B$ | 18 | ① | | |
| E | | | ② | |
| 計 | 82 | | | |

#### 小問C4

2つの確率変数(random variable) $x$ と $y$ のそれぞれの分散 (variance) が $V(x) = 2$ , $V(y) = 3$ であり,共分散(covariance) が $C(x,y) =1$ であるとき、 $C(x+y, 2x - y)$ の値を求めよ。

### 题目描述

#### 小问C1

A 同学第一次校内模拟考试得 $60$ 分，第二次得 $65$ 分。第一次考试全体成绩的均值为 $55.0$ 分、标准差为 $5.0$ 分；第二次的均值为 $60.0$ 分、标准差为 $4.0$ 分。两次成绩分布均可视为正态分布。

比较两次考试中成绩高于 A 同学的人数哪一次更多，并说明理由。

#### 小问C2

随机变量 $x,y$ 的联合概率密度函数在

$$
0<x<1,\qquad0<y<1
$$

上为

$$
f(x,y)=a(2xy+x+by+3).
$$

确定常数 $a,b$，使 $x$ 与 $y$ 相互独立。

#### 小问C3

选取因子 A、B，其中 A 有 $3$ 个水平，B 有 $4$ 个水平，各水平组合重复 $2$ 次，并以随机顺序实施有重复的双因素配置实验。根据实验数据制成表 1 所示的方差分析表，要求填写其中的 ①、②、③。

表 1 方差分析表

| 变异来源 | $S$：平方和 | $f$：自由度 | $V$：均方 | $F$：方差比 |
|:--|--:|--:|--:|--:|
| A | 10 | | | |
| B | 30 | | | ③ |
| $A\times B$ | 18 | ① | | |
| 误差 E | | | ② | |
| 总计 | 82 | | | |

#### 小问C4

两个随机变量 $x,y$ 满足

$$
V(x)=2,\qquad V(y)=3,\qquad C(x,y)=1.
$$

求

$$
C(x+y,\,2x-y).
$$

## **Kai**

### 小問C1

まず、それぞれのテストにおけるA君の標準化得点（zスコア）を計算します。

1回目のテスト：

$$
z_1 = \frac{60 - 55}{5} = \frac{5}{5} = 1
$$

2回目のテスト：

$$
z_2 = \frac{65 - 60}{4} = \frac{5}{4} = 1.25
$$

標準化得点は、平均からどれだけ標準偏差分離れているかを示します。A君の1回目のテストの標準化得点は1.0であり、2回目のテストの標準化得点は1.25です。

正規分布において、標準化得点が高いほど、上位に位置することになります。したがって、A君は2回目のテストの方がより上位に位置しています。

標準正規分布の上側確率は標準化得点が高いほど小さくなるため、A君より上位にいる割合は2回目の方が小さくなります。

結論：
両テストの受験者数が同じであれば、2回目のテストの方がA君の標準化得点が高いため、A君よりも上位にいる人数は1回目の方が多いです。受験者数が異なる場合、この計算から確定するのは上位にいる割合の大小であり、人数の大小は受験者数にも依存します。

理由：
A君の2回目のテストの標準化得点の方が、1回目のテストの標準化得点よりも高いため。

### 小問C2

Since $x$ and $y$ are independent, we can write $f(x, y) = g(x)h(y)$ , where $g(x)$ is a function of $x$ only and $h(y)$ is a function of $y$ only. Thus, we need to factor $2xy + x + by + 3$ into a product of a function of $x$ and a function of $y$ .

$2xy + x + by + 3 = x(2y + 1) + by + 3$

If $x$ and $y$ are independent, then $f(x, y)$ must be separable as $g(x)h(y)$ for some functions $g$ and $h$ .
$f(x, y) = a(2xy + x + by + 3) = a(x(2y+1) + by + 3)$
$ = a(2xy+x+by+3) = a(2x+\frac{x}{y} +b + \frac{3}{y})y$
Let $f_x(x) = \int_0^1 f(x, y) dy$ and $f_y(y) = \int_0^1 f(x, y) dx$ .

For $x$ and $y$ to be independent, we must have $f(x, y) = f_x(x) f_y(y)$ .

For $f(x,y)$ to be the product of $g(x)$ and $h(y)$ , we must have

$$
2xy + x + by + 3 = (Ax + B)(Cy + D) = ACxy + ADx + BCy + BD
$$

Comparing the coefficients:
$AC = 2$ , $AD = 1$ , $BC = b$ , $BD = 3$

Then $\frac{AD}{BD} = \frac{1}{3} = \frac{A}{B}$ and $\frac{AC}{BC} = \frac{2}{b} = \frac{A}{B}$ .
Therefore, $\frac{1}{3} = \frac{2}{b} \implies b = 6$ .

So $2xy+x+6y+3=(x+3)(2y+1)$ .
Then $2xy+x+by+3 = (Ax+B)(Cy+D)$ ,
$AC=2$ , $AD=1$ , $BC=6$ , $BD=3$
If $D=1$ , then $B=3$ , $A=1$ , and $C=2$ .
$f(x, y) = a(x+3)(2y+1)$ ,
$\int_0^1 \int_0^1 f(x, y) dxdy = 1$
$\int_0^1 \int_0^1 a(x+3)(2y+1) dxdy = a \int_0^1 (x+3)dx \int_0^1 (2y+1) dy$
$= a [\frac{x^2}{2} + 3x]_0^1 [y^2+y]_0^1 = a(\frac{1}{2} + 3)(1+1) = a(\frac{7}{2})(2) = 7a = 1$
So $a = \frac{1}{7}$ .
Therefore, $a = \frac{1}{7}$ and $b = 6$ .

### 小問C3

総観測数は $N=3\cdot4\cdot2=24$。各自由度は

$$
f_A=3-1=2,\quad f_B=4-1=3,\quad
f_{A\times B}=(3-1)(4-1)=6,\quad
f_E=3\cdot4(2-1)=12,\quad f_T=24-1=23.
$$

誤差平方和と誤差平均平方は

$$
S_E=82-10-30-18=24,\qquad V_E=\frac{24}{12}=2.
$$

各成分の平均平方を $V=S/f$、各効果の分散比を $F=V/V_E$ で求めると、

| 変動因 | 平方和 $S$ | 自由度 $f$ | 平均平方 $V$ | 分散比 $F$ |
|:--|--:|--:|--:|--:|
| A | 10 | 2 | 5 | 2.5 |
| B | 30 | 3 | 10 | 5 |
| $A\times B$ | 18 | 6 | 3 | 1.5 |
| 誤差 E | 24 | 12 | 2 | — |
| 計 | 82 | 23 | — | — |

したがって、**①は $6$、②は $2$、③は $5$** である。

### 小問C4

共分散の性質より、

$C(x+y, 2x - y) = C(x, 2x-y) + C(y, 2x-y)$

$ = C(x, 2x) - C(x, y) + C(y, 2x) - C(y,y)$

$ = 2C(x, x) - C(x, y) + 2C(y, x) - C(y,y)$

ここで、 $C(x,x) = V(x)$ 、 $C(y,y) = V(y)$ 、 $C(y,x) = C(x,y)$ を用いると、

$ = 2V(x) - C(x, y) + 2C(x, y) - V(y)$

$ = 2V(x) + C(x, y) - V(y)$

与えられた値 $V(x) = 2$ , $V(y) = 3$ , $C(x,y) = 1$ を代入すると、

$ = 2(2) + 1 - 3 = 4 + 1 - 3 = 2$

したがって、 $C(x+y, 2x-y) = 2$ である。
