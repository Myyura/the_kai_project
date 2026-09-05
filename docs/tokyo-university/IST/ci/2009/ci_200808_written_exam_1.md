---
sidebar_label: 2008年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Binary-Search
  - Computer-Science.Data-Structures.Hash-Table
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2008年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Given $n$ records $r_1, r_2, \dots, r_n$, each has a key $k_1, k_2, \dots, k_n$, respectively. Given a key, consider searching for the corresponding record. For a given query key $v$, if there is a key $k_j$ where $v = k_j$ ($1 \le j \le n$) then the search is successful and the record $r_j$ is returned, otherwise the search fails and the failure is returned.

Let $p_j$ be the probability where the query key $v$ is $k_j$, and $p_{\text{miss}}$ be the probability of the search failure. The computation time is almost proportional to the number of comparisons with $v$. Let us calculate the average number of comparisons $\overline{C}$ and the maximum number of comparisons $C_{\text{max}}$.

(1) Consider a sequential search that compares $v$ with keys from $k_1$ to $k_n$.
(a) Obtain $\overline{C}$ and $C_{\text{max}}$ when $p_1 = p_2 = \dots = p_n = \frac{1}{2n}, p_{\text{miss}} = \frac{1}{2}$.
(b) Prove that $\overline{C} \le 2$ when $p_1 = \frac{1}{2}, p_2 = \frac{1}{4}, \dots, p_n = \frac{1}{2^n}, p_{\text{miss}} = \frac{1}{2^n}$.

(2) Consider a binary search after sorting the keys. Let $n = 2^m - 1$ ($m$ is a natural number), and moreover, one comparison will determine whether $v < k_j, v = k_j$ or $v > k_j$.
(a) Obtain $\overline{C}$ and $C_{\text{max}}$ for each case of $m=1, 2, 3, 4$, when $p_1 = p_2 = \dots = p_n = p_{\text{miss}}$.
(b) Obtain $\overline{C}$ and $C_{\text{max}}$ as a function of $m$ when $p_1 = p_2 = \dots = p_n = p_{\text{miss}}$.

(3) Consider a search using a hash table. The records $r_1, \dots, r_8$ are inserted into the hash table of size $S = 17$ using the hash function $h(x) = x \bmod S$. Let the key values each be $k_1 = 10, k_2 = 1, k_3 = 17, k_4 = 97, k_5 = 21, k_6 = 4, k_7 = 39, k_8 = 73$.
(a) Draw the structure of the hash table by choosing an appropriate method for avoiding collision.
(b) Obtain $\overline{C}$ and $C_{\text{max}}$ when $p_1 = p_2 = \dots = p_8, p_{\text{miss}} = 0$.

(4) Describe in general the advantages and disadvantages of sequential search, binary search and search using a hash table.

### 题目描述

给定 $n$ 条记录 $r_1,r_2,\ldots,r_n$，对应键为 $k_1,k_2,\ldots,k_n$。对查询键 $v$，若存在 $v=k_j$（$1\le j\le n$），则查找成功并返回 $r_j$；否则返回失败。记 $v=k_j$ 的概率为 $p_j$，失败概率为 $p_{\mathrm{miss}}$。计算时间近似与同 $v$ 比较的次数成正比，以下均要求平均比较次数 $\overline C$ 和最大比较次数 $C_{\max}$。

1. 按 $k_1$ 到 $k_n$ 的顺序进行顺序查找。
   1. 当 $p_1=\cdots=p_n=\frac1{2n}$、$p_{\mathrm{miss}}=\frac12$ 时，求 $\overline C$ 与 $C_{\max}$。
   2. 当 $p_1=\frac12,p_2=\frac14,\ldots,p_n=\frac1{2^n}$、$p_{\mathrm{miss}}=\frac1{2^n}$ 时，证明 $\overline C\le2$。
2. 将键排序后进行二分查找。令 $n=2^m-1$，其中 $m$ 为自然数；一次比较即可判断 $v<k_j$、$v=k_j$ 或 $v>k_j$。
   1. 在 $p_1=\cdots=p_n=p_{\mathrm{miss}}$ 时，分别对 $m=1,2,3,4$ 求 $\overline C$ 与 $C_{\max}$。
   2. 在相同等概率条件下，用 $m$ 表示 $\overline C$ 与 $C_{\max}$。
