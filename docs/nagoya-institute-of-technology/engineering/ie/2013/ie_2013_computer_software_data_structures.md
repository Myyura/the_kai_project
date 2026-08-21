---
sidebar_label: "2013年度 計算機ソフトウェア（データ構造とアルゴリズム）"
tags:
  - Nagoya-Institute-of-Technology
  - Computer-Science.Data-Structures.Binary-Heap
  - Computer-Science.Data-Structures.Priority-Queue
  - Computer-Science.Algorithm-Design.Max-Heapify
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---

# 名古屋工業大学 工学研究科 情報工学専攻 2013年度 計算機ソフトウェア（データ構造とアルゴリズム）

## **Author**
GPT-5.6 Sol, 祭音Myyura

## **Description**

設問 II について答えよ。高々 $N$ 個の整数値を格納するヒープを配列で実現する。次の擬似コードを用いる。

```text
int H[1..N];
int n=0;

Heapify1(i) {
    if (i<=1) { exit; }
    j = floor(i/2);
    if (H[i]>H[j]) {
        swap(H[i],H[j]);
        Heapify1(j);
    }
}

Heapify2(i) {
    if (2*i>n) { exit; }
    if (2*i<n) {
        j=max(H[2*i],H[2*i+1]);
    } else {
        j=2*i;
    }
    if (H[j]>H[i]) {
        swap(H[i],H[j]);
        Heapify2(j);
    }
}

Insert(v) {
    if (n>=N) { exit; }
    n=n+1;
    [ (a) ]
}

Delete() {
    if (n==0) { exit; }
    [ (b) ]
    n=n-1;
}

Changekey(i,v) {
    if (i>n) { exit; }
    [ (c) ]
}
```

ここで、`floor(x)` は実数値 $x$ の小数点以下を切り捨てた値を返す。`max(H[i],H[j])` は $H[i],H[j]$ のうち大きい方に対応する添字を返し、`swap(x,y)` は二つの変数 $x,y$ の値を入れ替える。

### (1)

`H[1]` にはどのような値が格納されているか説明せよ。

### (2)

各手続きは次の処理を行う。

- `Insert(v)`：値 $v$ をヒープに追加する。
- `Delete()`：`H[1]` の値を削除し、ヒープを再構成する。
- `Changekey(i,v)`：配列 `H` の $i$ 番目の要素を $v$ に変更し、ヒープを再構成する。

これらを実現するように空欄 (a), (b), (c) を埋めよ。ただし、各空欄に入る命令は一文とは限らない。

### (3)

$x\le n$ であるような $x$ について `Heapify1(x)` を実行した場合の最悪時実行時間を、$x$ の関数としてオーダ記法（漸近的記法）で書け。答えだけでなく、導出理由も述べよ。

## **Kai**

### (1)

各親の値はその子の値以上であるため、これは最大ヒープである。したがって、

$$
\boxed{\texttt{H[1]}\text{ にはヒープ中の最大値が格納される}}
$$

となる。

### (2)

空欄は次のように埋めればよい。

```text
(a)
H[n]=v;
Heapify1(n);
```

新しい要素を末尾に置き、親より大きい間は上へ移動する。

```text
(b)
H[1]=H[n];
Heapify2(1);
```

根を末尾要素のコピーで置き換え、子より小さい間は下へ移動する。空欄 (b) の直後に `n=n-1` があるため、空欄内で $n$ をもう一度減らしてはならない。`Heapify2` の実行中だけ末尾に同じ値が残るが、処理後にその位置がヒープの範囲から外れる。

```text
(c)
if (H[i]<v) {
    H[i]=v;
    Heapify1(i);
} else {
    H[i]=v;
    Heapify2(i);
}
```

値が増加したときは上方向、減少したときは下方向にだけヒープ条件が破れるためである。

### (3)

`Heapify1` を 1 回再帰呼出しするごとに、添字は $i$ から $\lfloor i/2\rfloor$ へ変わる。$x$ から根までの辺数は

$$
\lfloor\log_2 x\rfloor
$$

であり、各段で行う処理は $O(1)$ である。したがって、すべての段で交換が起こる場合の実行時間は

$$
\boxed{\Theta(\log x)}
$$

となる。ただし、$x=1$ も含めて表すなら $\Theta(1+\log x)$ である。

### 検算

3 種類の整数値からなる大きさ 7 までの全最大ヒープに対して、挿入・削除・キー変更を実行した。特に (b) の順序どおり、旧サイズのまま `Heapify2` を行ってから $n$ を 1 減らした場合も、残った要素がすべて最大ヒープ条件を満たすことをプログラムで確認した。
