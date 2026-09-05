---
sidebar_label: "2014年度 問題22 情報科学 II"
tags:
  - Nagoya-Institute-of-Technology
  - Computer-Science.Algorithm-Design.Binary-Search
  - Computer-Science.Data-Structures.Hash-Table
  - Computer-Science.Data-Structures.Linear-Probing-Hashing
  - Computer-Science.Algorithm-Design.Insertion-Sort
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---

# 名古屋工業大学 工学研究科 情報工学専攻 2014年度 問題22 情報科学 II

## **Author**
GPT-5.6 Sol, 祭音Myyura

## **Description**

題意の要約。

設問 II について答えよ。$N$ 個の自然数値が入力として与えられる（$N>1$）。二分探索およびハッシュ法を用いてデータを探索するアルゴリズムの擬似コードを次に示す。

### プログラム 1：二分探索法

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

### プログラム 2：ハッシュ表を用いた探索

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

両プログラムは、前処理を行う `Init1`, `Init2` と、前処理後のデータを探索する `Search1`, `Search2` からなる。入力データは配列 `Input` で与えられる。探索手続きは、自然数値 $x$ が `Input` に含まれる場合は $x$ 自身を返し、含まれない場合は $-1$ を返す。

また、`floor(a)` は実数値 $a$ の小数点以下を切り捨てた整数を返し、$a\mathbin{\mathrm{mod}}b$ は非負整数 $a$ を正整数 $b$ で割った余りを返す。

### (1)

プログラム 1 の `Search1` の最悪時実行時間を、漸近的記法（オーダ記法）を用いて書け。

### (2)

$M=10,N=5$ とし、

$$
\operatorname{Input}[0]=3,\quad
\operatorname{Input}[1]=4,\quad
\operatorname{Input}[2]=33,\quad
\operatorname{Input}[3]=5,\quad
\operatorname{Input}[4]=15
$$

とする。`Init2(Input)` 実行後の配列 `H` の内容を書け。また、その後に `Search2(23)` を実行したとき、(★) の行が実行される回数を答えよ。

### (3)

プログラム 1 の下線部分、すなわち `Input` を昇順にソートして `D` に格納する処理を、次の擬似コードで実現する。

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

#### (a)

for 文 (☆) における $i$ 回目のループが終了した時点で、部分列

$$
\operatorname{Input}[a_i],\ldots,\operatorname{Input}[b_i]
$$

の値が必ず整列されている。$a_i,b_i$ の値を答えよ。

#### (b)

このソーティングアルゴリズムの実行時間が最悪となる入力、および最良となる入力がどのようなものか説明せよ。

出典：[名古屋工業大学 2014年度 原問題](https://web.archive.org/web/20160309071403/http://www.nitech.ac.jp:80/examination/test/files/26-030.pdf)。

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
