---
sidebar_label: "2022年度 情報理論 3"
tags:
  - Niigata-University
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Huffman-Coding
  - Computer-Science.Information-Theory.Source-Extension
  - Computer-Science.Information-Theory.Coding-Efficiency
---
# 新潟大学 自然科学研究科 電気情報工学専攻 情報工学コース 2022年度 情報理論 3

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

題意の要約。
無記憶情報源 $X$ は

$$
P(x_1)=\frac34,\qquad P(x_2)=\frac14
$$

に従い、$x_1\mapsto1,\ x_2\mapsto0$ と符号化する。必要ならば $\log_2 3=1.59$ を用いてよい。

1. $H(X)$ を求めよ。
2. 平均符号長 $L$ と符号化効率 $\eta$ を求めよ。
3. 二次拡大情報源 $X^2$ の記号 $a_1=x_1x_1,a_2=x_1x_2,a_3=x_2x_1,a_4=x_2x_2$ の確率は順に $9/16,3/16,3/16,1/16$ である。Huffman 符号を一つ求めよ。
4. $H(X^2)$ を求めよ。
5. (3) の平均符号長と符号化効率を求めよ。

## **Kai**

### (1)

以下の近似値には指定値 $\log_2 3=1.59$ を用いる。

$$
H(X)=-\frac34\log_2\frac34-\frac14\log_2\frac14
=2-\frac34\log_2 3\simeq0.8075.
$$

### (2)

$$
L=1,\qquad \eta=\frac{H(X)}L\simeq0.8075.
$$

### (3)

一例として

$$
x_1x_1:0,\quad x_1x_2:10,\quad x_2x_1:110,\quad x_2x_2:111.
$$

### (4)

無記憶なので

$$
H(X^2)=2H(X)=4-\frac32\log_2 3\simeq1.615.
$$

### (5)

$$
L=\frac9{16}+2\frac3{16}+3\left(\frac3{16}+\frac1{16}\right)
=\frac{27}{16},
$$

$$
\eta=\frac{H(X^2)}L\simeq0.957.
$$

## **Reference**
- [新潟大学 令和4年度入試過去問題](https://www.gs.niigata-u.ac.jp/~gsweb/admission/r4_pq.html)
- [新潟大学 公式問題 PDF](https://www.gs.niigata-u.ac.jp/~gsweb/admission/exam/01%20R4_1%E6%AC%A1%E5%8B%9F%E9%9B%86_%E4%B8%80%E8%88%AC/r4-1-c1-1.pdf)
