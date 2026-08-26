---
sidebar_label: "2016年実施 4. 確率及び統計"
tags:
  - Tokyo-University-of-Agriculture-and-Technology
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Conditional-Probability
---
# 東京農工大学 生物システム応用科学府 2016年実施 4. 確率及び統計

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
$X\in\{0,1\}$、$Y\in\{0,1,2,3\}$ の同時確率関数を

$$
p(x,y)=k(x+y)+\frac1{16}
$$

とする。

1. $k$ を求めよ。
2. 周辺分布 $P(X=x),P(Y=y)$ を求めよ。
3. $X,Y$ が独立か判定せよ。
4. $P(X=1\mid Y=2)$ と $P(X=0,Y\ge2)$ を求めよ。

## **Kai**

### (1)

$$
1=\sum_{x=0}^{1}\sum_{y=0}^{3}p(x,y)=16k+\frac12
$$

より

$$
\boxed{k=\frac1{32}}.
$$

### (2)

$$
\boxed{P(X=x)=\frac{x}{8}+\frac7{16}}\qquad(x=0,1),
$$

$$
\boxed{P(Y=y)=\frac{y}{16}+\frac5{32}}\qquad(y=0,1,2,3).
$$

### (3)

$$
P(X=0,Y=0)=\frac1{16}\ne
\frac7{16}\cdot\frac5{32}=P(X=0)P(Y=0).
$$

したがって、$X,Y$ は独立でない。

### (4)

$$
\boxed{P(X=1\mid Y=2)=\frac{5/32}{9/32}=\frac59},
$$

$$
\boxed{P(X=0,Y\ge2)=\frac4{32}+\frac5{32}=\frac9{32}}.
$$

## **Reference**

- [東京農工大学 生物機能システム科学専攻 入試情報](https://www.tuat.ac.jp/base/examination/schedule_master.html)
- [東京農工大学 2016年実施 基礎科目問題](https://www.tuat.ac.jp/documents/base/jp/examination/2016-1.pdf)
