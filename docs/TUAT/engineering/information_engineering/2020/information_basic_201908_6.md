---
sidebar_label: "2019年8月実施 情報基礎 6"
tags:
  - Tokyo-University-of-Agriculture-and-Technology
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Conditional-Entropy
  - Computer-Science.Information-Theory.Mutual-Information
---

# 東京農工大学 工学府 情報工学専攻 2019年8月実施 情報基礎 6

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2020%E5%B9%B4%E5%BA%A6_%E6%83%85%E5%A0%B1%E5%9F%BA%E7%A4%8E_6.html) refined with GPT 6 Astra)

## **Description**

1 つのサイコロを振り，出た目を表す確率変数を $X$，出た目が偶数か奇数かを表す確率変数を $Y$（偶数の場合は $Y=1$，奇数の場合は $Y=2$）とする。ただし，サイコロの各目は等しい確率で生起するものとする。このとき以下の問いに答えよ。なお，すべての解答は既約分数，$\log$ 表記のままでよい。解答用紙には答えのみ記入せよ。

[1] $X$ の分散 $V(X)$ を求めよ。

[2] $Y$ のエントロピー $H(Y)$ を求めよ。

[3] $X$ のエントロピー $H(X)$ を求めよ。

[4] 条件付きエントロピー $H(X\mid Y)$ を求めよ。

[5] 相互情報量 $I(X;Y)$ を求めよ。

### 题目描述

投掷一枚骰子，以随机变量 $X$ 表示出现的点数，以随机变量 $Y$ 表示点数的奇偶性（偶数时 $Y=1$，奇数时 $Y=2$）。骰子各点数出现的概率相同。回答以下问题。所有答案均可保留为既约分数和对数形式，答题纸上只须填写答案。

[1] 求 $X$ 的方差 $V(X)$。

[2] 求 $Y$ 的熵 $H(Y)$。

[3] 求 $X$ 的熵 $H(X)$。

[4] 求条件熵 $H(X\mid Y)$。

[5] 求互信息 $I(X;Y)$。

## **Kai**

### [1]

$E[X]=(1+\cdots+6)/6=7/2$、$E[X^2]=(1^2+\cdots+6^2)/6=91/6$。よって

$$
\boxed{V(X)=\frac{91}{6}-\left(\frac72\right)^2=\frac{35}{12}}.
$$

### [2]–[3]

$Y$ は二値の一様分布、$X$ は六値の一様分布なので、

$$
\boxed{H(Y)=\log2,\qquad H(X)=\log6}.
$$

### [4]

偶奇が分かると候補の目は3個に絞られ、いずれも条件付き確率 $1/3$ である。したがって

$$
\boxed{H(X\mid Y)=\frac12\log3+\frac12\log3=\log3}.
$$

### [5]

$$
\boxed{\begin{gathered}
I(X;Y)=H(X)-H(X\mid Y)\\
=\log6-\log3\\
=\log2
\end{gathered}}.
$$

情報量をビット単位で表す場合は対数の底を2とし、$H(Y)=I(X;Y)=1$ となる。

## **Reference**

- [大学公式問題（6ページ（公式PDFの保存版））](https://web.archive.org/web/20220819071049id_/http://web.tuat.ac.jp/~tkakomon/r2/13.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2020%E5%B9%B4%E5%BA%A6_%E6%83%85%E5%A0%B1%E5%9F%BA%E7%A4%8E_6.html)
