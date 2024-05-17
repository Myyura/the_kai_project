---
comments: false
title: 東北大学 工学研究科 電気・情報系 2019年3月実施 問題4 情報基礎2
tags:
  - Tohoku-University
---
# 東北大学 工学研究科 電気・情報系 2019年3月実施 問題4 情報基礎2

## **Author**
祭音Myyura

## **Description**
### 日本語版
長さ $N \ge 2$ の配列 $A=(A[1], \ldots，A[N])$ の各要素に実数が格納されている.配列 $A$ の二つの要素番号を引数にとる手続き $P$ と $Q$ を次のように定義する.

- 手続き $P(i，j)$ は、もし $A[i] < A[j]$ の場合に $1$、それ以外の場合に $0$ を返す.
- 手続き $Q(i，j)$ は、配列 $A$ の $i$ 番目と $j$ 番目の要素を入れ替える.ただし、もし $i=j$ なら配 列 $A$ は変化しない.

手続き $P$ および $Q$ 以外では配列 $A$ にはアクセスしないという条件下で、配列 $A$ 内の実数を昇順に整列するアルゴリズムを考える、本問では、手続き $P$ の呼び出し回数を計算量と呼ぶ.

以下の問に答えよ.

(1) 上記条件を満たす整列アルゴリズムに対する計算量の漸近的下界を $\Omega$ 記法を用いて示せ.

(2) Fig. 4(a) に示す整列アルゴリズム **Alg1** の疑似コードを考える.手続き $P$ の呼び出し回数を $N$ を用いて示せ、また、答の求め方も説明せよ.

(3) Fig. 4(b) に示す整列アルゴリズム A1g2 について、手続き又の総呼び出し回数が $N- 1$ 回以下となるように，(A), (B)，(C) に入る適切な疑似コードを示せ.ただし、疑似コードは Fig.4(a) に示す疑似コードの表記に従うものとする.

(4) Fig. 4(\(c\)) に示す整列アルゴリズム A1g3 の疑似コードを考える.ただし、Fig. 4(\(c\)) 中に示す手続き $R$ が利用できる.

- (a) **Alg3** の基本戦略と処理の概要を言葉で簡潔に説明せよ.
- (b) 配列 $A$ の初期値を $(2 , 5 , 4 , 3 , 2 )$ とする. **Alg3** の 6 行目および 19 行目にある手続き又の実行直後に毎回配列 $A$ の値を表示することを考える.配列 $A$ の値を表示される順番に全て示せ.
- (\(c\)) **Alg3** の計算量を $\Theta$ 記法を用いて示せ.

### English Version
Every element in an array $A=(A[1],\ldots, A[N])$ of length $N \ge 2$ contains a real number. We define procedures $P$ and $Q$, which take two element indices of the array $A$ as their arguments, as follows:

- The procedure $P(i, j)$ returns $1$ if $A[i] < A[j]$, and 0 otherwise.
- The procedure $Q(i, j)$ swaps the $i$-th and $j$-th elements in the array $A$, where the array $A$ is unchanged if $i= j$.

We consider algorithms for sorting the real numbers in the array $A$ in ascending order under the condition that algorithms never access the array $A$ except for the procedures $P$ and $Q$. In this question, we refer to the number of calls to the procedure $P$ as the computational complexity.

Answer the following questions.

(1) Give the asymptotic lower bound of the computational complexity in big $\Omega$ notation for sorting algorithms that satisfy the above condition.

(2) Consider the pseudocode for the sorting algorithm **Alg1** shown ni Fig. 4(a). Give the number of calls to the procedure $P$ as an expression of $N$. Moreover, explain your derivation of the result.

(3) Following the notation of the pseudocode shown in Fig. 4(a), give an appropriate pseudocode by filling ( A ) , ( B ) , and ( C ) of the sorting algorithm **Alg2** shown in Fig. 4(b) so that the total number of calls to the procedure $Q$ is $N- 1$ or less.

(4) Consider the pseudocode for the sorting algorithm **Alg3** shown in Fig. 4(\(c\)), where a procedure $R$, also shown in Fig. 4(\(c\)), is available.

- (a) Succinctly describe the fundamental strategy and an outline of the process of **Alg3** in words.
- (b) Suppose that the initial values of the array $A$ are $(2, 5, 4, 3, 2)$. We consider displaying the values of the array $A$ every time right after the procedure $Q$ at line 6 and line 19 in **Alg3** is performed. Show all the values of the array $A$ in the order in which they are displayed.
- (\(c\)) Give the computational complexity of **Alg3** in big $\Theta$ notation.

### Figs
#### fig. 4(a)
```text
Alg1 (N):
    for i := 1 to N-1 do
        for j := 2 to N-i+1 do
            if P(j, j-1) = 1 then
                Q (j，j-1)
            endif
        endfor
    endfor
```

#### fig. 4(b)
```text
Alg2 (N):
    for i := 1 to N-1 do
        k := i
        for j := i+1 to N do
            if ( A ) then
                ( B )
            endif
        endfor
        ( C )
    endfor
```

#### fig. 4(\(c\))
```text
Alg3 (N):
    for i := 1 to N do
        R(N-i+1, N)
    endfor
    for i := 1 to N-1 do
        Q(1, N-i+1)
        R(1, N-i)
    endfor
R(i, m):
    k := i
    while k <= m do
        j := k
        k := k*2
        if k <= m then
            if k+1 <= m and P(k, k+1) = 1 then
                k := k+1
            endif
            if P(j, k) = 1 then
                Q(j, k)
            endif
        endif
    endwhile
```

## **Kai**
### (1)
$\Omega(N\log N)$

### (2)
Hint: Bubble Sort

In the worst-case (elements of the array $A$ are arranged in decreasing order), the if statement is always true.
Hence the number of calls to the procedure $P$ is

$$
(N-1) + (N-2) + (N-3) + \cdots + 2 + 1 = \frac{N(N-1)}{2}
$$

### (3)
Hint: Selection Sort

- ( A ): P(j, k)
- ( B ): k = j
- ( C ): Q(i, k)

### (4)
Hint: Heap Sort

#### (a)
**Alg3** first convert the array $A$ into heap data structure using procedure $R$ (often called heapify), then one by one delete the root node of the Max-heap and replace it with the last node in the heap and then heapify the root of the heap. Repeat this process until the heap contains only one element.

#### (b)

$$
\begin{aligned}
(5, 2, 4, 3, 2) \\
(5, 3, 4, 2, 2) \\
(2, 3, 4, 2, 5) \\
(4, 3, 2, 2, 5) \\
(2, 3, 2, 4, 5) \\
(3, 2, 2, 4, 5) \\
(2, 2, 3, 4, 5)
\end{aligned}
$$

#### (\(c\))
$\Theta(N \log N)$