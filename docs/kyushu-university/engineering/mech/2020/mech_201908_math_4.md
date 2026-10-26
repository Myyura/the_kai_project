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

3回の測定によって、$X$ と $Y$ という2つのスカラー量の組からなるデータ

$$
\begin{gathered}
(X_i,Y_i)=(0,1),(1,2),(2,5)\\
(i=1,2,3)
\end{gathered}
$$

が得られたとする。$X$ と $Y$ との関係を説明するため、$X$ の多項式 $f(X)$ で表される

$$
Y=f(X)
$$

というモデルを導入し、モデルとデータとの差の二乗和 $S$ を以下に定義する。

$$
S=\sum_{i=1}^N\bigl(f(X_i)-Y_i\bigr)^2.
$$

ここで $N$ はデータ点数を表す。（50点）

(1) モデル $Y=f_1(X)$ を以下の式で与えたとき、$S$ を最小とする係数 $a,b$ を求めよ。

$$
f_1(X)=aX+b.
$$

(2) モデル $Y=f_2(X)$ を以下の式で与えたとき、$S$ を最小とする係数 $c,d$ を求めよ。

$$
f_2(X)=cX^2+d.
$$

(3) (1)および(2)で与えられた2つのモデルのうち、どちらのモデルがより優れているか答えよ。ここで優れたモデルとは、上記のデータによる $S$ の最小値が小さなモデルを意味する。また、データ点と2つのモデルの概形をグラフにまとめて図示せよ。

### 题目描述

通过3次测量，获得由两个标量 $X,Y$ 组成的数据

$$
\begin{gathered}
(X_i,Y_i)=(0,1),(1,2),(2,5)\\
(i=1,2,3)
\end{gathered}.
$$

为了说明 $X$ 与 $Y$ 的关系，引入由 $X$ 的多项式 $f(X)$ 表示的模型

$$
Y=f(X),
$$

并将模型与数据之间的差的平方和定义为

$$
S=\sum_{i=1}^N\bigl(f(X_i)-Y_i\bigr)^2.
$$

其中 $N$ 表示数据点数。（50分）

(1) 以如下式子给出模型 $Y=f_1(X)$，求使 $S$ 最小的系数 $a,b$。

$$
f_1(X)=aX+b.
$$

(2) 以如下式子给出模型 $Y=f_2(X)$，求使 $S$ 最小的系数 $c,d$。

$$
f_2(X)=cX^2+d.
$$

(3) 回答(1)、(2)给出的两个模型中哪一个更好。这里“更好”是指对于上述数据，$S$ 的最小值较小。另外，将数据点和两个模型的大致图形画在同一张图中。

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
