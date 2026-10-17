---
sidebar_label: "2021年8月実施 情報理論 3"
tags:
  - Niigata-University
  - Computer-Science.Information-Theory.Entropy
  - Computer-Science.Information-Theory.Huffman-Coding
  - Computer-Science.Information-Theory.Source-Extension
  - Computer-Science.Information-Theory.Coding-Efficiency
---
# 新潟大学 自然科学研究科 電気情報工学専攻 情報工学コース 2021年8月実施 情報理論 3

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

生起確率を $P(x_1)=3/4$, $P(x_2)=1/4$ とする２つのシンボル $x_1,x_2$ からなる記憶のない情報源 $X$ があり，次表のとおり符号化した。以下の問に答えよ。なお，必要があれば $\log_2 3=1.59$ を用いよ。

| $x_i$ | $P(x_i)$ | 符号 (Code) |
|:---:|:---:|:---:|
| $x_1$ | $3/4$ | $1$ |
| $x_2$ | $1/4$ | $0$ |

(1) この情報源 $X$ のエントロピー $H(X)$ を求めよ。

(2) この符号の平均符号長 $L$ 及び符号化効率 $\eta$ を求めよ。

(3) この情報源 $X$ のシンボルを２つまとめた２次の拡大情報源 $X^2$ は以下のように定義される。ハフマン符号により符号化せよ。

| $a_i$ | $P(a_i)$ |
|:---:|:---:|
| $a_1=x_1x_1$ | $9/16$ |
| $a_2=x_1x_2$ | $3/16$ |
| $a_3=x_2x_1$ | $3/16$ |
| $a_4=x_2x_2$ | $1/16$ |

(4) この情報源 $X^2$ のエントロピー $H(X^2)$ を計算せよ。

(5) 問 (3) で導出した符号の平均符号長 $L$ 及び符号化効率 $\eta$ を求めよ。

#### 题目描述

无记忆信源 $X$ 由两个符号 $x_1,x_2$ 组成，其出现概率为 $P(x_1)=3/4$、$P(x_2)=1/4$，编码如下表。请回答下列问题。必要时可使用 $\log_2 3=1.59$。

| $x_i$ | $P(x_i)$ | 码字 |
|:---:|:---:|:---:|
| $x_1$ | $3/4$ | $1$ |
| $x_2$ | $1/4$ | $0$ |

(1) 求信源 $X$ 的熵 $H(X)$。

(2) 求该编码的平均码长 $L$ 及编码效率 $\eta$。

(3) 将信源 $X$ 的两个符号合为一组，定义如下二次扩展信源 $X^2$。请使用 Huffman 编码对其编码。

| $a_i$ | $P(a_i)$ |
|:---:|:---:|
| $a_1=x_1x_1$ | $9/16$ |
| $a_2=x_1x_2$ | $3/16$ |
| $a_3=x_2x_1$ | $3/16$ |
| $a_4=x_2x_2$ | $1/16$ |

(4) 计算信源 $X^2$ 的熵 $H(X^2)$。

(5) 求第 (3) 问所得到编码的平均码长 $L$ 及编码效率 $\eta$。

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
