---
sidebar_label: "2024年8月実施 プログラミング"
tags:
  - Nagoya-University
  - Computer-Science.Programming.NumPy-Array-Operations
  - Computer-Science.Programming.Recursion
  - Mathematics.Linear-Algebra.Smith-Normal-Form
---
# 名古屋大学 情報学研究科 知能システム学専攻 2024年8月実施 プログラミング

## **Author**
祭音Myyura

## **Description**
整数を要素とする行列を扱う Python プログラムについて考える。
2 ページ以降に掲載のプログラムは，20～48 行目の関数 proc を再帰的に呼び出しながら処理を行う。
プログラム中の変数 $A$ は行列を扱う変数であり，以降の設問では行列 A と記載する。
また，$A$ は行数 $M$，列数 $N$ からなる行列とし，以下で示す数式においては $i$ 行 $j$ 列の要素を $A_{i,j}$（$1 \leqq i \leqq M, 1 \leqq j \leqq N$）のように同じアルファベットのイタリック体に添え字を組み合わせて表記する。以下の問いに答えよ。
ただし，行列 $A$ の内容を答える際は [] を省略しても構わない。

1. 21 行目のコードが初めて実行された際に標準出力に表示される行列 $A$ の内容を答えよ。

2. 27 行目は，行列 $A$ に対して，$i$ 行と $s$ 行の要素をすべて入れ替える処理である。【ア】，【イ】に入れるべき適切なコードを答えよ。

3. 28 行目は，行列 $A$ に対して，$j$ 列と $s$ 列の要素をすべて入れ替える処理である。【ウ】，【エ】に入れるべき適切なコードを答えよ。

4. 31～32 行目は以下の処理をプログラムとして実装したものである。ここで，s と r はプログラム中の変数にそれぞれ対応する。また，← は代入を表し，$\lfloor x \rfloor$ は x を超えない最大の整数を表す。$(n = 1, \ldots, N)$ は，n の値を 1 から N まで変化させて処理を行うことを表す。【オ】～【キ】に入れるべき適切なコードを答えよ。

$$
k \leftarrow \left\lfloor \frac{A_{r,s}}{A_{s,s}} \right\rfloor
$$

$$
A_{r,n} \leftarrow A_{r,n} - A_{s,n} \times k \quad (n = 1, \ldots, N)
$$

5. 35～36 行目は以下の処理をプログラムとして実装したものである。ここで，s と c はプログラム中の変数にそれぞれ対応する。【ク】～【コ】に入れるべき適切なコードを答えよ。

$$
k \leftarrow \left\lfloor \frac{A_{s,c}}{A_{s,s}} \right\rfloor
$$

$$
A_{m,c} \leftarrow A_{m,c} - A_{s,c} \times k \quad (m = 1, \ldots, M)
$$

6. 21 行目のコードが 2 度目に実行された際に標準出力に表示される行列 A の内容を答えよ。

7. プログラムが最後まで実行される間に標準出力に表示される行列 A の内容をすべて答えよ。

8. 38 行目に指定されている<ruby>条件<rt>じょうけん</rt></ruby>の True を次式に変更したい（式中の s はプログラム中の変数に対応する）。ただし，$|x|$ は x の絶対値を表す。

$$
\sum_{m=s+1}^{M}|A_{m,s}| + \sum_{n=s+1}^{N}|A_{s,n}| = 0
$$

このとき，38 行目を以下のように変更するとすると，【サ】に入れるべき適切なコードを答えよ。

```python
if 【サ】:
```

また，変更後のプログラムを最後まで実行したときに標準出力に表示される行列 A の内容をすべて答えよ。

### プログラム

```python
import numpy as np

def search(A, s):
    R = np.abs(A[s:,s:])
    idx, rmin = (-1,-1), 1000000000
    for r in range(R.shape[0]):
        for c in range(R.shape[1]):
            if R[r,c] > 0 and R[r,c] < rmin:
                idx, rmin = (s+r,s+c), R[r,c]
    return idx

def check(A, s):
    tmp = A[s+1:,s+1:]
    for r in range(tmp.shape[0]):
        for c in range(tmp.shape[1]):
            if tmp[r, c] % A[s, s] != 0:
                return (s+r+1, s+c+1, tmp[r, c] // A[s, s])
    return (-1, 0, 0)

def proc(A, s):
    print(A)    # 21

    i, j = search(A, s)
    if i < 0:
        return A

    A[  ア  ] = A[  イ  ]   # 27
    A[  ウ  ] = A[  エ  ]   # 28

    for r in range(s+1, A.shape[0]):
        k = 【オ】
        A[  カ  ] -= 【キ】

    for c in range(s+1, A.shape[1]):
        k = 【ク】
        A[  ケ  ] -= 【コ】

    if True:
        rr, cc, qq = check(A, s)
        if rr >= 0:
            A[rr, :] += A[s, :]
            A[:, cc] -= qq * A[:, s]
        else:
            if A[s, s] < 0:
                A[s, :] *= -1
            return proc(A, s+1)

    return proc(A, s)

A = np.array([3, 1, 3, 1, -1, 3, 3, 3, 0], dtype=int).reshape(3,3)
A = proc(A, 0)
```

## **Kai**
### 1.

```text
[[ 3  1  3]
 [ 1 -1  3]
 [ 3  3  0]]
```

### 2.

```text
ア： [s, i], :
イ： [i, s], :
```

### 3.

```text
ウ： :, [s, j]
エ： :, [j, s]
```

### 4.

```text
オ： A[r, s] // A[s, s]
カ： r, :
キ： A[s, :] * k
```

### 5.

```text
ク： A[s, c] // A[s, s]
ケ： :, c
コ： A[:, s] * k
```

### 6.

```text
[[ 1  0  0]
 [ 0  4  6]
 [ 0 -6 -9]]
```

### 7.

```text
[[ 3  1  3]
 [ 1 -1  3]
 [ 3  3  0]]

[[ 1  0  0]
 [ 0  4  6]
 [ 0 -6 -9]]

[[1 0 0]
 [0 4 2]
 [0 6 3]]

[[1 0 0]
 [0 2 0]
 [0 1 0]]
```

### 8.

```text
サ： np.sum(np.abs(A[s+1:, s])) + np.sum(np.abs(A[s, s+1:])) == 0
```

変更後のプログラムを最後まで実行したときの出力は次のとおりである。

```text
[[ 3  1  3]
 [ 1 -1  3]
 [ 3  3  0]]

[[ 1  0  0]
 [ 0  4  6]
 [ 0 -6 -9]]

[[1 0 0]
 [0 4 2]
 [0 2 1]]

[[1 0 0]
 [0 1 0]
 [0 0 0]]
```
