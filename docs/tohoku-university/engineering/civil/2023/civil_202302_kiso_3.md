---
sidebar_label: "2023年2月実施 基礎科目 [3] 確率統計"
tags:
  - Tohoku-University
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Bayes-Theorem
---
# 東北大学 工学研究科 土木工学専攻 2023年2月実施 基礎科目 \[3\] 確率統計

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 原題に基づく要約（日本語）

[公式原題](https://www.civil.tohoku.ac.jp/admission/img/2023_spring_BasicSubjectsJ.pdf)

1. 箱1〜4から等確率で1箱を選び、その中から部品を無作為に1個取り出す。各箱の部品数は順に $2000,500,1000,1000$ 個、不良品率は $5\%,35\%,20\%,20\%$。不良品を取り出す確率と、不良品であったとき箱2から取り出した条件付き確率を求める。
2. 長方形の辺の測定値 $X,Y$ は独立で、平均は $\mu_x,\mu_y$、分散は $\sigma_x^2,\sigma_y^2$。独立同分布の測定 $n$ 組から面積 $A=\mu_x\mu_y$ を推定する。
   $$A_a=\frac1n\sum_{i=1}^nX_iY_i,\qquad A_b=\bar X\bar Y.$$
   (1) 両推定量の不偏性を示す。(2) $XY$ の分散、(3) $A_a$ の分散、(4) $A_b$ の分散を求める。(5) $\mu_x=\mu_y=1,\ \sigma_x^2=\sigma_y^2=0.5,\ n=10$ の場合の分散比を求める。

### 题目描述

1. 从四个箱子中等概率选取一个，再从该箱中随机取一个零件。四箱零件数依次为 $2000,500,1000,1000$，次品率依次为 $5\%,35\%,20\%,20\%$。求取出次品的概率，以及已知取出次品时它来自箱 2 的条件概率。
2. 长方形两边的测量值 $X,Y$ 相互独立，均值为 $\mu_x,\mu_y$，方差为 $\sigma_x^2,\sigma_y^2$。用独立同分布的 $n$ 组测量结果估计面积 $A=\mu_x\mu_y$，考虑
   $$A_a=\frac1n\sum_{i=1}^nX_iY_i,\qquad A_b=\bar X\bar Y.$$
   证明两种估计量都无偏，分别求 $XY$、$A_a$、$A_b$ 的方差；当 $\mu_x=\mu_y=1,\ \sigma_x^2=\sigma_y^2=0.5,\ n=10$ 时，求两种估计量的方差比。

## **Kai**
### 1.
#### (1)

$$
\begin{aligned}
\frac{1}{4} \cdot \frac{5}{100}
+ \frac{1}{4} \cdot \frac{35}{100}
+ \frac{2}{4} \cdot \frac{20}{100}
&= \frac{1}{5}
\end{aligned}
$$

#### (2)
取り出された部品が箱2からのものでかつ不良品である確率は

$$
\begin{aligned}
\frac{1}{4} \cdot \frac{35}{100} = \frac{7}{80}
\end{aligned}
$$

であるから、求める条件付き確率は

$$
\begin{aligned}
\frac{\frac{7}{80}}{\frac{1}{5}} = \frac{7}{16}
\end{aligned}
$$

である。

### 2.
#### (1)
独立性より $E[X_iY_i]=\mu_x\mu_y=A$ であり、$\bar X$ と $\bar Y$ も独立なので、

$$E[A_a]=E[A_b]=A.$$

#### (2)
$Z=XY$ とすると、

$$
\operatorname{Var}(Z)
=(\sigma_x^2+\mu_x^2)(\sigma_y^2+\mu_y^2)-\mu_x^2\mu_y^2
=\sigma_x^2\sigma_y^2+\mu_y^2\sigma_x^2+\mu_x^2\sigma_y^2.
$$

#### (3)
各組は独立であるから、

$$\operatorname{Var}(A_a)=\frac{\sigma_x^2\sigma_y^2+\mu_y^2\sigma_x^2+\mu_x^2\sigma_y^2}{n}.$$

#### (4)
(2) を $\bar X,\bar Y$ に適用すると、

$$\operatorname{Var}(A_b)=\frac{\sigma_x^2\sigma_y^2}{n^2}+\frac{\mu_y^2\sigma_x^2+\mu_x^2\sigma_y^2}{n}.$$

#### (5)
指定値では $\operatorname{Var}(A_a)=1/8$、$\operatorname{Var}(A_b)=41/400$ なので、

$$\boxed{\frac{\operatorname{Var}(A_a)}{\operatorname{Var}(A_b)}=\frac{50}{41}\simeq1.22}.$$

この条件では $A_b$ の方が分散が小さい。

## **Reference**

- [東北大学 土木系 2023年春季 基礎科目（PDF）](https://www.civil.tohoku.ac.jp/admission/img/2023_spring_BasicSubjectsJ.pdf)
