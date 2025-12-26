---
sidebar_label: '2005年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2005年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
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

## **Description (English)**
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