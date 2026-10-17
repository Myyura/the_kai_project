---
sidebar_label: "2013年8月実施 問題22 情報科学 II"
tags:
  - Nagoya-Institute-of-Technology
  - Computer-Science.Algorithm-Design.Binary-Search
  - Computer-Science.Data-Structures.Hash-Table
  - Computer-Science.Data-Structures.Linear-Probing-Hashing
  - Computer-Science.Algorithm-Design.Insertion-Sort
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---

# 名古屋工業大学 工学研究科 情報工学専攻 2013年8月実施 問題22 情報科学 II

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

**II**　$N$ 個の自然数値が入力として与えられるとする（$N>1$）。このとき，二分探索およびハッシュ法を用いてデータを探索するアルゴリズムの擬似コードを以下に示す。

**プログラム1　二分探索法**

```text
int D[0..N-1];
int Input[0..N-1];

Init1(Input) {
    配列 Input を昇順にソートした結果を D に格納
}

Search1(x) {
    if (x < D[0] or x > D[N-1]) {
        return -1;
    }
    left = 0; right = N-1;
    do {
        mid = floor((left + right) / 2);
        if (x < D[mid]) right = mid - 1;
        else left = mid + 1;
    } while (left <= right);
    if (x == D[right]) return x;
    else return -1;
}
```

**プログラム2　ハッシュ表を用いた探索**

```text
int H[0..M-1];    /* M>N とする */
int Input[0..N-1];

Init2(Input) {
    for i=0 to M-1 { H[i] = 0; }
    for i=0 to N-1 {
        j = Input[i] mod M;
        while (H[j] != 0) {
            j = (j + 1) mod M;
        }
        H[j] = Input[i];
    }
}

Search2(x) {
    j = x mod M;
    while (H[j] != 0 and H[j] != x) {
        j = (j + 1) mod M;                 (★)
    }
    if (H[j] == x) return x;
    else return -1;
}
```

プログラム1，2とも，データの前処理のための手続き `Init1`, `Init2`，および前処理後のデータからの探索手続き `Search1`, `Search2` から構成されている。入力データは配列 `Input` により与えられており，`Init1` および `Init2` は `Input` を引数として受け取り前処理を行う。`Search1` および `Search2` は引数として与えられた自然数値 $x$ が `Input` の中に含まれるかを探索し，含まれる場合は $x$ 自身を返し，含まれない場合は $-1$ を返す。

なお，上記の擬似コードで使われている関数 `floor` および演算子 `mod` はそれぞれ以下のような処理を行うものとする。

- `floor(a)`：実数値 $a$ の小数点以下を切り捨てた整数値を返す。
- `a mod b`：非負整数 $a$ を正整数 $b$ で割った余りを返す。

このとき，次の (1)〜(3) の問いについて答えよ。

(1) プログラム1の手続き `Search1` について，その最悪時実行時間を漸近的記法（オーダ記法）を用いて書け。

(2) $M=10,N=5$ とする。`Input[0]=3`, `Input[1]=4`, `Input[2]=33`, `Input[3]=5`, `Input[4]=15` であるとして，プログラム2の `Init2(Input)` を実行した後の配列 $H$ の内容を書け。また，その後に `Search2(23)` を実行したとき，(★) 印の行が実行される回数を答えよ。

(3) プログラム1中における下線部分の処理を実現する擬似コードを以下に示す。

```text
for i=1 to N-1 {                              (☆)
    x = Input[i];
    j = i;
    while ((j - 1) >= 0 and Input[j-1] > x) {
        Input[j] = Input[j-1];
        j = j - 1;
    }
    Input[j] = x;
}
for i=0 to N-1 { D[i] = Input[i]; }
```

このとき，以下の問い (a)，(b) について答えよ。

(a) 上記のソーティングアルゴリズムでは，for文 (☆) における $i$ 回目のループが終了した時点で，配列 `Input` の部分列 $\operatorname{Input}[a_i]$〜$\operatorname{Input}[b_i]$ については値が必ず整列されていることが保証される。$a_i,b_i$ の値を答えよ。

(b) 上記のソーティングアルゴリズムは，入力 `Input` の内容によって実行時間が大きく変化する。実行時間が最悪となるような入力，および最良となるような入力はどのようなものか説明せよ。

#### 题目描述

**II**　设输入为 $N$ 个自然数（$N>1$）。下面给出用二分查找及哈希法查找数据的算法伪代码。

**程序1　二分查找**

```text
int D[0..N-1];
int Input[0..N-1];

Init1(Input) {
    将数组 Input 按升序排序后的结果存入 D
}

Search1(x) {
    if (x < D[0] or x > D[N-1]) {
        return -1;
    }
    left = 0; right = N-1;
    do {
        mid = floor((left + right) / 2);
        if (x < D[mid]) right = mid - 1;
        else left = mid + 1;
    } while (left <= right);
    if (x == D[right]) return x;
    else return -1;
}
```

