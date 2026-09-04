---
sidebar_label: 2022年8月実施 選択問題 計算機工学 4-2
tags:
  - University-of-Electro-Communications
  - Computer-Science.Computer-Architecture.Number-Representation
  - Computer-Science.Programming.Bitwise-Operation
  - Electrical-Electronic.Digital-Logic.Half-and-Full-Adders
  - Computer-Science.Computer-Architecture.Performance-Analysis
  - Computer-Science.Computer-Architecture.Cache
  - Computer-Science.Computer-Architecture.Average-Memory-Access-Time
---

# 電気通信大学 情報理工学研究科 情報学専攻 2022年8月実施 選択問題 計算機工学 4-2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

1. $(2.22)_8$ を 10 進数の分数で表せ。8 ビット 2 の補数で表した負数 $11111111$ の絶対値を 10 進数で答えよ。また、16 ビット値 $x$ の 6 ビット右ローテートをシフト・ビット論理演算で表せ。
2. 全加算器の桁上がりを積和形で表し、二つの半加算器を用いた回路を示せ。
3. 1000 命令のプログラムを実行する。ビジネスモードは $3\,\mathrm{GHz}$、CPI は $30$、ゲームモードは $4\,\mathrm{GHz}$ とする。ビジネスモードの実行時間を求め、ゲームモードで実行時間を半減できるときの CPI を求めよ。
4. ミスペナルティは変更前のヒット時間の 10 倍で、キャッシュサイズに依存しない。以下に答えよ。
   1. ヒット時間 $1\,\mathrm{ns}$、ミスペナルティ $10\,\mathrm{ns}$、ミス率 $10\%$ の平均メモリアクセス時間。
   2. 同じシステムで平均アクセス時間を $1.5\,\mathrm{ns}$ にするミス率。
   3. キャッシュを 2 倍にするとミス率が $20\%$ から $10\%$ になる。平均アクセス時間を短縮するには、ヒット時間の増加を変更前の何倍未満に抑えるべきか。

### 题目描述

考查进制与补码、循环移位、全加器、处理器性能公式，以及缓存平均访问时间和容量扩大时的权衡。

## **Kai**

### 1.

#### (1)

$$
(2.22)_8
=2+\frac2{8}+\frac2{8^2}
=\boxed{\frac{73}{32}}\ (=2.28125).
$$

#### (2)

8 ビット 2 の補数 $11111111$ は $-1$ を表す。したがって、

$$
\boxed{|11111111_2|=1}.
$$

#### (3)

$x$ を符号なし 16 ビット値とすると、下位 6 ビットを上位へ移せばよい。したがって、

$$
\boxed{
y=(x\mathbin{\gg}6)\mathbin{\vert}
\bigl((x\mathbin{\&}\mathtt{0x003F})\mathbin{\ll}10\bigr)}.
$$

### 2.

#### (1)

全加算器の桁上がりは、三入力のうち少なくとも二つが $1$ のとき $1$ である。よって、

$$
\boxed{c_{\mathrm{out}}=ab+ac_{\mathrm{in}}+bc_{\mathrm{in}}}.
$$

#### (2)

第一の半加算器で

$$
s_1=a\oplus b,\qquad c_1=ab
$$

を作り、第二の半加算器で

$$
s=s_1\oplus c_{\mathrm{in}},\qquad
c_2=s_1c_{\mathrm{in}}
$$

を作る。最後に

$$
c_{\mathrm{out}}=c_1\lor c_2
$$

とすればよい。

~~~mermaid
flowchart LR
  a[a] --> H1[半加算器 1]
  b[b] --> H1
  H1 -->|s1| H2[半加算器 2]
  cin[cin] --> H2
  H1 -->|c1| O[OR]
  H2 -->|c2| O
  H2 -->|s| sum[s]
  O --> cout[cout]
~~~

### 3.

処理時間は

$$
T=\frac{\text{命令数}\times\mathrm{CPI}}{\text{クロック周波数}}
$$

である。

#### (1)

$$
T_{\mathrm{business}}
=\frac{1000\cdot30}{3\times10^9}
=10^{-5}\ \mathrm{s}.
$$

したがって、

$$
\boxed{T_{\mathrm{business}}=10\ \mu\mathrm{s}}.
$$

#### (2)

ゲームモードでは $T=5\ \mu\mathrm{s}$ なので、

$$
\mathrm{CPI}
=\frac{(5\times10^{-6})(4\times10^9)}{1000}
=\boxed{20}.
$$

### 4.

平均メモリアクセス時間は

$$
T_{\mathrm{avg}}
=T_{\mathrm{hit}}
+r_{\mathrm{miss}}T_{\mathrm{penalty}}
$$

である。

#### (1)

$$
T_{\mathrm{avg}}=1+0.10\cdot10
=\boxed{2\ \mathrm{ns}}.
$$

#### (2)

$$
1+10r_{\mathrm{miss}}=1.5
$$

より、

$$
\boxed{r_{\mathrm{miss}}=0.05=5\%}.
$$

#### (3)

変更前のヒット時間を $t$、変更後を $kt$ とする。ミスペナルティ $10t$ はキャッシュサイズに依存しないので、

$$
T_{\mathrm{old}}=t+0.2(10t)=3t,
$$

$$
T_{\mathrm{new}}=kt+0.1(10t)=(k+1)t.
$$

アクセス時間を短縮する条件は

$$
k+1<3.
$$

したがって、ヒット時間の増加は

$$
\boxed{2\text{ 倍未満}}
$$

に抑える必要がある。