3. 使用大小 $S=17$ 的哈希表和哈希函数 $h(x)=x\bmod S$，依次插入键值

   $$
   k_1=10,\ k_2=1,\ k_3=17,\ k_4=97,\ k_5=21,\ k_6=4,\ k_7=39,\ k_8=73.
   $$

   1. 自选一种合适的冲突处理方法，画出哈希表结构。
   2. 当 $p_1=\cdots=p_8$、$p_{\mathrm{miss}}=0$ 时，求 $\overline C$ 与 $C_{\max}$。
4. 概括比较顺序查找、二分查找和哈希表查找各自的优缺点。


## **Kai**

以下ではキーは相異なり、キーとの三方向比較1回を1比較と数える。配列境界の検査やハッシュ値の計算は比較回数に含めない。

### (1)

成功時に $k_j$ まで調べれば比較回数は $j$、失敗時は $n$ である。

**(a)**

$$
\overline C=\sum_{j=1}^n\frac{j}{2n}+\frac n2
=\boxed{\frac{3n+1}{4}},\qquad \boxed{C_{\max}=n}.
$$

**(b)** 有限等比級数の微分から

$$\sum_{j=1}^n\frac{j}{2^j}=2-\frac{n+2}{2^n}$$

なので、

$$
\boxed{\overline C=\sum_{j=1}^n\frac{j}{2^j}+\frac n{2^n}
=2-2^{1-n}\le2}.
$$

最悪回数は依然 $n$ であり、平均の小ささは高頻度キーを先に置いた分布による。

### (2)

$n=2^m-1$ の二分探索木は高さ $m$ の完全な木になる。深さ $d=1,\ldots,m$ には $2^{d-1}$ 個のキーがあり、それぞれ成功するまで $d$ 比較を要する。失敗時も $m$ 個のキーを調べる。**失敗という事象全体**の確率が各キー1個の確率と等しいので、各 $p_j=p_{\mathrm{miss}}=1/(n+1)=2^{-m}$ である。

**(a)**

| $m$ | $n$ | $\overline C$ | $C_{\max}$ |
|---|---|---|---|
| 1 | 1 | $1$ | 1 |
| 2 | 3 | $7/4$ | 2 |
| 3 | 7 | $5/2$ | 3 |
| 4 | 15 | $53/16$ | 4 |

**(b)** $\sum_{d=1}^m d2^{d-1}=(m-1)2^m+1$ を用いて、

$$
\boxed{\overline C=\frac{\sum_{d=1}^m d2^{d-1}+m}{2^m}
=m-1+\frac{m+1}{2^m}},\qquad \boxed{C_{\max}=m}.
$$

### (3)

**(a)** 連鎖法を用い、各バケットの末尾へ挿入する。各要素にはキーとレコードへの参照を保存する。

```text
bucket  0: (17, r3) -> null
bucket  1: ( 1, r2) -> null
bucket  2: null
bucket  3: null
bucket  4: (21, r5) -> (4, r6) -> null
bucket  5: (39, r7) -> (73, r8) -> null
bucket  6: null
bucket  7: null
bucket  8: null
bucket  9: null
bucket 10: (10, r1) -> null
bucket 11: null
bucket 12: (97, r4) -> null
bucket 13: null
bucket 14: null
bucket 15: null
bucket 16: null
```

例えば $21\bmod17=4\bmod17=4$、$39\bmod17=73\bmod17=5$ なので衝突する。

**(b)** 各キーの確率は $1/8$。比較1回のキーが6個、2回のキーが2個だから、

$$\boxed{\overline C=\frac{6+2\cdot2}{8}=\frac54},\qquad \boxed{C_{\max}=2}.$$

### (4)

| 方法 | 長所 | 短所・条件 |
|---|---|---|
| 順序探索 | 未整列のデータや連結リストに使え、追加が容易。高頻度順なら平均を改善できる | 一般に平均・最悪とも $O(n)$ |
| 二分探索 | 整列済み配列なら最悪 $O(\log n)$、大小順や範囲検索も扱える | 整列とランダムアクセスが必要。配列の途中への挿入・削除は一般に $O(n)$ |
| ハッシュ探索 | 良好な分散と有界の負荷率なら平均 $O(1)$。等値検索や動的な集合に適する | 衝突処理と容量管理が必要。偏ったハッシュでは最悪 $O(n)$、大小順・範囲検索には向かない |

ハッシュの平均定数時間は分散と負荷率についての仮定に依存し、キーのハッシュ計算自体が高価な場合はそのコストも加わる。