**程序2　使用哈希表查找**

```text
int H[0..M-1];    /* M>N  */
int Input[0..N-1];

Init2(Input) {
    for i=0 to M-1 { H[i] = 0; }
    for i=0 to N-1 {
        j = Input[i] mod M;
        while (H[j] != 0) {
            j = (j + 1) mod M;
        }
        H[j] = Input[i];
    }
}

Search2(x) {
    j = x mod M;
    while (H[j] != 0 and H[j] != x) {
        j = (j + 1) mod M;                 (★)
    }
    if (H[j] == x) return x;
    else return -1;
}
```

两个程序均由数据预处理过程 `Init1`、`Init2` 及在预处理后数据中执行查找的过程 `Search1`、`Search2` 构成。输入数据通过数组 `Input` 给出，`Init1` 与 `Init2` 接收 `Input` 为参数并进行预处理。`Search1` 与 `Search2` 查找作为参数给出的自然数 $x$ 是否包含于 `Input`；若包含，则返回 $x$ 本身，否则返回 $-1$。

其中函数 `floor` 与运算符 `mod` 分别执行以下处理。

- `floor(a)`：返回实数 $a$ 向下取整后的整数值。
- `a mod b`：返回非负整数 $a$ 除以正整数 $b$ 的余数。

回答以下 (1) 至 (3) 问。

(1) 使用渐近记法（阶记法）写出程序1中 `Search1` 的最坏运行时间。

(2) 设 $M=10,N=5$，且 `Input[0]=3`、`Input[1]=4`、`Input[2]=33`、`Input[3]=5`、`Input[4]=15`。写出执行程序2的 `Init2(Input)` 后数组 $H$ 的内容。随后执行 `Search2(23)` 时，带 (★) 标记的行执行多少次？

(3) 程序1中的下划线部分（将 `Input` 排序后存入 `D`）由以下伪代码实现。

```text
for i=1 to N-1 {                              (☆)
    x = Input[i];
    j = i;
    while ((j - 1) >= 0 and Input[j-1] > x) {
        Input[j] = Input[j-1];
        j = j - 1;
    }
    Input[j] = x;
}
for i=0 to N-1 { D[i] = Input[i]; }
```

回答下列 (a)、(b) 问。

(a) 对上述排序算法，带 (☆) 标记的 for 语句完成第 $i$ 次循环时，保证数组 `Input` 的子序列 $\operatorname{Input}[a_i]$ 至 $\operatorname{Input}[b_i]$ 已排序。求 $a_i,b_i$。

(b) 上述排序算法的运行时间随输入 `Input` 的内容而大幅变化。请说明哪些输入使运行时间最坏，哪些输入使运行时间最好。

## **Kai**

### (1)

1 回の反復で探索範囲はほぼ半分になる。したがって、最悪時の反復回数は $\lfloor\log_2 N\rfloor+O(1)$ であり、

$$
\boxed{\Theta(\log N)}
$$

である。

### (2)

線形探索法による格納位置は順に

$$
3\to3,\quad 4\to4,\quad 33\to5,\quad 5\to6,\quad 15\to7
$$

となる。よって、添字 $0$ から $9$ までの `H` は

$$
\boxed{[0,0,0,3,4,33,5,15,0,0]}
$$

である。

`Search2(23)` は $j=23\bmod 10=3$ から始まり、添字

$$
3,4,5,6,7
$$

の非零要素を調べるたびに (★) を実行する。添字 8 で初めて 0 に到達するので、実行回数は

$$
\boxed{5\text{ 回}}
$$

である。

### (3)

#### (a)

$i$ 回目の開始前には `Input[0]` から `Input[i-1]` までが整列済みであり、`Input[i]` をその正しい位置へ挿入する。したがって、終了時には `Input[0]` から `Input[i]` までが整列される。よって、

$$
\boxed{a_i=0,\qquad b_i=i}
$$

である。

#### (b)

最悪となる入力の一例は、相異なる値が大きい順に並んでいる場合である。各 $i$ について先頭まで要素をずらすので、比較・移動回数は

$$
1+2+\cdots+(N-1)=\Theta(N^2)
$$

となる。

最良となるのは、入力がすでに非減少順に並んでいる場合である。各反復で `while` の条件判定だけを行うので、実行時間は $\Theta(N)$ となる。

## **Reference**

- [公式原題（公式サイトの保存版）](https://web.archive.org/web/20160309071403/http://www.nitech.ac.jp:80/examination/test/files/26-030.pdf)
