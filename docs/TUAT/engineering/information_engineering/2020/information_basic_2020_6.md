---
sidebar_label: "2020年度 情報基礎 6"
tags:
  - Tokyo-University-of-Agriculture-and-Technology
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Conditional-Entropy
  - Computer-Science.Information-Theory.Mutual-Information
---

# 東京農工大学 工学府 情報工学専攻 2020年度 情報基礎 6

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2020%E5%B9%B4%E5%BA%A6_%E6%83%85%E5%A0%B1%E5%9F%BA%E7%A4%8E_6.html) refined with GPT 6 Astra)

## **Description**

サイコロを一つ振り、出た目を確率変数 $X$ とする。偶数か奇数かを表す確率変数 $Y$ は、偶数なら $Y=1$、奇数なら $Y=2$ とする。各目は等確率で生じる。すべての解答は既約分数、$\log$ 表記のままでよい。原試験では答えのみを記入する。

[1] $X$ の分散 $V(X)$ を求めよ。

[2] $Y$ のエントロピー $H(Y)$ を求めよ。

[3] $X$ のエントロピー $H(X)$ を求めよ。

[4] 条件付きエントロピー $H(X\mid Y)$ を求めよ。

[5] 相互情報量 $I(X;Y)$ を求めよ。

#### 题目描述

投掷一枚公平骰子，点数为 $X$；若点数为偶数则 $Y=1$，为奇数则 $Y=2$。求：1. $V(X)$；2. $H(Y)$；3. $H(X)$；4. $H(X\mid Y)$；5. $I(X;Y)$。答案可保留既约分数及对数形式，原考试仅需填写答案。

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
\boxed{I(X;Y)=H(X)-H(X\mid Y)=\log6-\log3=\log2}.
$$

情報量をビット単位で表す場合は対数の底を2とし、$H(Y)=I(X;Y)=1$ となる。

## **Reference**

- [大学公式問題（6ページ（公式PDFの保存版））](https://web.archive.org/web/20220819071049id_/http://web.tuat.ac.jp/~tkakomon/r2/13.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2020%E5%B9%B4%E5%BA%A6_%E6%83%85%E5%A0%B1%E5%9F%BA%E7%A4%8E_6.html)
