---
sidebar_label: 2023年8月実施 選択問題 計算機工学 4-2
tags:
  - University-of-Electro-Communications
  - Computer-Science.Computer-Architecture.Number-Representation
  - Computer-Science.Computer-Architecture.Pipelining
  - Electrical-Electronic.Digital-Logic.Boolean-Function-Minimization
  - Computer-Science.Computer-Architecture.Cache
  - Computer-Science.Computer-Architecture.Performance-Analysis
---

# 電気通信大学 情報理工学研究科 情報学専攻 2023年8月実施 選択問題 計算機工学 4-2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 問1

1. 8 進数 $(2023)_8$ を 16 進数で表せ。
2. 2 進数 $(0101)_2$ の 2 の補数を 4 ビットで表せ。
3. 2 GiB のメモリをバイトアドレッシングするときのアドレス線数を求めよ。
4. 1 台の洗濯機と 1 台の乾燥機で 4 回分を処理する。1 回につき洗濯 30 分、乾燥 40 分、折りたたみ 10 分の順で行うとき、最小合計時間を求めよ。
5. 次の論理式を簡単化せよ。

$$
\overline{\,\overline{A+BC}+\overline{A\bar B}\,}.
$$

### 問2

読み出しのアクセス時間はキャッシュヒット時 1 ns、ミス時 5 ns、書き込みはヒット時 2 ns、ミス時 10 ns である。

1. ヒット率 $0.1$ のときと比べ、読み出しの平均アクセス時間が半分となるヒット率を求めよ。
2. ヒット率 $0.9$ とする。命令取り出し 100 回、データ読み出し 60 回、データ書き込み 40 回からなる命令列の平均メモリアクセス時間を求めよ。

### 問3

同じプログラムをコンパイラ A でコンパイルすると命令数 $1.00\times10^9$、実行時間 $1$ 秒、コンパイラ B では命令数 $1.50\times10^9$、実行時間 $1.2$ 秒となった。

1. クロック周波数が 2 GHz のとき、コンパイラ A のコードの CPI を求めよ。
2. 両コードの CPI が等しい別々のプロセッサで実行時間も等しいとき、A 側のクロック周波数は B 側の何倍か。

### 题目描述

题目考查进制与补码、字节寻址、三阶段流水调度、布尔式化简、缓存平均访问时间，以及由指令数、时钟频率和执行时间计算 CPI 与相对频率。

## **Kai**

### 問1

#### (1)

$$
(2023)_8=2\cdot8^3+2\cdot8+3=1043=(413)_{16}.
$$

したがって

$$
\boxed{(413)_{16}}.
$$

#### (2)

ビット反転後に $1$ を加えると

$$
0101\longrightarrow1010\longrightarrow\boxed{1011}.
$$

#### (3)

$$
2\ \mathrm{GiB}=2\cdot2^{30}=2^{31}\ \mathrm{byte}
$$

より、必要なアドレス線は

$$
\boxed{31\text{ 本}}.
$$

#### (4)

乾燥がボトルネックである。最初の洗濯 30 分、4 回の乾燥 $4\times40$ 分、最後の折りたたみ 10 分より

$$
\boxed{30+4\cdot40+10=200\text{ 分}}.
$$

#### (5)

De Morgan の法則より

$$
\begin{aligned}
\overline{\,\overline{A+BC}+\overline{A\bar B}\,}
&=(A+BC)(A\bar B)\\
&=\boxed{A\bar B}.
\end{aligned}
$$

### 問2

#### (1)

ヒット率を $h$ とすると、読み出しの平均時間は

$$
T_r(h)=h+5(1-h)=5-4h.
$$

$T_r(0.1)=4.6$ なので

$$
5-4h=2.3.
$$

したがって

$$
\boxed{h=0.675}.
$$

#### (2)

ヒット率 $0.9$ のとき

$$
T_r=0.9\cdot1+0.1\cdot5=1.4\ \mathrm{ns},\qquad
T_w=0.9\cdot2+0.1\cdot10=2.8\ \mathrm{ns}.
$$

読み出しは $100+60=160$ 回、書き込みは $40$ 回なので

$$
\boxed{
\frac{160\cdot1.4+40\cdot2.8}{200}
=1.68\ \mathrm{ns}}.
$$

### 問3

#### (1)

$$
\mathrm{CPI}
=\frac{\text{実行時間}\times\text{クロック周波数}}{\text{命令数}}
=\frac{1\cdot2\times10^9}{1.00\times10^9}
=\boxed{2}.
$$

#### (2)

$$
T=\frac{I\,\mathrm{CPI}}{f}
$$

であり、実行時間と CPI が等しいから

$$
\frac{f_A}{f_B}=\frac{I_A}{I_B}
=\frac{1.00}{1.50}
=\boxed{\frac23}.
$$
