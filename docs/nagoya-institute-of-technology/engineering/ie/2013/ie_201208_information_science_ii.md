---
sidebar_label: "2012年8月実施 問題22 情報科学 II"
tags:
  - Nagoya-Institute-of-Technology
  - Computer-Science.Data-Structures.Binary-Heap
  - Computer-Science.Data-Structures.Priority-Queue
  - Computer-Science.Algorithm-Design.Max-Heapify
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---

# 名古屋工業大学 工学研究科 情報工学専攻 2012年8月実施 問題22 情報科学 II

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

**II**　高々 $N$ 個の整数値を格納するヒープを配列を用いて実現する。そのときの擬似コードを以下に示す。

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

なお，上記の擬似コードで使われている関数 `floor,max,swap` はそれぞれ以下のような処理を行うものとする。

- `floor(x)`：実数値 $x$ の小数点以下を切り捨てた値を返す。
- `max(H[i],H[j])`：$H[i],H[j]$ のうち，大きい方に対応する添字を返す。
- `swap(x,y)`：2つの変数 $x,y$ の値を入れ替える。

このとき，次の (1)〜(3) の問いについて答えよ。

(1) `H[1]` にはどのような値が格納されているか説明せよ。

(2) 手続き `Insert(v)`, `Delete()`, `Changekey(i,v)` はそれぞれ以下の処理を行う。

- `Insert(v)`：値 $v$ をヒープに追加する。
- `Delete()`：`H[1]` の値を削除し，ヒープを再構成する。
- `Changekey(i,v)`：配列 $H$ 中の $i$ 番目の要素を $v$ に変更し，ヒープを再構成する。

上記の処理を実現するように，擬似コード中の空欄 (a)，(b)，(c) を埋めよ。ただし，各欄に埋める命令は一文とは限らない。

(3) $x\le n$ であるような $x$ について `Heapify1(x)` を実行した場合の最悪時実行時間を，$x$ の関数としてオーダ記法（漸近的記法）を用いて書け。答だけではなく，導出理由も併せて述べること。

### 题目描述

**II**　使用数组实现最多存储 $N$ 个整数的堆，其伪代码如下。

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

上述伪代码使用的函数 `floor,max,swap` 分别执行以下处理。

- `floor(x)`：返回实数 $x$ 向下取整后的值。
- `max(H[i],H[j])`：返回 $H[i],H[j]$ 中较大者对应的下标。
- `swap(x,y)`：交换两个变量 $x,y$ 的值。

回答下列 (1) 至 (3) 问。

(1) 请说明 `H[1]` 中存储什么值。

(2) 过程 `Insert(v)`、`Delete()`、`Changekey(i,v)` 分别执行以下处理。

- `Insert(v)`：将值 $v$ 加入堆。
- `Delete()`：删除 `H[1]` 的值，重新构成堆。
- `Changekey(i,v)`：将数组 $H$ 的第 $i$ 个元素改为 $v$，重新构成堆。

为实现上述处理，填入伪代码中的空格 (a)、(b)、(c)。每个空格中的指令不一定只有一条。

(3) 对满足 $x\le n$ 的 $x$ 执行 `Heapify1(x)`，请将最坏运行时间写成关于 $x$ 的函数，使用阶记法（渐近记法）。除答案外，还须说明推导理由。

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

## **Reference**

- [公式原題（公式サイトの保存版）](https://web.archive.org/web/20130323025140/http://www.nitech.ac.jp:80/examination/test/files/25-030.pdf)
