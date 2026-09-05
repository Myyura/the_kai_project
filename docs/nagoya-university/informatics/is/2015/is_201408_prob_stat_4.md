---
sidebar_label: "2014年8月実施 確率・統計 [4]"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 名古屋大学 情報科学研究科 情報システム学専攻 2014年8月実施 確率・統計 [4]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

N人の生徒 $(N \geq 2)$ が数学と物理の試験を受けた。 $i$ 番目の生徒の数学と物理の点数をそれぞれ $x_i, y_i (1 \leq i \leq N)$ とするとき、数学と物理の点数の相関係数を求める式を示せ。但し、数学、物理ともに $N$ 人の点数が全て同じということはなかった。


[出典：名古屋大学 入学試験問題](https://web.archive.org/web/20210425112646id_/http://www.is.nagoya-u.ac.jp/exam-old/d21408.pdf)

### 题目描述

有 $N$ 名学生参加数学与物理考试，其中 $N\ge2$。第 $i$ 名学生的数学、物理成绩分别记为 $x_i,y_i$（$1\le i\le N$）。已知数学成绩并非全部相同，物理成绩也并非全部相同。写出计算这两组成绩相关系数的公式。

## **Kai**

相関係数 $r$ は次のように定義されます。

$$
r = \frac{\sum_{i=1}^{N} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{N} (x_i - \bar{x})^2} \sqrt{\sum_{i=1}^{N} (y_i - \bar{y})^2}}
$$

ここで、

$\bar{x} = \frac{1}{N} \sum_{i=1}^{N} x_i$ は数学の点数の平均,
$\bar{y} = \frac{1}{N} \sum_{i=1}^{N} y_i$ は物理の点数の平均です。

式を整理すると

$$
r = \frac{N\sum_{i=1}^{N} x_i y_i - \sum_{i=1}^{N} x_i \sum_{i=1}^{N} y_i}{\sqrt{N\sum_{i=1}^{N} x_i^2 - (\sum_{i=1}^{N} x_i)^2} \sqrt{N\sum_{i=1}^{N} y_i^2 - (\sum_{i=1}^{N} y_i)^2}}
$$

数学と物理の点数が全て同じということはないため、分母はゼロになりません。
