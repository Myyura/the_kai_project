---
sidebar_label: '2005年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Computer-Science.Dynamic-Programming.Minimum-Edit-Distance
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2005年8月実施 筆記試験 第1問
## **Author**
祭音Myyura, [itsuitsuki](https://github.com/itsuitsuki)

## **Description**

出典：[大学公式問題冊子の保存版](https://web.archive.org/web/20151118065613id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2005_8_ci_istmajor_all.pdf)（日本語版の設問・図を確認）。
### 日本語

ある二つの文字列 $str1, str2$ の編集距離はつぎの 3 つの操作を行うことにより $str1$ を $str2$ に変換するのに要する操作の最低回数である．
- 1 文字挿入する．
- 1 文字削除する．
- 1 文字を他の 1 文字に置き換える．
たとえば，$str1=\text{“sport”}$ は $str2=\text{“sort”}$ に，文字 ‘p’ を削除することにより $str2$ に変換できるため，編集距離は 1 である．

(1) $str1=\text{“commuter”}$，$str2=\text{“computers”}$ の編集距離を求めなさい．

(2) $str_n$ を文字列 $str$ の頭から $n$ 番目までの部分列とし，$m(i,j)$ を $str1_i$ と $str2_j$ の編集距離を表すものとする．$m(i,j), m(i-1,j), m(i,j-1), m(i-1,j-1)$ の間に成り立つ再帰式を記述しなさい．

(3) (2) の再帰式に基づき効率良く編集距離を計算するアルゴリズムを示し，そのアルゴリズムの時間，空間計算量について述べなさい．

(4) (3) のアルゴリズムに基づき，$str1=\text{“abrabr”}$ と $str2=\text{“arbarb”}$ の編集距離を求めなさい．

(5) 編集距離の応用として考えられるものを 3 つ挙げなさい．

### English
The *edit distance* between two strings $str1$ and $str2$ is defined as the minimum number of the following operations required to transform $str1$ into $str2$.
- insert one character
- delete one character
- substitute one character by another character
For example, $str1=\text{“sport”}$ is trasnformed into $str2=\text{“sort”}$ by deleting the character ‘p’; therefore the edit distance is 1.

(1) Answer the edit distance between $str1=\text{“commuter”}$ and $str2=\text{“computers”}$.

(2) Let’s denote $str_n$ as the prefix of length $n$ of a given $str$, $m(i,j)$ as the edit distance between $str1_i$ and $str2_j$. Write down the recursive formula that holds between $m(i,j)$ and $m(i-1,j), m(i,j-1), m(i-1,j-1)$.

(3) Describe an algorithm for calculating the edit distance between two given strings based on the recursive function described in (2). Show its complexity in both space and time.

(4) Calculate the edit distance between $str1=\text{“abrabr”}$ and $str2=\text{“arbarb”}$.

(5) Describe three applications of the edit distance.

### 题目描述

两个字符串 $str1$ 与 $str2$ 的编辑距离，是用以下三种操作把 $str1$ 变成 $str2$ 所需的最少操作次数：插入一个字符、删除一个字符、把一个字符替换为另一个字符。例如，从 `sport` 删除字符 `p` 即可得到 `sort`，所以二者编辑距离为 1。

1. 求 `commuter` 与 `computers` 的编辑距离。
2. 记 $str_n$ 为字符串 $str$ 的长度为 $n$ 的前缀，$m(i,j)$ 为 $str1_i$ 与 $str2_j$ 的编辑距离。写出 $m(i,j)$ 与 $m(i-1,j)$、$m(i,j-1)$、$m(i-1,j-1)$ 之间的递推关系。
3. 根据第 2 问的递推式，给出高效计算两个字符串编辑距离的算法，并说明其时间复杂度与空间复杂度。
4. 用上述算法求 `abrabr` 与 `arbarb` 的编辑距离。
5. 举出编辑距离的三种应用。

## **Kai**

以下、$str1=x_1x_2\cdots x_n$、$str2=y_1y_2\cdots y_k$ とする。

### (1)

次の二回の操作で変換できる。

```text
commuter
   ↓ 4文字目の m を p に置換
computer
   ↓ 末尾に s を挿入
computers
```

一方、二文字列の長さは異なるため、一回だけで変換できるなら、その操作は挿入でなければならない。しかし、`commuter` は `computers` の部分列ではないので、一回の挿入だけでは変換できない。

したがって、編集距離は

$$
\boxed{2}
$$

である。

### (2)

末尾の文字に対する置換コストを

$$
c(i,j)=
\begin{cases}
0 & (x_i=y_j),\\
1 & (x_i\neq y_j)
\end{cases}
$$

と定める。境界条件は

$$
m(0,0)=0,\qquad m(i,0)=i,\qquad m(0,j)=j
$$

である。$i,j\geq 1$ に対して、求める漸化式は

$$
m(i,j)=\min\left\{
\begin{array}{ll}
m(i-1,j)+1, & \text{$x_i$ を削除する},\\
m(i,j-1)+1, & \text{$y_j$ を挿入する},\\
m(i-1,j-1)+c(i,j), & \text{一致させる、または置換する}
\end{array}
\right.
$$

である。

### (3)

$(n+1)\times(k+1)$ の表 $D$ を用意し、短い接頭辞から順に値を計算する。

```text
EditDistance(x, y):
    n <- length(x)
    k <- length(y)

    D[0..n][0..k] を用意する

    for i <- 0 to n:
        D[i][0] <- i
    for j <- 0 to k:
        D[0][j] <- j

    for i <- 1 to n:
        for j <- 1 to k:
            if x[i] = y[j]:
                cost <- 0
            else:
                cost <- 1

            D[i][j] <- min(
                D[i-1][j]   + 1,
                D[i][j-1]   + 1,
                D[i-1][j-1] + cost
            )

    return D[n][k]
```

各 $D[i][j]$ を一度ずつ、定数時間で計算するので、時間計算量は

$$
O(nk)
$$

である。表全体を保存する場合の空間計算量も

$$
O(nk)
$$

である。

ただし、ある行の計算に必要なのは現在の行と直前の行だけである。短い方の文字列を列方向に取って二行だけを保持すれば、空間計算量は

$$
O(\min(n,k))
$$

まで削減できる。この場合も時間計算量は $O(nk)$ のままである。

### (4)

行を `abrabr` の接頭辞、列を `arbarb` の接頭辞に対応させると、動的計画法の表は次のようになる。

| $m(i,j)$ | $\varepsilon$ | a | r | b | a | r | b |
|---:|---:|---:|---:|---:|---:|---:|---:|
| $\varepsilon$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| a | 1 | 0 | 1 | 2 | 3 | 4 | 5 |
| b | 2 | 1 | 1 | 1 | 2 | 3 | 4 |
| r | 3 | 2 | 1 | 2 | 2 | 2 | 3 |
| a | 4 | 3 | 2 | 2 | 2 | 3 | 3 |
| b | 5 | 4 | 3 | 2 | 3 | 3 | 3 |
| r | 6 | 5 | 4 | 3 | 3 | 3 | 4 |

したがって、

$$
m(6,6)=\boxed{4}
$$

である。実際、次の四回の置換で変換できる。

```text
abrabr
→ arrabr  （2文字目: b → r）
→ arbabr  （3文字目: r → b）
→ arbarr  （5文字目: b → r）
→ arbarb  （6文字目: r → b）
```

### (5)

編集距離の代表的な応用として、次の三つが挙げられる。

1. スペルチェックや入力ミスの自動訂正における候補語の順位付け。
2. DNA・RNA・タンパク質配列の類似度評価や配列比較。
3. 検索システム、氏名照合、重複データ検出などにおける近似文字列照合。
