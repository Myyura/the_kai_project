---
sidebar_label: '2021年7月実施 専門基礎A [A-7]'
tags:
  - Kyoto-University
  - Computer-Science.Computer-Architecture.Number-Representation
  - Computer-Science.Computer-Architecture.Memory-Alignment
  - Computer-Science.Computer-Architecture.Performance-Analysis
  - Computer-Science.Computer-Architecture.Branch-Penalty
---
# 京都大学 情報学研究科 通信情報システム専攻 2021年7月実施 専門基礎A \[A-7\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e), 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_cce.pdf)

下記のすべての問に答えよ。  

### (1)
2進表現について、以下の問に答えよ。

(a) 次の10進数を 8 ビットの 2 の補数表現で表せ。  
- (i) +80  
- (ii) -48

(b) 次の 8 ビットの 2 の補数表現の 2 進数を 8 ビットの符号付き絶対値表現に変換せよ。  
- (i) 10111000  
- (ii) 11000111

(c) 次の 8 ビットの符号付き絶対値表現の 2 進数体系での加算および減算の結果を示せ。  
- (i) 10111000 + 11000111  
- (ii) 10111000 - 11000111

(d) 次の 8 ビットの 2 の補数表現の 2 進数体系での加算および減算の結果を示せ。  
- (i) 10111000 + 11000111  
- (ii) 10111000 - 11000111

(e) 2 の補数表現の 2 進数の符号拡張について説明せよ。

### (2)
命令やデータのメモリ内での配置における整列化制約について説明せよ。

### (3)
以下の同じ命令セットアーキテクチャの三つのプロセッサにおいて、実行命令数が 10,000,000 で、そのうち 10% が条件分岐命令であるプログラムを実行した場合の計算時間を求めよ。条件分岐命令の 60% で条件が成立するものとする。

(a) クロック・サイクル時間が 2ns の単一サイクル方式のプロセッサ。

(b) クロック・サイクル時間が 500ps の 5 段パイプライン方式のプロセッサ。  
ただし、条件分岐命令で条件が成立した場合、1 サイクルストールする。

(c) クロック・サイクル時間が 400ps の 8 段パイプライン方式のプロセッサ。  
ただし、条件分岐命令で条件が成立した場合、2 サイクルストールする。

### 题目描述

回答全部问题。

1. 关于二进制表示：
   1. 将十进制 $+80$、$-48$ 写成 8 位补码。
   2. 将 8 位补码 `10111000`、`11000111` 转换为 8 位原码。
   3. 在 8 位原码体系中计算：
      (i) `10111000 + 11000111`；
      (ii) `10111000 − 11000111`。
   4. 在 8 位补码体系中计算同样两式。
   5. 说明补码二进制数的符号扩展。
2. 说明指令和数据在内存中布局时的对齐约束。
3. 某程序在三种相同指令集架构的处理器上执行，共执行 $10{,}000{,}000$ 条指令，其中 $10\%$ 为条件分支，且 $60\%$ 的条件分支被执行（条件成立）。分别求执行时间：
   1. 单周期处理器，时钟周期 $2\,\mathrm{ns}$；
   2. 五级流水线处理器，时钟周期 $500\,\mathrm{ps}$；每个条件成立的分支停顿 1 周期；
   3. 八级流水线处理器，时钟周期 $400\,\mathrm{ps}$；每个条件成立的分支停顿 2 周期。

## **Kai**
### (1) 
#### (a) 
*   **(i) +80:** $80 = 64 + 16 = 01010000_2$. Since it is positive, the representation is **01010000**.
*   **(ii) -48:** $+48 = 00110000_2$. To get two's complement, invert bits (11001111) and add 1. Result: **11010000**.

#### (b) 
*   **(i) 10111000:** The MSB is 1 (negative). In two's complement, the magnitude is found by inverting (01000111) and adding 1, which is $01001000_2 = 72_{10}$. Signed-magnitude is **11001000**.
*   **(ii) 11000111:** The MSB is 1 (negative). Inverting (00111000) and adding 1 gives $00111001_2 = 57_{10}$. Signed-magnitude is **10111001**.

#### (c) 
*   **(i) Addition:** $(-56) + (-71) = -127$. Binary: **11111111**.
*   **(ii) Subtraction:** $(-56) - (-71) = +15$. Binary: **00001111**.

#### (d) 
*   **(i) Addition:** 
    10111000 + 11000111 = 101111111
    Truncating to 8 bits: **01111111** (Note: Overflow occurred as -72 + (-57) = -129, which exceeds 8-bit range).
*   **(ii) Subtraction:** 
    10111000 - 11000111 = 10111000 + 00111001 = 11110001 (Value: -15)

#### (e) 
Sign extension is the operation of increasing the number of bits of a binary number while preserving its signed value. This is achieved by replicating the most significant bit (the sign bit) into the new higher-order positions. For example, extending the 4-bit two's complement $1101_2$ (-3) to 8 bits results in $11111101_2$.


### (2) 

An alignment constraint requires an instruction or data object to start at an address divisible by its required alignment. The requirement depends on the instruction set and data type. For example, natural alignment for a 4-byte word means an address divisible by 4; an instruction may instead require alignment to its encoding unit. 

**Implementation Reason:**
Many processor architectures fetch data in fixed-size blocks (e.g., 32 or 64 bits); if data is misaligned, the processor might require two memory accesses and additional bit-shifting logic to retrieve a single data element, significantly degrading performance or causing hardware exceptions.

### (3) 
**Parameters:**
*   Total instructions $I = 10^7$
*   Branch instructions $I_{br} = 10^6$
*   Non-branch $I_{oth} = 9 \times 10^6$
*   Branch taken rate $P_{taken} = 60\%$

#### (a) 
Every instruction takes 1 cycle. $CPI = 1$.

$$
\text{Time} = 10^7 \times 2\text{ ns} = \mathbf{20\text{ ms}}
$$

### (b) 
Base $CPI = 1$.
*   Penalty cycles = $1,000,000 \times 0.60 \times 1 = 600,000$
*   Total cycles = $10,000,000 + (5-1) + 600,000 = 10,600,004$

$$
\text{Time} = 10{,}600{,}004 \times 500 \times 10^{-12}\text{ s}
= \mathbf{5.300002\text{ ms}}\approx\mathbf{5.3\text{ ms}}
$$

### (c)
Base $CPI = 1$.
*   Penalty cycles = $1,000,000 \times 0.60 \times 2 = 1,200,000$
*   Total cycles = $10,000,000 + (8-1) + 1,200,000 = 11,200,007$

$$
\text{Time} = 11{,}200{,}007 \times 400 \times 10^{-12}\text{ s}
= \mathbf{4.4800028\text{ ms}}\approx\mathbf{4.48\text{ ms}}
$$
