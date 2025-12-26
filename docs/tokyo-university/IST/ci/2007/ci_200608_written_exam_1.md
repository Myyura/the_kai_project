---
sidebar_label: '2006年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2006年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
下左図は，$2$ 入力 $2$ 出力の比較器であり，大きさ $2$ のソーティングネットワークでもある。入出力の接続部は黒丸●で表現されている。比較器に左から数を $2$ つ入力すると，小さい数を上から，大きい数を下から右方向へそれぞれ出力する。$2$ 数が等しい場合には，同じ数を上下から出力する。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200608_1_p1.png" width="600" alt=""/>
</figure>

以下ではこの比較器を組み合わせることで，大きさ $n$ のソーティングネットワークを構成することを考える。大きさ $n$ のソーティングネットワークには，入力線が $n$ 本あり，左端から $n$ 個の整数を入力すると，上から下に昇順に整列して右端から出力する。
ある比較器の出力が別の比較器の入力となっている場合は，その二つの比較は $1$ ステップでの同時実行はできない。たとえば，上右図においては，比較器 $1$ と $2$ は同時に $1$ ステップで実行することができるが，比較器 $3$ は比較器 $1$ と $2$ の出力を入力とするため，別に $1$ ステップ必要であり，全体で $2$ ステップかかる。

(1) 下記のように配線すると，$3$ つの入力は $4$ ステップの実行の後，右端で必ず昇順に出力されることを示しなさい。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200608_1_p2.png" width="600" alt=""/>
</figure>

(2) 比較器の個数が $O(n^2)$ となる大きさ $n$ のソーティングネットワークを大きさ $n-1$ のソーティングネットワークから帰納的に構成する方法を一つ示し，正しさを説明した上で，必要な比較器の個数を $n$ の式で表しなさい。

(3) (2) で構成した大きさ $n$ のソーティングネットワークにおいて，同時に実行できる比較を $1$ ステップで実行する場合，全体でかかるステップ数を $n$ で表しなさい。

(4) 同時に実行できる比較を $1$ ステップで実行する場合を考える。大きさ $4$ のソーティングネットワークのステップ数の最小数は $3$ であることが知られている。そのような大きさ $4$ のソーティングネットワークを $1$ つ構成し，ステップ数が $3$ であること，また，正しくソーティングできることを説明しなさい。

## **Description (English)**
The left figure below shows a sorting network of size 2. The network has a "comparator module" that has two inputs, represented as lines coming into the module from left, and two outputs, represented as lines going out to right. Note that the connecting points of input/ouptut are indicated by the black dots $\bullet$. The upper output is the smaller of the two inputs and the lower output is the larger. When the 2 values are the same, the value is output from both lines.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200608_1_p1.png" width="600" alt=""/>
</figure>

We consider a problem of constructing a sorting network of size $n$. A sorting network of size $n$ has $n$ lines and multiple comparator modules. The $n$ numbers are given at the left end and the network sorts them in the increasing order from top to bottom and outputs them from the right end.
Comparisons of two modules of which one's output is another's input cannot be executed simultaneously in an execution step. For example, in the right figure above, the comparisons of modules 1 and 2 can be executed simultaneously in a step, but another step is required for the comparison by module 3, because the outputs of modules 1 and 2 are the inputs of module 3.

(1) Explain that the sorting network of size 3 as in the following figure outputs any 3 numbers in the increasing order.


<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200608_1_p2.png" width="600" alt=""/>
</figure>

(2) Show how to construct a sorting network of size $n$ inductively from a sorting network of size $n-1$, using in total $O(n^2)$ comparator modules. Describe the exact number of comparator modules as a function of $n$.

(3) As regards your answer of (2), if we allow simultaneous operations of comparator modules in a step, how many steps are required to sort $n$ inputs?

(4) Consider the case of executing multiple comparisons simultaneously. It is known that the sorting network of size 4 can be executed in 3 steps. Construct such a sorting network of size 4 and explain the correctness of your answer.