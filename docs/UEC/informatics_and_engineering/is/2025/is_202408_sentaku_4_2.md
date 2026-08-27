---
sidebar_label: 2024年8月実施 選択問題 計算機工学 4-2
tags:
  - University-of-Electro-Communications
  - Electrical-Electronic.Digital-Logic.Boolean-Function-Minimization
  - Electrical-Electronic.Digital-Logic.Not-AND-and-Not-OR-Universal-Gates
  - Computer-Science.Computer-Architecture.Number-Representation
  - Computer-Science.Computer-Architecture.Performance-Analysis
  - Computer-Science.Computer-Architecture.Sequential-Access-Cache-Hit-Rate
---

# 電気通信大学 情報理工学研究科 情報学専攻 2024年8月実施 選択問題 計算機工学 4-2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 問1 数表現と論理回路

1. $(0.34375)_{10}$ を二進数で表せ。
2. 8 ビット符号付き整数の二の補数表現の範囲を求めよ。
3. 2100 個の漢字を固定長で一意に符号化する最小ビット数を求めよ。
4. $x(y+z)(\bar x+\bar z)$ を簡単化せよ。
5. $f(x_1,x_2,x_3,x_4)=x_1x_2+x_3\bar x_4$ を 2 入力 NAND ゲートだけで構成せよ。

### 問2 計算機性能

プログラム 1 は浮動小数点命令 5000 個と整数命令 25000 個からなる。クロックは 2.0 GHz、浮動小数点命令は 7 サイクル、整数命令は 1 サイクルを要する。実行時間と CPI を求めよ。また、CPI が 5 であるプログラム 2 の浮動小数点命令数と整数命令数の比を求めよ。

### 問3 キャッシュ

主記憶 4 MB、直接マップキャッシュ 4 KB、ブロック 8 B、バイトアドレッシングとする。インデックスのビット数を求めよ。空のキャッシュから連続する 1001 B をアドレス順に 1 B ずつ読むときのヒット率を求めよ。

### 题目描述

本题考查二进制与补码、布尔式化简和全 NAND 实现，按指令种类计算运行时间与 CPI，以及直接映射缓存的索引位数和顺序访问命中率。

## **Kai**

### 問1

#### (1)

$$
0.34375=\frac{11}{32}
$$

より

$$
\boxed{(0.34375)_{10}=(0.01011)_2}.
$$

#### (2)

$$
\boxed{-128\leq x\leq127}.
$$

#### (3)

$2^{11}=2048<2100\leq4096=2^{12}$ より

$$
\boxed{12\text{ ビット}}.
$$

#### (4)

$$
x(y+z)(\bar x+\bar z)
=xy\bar z.
$$

したがって

$$
\boxed{xy\bar z}.
$$

#### (5)

次の 4 個の NAND を用いればよい。

$$
\begin{aligned}
n_1&=\operatorname{NAND}(x_1,x_2)=\overline{x_1x_2},\\
n_2&=\operatorname{NAND}(x_4,x_4)=\bar x_4,\\
n_3&=\operatorname{NAND}(x_3,n_2)=\overline{x_3\bar x_4},\\
f&=\operatorname{NAND}(n_1,n_3)=x_1x_2+x_3\bar x_4.
\end{aligned}
$$

### 問2

総サイクル数は

$$
5000\cdot7+25000\cdot1=60000
$$

である。よって

$$
\boxed{T=\frac{60000}{2.0\times10^9}=30\ \mu\mathrm{s}},
$$

$$
\boxed{\mathrm{CPI}=\frac{60000}{30000}=2}.
$$

プログラム 2 の浮動小数点命令数を $F$、整数命令数を $I$ とすると

$$
\frac{7F+I}{F+I}=5.
$$

したがって

$$
\boxed{F:I=2:1}.
$$

### 問3

キャッシュブロック数は

$$
\frac{4\ \mathrm{KB}}{8\ \mathrm{B}}=512=2^9
$$

なので、インデックスは

$$
\boxed{9\text{ ビット}}
$$

である。1001 B は、先頭のブロック内オフセットによらず 126 ブロックにまたがる。各ブロックの最初のアクセスだけがミスなので

$$
\boxed{
\text{ヒット率}=\frac{1001-126}{1001}
=\frac{875}{1001}\simeq87.4\%}.
$$
