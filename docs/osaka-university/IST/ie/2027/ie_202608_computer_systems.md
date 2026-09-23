---
sidebar_label: 2026年8月実施 2. 【必須問題】計算機システムとシステムプログラム
sidebar_position: 2
tags:
  - Osaka-University
  - Computer-Science.Computer-Architecture
  - Computer-Science.Computer-Architecture.Cache
  - Computer-Science.Computer-Architecture.Cache-Address-Mapping
  - Computer-Science.Operating-Systems
  - Computer-Science.Operating-Systems.Virtual-Memory
  - Computer-Science.Operating-Systems.Page-Replacement
---
# 大阪大学 情報科学研究科 情報工学 2026年8月実施 2. 【必須問題】計算機システムとシステムプログラム

## **Author**

[xxxuuu](https://github.com/xxxuuu)

## **Description**

配点：(1-1) 15，(1-2) 15，(1-3-1) 10，(1-3-2) 10，(2-1) 15，(2-2) 30，(2-3) 30

### (1)

オペレーティングシステム（operating system）におけるメモリ管理（memory management）に関する以下の各小問に答えよ。

#### (1-1)

以下の (a)～(c) の記述は，固定長領域割り付け方式（fixed-size allocation）または可変長領域割り付け方式（variable-size allocation）の性質に関する説明である。固定長領域割り付け方式に該当するものを全て選べ。

(a) 管理方式が単純であり，割り付けや解放を高速に行いやすい。

(b) 割り付けた領域の内部に，実際には使用されない部分が生じやすい。

(c) 割り付けと解放を繰り返すと空き領域が小片化あるいは断片化し，空き領域の総量は十分でも要求された大きさの連続領域を確保できないことがある。

#### (1-2)

仮想アドレス長（virtual address length）が32［ビット］(bit)，主記憶容量が256［メガバイト］(Mbyte)，ページサイズが4［キロバイト］(Kbyte) であるページング（paging）方式のシステムを考える。以下の (1-2-1)～(1-2-3) に答えよ。ただし，アドレス（address）はバイト（Byte）単位で付与されるものとし，実アドレスは主記憶上の全バイトを一意に指定するのに必要最小限のビット数で表現されるものとする。

##### (1-2-1)

ページ内オフセット（page offset）のビット数を答えよ。

##### (1-2-2)

仮想ページ番号（virtual page number）のビット数を答えよ。

##### (1-2-3)

実ページ番号（physical page number）のビット数を答えよ。

#### (1-3)

ページ置換アルゴリズム（page replacement algorithm）に関する以下の (1-3-1), (1-3-2) に答えよ。

##### (1-3-1)

あるプロセスが仮想ページを次の順に参照する。

$$
0,\ 1,\ 2,\ 0,\ 1,\ 3,\ 0,\ 1,\ 0,\ 1
$$

ページ枠（page frame）の数は3とし，初期状態において全てのページ枠は空であるものとする。上の参照列に対して，ページ置換アルゴリズムとして FIFO（First In First Out）を用いたとき，ページフォールト（page fault）は何回発生するか答えよ。

##### (1-3-2)

LRU（Least Recently Used）は，代表的なページ置換アルゴリズムの一つである。LRU における置換対象ページの選択方針と，その方針がページフォールトの抑制に有効とされる理由をそれぞれ1行で説明せよ。

### (2)

図1の疑似コードで表されるプログラムを，設計A，B，またはCのキャッシュメモリ（cache memory）を備えた計算機を用いて実行することを考える。

```text
t0 ← K
while t0 ≠ 0 do
    t1 ← Memory[0x04]
    t2 ← Memory[0x24]
    t3 ← Memory[0x08]
    t4 ← Memory[0x0C]
    t0 ← t0 − 1
end while
```

<div align="center">図1　疑似コード</div>

- 設計A：ダイレクトマップ（direct map）。ブロックサイズ（block size）は1［ワード］(word)。
- 設計B：2-ウェイセットアソシアティブ（two-way set associative）。ブロックサイズは1［ワード］。置換方式は FIFO とする。
- 設計C：ダイレクトマップ。ブロックサイズは4［ワード］。

キャッシュ容量（cache capacity）はいずれの設計でも8［ワード］とする。

図1において，t0～t4は CPU のレジスタ（register）を表す変数，K は1以上の整数，Memory[address] はメモリの address 番地からデータをロード（load）することを表す。また，0x に続く表記は16進数（hexadecimal）を表す。アドレスとデータのビット数はどちらも32，1［ワード］は4［バイト］，メモリのアドレス指定はバイト単位で行うものとする。メモリブロック（memory block）はアドレス 0x00 を起点としてブロックサイズごとに整列しているものとする。いずれのマッピング方式においても，アドレス 0x00 を起点とする連続するメモリブロックがセット（set）0，セット1，... の順に割り付けられ，最後のセットの次は再びセット0に戻るものとする。

なお，キャッシュアクセス（cache access）として考えるのは Memory[address] によるデータロードのみとする。このプログラムはコンパイラにより最適化されないものとし，アドレスは全て物理アドレスとする。キャッシュ容量はデータ本体を格納する容量を指し，タグ（tag）や有効ビット（valid bit）の容量は含めない。キャッシュは初期状態では空であるとする。

以下の各小問に答えよ。

#### (2-1)

設計A～Cそれぞれについて，キャッシュ内のブロック数，セット数，セット番号ビット（set-index bit）数を求めよ。さらに，アドレス 0x04，0x24，0x08，0x0C がどのセットに対応するかを示せ。なお，セット番号ビット数とは，物理アドレスをタグ，セット番号，ブロック内オフセット（block offset）に分けたときのセット番号部分のビット数を指す。

#### (2-2)

設計A～Cそれぞれについて，図1の疑似コード開始から終了までのキャッシュミス（cache miss）回数を $K=1$ と $K=2$ の場合でそれぞれ求めよ。

#### (2-3)

設計A～Cのキャッシュミス率（cache miss rate）をそれぞれ $K$ の式で表せ。
