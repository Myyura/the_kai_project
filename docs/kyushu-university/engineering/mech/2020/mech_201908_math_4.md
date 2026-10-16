---
sidebar_label: "2019年8月実施 問4（数学）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Least-Squares-and-Minimum-Norm-Solutions
---

# 九州大学 工学府 機械系専攻 2019年8月実施 数学 問4

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

3 回の測定で $(X_i,Y_i)=(0,1),(1,2),(2,5)$（$i=1,2,3$）を得た。多項式 $f(X)$ で表されるモデル $Y=f(X)$ に対して

$$
S=\sum_{i=1}^N(f(X_i)-Y_i)^2
$$

と定義する。$N$ はデータ点数である。

1. $f_1(X)=aX+b$ のとき、$S$ を最小にする $a,b$ を求めよ。
2. $f_2(X)=cX^2+d$ のとき、$S$ を最小にする $c,d$ を求めよ。
3. 上記データによる $S$ の最小値が小さいモデルを優れたモデルとする。(1),(2) のうち優れたモデルを答え、データ点と二つのモデルの概形をグラフにまとめて図示せよ。

#### 题目描述

数据为 $(0,1),(1,2),(2,5)$，残差平方和定义为 $S=\sum_i(f(X_i)-Y_i)^2$。① 对模型 $aX+b$ 求最优系数。② 对模型 $cX^2+d$ 求最优系数。③ 按残差平方和最小值比较两模型，并将数据点与两条拟合曲线画在同一图中。

## **Kai**

### (1)

$$
S=(b-1)^2+(a+b-2)^2+(2a+b-5)^2.
$$

正規方程式は

$$
5a+3b=12,\qquad3a+3b=8.
$$

係数行列は正定値（主座小行列式 $5,6>0$）なので、この停留点が一意な最小点である。

$$
\boxed{a=2,\quad b=\frac23,\quad S_{1,\min}=\frac23}.
$$

### (2)

$c=d=1$ なら全データ点を通り $S=0$。二乗和の下限 $0$ を達成するため

$$
\boxed{c=1,\quad d=1,\quad S_{2,\min}=0}.
$$

### (3)

$0<2/3$ より、指定された基準では $\boxed{f_2(X)=X^2+1}$ の方が優れている。

![データ点と二つの最小二乗モデル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/kyushu_201908_math4.svg)

## **Reference**

- [九州大学 2020年度 数学 公式問題（PDF 2ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-math.pdf)
