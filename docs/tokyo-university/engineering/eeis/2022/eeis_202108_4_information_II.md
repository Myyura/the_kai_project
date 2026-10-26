---
sidebar_label: 2021年8月実施 問題4 情報工学II
tags:
  - Tokyo-University
  - Computer-Science.Data-Structures.Hash-Table
  - Electrical-Electronic.Digital-Logic.Comparator-Circuit
  - Electrical-Electronic.Digital-Logic.D-Flip-Flop
---

# 東京大学 工学系研究科 電気系工学専攻 2021年8月実施 問題4 情報工学II


## **Author**
[donguri0912](https://sekakota.hatenablog.com/entry/eeis-2021-4), 祭音Myyura

## **Description**
### I.
論理回路に関する以下の問に答えよ．$2$bit の正の値 $A = a_2a_1$ と $B = b_2b_1$ を入力とする $2$bit比較器 $CMP$ を設計したい．比較器 $CMP$ は，入力が $A \ge B$ の時 $1$ を,それ以外の時 $0$ を出力 $c$ として出力する回路とする．$2$bit比較器 $CMP$ は，図 $1$ に示す記号で表される．

(1) $a_1$, $b_1$ を入力として，以下に示す $c_1$ を出力する $1$bit比較器 $CMP_1$ の真理値表を書け．

$$
c_1 = \left \{
\begin{aligned}
1,\quad a_1 \ge b_1 \\
0,\quad a_1 < b_1 \\
\end{aligned}
\right.
$$

(2) 問 (1) に示した $c_1$ と $a_2$, $b_2$ , を入力として，以下に示す $c_2$ を出力する $1$bit比較器 $CMP_2$ の真理値表を書け．

$$
c_2 = \left \{
\begin{aligned}
&1,\quad a_2 > b_2 \\
&c_1,\quad a_2 = b_2 \\
&0,\quad a_2 < b_2 \\
\end{aligned}
\right.
$$

(3) 問 (1) および (2) で示した比較器 $CMP_1 , CMP_2$ の回路を組合せることで $2$bit 比較器 $CMP$ を作成することができる. この回路を図 $2$ に示す記号を用いて図示せよ．

次に，$2$bit比較器 $CMP$ を用いて順序回路 $MAX$ を設計したい．$MAX$ は，$2$bit の正の値 $X_1$, $X_2$, $\cdots$ を順に入力すると，入力値の最大値を出力する．以下の手順で $MAX$ の回路を設計せよ．

(4) $2$ bit 比較器 $CMP$ と $2$ bit の $D$ フリップフロップ $(D-FF)$ を用いて，$D-FF$ に $\max(A,B)$ を記録する回路を設計したい．この回路を図 $1$ ，図 $2$ および 図 $3$ の記号を用いて図示せよ．

(5) 問 (4) で設計した回路の入力 $A$ に $X_i$ を, $B$ に $\max(X_1,X_2,\dots,X_{i-1})$ を配線することで，順序回路 $MAX$ を作成できる．順序回路 $MAX$ を図 $1$ ，図 $2$ および図 $3$ の記号を用いて図示せよ．ここで，入力 $B$ の初期値は $00$ であると仮定してよい．

<figure style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/eeis/2022/eeis_202108_4_information_II_p1.png" width="556" height="190" alt=""/>
</figure>

### II.
ハッシュテーブルを用いたデータの格納と管理に関する以下の問に答えよ．$N$ 個の要素を持つハッシュテーブル `table[N]`により正の整数を管理する方法について考える．ここで，正の整数 $x$ をハッシュテーブルに格納する位置を定める際に用いるハッシュ関数を $H(x) = mod(x,N)$ とする．正の整数が同じハッシュ値を持つ場合は，プログラム `1`に示すデータ構造 `node`の連結リストにより管理する．

(1) 整数 $\{15, 53, 22, 59, 15, 41, 20\}$ をハッシュ関数を用いて順に $N = 11$ の `table[N]`に格納した時，ハッシュテーブルの内容を示せ．

(2) プログラム `2` は，正の整数 $x$ を`table[N]` に格納する関数 `insert(x)` を示している．プログラム `2` の空欄を埋めて $C$ 言語のプログラムを完成させよ．

(3) `search(x)` は，与えられた正の整数 $x$ の値が `table[N]` に格納されている場合に $1$ を, そうでない場合は $0$ を返す関数とする．関数 `search(x)` を $C$ 言語で記述せよ．

(4) `table[N]` に格納されている正の整数 $x$ を削除する関数を記述する際に留意すべき点を数行で述べよ．

```c
/* プログラム1 */
struct node {
    int value;
    struct node *next;
};
struct node *table[N];

/* プログラム2 */
int H(int x) { return(x % N); }
void insert(int x) {
    struct node *new, *check;

    new = (struct node *)malloc(sizeof(struct node));
    new->value = x;
    new->next = NULL;
    check = table[H(x)];

    /* 空欄 */
}
```

### 题目描述

**I.** 回答以下逻辑电路问题。希望设计一个以两位正数 $A=a_2a_1$ 和 $B=b_2b_1$ 为输入的两位比较器 $CMP$。当 $A\ge B$ 时，该电路输出 $c=1$，否则输出 $c=0$。两位比较器 $CMP$ 用图1的符号表示。

(1) 写出一位比较器 $CMP_1$ 的真值表，其输入为 $a_1,b_1$，输出 $c_1$ 满足

$$
c_1=\begin{cases}1,&a_1\ge b_1,\\0,&a_1<b_1.\end{cases}
$$

(2) 写出一位比较器 $CMP_2$ 的真值表，其输入为第 (1) 问的 $c_1$ 和 $a_2,b_2$，输出 $c_2$ 满足

$$
c_2=\begin{cases}1,&a_2>b_2,\\c_1,&a_2=b_2,\\0,&a_2<b_2.\end{cases}
$$

(3) 组合第 (1)、(2) 问中的比较器 $CMP_1,CMP_2$，可以构成两位比较器 $CMP$。用图2中的符号画出该电路。

接着希望用两位比较器 $CMP$ 设计时序电路 $MAX$。依次输入两位正数 $X_1,X_2,\ldots$ 时，$MAX$ 输出输入值中的最大值。按以下步骤设计 $MAX$ 的电路。

(4) 希望用两位比较器 $CMP$ 和两位 D 触发器（D-FF）设计一个将 $\max(A,B)$ 存入 D-FF 的电路。用图1、图2、图3中的符号画出该电路。

(5) 将第 (4) 问电路的输入 $A$ 接到 $X_i$，输入 $B$ 接到 $\max(X_1,X_2,\ldots,X_{i-1})$，可以构成时序电路 $MAX$。用图1、图2、图3中的符号画出 $MAX$。可以假设输入 $B$ 的初始值为 $00$。

![图1：两位比较器；图2：逻辑门；图3：两位D触发器](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/eeis/2022/eeis_202108_4_information_II_p1.png)

**II.** 回答以下使用哈希表存储和管理数据的问题。考虑用具有 $N$ 个元素的哈希表 `table[N]` 管理正整数的方法。确定正整数 $x$ 在哈希表中存储位置的哈希函数为 $H(x)=\operatorname{mod}(x,N)$。当正整数具有相同哈希值时，用程序1所示数据结构 `node` 的链表管理。

(1) 当 $N=11$ 时，利用哈希函数依次将整数 $\{15,53,22,59,15,41,20\}$ 存入 `table[N]`。写出此时哈希表的内容。

(2) 程序2为将正整数 $x$ 存入 `table[N]` 的函数 `insert(x)`。填入程序2的空白，完成 C 语言程序。

(3) 若给定正整数 $x$ 的值存储在 `table[N]` 中，函数 `search(x)` 返回1，否则返回0。用 C 语言编写 `search(x)`。

(4) 编写从 `table[N]` 中删除正整数 $x$ 的函数时，有哪些应注意的事项？用数行说明。

```c
/* 程序1 */
struct node {
    int value;
    struct node *next;
};
struct node *table[N];

/* 程序2 */
int H(int x) { return(x % N); }
void insert(int x) {
    struct node *new, *check;

    new = (struct node *)malloc(sizeof(struct node));
    new->value = x;
    new->next = NULL;
    check = table[H(x)];

    /* 空白 */
}
```

## **Kai**
### I.

#### (1)
|$a_1$|$b_1$|$c_1$|
|-|-|-|
|0|0|1|
|0|1|0|
|1|0|1|
|1|1|1|

#### (2)

|$c_1$|$a_2$|$b_2$|$c_2$|
|-|-|-|-|
|0|0|0|0|
|0|0|1|0|
|0|1|0|1|
|0|1|1|0|
|1|0|0|1|
|1|0|1|0|
|1|1|0|1|
|1|1|1|1|

#### (3)

<figure style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/eeis/2022/eeis_202108_4_information_II_p2.png" width="691" height="400" alt=""/>
</figure>

図の比較器は次の論理式で実現できる（$+$ は OR、積は AND）。

$$
c_1=a_1+\overline{b_1}.
$$

$$
c=c_2=a_2\overline{b_2}+c_1(a_2+\overline{b_2}).
$$

上位ビットが等しいときは $c_1$ を、異なるときは $a_2$ を出力する。

#### (4)

<figure style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/eeis/2022/eeis_202108_4_information_II_p3.png" width="529" height="365" alt=""/>
</figure>

#### (5)

<figure style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/eeis/2022/eeis_202108_4_information_II_p4.png" width="700" height="428" alt=""/>
</figure>

$D$ フリップフロップへの入力は、各ビット $i=1,2$ について

$$
D_i=cA_i+\overline cB_i
$$

とする。$c=1$ なら $A$、$c=0$ なら $B$ が保存される。出力 $Q$ を $B$ に戻して初期値を $Q_0=00$ とすれば、各クロックで $Q_i=\max(X_i,Q_{i-1})$ となる。

### II.

#### (1)
| Bucket | List from head to tail |
|---|---|
| 0 | 22 → NULL |
| 1, 2, 3 | NULL |
| 4 | 15 → 59 → 15 → NULL |
| 5, 6, 7 | NULL |
| 8 | 41 → NULL |
| 9 | 53 → 20 → NULL |
| 10 | NULL |

正しくは `table[4]` が $15\to59\to15$ となる。

ハッシュテーブルに一般的な書き方があるわけではないと思うので、書き方はなんでもいいと思う。

#### (2)

```c
if(check == NULL) {
  table[H(x)] = new;
} else {
  while(check->next != NULL) check = check->next;
  check->next = new;
}
```

#### (3)

```c
int search(int x) {
  struct node *check = table[H(x)];
  while(check != NULL) {
    if(check->value == x) return 1;
    check = check->next;
  }
  return 0;
}
```

#### (4)

$x$ を格納するノードを消す際、先頭ノードなら `table[H(x)]`、それ以外なら直前ノードの `next` を、削除ノードの `next` につなぎ替える。
その後、削除ノードのメモリを解放する。

## **Reference**

- [donguri0912：東大院電気系の過去問解説・2021年問題4](https://sekakota.hatenablog.com/entry/eeis-2021-4)

- [大学公式問題（2021年度実施、参考和訳）](https://cms.ee.t.u-tokyo.ac.jp/assets/education/pdf/2023/P4J.pdf)
